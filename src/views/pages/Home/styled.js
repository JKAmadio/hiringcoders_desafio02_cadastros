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

export const Title = styled.h1`
	color: #0E538C;
	font-size: 38px;
`

export const Body = styled.div`
	display:flex;
	align-items: center;
`

export const Image = styled.img`
	height: 450px;
`

export const Botao = styled.button`
	width: 200px;
	padding: 10px 0;
	margin: 10px 20px;
	border-radius: 15px;
	border: 1px solid #0E538C;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;
	font-size: 16px;
	background-color: #FFBE55;
	color: #202020;
	
	&:hover{
		cursor: pointer;
		background-color: #0E538C;
		color: #ffffff;
	}
`
