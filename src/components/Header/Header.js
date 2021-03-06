import {Wrapper} from './Header-styles.js';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <Wrapper>
        <div className="header">
            <div className="logo">
            <img src="/aw-logo.png" alt="logo" />
            <h1>Apply Wiz</h1>
            
            </div>
            
           
           
            <div className='links'>
                <Link to='/home' style={{textDecoration: 'none', color: '#FFFF'}}>HOME</Link>
                <Link to='/profile' style={{textDecoration: 'none', color: '#FFFF'}}>PROFILE</Link>
                <Link to='/login' style={{textDecoration: 'none', color: '#FFFF'}}>LOGIN</Link>
            </div>
        </div>
        </Wrapper>
    )
}

export default Header;