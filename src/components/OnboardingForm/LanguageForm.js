import {Wrapper} from './Form-styled';
const LanguageForm = ({values, handleChange, nextStep, prevStep}) => {
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
            <h1>Do you speak any other languages?</h1>
            <input type='button' value='Yes'/>
            <input type='button' value='No' onChange={handleChange('language')} />
            <form>
            <label>
                <h4>What language(s) do you speak?</h4>
                <input type="text" onChange={handleChange('language')}/>
            </label>
        </form>
        </div>
        
        <div className="btn">
            <button className='direction-btn' onClick={prevForm}>Back</button>
            <button className='direction-btn' onClick={nextForm}>Next</button>
        </div>
        </Wrapper>
    )
}

export default LanguageForm;