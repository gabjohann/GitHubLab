import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// Forma 1
/* interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
} */

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// Forma 3
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

// ReactNode -> aceita qualquer tipo de conteúdo válido pelo ReactJS
interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData // força tipagem
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {

    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      { children }
    </TransactionsContext.Provider>
  );
}