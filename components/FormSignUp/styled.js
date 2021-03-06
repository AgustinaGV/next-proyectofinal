import styled from 'styled-components'

const Container = styled.div `

.input_row {position:relative;}
.input_row div{position: absolute;
    top: 19px;
    right: 22px;
    color:#ff0000;
}
margin-top:40px;
width:100%;

.message{
    padding:20px;
    color:black;
    font-size:1em;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
}


input,
select, 
textarea { width: 100%; min-height: 60px; line-height: 34px; border:1px solid #ddd; background: #fff; -webkit-appearance: none; -moz-appearance: none; appearance: none; padding-left: 12px; font-size: 17px; margin-bottom:10px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif; resize:none}
input[type='submit'] ,button { width: 100px; cursor: pointer; opacity: .8; background: #fff; border:0; text-transform: uppercase; padding:20px 10px !important; margin-top: 20px; color:#fff; background-color:#000; margin:0 auto; }
input[type='radio'],
input[type='checkbox'] { border:0; height: auto !important; background: none; padding-left: 0; line-height: inherit; min-height: 0; }
input[type='radio']  { -webkit-appearance: radio; -moz-appearance: radio; appearance: radio;}
input[type='checkbox'] { -webkit-appearance: checkbox; -moz-appearance: checkbox; appearance: checkbox;}
label { font-size: 16px; }


.botonForm {

background-color:MediumAquaMarine;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
text-transform: capitalize !important;
font-weight:500;
font-size: 1em;
width:10em;
border-radius:0;
}

.botonForm:hover{
    background-color:MediumSeaGreen;
}

.inputForm{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
    border-radius:0;
    width:25em;
}

`

export { Container };