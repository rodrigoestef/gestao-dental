import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    #app{
        height: 100vh; 
        background-color: #f5f5f5;
        padding:  40px 40px;
    }
    body{   
        margin: 0;
        font-family:'Roboto';
    }
    :root{
        --primary-color:#3f51b5;
        --hover-primary-color:#3f78b5;
    }

`;
