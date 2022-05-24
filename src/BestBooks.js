import React from 'react';
import axios from 'axios'
import Display from './Components/Display'
import {Container} from "react-bootstrap";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  componentDidMount() {
    this.getBooks()
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

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Container style={{ display: 'flex', justifyContent: 'center'}}>
          {this.state.books.length >= 1 ? <Display books={this.state.books}/> : <p>No books!</p>}
        </Container>
      </>
    )
  }
}

export default BestBooks;
