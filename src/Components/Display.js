import React from 'react'
import {Carousel} from "react-bootstrap";

class Display extends React.Component {
    render() {
        return (
            <Carousel style={{ width: 500}}>
                {this.props.books.map((book, idx) => {
                    return (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src="https://dummyimage.com/200x200/000/fff"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                                <p>{book.status}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        )
    }
}

export default Display