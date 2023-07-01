import api from '../../api';

export async function createWallet(params) {
  const { data } = await api.post('wallets', params);

  return data;
}

export async function getWallets(params = {}) {
  const { data } = await api.get('wallets', params);

  return data;
}
