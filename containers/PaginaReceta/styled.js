import styled from 'styled-components'

const Container = styled.div `

color:black;

    h1 {
        color:black;
    }

    

    div {
        margin-bottom:1.5em;
    }

    .tituloReceta {

        display:flex;
        justify-content:left;
        align-items:center;

        img {

            height:2em;
            margin-left:1em;
        }
        
    }

    .subtituloConIcono {

        display:flex;
        justify-content:left;
        align-items:center;

        img {

            margin-left:0.7em;
        }

    }
    

    .subtitulos {

        color:black;
        display:block;
        font-size: 1.3em;
        font-weight:700;
    }

    .iconos {

        height:1.5em;
    }

    .botonForm {

        background-color:MediumAquaMarine;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
        text-align:center;
        font-weight:500;
        font-size: 1.2em;
        width:20em;
        border-radius:0;
        color:white;
        padding: 0.7em 1em 0.7em 1em;
        margin: 0 auto;
        margin-top:3em;
    }

    .botonForm:hover{
        //background-color:MediumSeaGreen;
        cursor: no-drop;
        background-color:grey;
    }

`

export { Container } ;