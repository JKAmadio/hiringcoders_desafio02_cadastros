import * as S from './styled'
//import Cliente from './contentful'
import { useState } from 'react'

function FormProdutos () {
	/*
	Cliente.getEntries({
		content_type: 'product'
	})
	.then(response => console.log('RESPONSE', response.items))
	.catch(console.error)*/

	const [nome, setNome] = useState('')
	const [categoria, setCategoria] = useState('')
	const [marca, setMarca] = useState('')
	const [quantidade, setQuantidade] = useState('')
	const [dataCadastro, setDataCadastro] = useState('')

	function handleSubmit(e) {
		e.preventDefault();
		console.log(nome)
	}

	return (
		<div>
			<S.FormularioProduto onSubmit={e => handleSubmit(e)}>
				<h1>API Produtos</h1>
				<S.ProdutoInput 
					type="text" 
					placeholder="Nome do Produto" 
					name="nome"
					value={nome}
					onChange={e => setNome(e.target.value)}/>
				<S.ProdutoSelect value={categoria} onChange={e => setCategoria(e.target.value)}>
					<option value='cafe'>Café</option>
					<option value='xicaras'>Xícaras/Canecas</option>
					<option value='acessorios'>Acessórios</option>
				</S.ProdutoSelect>
				<S.ProdutoInput 
					type="text" 
					placeholder="Marca do Produto" 
					name="marca"
					value={marca}
					onChange={e => setMarca(e.target.value)}/>
				<S.ProdutoInput 
					type="number" 
					placeholder="Quantidade" 
					name="quantidade"
					value={quantidade}
					onChange={e => setQuantidade(e.target.value)}/>
				<S.ProdutoInput 
					type="date" 
					placeholder="DD/MM/AAA" 
					name="dataCadastro"
					value={dataCadastro}
					onChange={e => setDataCadastro(e.target.value)}/>
				<S.ProdutoBotao>Cadastrar</S.ProdutoBotao>
			</S.FormularioProduto>
		</div>
	)
}

export default FormProdutos;