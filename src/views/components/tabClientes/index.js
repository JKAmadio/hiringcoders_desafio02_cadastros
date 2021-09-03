import { useState, useEffect } from "react";

function TabelaClientes() {

	const [data, setData] = useState([]);

	const getData = () => {
		fetch('data.json'
			, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		)
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				console.log(myJson);
				setData(myJson)
			})
	}
	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Email</th>
						<th>Telefone</th>
						<th>Data de Nascimento</th>
					</tr>
				</thead>
				<tbody>
						{
							data && data.length > 0 && data.map((item) => {
								return(
									<tr>
										<td>{item.nome}</td>
										<td>{item.email}</td>
										<td>{item.telefone}</td>
										<td>{item.dataNascimento}</td>
									</tr>
								)
							})
						}
				</tbody>
			</table>
		</div>
	);
}

export default TabelaClientes;