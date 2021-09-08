import styled from "styled-components";

export const Container = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
`

export const FormularioCliente = styled.form`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 50%;
	margin: 0 auto;
`

export const ClienteInput = styled.input`
	padding: 10px;
	margin: 10px 0;
	width: 100%;
	border-radius: 10px;
	border: 1px solid #c4c4c4;

	&:focus{
		outline: none;
	}
`

export const ClienteBotao = styled.button`
	padding: 10px 20px;
	margin: 10px 0;
	border-radius: 10px;
	border: 1px solid #c4c4c4;

	&:hover{
		cursor: pointer;
		background-color: #d4d4d4;
	}
`
export const TabelaClientes = styled.table`
	border-collapse: collapse;
	width: 50%;
	margin: 10vh auto;
`

export const TabelaHeader = styled.th`
	border: 1px solid #c4c4c4;
	padding: 5px;
	`

export const TabelaCelulas = styled.td`
	border: 1px solid #c4c4c4;
	padding: 5px 10px;
	width: 25%;
	text-align: center;
`