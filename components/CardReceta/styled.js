import styled from 'styled-components'

const Container = styled.div `

color:black;
width:33%;
align-items: center;
justify-content: center;
text-align:center;
font-size: 1em;
margin:0 auto;
display:inline-block;


h4 {

    color:black;
    font-weight: 800;
    margin:0 0 0.3em 0;
}

img {

    height: 5em;
}

p {
    padding: 0.5em 0 0 0;
    width:80%;
    margin:0 auto;
    margin-bottom:1em;
}

.botonForm {

background-color:MediumAquaMarine;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
text-transform: capitalize !important;
font-weight:500;
font-size: 1.2em;
width:10em;
border-radius:0;
color:white;
padding: 0.7em 0.5em 0.7em 0.5em;
margin: 0 auto;
}

.botonForm:hover{
    background-color:MediumSeaGreen;
}

`

export { Container };