import React from 'react'
import DeleteButton from '../Components/DeleteButton';
import '../Components/Display.css'

import EditBookForm from './EditBookForm'
import { Carousel } from "react-bootstrap";

class Display extends React.Component {
    render() {
        return (
            <Carousel data-interval="false" id='wholeCarousel' >
                {this.props.books.map((book, idx) => {
                    return (

                        <Carousel.Item key={idx}>
                            <EditBookForm
                                id="edit-form"
                                editBookHandler={this.props.editBookHandler}
                                book={book}
                            />
                            <img
                                className="d-block w-100"
                                src="bookshelf.jpg"
                                alt="First slide"
                            />

                            <Carousel.Caption id="carousel-caption">
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                                <p>{book.status}</p>

                                <DeleteButton
                                    deleteBookHandler={this.props.deleteBookHandler}
                                    book_id={book._id}
                                />

                            </Carousel.Caption>

                        </Carousel.Item>

                    )
                })
                }
            </Carousel >
        )
    }
}

export default Display