import { useState } from 'react';
import * as S from './styled'

function FormCliente(){

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [telefone, setTelefone] = useState('')
	const [dataNascimento, setDataNascimento] = useState('')


	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(nome)
		console.log(email)
		console.log(telefone)
		console.log(dataNascimento)
		console.log("Botao clicado")
		
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