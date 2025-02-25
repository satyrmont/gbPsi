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

        /* --color01: #EAAC8B;
        --color02: #E56B6F;
        --color03: #B56576;
        --color04: #6D597A;
        --color05: #355070; */

        /* --color01: #f3d897; */
        --color01: #eee1b4;
        --color02: #ef9e20;
        --color03: #ef8057;
        --color04: #ef7920;
        --color05: #ef9e20;
        --color06: #efba8f;
        --color07: #6d2a2c;
        --color08: #7a4577;
        --color09: #876785;
        --color10: #16263d;
        --color11: #2a5aa8;
        --color12: #3b73b8;
        --color13: #5d7596;
        --color14: #849bbf;
        --color15: #7aa7de;

        --title-font-size: clamp(60px, 65dvw, 70px);
        --text-font-size: clamp(16px, 1rem, 22px);
        
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
    overflow-x: hidden;


    
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
