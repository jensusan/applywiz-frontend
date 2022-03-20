import {Wrapper} from './Home-styled';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <Wrapper>
            <h3>Welcome</h3>
            <button className='matches-btn'>View my matches ></button>
            <h4>Top Matches</h4>
            <div className="top-matches">
                <div className="box">
                    <h4>Amazon</h4>
                    <p>UX Designer</p>
                    <Link to='/jobs'>
                        <button>View</button>
                    </Link>
                </div>
                <div className="box">
                    <h4>Squarespace</h4>
                    <p>Product Designer</p>
                    <button>View</button>
                </div>
                <div className="box">
                    <h4>Guild Education</h4>
                    <p>Associate UX Designer</p>
                    <button>View</button>
                </div>
            </div>
            <div className="jobs">
                    <h4>Saved Jobs</h4>
                    <p>0 jobs</p>
                    <div className="saved-jobs">
                        <p>Your saved jobs will appear here to apply when ready!</p>
                    </div>
                <h4>Applied</h4>
                <p>0 jobs</p>
                <div className="saved-jobs">
                    <p>Your applied jobs will appear here!</p>
                </div>
                <h4>Interviewing</h4>
                <p>0 jobs</p>
                <div className="saved-jobs">
                    <p>Update us and we'll keep track of you interviews!</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Home;