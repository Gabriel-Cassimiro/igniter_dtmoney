import { FormEvent, useState } from "react"
import Modal from "react-modal"

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useTransactionsContext } from "../../context/TransactionsContext"
import { Container, TransactionsTypeContainer, RadioBox } from "./styles"

interface NewTransactionModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

export function NewTransactionModal({
	isOpen,
	onRequestClose
}: NewTransactionModalProps) {
	const { createTransaction } = useTransactionsContext()

	const [title, setTitle] = useState("")
	const [value, setValue] = useState(0)
	const [category, setCategory] = useState("")
	const [type, setType] = useState("deposit")

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault()

		await createTransaction({
			title,
			value,
			category,
			type
		})

		setTitle("")
		setValue(0)
		setCategory("")
		setType("deposit")
		onRequestClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button type="button" onClick={onRequestClose} className="react-modal-close">
				<img src={closeImg} alt="fechar modal" />
			</button>
			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Register new operation</h2>

				<input
					placeholder="Title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>

				<input
					type="number"
					placeholder="Value"
					value={value}
					onChange={e => setValue(Number(e.target.value))}
				/>

				<TransactionsTypeContainer>
					<RadioBox
						type="button"
						onClick={() => {
							setType("deposit")
						}}
						isActive={type === "deposit"}
						activeColor="green"
					>
						<img src={incomeImg} alt="income value" />
						<span>Add</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => {
							setType("withdraw")
						}}
						isActive={type === "withdraw"}
						activeColor="red"
					>
						<img src={outcomeImg} alt="outcome value" />
						<span>Subtract</span>
					</RadioBox>
				</TransactionsTypeContainer>

				<input
					placeholder="Category"
					value={category}
					onChange={e => setCategory(e.target.value)}
				/>

				<button type="submit">Register</button>
			</Container>
		</Modal>
	)
}
