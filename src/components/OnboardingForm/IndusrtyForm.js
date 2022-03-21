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
                <input type="button" value='Gaming' onChange={handleChange('industry')}/>
                <input type="button" value='Fashion' onChange={handleChange('industry')}/>
                <input type="button" value='Entertainment' onChange={handleChange('industry')}/>
                <input type="button" value='eCommerce' onChange={handleChange('industry')}/>
                <input type="button" value='FinTech' onChange={handleChange('industry')}/>
                <input type="button" value="Any Industry" onChange={handleChange('industry')}/>
                <input type="text" placeholder="Other" onChange={handleChange('industry')}/>
                
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