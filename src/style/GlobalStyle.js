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

    --color-gray: #ded6d0;
    --title-font-size-horz: clamp(10dvw, 4dvw, 2dvw);

    --scroll-bar-width: 6px;
    --scroll-bar-width-large: 8px;
    

    --title-font: "Atkinson Hyperlegible Next", serif;
    --title-font-weight: 200;


    --sm-screen: 768px;
}



body{
    

    font-family: "Atkinson Hyperlegible Next", serif;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
}




  
    a {
    color: white;
    text-decoration: none;
}
    
`;

export default GlobalStyle;
