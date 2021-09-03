import { Container } from "./styles"
import { useTransactionsContext } from "../../context/TransactionsContext"

export function TransactionsTable() {
	const { transactions } = useTransactionsContext()

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<td>Title</td>
						<td>Value</td>
						<td>Category</td>
						<td>Data</td>
					</tr>
				</thead>
				<tbody>
					{transactions.map(transaction => (
						<tr key={transaction.id}>
							<td>{transaction.title}</td>
							<td className={transaction.type}>
								{new Intl.NumberFormat("pt-BR", {
									style: "currency",
									currency: "BRL"
								}).format(transaction.value)}
							</td>
							<td>{transaction.category}</td>
							<td>
								{new Intl.DateTimeFormat("pt-BR").format(new Date(transaction.createdAt))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	)
}
