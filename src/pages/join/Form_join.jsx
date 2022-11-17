import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Form_join = () => {
  return (
    <Form>

    <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>


      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Join Now
      </Button>
    </Form>
  )
}

export default Form_join