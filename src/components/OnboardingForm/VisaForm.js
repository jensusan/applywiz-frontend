import {Wrapper} from './Form-styled';

const VisaForm = ({values, handleChange, nextStep, prevStep}) => {
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
                <h1>Do you require sponsorship to work in the US?</h1>

                <div>
                    <input type="button" value='No' onClick={handleChange('visa')}/>
                    <input type="button" value='Yes' onClick={handleChange('visa')}/>
                </div>
            </div>
            <div>
                <button className='direction-btn' onClick={prevStep}>Back</button>
                <button className='direction-btn' onClick={nextStep}>Next</button>
            </div>
        </Wrapper>
    )
}

export default VisaForm;