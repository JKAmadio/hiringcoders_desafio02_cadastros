import React from 'react'
import {Link} from 'react-router-dom'
import * as S from './styled'
import image from '../../../assets/server.png'

export default function Home() {
	return (
		<S.Container>
			<S.Title>Sistema de cadastro</S.Title>
			<S.Body>
				<div>
					<Link to="/clientes"><S.Botao>Cadastrar Clientes</S.Botao></Link>
					<Link to="/produtos"><S.Botao>Cadastrar Produtos</S.Botao></Link>
				</div>
				<S.Image src={image}/>
			</S.Body>
		</S.Container>
	)
}
