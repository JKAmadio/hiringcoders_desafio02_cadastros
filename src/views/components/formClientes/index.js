import * as S from './styled'

function FormCliente(){
	return(
		<div>
			<S.FormularioCliente autoComplete="off" onSubmit={console.log('Botao clicado')}>
				<h1>Formulario Cliente</h1>
				<S.ClienteInput type="text" placeholder="Nome Completo"/>
				<S.ClienteInput type="text" placeholder="seu_email@dominio.com"/>
				<S.ClienteInput type="text" placeholder="(XX) XXXXX-XXXX"/>
				<S.ClienteInput type="text" placeholder="DD/MM/AAAA"/>
				<S.ClienteBotao>Cadastrar</S.ClienteBotao>
			</S.FormularioCliente>
		</div>
	)
}

export default FormCliente;