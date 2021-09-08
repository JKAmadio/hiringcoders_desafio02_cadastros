import React from 'react'
import {Link} from 'react-router-dom'
import * as S from './styled'

export default function Home() {
	return (
		<S.Container>
			<h1>Sistema de cadastro</h1>
			<div>
				<Link to="/clientes"><S.Botao>Cadastrar Cliente</S.Botao></Link>
				<Link to="/produtos"><S.Botao>Cadastrar Produtos</S.Botao></Link>
			</div>
		</S.Container>
	)
}
