import styled from 'styled-components';

export const Wrapper = styled.div`
    font-family: 'Open Sans';
    background: #3AB3A8;

    

    .header {
       position: relative;
        padding: 50px;
        height: 145px;
        
    }

    img {
        position: absolute;
        left: 22%;
        top: 25%;
        height: 48px;
        width: 95px;
        
    }
    h1 {
        position: absolute;
        margin: 0;
        color: #FFFFFF;
        font-size: 64px;
        top: 50%;
        left: 29px;
        
    }

    .links {
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        right: 5%;
        display: flex;
        gap: 50px;
        font-size: 24px;
        color: #FFFFFF;
    }

    

`;



