import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    #app{
        height: 100vh; 
        background-color: var(--bg-color);
        padding:  40px 40px;
    }
    #container{
        height: 100%;
    }
    body{   
        margin: 0;
        font-family:'Roboto';
    }
    :root{
        --primary-color:#001e62;
        --hover-primary-color:#5c88da;
        --bg-color:#f5f5f5;
    }

`;
