import styled from 'styled-components';

export const Wrapper = styled.div`
.container {
    background: rgba(246, 246, 246, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 75px 95px 25px 95px;
}

input{
    background: #FFFF;
    border: 1px solid #000;
    border-radius: 10px;
    height: 70px;
    width: 600px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 26px;
}

.btn {
    margin: 20px;
}

.direction-btn {
    font-family: 'Roboto';
    border-radius: 50px;
    padding: 10px 150px;
    margin: 10px;
    background: #FFFF;
    font-size: 26px;
}
`;