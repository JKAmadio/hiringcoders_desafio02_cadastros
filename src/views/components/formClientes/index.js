import { useState } from 'react';
import * as S from './styled'

function FormCliente(){

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [telefone, setTelefone] = useState('')
	const [dataNascimento, setDataNascimento] = useState('')
	const [clientes, setClientes] = useState([])

	const validateNome = (name) => {
		const validName = name.match(/^[a-z\s]*$/gi);
		if (!validName) {
			alert('Nome invalido')
			return false;
		}
		else {
			alert('Nome ok!')
			return true;
		}
			
	}

	const validateEmail = (email) => {
		const validEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		if (!validEmail) {
			alert('Email invalido')
			return false;
		}
		else{
			alert('Email ok!')
			return true;
		}
	}

	const validateTelefone = (telefone) => {
		const validTelefone = telefone.match(/^[(]..[)] [0-9]{5}-[0-9]{4}/i);
		if (!validTelefone){
			alert('Telefone invalido')
			return false;
		}
		else{
			alert('Telefone ok!')
			return true;
		}
	}

	const validateDataNascimento = (dataNascimento) => {
		const validDataNascimento = dataNascimento.match(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g);
		if (!validDataNascimento){
			alert('Data de Nascimento invalida')
			return false;
		}
		else{
			alert('Data de Nascimento ok!')
			return true;
		}
	}



	const inputValidation = (nome, email, telefone, dataNascimento) => {
		if (validateNome(nome) & validateEmail(email) & validateTelefone(telefone) & validateDataNascimento(dataNascimento)) {
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
		</div>
	)
}

export default FormCliente;