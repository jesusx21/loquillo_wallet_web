import React from 'react';
import PropTypes from 'prop-types';
import WalletCard from '../../components/WalletCard';

function WalletsList(props) {
  const { wallets = [] } = props;

  return wallets.forEach((wallet) => {
    return (
      <WalletCard wallet={wallet}/>
    );
  })
}

WalletsList.propTypes = {
  wallets: PropTypes.arrayOf(PropTypes.object)
}

export default WalletsList
