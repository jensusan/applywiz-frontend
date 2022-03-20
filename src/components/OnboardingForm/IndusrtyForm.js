import {Wrapper} from './Form-styled';

const IndustryForm = ({values, handleChange, nextStep, prevStep}) => {
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
            <h1>Are you interested in a specific indusrty?</h1>
            <form>
                <input type="button" value='As soon as possible' onChange={handleChange('startDate')}/>
                <input type="button" value='In the next three months' onChange={handleChange('startDate')}/>
                <input type="button" value='In the next year' onChange={handleChange('startDate')}/>
                <input type="button" value="I'm not sure" onChange={handleChange('startDate')}/>
                
            </form>
        </div>
        <div className="btn">
            <button className='direction-btn' onClick={prevForm}>Back</button>
            <button className='direction-btn' onClick={nextForm}>Next</button>
        </div>
        </Wrapper>
    )
}

export default IndustryForm;