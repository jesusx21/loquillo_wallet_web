import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Budgets from './pages/Budgets';
import Expenses from './pages/Expenses';
import Home from './pages/Home';
import LoansAndDebts from './pages/LoansAndDebts';
import Savings from './pages/Savings';
import SharedExpenses from './pages/SharedExpenses';
import Wallets from './pages/Wallets/Wallets';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wallets' element={<Wallets />} />
        <Route path='/shared-expenses' element={<SharedExpenses />} />
        <Route path='/loans-debts' element={<LoansAndDebts />} />
        <Route path='/budgets' element={<Budgets />} />
        <Route path='/savings' element={<Savings />} />
        <Route path='/expenses' element={<Expenses />} />
      </Routes>
    </Router>
  );
}

export default App;
