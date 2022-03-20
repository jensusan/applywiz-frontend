import {Wrapper} from './FormComplete-styled';

const FormComplete = () => {
    return(
        <Wrapper>
        <img src='/hand-clap.png' alt='hand clapping icon'/>
        <div className="content">
            <p>PROFILE: Complete!</p>
            <p>Congratulations your profile is 100% complete.</p>
            <p>We will call you in 2-4 business days to talk about the next steps.</p>
        </div>
        </Wrapper>
    )
}

export default FormComplete;