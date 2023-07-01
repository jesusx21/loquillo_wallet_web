import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';

import toastParams from '../../toastParams';
import WalletForm from '../../components/WalletForm';
import { Modal } from 'react-bootstrap';
import * as api from './api';
import '../../App.css';
import WalletsList from './WalletsList';

function Wallets() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [wallets, setWallets] = useState([]);

  const fetchWallets = async (query = {}) => {
    try {
      const items = await api.getWallets();

      setWallets(items)
    } catch (error) {
      toast.error('Error fetching wallets');
    }
  };

  useEffect(() => {
    fetchWallets()
  }, []);

  const handleCLickCreateWallet = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  const createWallet = async () => {
    let data;

    try {
      data = await api.createWallet({ name });

      setShowModal(false);

      toast.success(`Wallet ${data.name} created successfully`, toastParams);
    } catch (error) {
      const { code } = error.response.data;

      if (code === 'NAME_MISSING') {
        toast.error('Name is required', toastParams);
      } else {
        toast.error('There\'s a problem wi¡th the server, please contact support', toastParams);
      }
    }
  };

  return (
    <div className='wallets'>
      <Button
        variant="primary"
        size="lg"
        onClick={handleCLickCreateWallet}
      >
        Create Wallet
      </Button>

      <WalletsList wallets={wallets}/>

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
