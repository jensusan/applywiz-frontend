import { Wrapper } from "./Profile-styles";
import {Link} from 'react-router-dom';

const Profile = () => {
    return(
        <Wrapper>
        <div className="header">
            <img src='photo-filler.png' alt='photo icon'/>
            <div className="header-text">
                <h3>Nicole Jackson</h3>
                <h3>UX Designer</h3>
                <h3>Los Angeles, CA</h3>
            </div>
        </div>
        <div className="contact-info">
            <h3>Contact Info</h3>
            <h4>Phone Number: (213567-8901)</h4>
            <h4>Website: nicolejackson.com</h4>
            <h4>Email: nicolejackson@gmail.com</h4>
            <h4>LinkedIn: https://www.linkedin.com/in/nicolejackson/ </h4>
            <h4>Address: 1900 S Main Street
                  Los Angeles, CA 90001
            </h4>
            </div>
            <div className="resume">
            <h3>Experience</h3>
            <h4>Girl Develop It</h4>
            <h5>UX/UI Design Fellow</h5>
            <p>January 2022 - March 2022</p>
            <ul>
                <li>Created a comprehensive protfolio ranging from user-centric design research to mobile-responsive and desktop web layouts.</li>
                <li>Took part in the understanding and design phase of mutiple projects, including user and competitve research, wireframing, visual design, branding, and various other communication assets. </li>
            </ul>
            <h4>State Farm</h4>
            <h5>Accountant</h5>
            <p>June 2019 - December 2021</p>
            <ul>
                <li>Analyzed budgets, financial report and projections for accurate reporting of financial standing.</li>
                <li>Reviewed accounting structures and procedures on regular basis to identify areas in need of improvement.</li> 
                <li>Managed, tracked, and monitored financial updates, watch lists, and insurance files. </li>  
            </ul>
            <h4>Harkin's Theatres</h4>
            <h5>Junior Accountant</h5>
            <p>June 2017 - June 2019</p>
            <ul>
                <li>Set up and improved accounting systems and processes to meet business needs and maximize effectiveness of operations.</li> 
                <li>Investigaged and resolved variances in digital and physical records to promote record integrity.</li> 
                <li>Helped clients navigate interactions with tax authorities and legal concerns related to financial matters. </li>
            </ul>

            <h3>Education</h3>
            <h4>University of California, Los Angeles</h4>
            <h5>Accounting</h5>
            <p>August 2013 - May 2017</p>

            <h3>Licenses & Certifications</h3>
            <h4>Certified Public Accounting</h4>
            <h5>AICPA</h5>
            <p>Completed September 2017</p>

            </div>
        

        <div className="questionnaire">
            <h3>Questionnaire</h3>
            <Link to='/onboarding'>
            <button>Change Questionnaire Preferences</button>
            </Link>
        </div>
        </Wrapper>
    )
}

export default Profile;