import React from 'react';
import axios from 'axios'
import BookFormModal from './Components/BookFormModal.js'

import Display from './Components/Display'
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
    const addNewBook = await axios.post(`${process.env.REACT_APP_SERVER_LOCAL}/books`, newBook)
    this.setState({
      bookFormModalIsDisplaying: false,
      books: [...this.state.books, addNewBook.data]
    })    
    // console.log(addNewBook);
  }

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          {this.state.books.length >= 1 ? <Display books={this.state.books} /> : <p>No books!</p>}
          <Button variant="primary" onClick={this.openBookFormModalHandler}>Add a New Book</Button>
        </Container>
        <BookFormModal
          bookFormModalIsDisplaying={this.state.bookFormModalIsDisplaying}
          submitBookFormHandler={this.submitBookFormHandler}
          closeBookFormModalHandler={this.closeBookFormModalHandler}
        />
      </>
    )
  }
}

export default BestBooks;
