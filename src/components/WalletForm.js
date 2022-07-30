import React from 'react';
import PropType from 'prop-types';
import { Form } from 'react-bootstrap';

function WalletForm(props) {
  const { className = '' } = props;

  return (
    <div className={className}>
      <Form>
        <Form.Group className='mb-3' controlId='walletForm'>
          <Form.Label>Wallet Name</Form.Label>
          <Form.Control type='text' placeholder='Enter wallet name' />
        </Form.Group>
      </Form>
    </div>
  )
}

WalletForm.prototype = {
  className: PropType.string
}

export default WalletForm
