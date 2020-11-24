import styled from 'styled-components'

const Container = styled.div `

color:white;
background-color:black;
width:100%;
height:10vh;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
text-align:center;

div:first-of-type {

    width: 25%;
}

div:nth-child(2n) {

width: 50%;
}

div:nth-child(3n){

    width:25%;
}

div {

    display: inline-block;
    margin: 0 auto;
}

a {
    color:white;
    text-decoration:none;
    justify-content:space-between;
    margin: 0 1em 0 0;
}

a:hover{
    color:LightGreen;
}

img{

    height:2.5em;
    margin: 0 1em 0 0;
}

.logo {

    font-weight:800;
    display:flex;
    padding: 0 0 0 3em;
    justify-content:center;
    align-items:center;
    
}

.logo span {

    font-size:1.2em;
}


`

export { Container };