import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class AddBook extends React.Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.bookFormModalIsDisplaying}
          onHide={this.props.closeBookFormModalHandler}
        >
          <Modal.Header closeButton>
            <Modal.Title>Enter new book information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.submitBookFormHandler}>
              <Form.Group controlId="bookTitle">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" placeholder='e.g. Where the Red Fern Grows' />
              </Form.Group>
              <Form.Group controlId="bookDescription">
                <Form.Label>Book Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="readStatus">
                <Form.Check type="checkbox" label="I have read this book"></Form.Check>
                <Form.Check type="checkbox" label="I want to read this book"></Form.Check>
              </Form.Group>
            <Button variant="primary" type="submit">Submit New Book</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeBookFormModalHandler}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default AddBook;