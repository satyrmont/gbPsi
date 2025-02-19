import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Atkinson Hyperlegible Next", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

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
    
    
    
    --color-yellow: #e5d26a;
    --color-brown: #a58b74;
    --color-brown2: #a58b74;
    --color-green: #6b7e5f;
    --color-pink: #e5a5b0;
    --color-red: #e65226;
    --color-salmon: #d57659;

    --title-font: 'MDNichrome', sans-serif;
    --title-font-weight: 500;


    --sm-screen: 768px;

}


    
    body{
  

    font-family: "Hanken Grotesk", sans-serif;
    font-weight: 400;
    width: 90%;
    /* margin-left: 5%; */
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
