import styled from 'styled-components';

export const Wrapper = styled.div`
text-align: left;
color: #2A4758;
font-family: 'Roboto';
margin: 0px 70px;

    .matches-btn {
        padding: 10px 15px;
        margin-bottom: 40px;
    }

    h4 {
        font-size: 26px;
    }

    p {
        font-size: 24px;
    }

    .top-matches {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
       
    }

    .box {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        border 1px solid #000;
        border-radius 25px;
        height: 200px;
        width: 400px;
    }

    button {
        border: 1px solid #000;
        border-radius: 50px;
        background: #FFFF;
        padding: 10px 100px;
    }
    .jobs {
        display: flex;
        flex-direction: column;
        margin: 60px 0px;
    }
    .saved-jobs {
        border 1px dashed #000;
        border-radius: 25px;
        width: 400px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 70px;
        margin-top: 30px;
    }
`;