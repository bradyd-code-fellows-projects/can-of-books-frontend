import React from 'react';
import '../Components/EditBookForm.css'
import { Form, Button } from 'react-bootstrap'

class EditBookForm extends React.Component {

  handleBookToUpdate = (e) => {
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.bookTitle.value || this.props.book.title,
      description: e.target.bookDescription.value || this.props.book.description,
      _id: this.props.book._id,
      __v: this.props.book.__v,
    }
    this.props.editBookHandler(bookToUpdate);
  }

  render() {
    return (

      <Form id="form" onSubmit={this.handleBookToUpdate}>

        <Form.Group controlId="bookTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control type="text" placeholder={this.props.book.title} />
        </Form.Group>

        <Form.Group controlId="bookDescription">
          <Form.Label>Book Description</Form.Label>
          <Form.Control type="text" placeholder={this.props.book.description} />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="I have read this book"
          />
        </Form.Group>

        <Button variant="success" type="submit" size="lg">Submit Updated Book Information</Button>

      </Form>
    )
  }
}

export default EditBookForm;