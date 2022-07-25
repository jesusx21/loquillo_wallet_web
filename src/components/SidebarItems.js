import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarItems = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Wallets',
    path: '/wallets',
    icon: <AiIcons.AiFillWallet />,
    className: 'nav-text'
  },
  {
    title: 'Shared Expenses',
    path: '/shared-expenses',
    icon: <RiIcons.RiUserSharedFill />,
    className: 'nav-text'
  },
  {
    title: 'Loans & Debts',
    path: '/loans-debts',
    icon: <FaIcons.FaMoneyBill />,
    className: 'nav-text'
  },
  {
    title: 'Budgets',
    path: '/budgets',
    icon: <MdIcons.MdAttachMoney />,
    className: 'nav-text'
  },
  {
    title: 'Savings',
    path: '/savings',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Expenses',
    path: '/expenses',
    icon: <GiIcons.GiExpense />,
    className: 'nav-text'
  },
];
