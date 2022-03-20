import './Landing-styles.css';

const Landing = () => {
    return(
        <>
            <h1>"We make job search stress free."</h1>
            <div className='container'>
                <div className='content'>
                    <h3>Mission</h3>
                    <div className='text'>
                        <p>To offer supportive opportunities for women and non-binary adults to learn software development skills.</p>
                    </div>
                </div>
                <div className='content'>
                    <h3>Vision</h3>
                <div className='text'>
                   <p>We envision a world where people of all races, education levels, income and upbringing are included and empowered in developing the future of technology.  </p>
                </div>
                </div>
                <div className='content'>
                    <h3>Values</h3>
                    <div className='text'>
                        <p>To provide powerful hands-on programs in software development and create basic to advanced web and mobile applications.</p>
                    </div>
                </div>
            </div>
            <h3>Apply wiz aims to bridge the gap between the talent and the companies looking to hire. </h3>
            <button>Sign up for free</button>
        </>
    )
};

export default Landing;