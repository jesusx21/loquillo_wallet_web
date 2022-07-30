import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import WalletForm from '../components/WalletForm';
import { Modal } from 'react-bootstrap';

import '../App.css'

function Wallets() {
  const [showModal, setShowModal] = useState(false);

  const onCreateWalletClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false)

  return (
    <div className='wallets'>
      <Button
        variant="primary"
        size="lg"
        onClick={onCreateWalletClick}
      >
        Create Wallet
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} >
        <Modal.Header closeButton>
          <Modal.Title>Create Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WalletForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Wallets
