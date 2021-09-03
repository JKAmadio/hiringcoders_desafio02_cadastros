import Cliente from './contentful'

function FormProdutos () {
	Cliente.getEntries({
		content_type: 'product'
	})
	.then(response => console.log('RESPONSE', response.items))
	.catch(console.error)

	return (
		<div>
		<h1>API Produtos</h1>
	</div>
	)
}

export default FormProdutos;