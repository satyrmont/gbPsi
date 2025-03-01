import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



    html{
        
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
        --title-font-size: clamp(35px, 65dvw, 40px);
        --text-font-size: clamp(20px, 1rem, 24px);
        --text-small-factor: 0.8;
        --title-small-factor: 0.7;
        
        --title-font: "Lato", serif;
        --scroll-bar-width: 6px;
        --scroll-bar-width-large: 8px;

        --content-width: 70dvw;
        --margin-top-bottom: 40px;
    

        --color_0: #eee1b4;
        --color_1: #e9b977;

        --color_A1:rgba(5, 15, 31, 0.31);
        --color_A2: #17263d;
        --color_A3: #2b3442;
        --color_A4: #404751;


        --color_B1: #0066c1;
        --color_B2: #3280c6;
        --color_B3: #659fd5;

        --color_C1: #3eafce;
        --color_C2: #7ac0d3;
        --color_C3: #a0d4e2;

        --color_D1: #cc8444;
        --color_D2: #d1a680;
        --color_D3: #e0c1a6;

        --color_E1: #cc9a4d;
        --color_E2: #d1b589;
        --color_E3: #e0cdb0;

        --color_F1: #dbbf42;
        --color_F2: #e0cf82;
        --color_F3: #efe3aa;

        --color_G1: #6d2a2c;
        --color_G2: #724c4d;
        --color_G3: #816768;

 


        
        
        
        --sm-screen: 768px;
    }
    
    
    
    body{
  

        font-family: "Bitter", serif;
    /* font-family: "Atkinson Hyperlegible Next", serif; */
    font-weight: 330;
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
