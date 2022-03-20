import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 75vh;
    position: relative;
    h1 {
        padding-top: 50px;
    }
    .login {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    input {
        padding: 5px;
        margin: 20px;
    }

    button {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
        padding: 5px 30px;
        background: #FBE026;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border: none; 
        margin: 20px;
    }
`;