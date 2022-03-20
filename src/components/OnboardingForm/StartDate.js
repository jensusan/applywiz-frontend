import {Wrapper} from './Form-styled';

const StartDate = ({values, handleChange, nextStep, prevStep}) => {
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
        <div className='container'>
            <h1>When are you looking to start your new job?</h1>
            <form>
                <input type="button" value='As soon as possible' onClick={handleChange('startDate')}/>
                <input type="button" value='In the next three months' onClick={handleChange('startDate')}/>
                <input type="button" value='In the next year' onClick={handleChange('startDate')}/>
                <input type="button" value="I'm not sure" onClick={handleChange('startDate')}/>
            </form>
        </div>
        <div className="btn">
            <button className='direction-btn' onClick={prevForm}>Back</button>
            <button className='direction-btn' onClick={nextForm}>Next</button>
        </div>
        </Wrapper>
    )
}

export default StartDate;