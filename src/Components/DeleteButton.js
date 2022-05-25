import React from 'react';
import { Button } from 'react-bootstrap';

class DeleteButton extends React.Component {
  render() {
    return (
      <Button
        variant="danger"
        onClick={() => {
          this.props.deleteBookHandler(this.props.book_id)
      }}
      >Delete This Book</Button>
    )
  }
}

export default DeleteButton;