import React from 'react';
import PropType from 'prop-types';
import { Form } from 'react-bootstrap';

function WalletForm(props) {
  const onNameChange = (input) => props.onNameChange(input.target.value);

  return (
    <div>
      <Form>
        <Form.Group className='mb-3' controlId='walletForm'>
          <Form.Label>Wallet Name</Form.Label>
          <Form.Control onChange={onNameChange} type='text' placeholder='Enter wallet name' />
        </Form.Group>
      </Form>
    </div>
  )
}

WalletForm.prototype = {
  onNameChange: PropType.func
}

export default WalletForm
