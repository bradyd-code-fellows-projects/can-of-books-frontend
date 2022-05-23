import React from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios'


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

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

    /* TODO: render all the books in a Carousel */
    let booksCarousel = this.state.books.map( (book, idx) => {
      return(
      <Carousel.Item key={idx}>
        <img
        className="books-carousel-image"
        src="https://dummyimage.com/200x200/000/fff"
        alt="placeholder"
        />
        <Carousel.Caption id="books-carousel-caption">
          <h3>"{book.title}"</h3>
          <h4>{book.description}</h4>
          <h4>Status: {book.status}</h4>
        </Carousel.Caption>
      </Carousel.Item>)
    })

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {booksCarousel}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )
        }
      </>
    )
  }
}

export default BestBooks;
