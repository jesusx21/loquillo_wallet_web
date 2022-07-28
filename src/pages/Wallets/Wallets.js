import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';

import toastParams from '../../toastParams';
import WalletForm from '../../components/WalletForm';
import { Modal } from 'react-bootstrap';
import * as api from './api';
import '../../App.css';

function Wallets() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();

  const onCreateWalletClick = () => setShowModal(true);

  const createWallet = async () => {
    let data;

    try {
      data = await api.createWallet({ name });

      setShowModal(false);
    } catch (error) {
      const { code } = error.response.data;

      if (code === 'NAME_MISSING') {
        toast.error('Name is required', toastParams);
      }
    }

    toast.success(`Wallet ${data.name} created successfully`, toastParams);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
          <WalletForm onNameChange={(value) => setName(value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={createWallet}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Wallets
