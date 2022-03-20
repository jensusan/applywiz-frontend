import {Wrapper} from './Login-styles';
import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <Wrapper>
            <h1>Welcome to your Apply Wiz Talent Community!</h1>
            <form className='login'>
            <input type='text' placeholder='Email or Phone number'/>
            <input type='text' placeholder='Password'/>
            <Link to='/onboarding'>
            <button>Sign up for free</button>
            </Link>
            </form>
        </Wrapper>
    )
}

export default Login;