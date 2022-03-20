import styled from 'styled-components';

export const Wrapper = styled.div`
color: #2A4758;

h1 {
    padding: 20px;
}
.profile_img {
    display: flex;
    flex-direction: column;
}


form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    font-size: 26px;
}
input {
    margin-left: 5px;
    padding: 5px;
    border-radius: 10px;
}


.profile_form {
    display: flex;
    justify-content: space-evenly;
    
}

.btn {
    margin: 20px;
}

button {
    border-radius: 50px;
    padding: 10px 150px;
    margin: 10px;
    background: #FFFF;
    font-size: 26px;
}


`;