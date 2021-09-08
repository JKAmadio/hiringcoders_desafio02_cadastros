import styled from "styled-components";

export const Container = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 50%;
	margin: 0 auto;
`

export const Botao = styled.button`
	padding: 10px 20px;
	margin: 10px 0;
	border-radius: 10px;
	border: 1px solid #c4c4c4;
	margin: 20px;

	&:hover{
		cursor: pointer;
		background-color: #d4d4d4;
	}
`
