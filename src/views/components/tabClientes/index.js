import * as S from './styled';
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
		<S.TabelaContainer>
			<S.TabelaClientes>
				<thead>
					<tr>
						<S.TabelaHeader>Nome</S.TabelaHeader>
						<S.TabelaHeader>Email</S.TabelaHeader>
						<S.TabelaHeader>Telefone</S.TabelaHeader>
						<S.TabelaHeader>Data de Nascimento</S.TabelaHeader>
					</tr>
				</thead>
				<tbody>
					{
						data && data.length > 0 && data.map((cliente) => {
							return (
								<tr>
									<S.TabelaCelulas>{cliente.nome}</S.TabelaCelulas>
									<S.TabelaCelulas>{cliente.email}</S.TabelaCelulas>
									<S.TabelaCelulas>{cliente.telefone}</S.TabelaCelulas>
									<S.TabelaCelulas>{cliente.dataNascimento}</S.TabelaCelulas>
								</tr>
							)
						})
					}
				</tbody>
			</S.TabelaClientes>
		</S.TabelaContainer>
	);
}

export default TabelaClientes;