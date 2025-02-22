import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* @font-face {
    font-family: "Atkinson Hyperlegible Next", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
} */

    html{
        /* scroll-snap-type: y mandatory; */
        
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
            background: transparent;
}

    }

    :root {
        
        
        --nav-height: 5dvh;
        
        --color-gray: #f9f9f9;
        --title-font-size-horz: clamp(10dvw, 4dvw, 2dvw);
        
        --scroll-bar-width: 6px;
        --scroll-bar-width-large: 8px;
        
        
        --title-font: "Lato", serif;
        /* --title-font-weight: 500; */
        
        
        --sm-screen: 768px;
    }
    
    
    
    body{
    /* display: flex; */
        /* flex-direction: column; */
        /* align-items: center; */
        /* justify-content: center; */
        /* margin-left: 500px; */

    font-family: "Atkinson Hyperlegible Next", serif;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin-bottom: 50px;

    > div {
        margin-bottom: 12px;
    }

    
}




  
    a {
    display: flex;
    align-items: center;
    color: blue;
    text-decoration: none;
    :hover{
        color: lightblue;
        text-decoration: underline;
    }
    
}


    
`;

export default GlobalStyle;
