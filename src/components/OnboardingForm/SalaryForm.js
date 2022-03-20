import {Wrapper} from './Form-styled';

const SalaryForm = ({values, handleChange, nextStep, prevStep}) => {
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
            <h1>What is your minimum expected salary?</h1>
            <form>
                <input type="text" onClick={handleChange('salary')}/> 
            </form>
            </div>
            <p>*Please note, this information will not be shared with companies. This is simply to help is filter out roles for you.</p>
            <div className='btn'>
                <button className='direction-btn' onClick={prevForm}>Back</button>
                <button className='direction-btn' onClick={nextForm}>Next</button>
            </div>
        </Wrapper>
    )
}

export default SalaryForm;