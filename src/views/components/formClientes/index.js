import { useState } from 'react';
import * as S from './styled'

function FormCliente(){

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [telefone, setTelefone] = useState('')
	const [dataNascimento, setDataNascimento] = useState('')
	const [clientes, setClientes] = useState([])

	const inputValidation = () => {
		const nomeRegExp = /^[a-z\s]*$/gi;
		const emailRegExp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
		const telefoneRegExp = /^[(]..[)] [0-9]{5}-[0-9]{4}$/i;
		const dataNascimentoRegExp = /^[0-3][0-9]\/[0-1][0-9]\/[1-9][0-9][0-9][0-9]$/g;

		if(!(nome.match(nomeRegExp))) {
			alert('Nome inválido')
		} else if (!(email.match(emailRegExp))) {
			alert('Email inválido')
		} else if(!(telefone.match(telefoneRegExp))) {
			alert('Telefone inválido')
		} else if (!(dataNascimento.match(dataNascimentoRegExp))) {
			alert('Data de Nascimento inválida')
		} else {
			return (nome, email, telefone, dataNascimento)
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		if (inputValidation()) {
			const cliente = {nome, email, telefone, dataNascimento}		
			setClientes(clientes => [...clientes, cliente])
			console.log(cliente);
		} else {
			alert("Cadastro não realizado. Tente novamente")
		}
	}

	return(
		<div>
			<S.FormularioCliente autoComplete="off" onSubmit={handleSubmit}>
				<h1>Formulario Cliente</h1>
				<S.ClienteInput type="text" name={nome} onChange={e => setNome(e.target.value)} placeholder="Nome Completo"/>
				<S.ClienteInput type="text" name={email} onChange={e => setEmail(e.target.value)} placeholder="seu_email@dominio.com"/>
				<S.ClienteInput type="text" name={telefone} onChange={e => setTelefone(e.target.value)} placeholder="(XX) XXXXX-XXXX"/>
				<S.ClienteInput type="text" name={dataNascimento} onChange={e => setDataNascimento(e.target.value)} placeholder="DD/MM/AAAA"/>
				<S.ClienteBotao>Cadastrar</S.ClienteBotao>
			</S.FormularioCliente>
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
						clientes.map((cliente) => {
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
		</div>
	)
}

export default FormCliente;