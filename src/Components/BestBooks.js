import React from 'react';
import axios from 'axios'
import BookFormModal from './BookFormModal.js'
import '../Components/BestBooks.css'
import { withAuth0} from "@auth0/auth0-react";

import Display from './Display'
import { Container, Button } from "react-bootstrap";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      newBook: {},
      bookFormModalIsDisplaying: false,
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const res = await this.props.auth0.getIdTokenClaims()
    const jst = res.__raw
    console.log(jst)
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: results.data
      })
    } catch (error) {
      console.log('Error: ', error.response.data)
    }
  }

  openBookFormModalHandler = () => {
    this.setState({
      bookFormModalIsDisplaying: true,
    })
  }

  closeBookFormModalHandler = () => {
    this.setState({
      bookFormModalIsDisplaying: false
    })
  }

  submitBookFormHandler = async (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.bookTitle.value,
      description: e.target.bookDescription.value,
      status: e.target.readStatus.value
    }
    console.log(newBook);
    try {
      const addNewBook = await axios.post(`${process.env.REACT_APP_SERVER}/books`, newBook)
      this.setState({
        bookFormModalIsDisplaying: false,
        books: [...this.state.books, addNewBook.data]
      });
    } catch (error) {
      console.log('An error occurred: ', error.response.data)
    }
  }

  deleteBookHandler = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER}/books/${id}`);
      let updatedBooks = this.state.books.filter(book => book._id !== id)
      this.setState({
        books: updatedBooks,
      })
      console.log('book deleted');
    } catch (error) {
      console.log('An error occurred: ', error.response.data)
    }
  }


  editBookHandler = async (book) => {
    console.log(book);
    try {
      const editedBook = await axios.put(`${process.env.REACT_APP_SERVER}/books/${book._id}`, book);
      let newBooksArray = this.state.books.map(existingBook => {
        return existingBook._id === book._id
          ? editedBook.data
          : existingBook
      });
      this.setState({
        books: newBooksArray
      });
    } catch (error) {
      console.log('An error has occurred: ', error.response.data)
    }
  }

  render() {

    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Container id="carousel-container"
        >

          {this.state.books.length >= 1 ?
            <Display id="display-comp"
              deleteBookHandler={this.deleteBookHandler}
              books={this.state.books}
              editBookHandler={this.editBookHandler}
            />
            : <p>No books!</p>}

          <Button id="modal-button" variant="primary" onClick={this.openBookFormModalHandler}>Add a New Book</Button>

        </Container>

        <BookFormModal
        id="book-form-modal"
          bookFormModalIsDisplaying={this.state.bookFormModalIsDisplaying}
          submitBookFormHandler={this.submitBookFormHandler}
          closeBookFormModalHandler={this.closeBookFormModalHandler}
        />
      </>
    )
  }
}

export default withAuth0(BestBooks);
