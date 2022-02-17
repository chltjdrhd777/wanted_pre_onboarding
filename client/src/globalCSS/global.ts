import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  html {
      font-size: 62.5%;
      scroll-behavior: smooth;
      overflow-x: hidden;
  }
  
  body {
      font-size: 1.6rem;
      height:100vh;
      min-height:100vh;
      font-family: 'Inter', 'sans-serif';
      user-select: none;
      -webkit-user-select: none; 
      -moz-user-select: none;   
      -ms-user-select: none;     
      -o-user-select: none;
  }

  a {
      text-decoration: none;
      color:black;
  }

  ul {
      list-style-type: none;
  }

  img{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  button{
    border:none;
    cursor:pointer;
    
    &:focus{
      outline:none;
    }
  }

  input {
    outline:none;
    padding: 0 1.5rem;

    &:focus::placeholder{
      color:transparent;
    }
  }

  i{
    color:${({ theme }) => theme.colors.pointBlue};
  }

  .flex-center {
    display:flex;
    align-items:center;
    justify-content: center;
  }
  .flex-center-C {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
  }

  .btn{
    padding:1.4rem;
    border-radius: 12px;;
    background-color: ${({ theme }) => theme.colors.pointBlue};
    color:${({ theme }) => theme.colors.grayOne}
  }
  
  .small-btn-wrapper{
    & button{
      border: 1px solid gray;
      padding: 0.7rem 1.2rem;
      border-radius: 7px;
      ${({ theme }) => theme.modeBoxTheme};
      font-size: 1.4rem;
      

      & > i {
        margin-right: 0.5rem;
      }
    }
  }

  .small-link-wrapper{
    & a{
      border: 1px solid gray;
      padding: 0.7rem 1.2rem;
      border-radius: 7px;
      ${({ theme }) => theme.modeBoxTheme};
      font-size: 1.4rem;

      & > i {
        margin-right: 0.5rem;
      }
    }
  }
`;

export default GlobalStyles;
