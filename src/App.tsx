import { useState } from "react"
import Modal from "react-modal"

import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { Globalstyles } from "./styles/global"
import { TransactionsProvider } from "./context/TransactionsContext"

Modal.setAppElement("#root")

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

	function handleOpenNewTransactionsModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionsModal() {
		setIsNewTransactionModalOpen(false)
	}

	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />

			<Dashboard />

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionsModal}
			/>

			<Globalstyles />
		</TransactionsProvider>
	)
}
