import * as S from './styled'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../api/produtos'

function FormProdutos () {

	const [id, setId] = useState(1)
	const [nome, setNome] = useState('')
	const [categoria, setCategoria] = useState('')
	const [marca, setMarca] = useState('')
	const [quantidade, setQuantidade] = useState('')
	const [dataCadastro, setDataCadastro] = useState('')
	const [inventario, setInventario] = useState([])

	useEffect(() => {
		const fetchProdutos = async () => {
			try {
				const response = await api.get('/produtos');
				setInventario(response.data)
				inventario.map(produto => setId(produto.id + 1))
			} catch (error) {
				console.log(`Error: ${error.message}`)
			}
		}
		fetchProdutos();
	}, [inventario])

	
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (nome && categoria && marca && quantidade && dataCadastro) {
			setId(id + 1)
			const produto = {id, nome, categoria, marca, quantidade, dataCadastro}
			try {
				const response = await api.post('/produtos', produto)
				setInventario([...inventario, response.data])
			} catch (error) {
				console.log(`Error: ${error.message}`)
			}
		} else {
			alert('Todos os campos são obrigatórios!')
		}
	}

	const handleDelete = async (e) => {
		try {
			const id = +e.target.value
			await api.delete(`/produtos/${id}`)
			const listaProduto = inventario.filter(produto => produto.id !== id)
			setInventario(listaProduto)
		} catch(error) {
			console.log(`Error: ${error.message}`)
		}
	}

	return (
		<S.Container>
			<S.FormularioProduto onSubmit={e => handleSubmit(e)}>
				<h1>Formulário Produtos</h1>
				<S.ProdutoInput 
					type="text" 
					placeholder="Nome do Produto" 
					name="nome"
					value={nome}
					onChange={e => setNome(e.target.value)}/>
				<S.ProdutoSelect value={categoria} onChange={e => setCategoria(e.target.value)}>
					<option value='' disabled hidden>Selecione uma categoria...</option>
					<option value='Café'>Café</option>
					<option value='Xícaras/Canecas'>Xícaras/Canecas</option>
					<option value='Acessórios'>Acessórios</option>
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
			<S.TabelaProdutos>
				<thead>
					<tr>
						<S.TabelaHeader>id</S.TabelaHeader>
						<S.TabelaHeader>Nome</S.TabelaHeader>
						<S.TabelaHeader>Categoria</S.TabelaHeader>
						<S.TabelaHeader>Marca</S.TabelaHeader>
						<S.TabelaHeader>Quantidade</S.TabelaHeader>
						<S.TabelaHeader>Data de Cadastro</S.TabelaHeader>
						<S.TabelaHeader>Remover</S.TabelaHeader>
					</tr>
				</thead>
				<tbody>
					{
						inventario.map(produto => {
							return(
								<tr>
									<S.TabelaCelulas>{produto.id}</S.TabelaCelulas>
									<S.TabelaCelulas>{produto.nome}</S.TabelaCelulas>
									<S.TabelaCelulas>{produto.categoria}</S.TabelaCelulas>
									<S.TabelaCelulas>{produto.marca}</S.TabelaCelulas>
									<S.TabelaCelulas>{produto.quantidade}</S.TabelaCelulas>
									<S.TabelaCelulas>{produto.dataCadastro}</S.TabelaCelulas>
									<S.TabelaCelulas><S.DeleteButton value={produto.id} onClick={e => handleDelete(e)}>X</S.DeleteButton></S.TabelaCelulas>
								</tr>
							)
						})
					}
				</tbody>
			</S.TabelaProdutos>
			<Link to="/"><S.ProdutoBotao>Voltar para Home</S.ProdutoBotao></Link>
		</S.Container>
	)
}

export default FormProdutos;