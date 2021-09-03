import { useEffect } from "react"
import { Container } from "./styles"
import { api } from "../../services/api"

export function TransactionsTable() {
	useEffect(() => {
		api.get("/transactions").then(response => console.log(response.data))
	}, [])

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
					<tr>
						<td>Website development</td>
						<td className="deposit">R$12.000</td>
						<td>Developments</td>
						<td>20/06/2021</td>
					</tr>
					<tr>
						<td>Rent</td>
						<td className="withdraw">- R$1.100</td>
						<td>Casa</td>
						<td>14/06/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}
