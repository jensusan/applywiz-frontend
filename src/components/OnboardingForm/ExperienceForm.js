import {Wrapper} from './Form-styled';

const ExperienceForm = ({values, handleChange, nextStep, prevStep}) => {
    const nextForm = e => {
        e.preventDefault();
        nextStep();
    }
    const prevForm = e => {
        e.preventDefault();
        prevStep();
    }
    return(
        <Wrapper>
            <div className="container">
                <h1>What level of roles would you like to see?</h1>
                <form>
                    <input type="button" value='Internships' onChange={handleChange('experience')}/>
                    <input type="button" value='Entry Level' onChange={handleChange('experience')}/>
                    <input type="button" value='Mid-Senior Level' onChange={handleChange('experience')}/>
                    <input type="button" value="Senior Level" onChange={handleChange('experience')}/>
                </form>
            </div>
            <div className="btn">
                <button  className='direction-btn' onClick={prevForm}>Back</button>
                <button className='direction-btn' onClick={nextForm}>Next</button>
            </div>
        </Wrapper>
    )
}

export default ExperienceForm;