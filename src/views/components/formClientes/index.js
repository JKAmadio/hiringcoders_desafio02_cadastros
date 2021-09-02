import { useState } from 'react';
import * as S from './styled'

function FormCliente(){

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [telefone, setTelefone] = useState('')
	const [dataNascimento, setDataNascimento] = useState('')
	const [clientes, setClientes] = useState([])

	const validateEmail = (email) => {
		const validEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		if (!validEmail)
			alert("Email invalido")
		else
			alert('Email ok!')
	}
	const inputValidation = (nome, email, telefone, dataNascimento) => {
		if (nome, email, telefone, dataNascimento) {
			validateEmail(email);
			alert("Todos os campos preenchidos!")
			return (nome, email, telefone, dataNascimento)
		} else {
			alert("Por favor, preencha todos os campos")
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		if (inputValidation(nome, email, telefone, dataNascimento)) {
			const cliente = {nome, email, telefone, dataNascimento}		
			setClientes(clientes => [...clientes, cliente])
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
		</div>
	)
}

export default FormCliente;