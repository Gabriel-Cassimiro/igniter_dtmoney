import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactionsContext } from "../../context/TransactionsContext"

export function Summary() {
	const { transactions } = useTransactionsContext()

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === "deposit") {
				acc.deposits += transaction.value
				acc.total += transaction.value
			} else {
				acc.withdraw += transaction.value
				acc.total -= transaction.value
			}
			return acc //Reducer needs to return accumulator every new iteration
		},
		{
			deposits: 0,
			withdraw: 0,
			total: 0
		}
	)

	return (
		<Container>
			<div>
				<header>
					<p>Income</p>
					<img src={incomeImg} alt="income" />
				</header>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL"
					}).format(summary.deposits)}
				</strong>
			</div>
			<div>
				<header>
					<p>Expenditure </p>
					<img src={outcomeImg} alt="Expenses" />
				</header>
				<strong>
					-{" "}
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL"
					}).format(summary.withdraw)}
				</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL"
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	)
}
