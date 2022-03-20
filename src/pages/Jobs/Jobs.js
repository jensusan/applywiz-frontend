import {Wrapper} from './Jobs-styled';

const Jobs = () => {
    return(
        <Wrapper>
        <div className="header">
            <div className="company">
                <img src='Amazon Logo 1.png' alt='company logo'/>
                <h3 className='company-title'>Amazon</h3>
            </div>
            <div className="overview">
            <h3 className='job-title'>UX Desginer</h3>
            <div className="job-info">
                <p>8.5</p>
                <p>$110,000</p>
                <p>Internet Publishing</p>
                <p>Santa Monica</p>
                <p>10,000 + Employees</p>
            </div>
            </div>
        </div>
        <div className="content">
            <h3>About Company</h3>
            <p>Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We are driven by the excitement of building technologies, inventing products, and providing services that change lives. We embrace new ways of doing things, make decisions quickly, and are not afraid to fail. We have the scope and capabilities of a large company, and the spirit and heart of a small one.

            Together, Amazonians research and develop new technologies from Amazon Web Services to Alexa on behalf of our customers: shoppers, sellers, content creators, and developers around the world.

            Our mission is to be Earth's most customer-centric company. Our actions, goals, projects, programs, and inventions begin and end with the customer top of mind.

            You'll also hear us say that at Amazon, it's always "Day 1."​ What do we mean? That our approach remains the same as it was on Amazon's very first day - to make smart, fast decisions, stay nimble, invent, and focus on delighting our customers.</p>
            <h3>About the role</h3>
            <p>Advertising shouldn’t be synonymous with poor experiences. We’re a group of multi-talented folks that design across devices and digital services, from motion-rich interfaces like Fire TV, to audio-only experiences like Amazon Music.

            We are looking for someone who practices a full range of UX skills including writing, prototyping, and visual design. Experience designing for voice or multi-modal (voice+touch) is a nice to have, but curiosity and an interest in learning is most important.

            Our group functions as a start-up within Amazon, and offers a creative, fast paced, entrepreneurial work environment where you’ll be at the center of Amazon innovation. As a UX designer on the team, you’ll be involved in all aspects of product development from first brainstorming sessions to working with product management, user research, and engineering to bring it to life.</p>
            <h3>Qualifications</h3>
            <ul>
                <li>3+ years of design experience</li>
                <li>An available online portfolio</li>
                <li>Desire to work in a start-up style environment, where iteration is encouraged</li>
                <li>Design acumen demonstrated through design end-to-end product ownership</li>
                <li>Experience with designing products for global markets.</li>
                <li>Excellent communication, presentation, interpersonal and analytical skills including the ability to communicate complex, interactive design concepts clearly and persuasively across different audiences and varying levels of the organization</li>
            </ul>
            <h3>Technology</h3>
            <ul>
                <li>Microsoft PowerPoint</li>
                <li>Figma</li>
                <li>Cascading Style Sheets (CSS)</li>
                <li>JavaScript</li>
                <li>SQL</li>
            </ul>
            <h3>LinkedIn Connections</h3>
            <ul>
                <li>Jessica Garcia</li>
                <li>Peter Yang</li>
                <li>Kim Harris</li>
            </ul>
        </div>
        </Wrapper>
    )
}

export default Jobs