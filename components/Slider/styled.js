import styled from 'styled-components'

const Container = styled.div `

color:black;
width:80%;
align-items: center;
justify-content: center;
text-align:center;
font-size: 1em;
margin:0 auto;

h1 {

    color:black;
    font-weight: 800;
    display:block;
}

.divButton {

    color:white;
    background-color:black;
    padding:0.7em 0 0.7em 0;
    font-size:1.2em;
    font-weight:700;
}

.divButton:hover {

    cursor:pointer;
    color:LightGreen; 
}


`

export { Container };