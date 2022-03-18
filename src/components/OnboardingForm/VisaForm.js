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
        <>
        <h1>Do you require sponsorship to work in the US?</h1>

        <div>
            <input type="button" value='No' onClick={handleChange('visa')}/>
            <input type="button" value='Yes' onClick={handleChange('visa')}/>
        </div>
        <div>
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
        </>
    )
}

export default VisaForm;