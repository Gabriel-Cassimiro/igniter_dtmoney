import React, { createContext, useState, useContext, ReactNode, useEffect } from "react"
import { api } from "../services/api"

interface Transaction {
	id: number
	title: string
	type: string
	category: string
	value: number
	createdAt: string
}

type TransationInput = Omit<Transaction, "id" | "createdAt">

interface TransactionsContextProps {
	transactions: Transaction[]
	createTransaction: (transaction: TransationInput) => Promise<void>
}

interface TransactionsProviderProps {
	children: ReactNode
}

const TransactionsContext = createContext<TransactionsContextProps>(
	{} as TransactionsContextProps
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		api.get("/transactions").then(response => setTransactions(response.data.transactions))
	}, [])

	async function createTransaction(transactionInput: TransationInput) {
		const response = await api.post("/transaction", {
			...transactionInput,
			createdAt: new Date()
		})
		const { transaction } = response.data

		setTransactions([...transactions, transaction])
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	)
}

export function useTransactionsContext() {
	const useTransactionsContext = useContext(TransactionsContext)

	return useTransactionsContext
}
