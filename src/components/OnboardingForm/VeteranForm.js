import {Wrapper} from './Form-styled';

const VeteranForm = ({values, handleChange, nextStep, prevStep}) => {
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
            <h1>Are you a Veteran?</h1>
            <form>
                <input type="button" value='Yes' onClick={handleChange('veteran')}/>
                <input type="button" value='No' onClick={handleChange('veteran')}/>
                <input type="button" value='Do not wish to answer' onClick={handleChange('veteran')}/>
            </form>
            
            <h1>Do you have any disability?</h1>
            <form>
                <input type="button" value='Yes' onClick={handleChange('disability')}/>
                <input type="button" value='No' onClick={handleChange('disability')}/>
                <input type="button" value='Do not wish to answer' onClick={handleChange('disability')}/>
            </form>
            <h4>I understand and agree that Appy Wiz is authorized to collect my information and send it to companies for joob search purposes only.</h4>
            <input type='button' value='Accept' />
            </div>

            <div className="btn">
                <button className='direction-btn' onClick={prevForm}>Back</button>
                <button className='direction-btn' onClick={nextForm}>Next</button>
            </div>

        </Wrapper>
    )
}

export default VeteranForm;