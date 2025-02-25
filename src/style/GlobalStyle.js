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


        --color_0: #eee1b4;

        --color_A1: #050f1f;
        --color_A2: #17263d;
        --color_A3: #2b3442;
        --color_A4: #404751;


        --color_B1: #0066c1;
        --color_B2: #3280c6;
        --color_B3: #659fd5;

        --color_C1: #3eafce;
        --color_C2: #7ac0d3;
        --color_C3: #a0d4e2;

        --color_D1: #cc6525;
        --color_D2: #d18b60;
        --color_D3: #e0a784;

        --color_E1: #cc8825;
        --color_E2: #d1a360;
        --color_E3: #e0bb84;

        --color_F1: #dbbf42;
        --color_F2: #e0cf82;
        --color_F3: #efe3aa;

        --color_G1: #6d2a2c;
        --color_G2: #724c4d;
        --color_G3: #816768;

        /* --color_H1: #cc8825;
        --color_H2: #d1a360;
        --color_H3: #e0bb84;
        
        --color_I1: #cc8825;
        --color_I2: #d1a360;
        --color_I3: #e0bb84; */


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

        a{
            color: var(--color01);
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
