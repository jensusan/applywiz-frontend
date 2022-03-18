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
        <>
            <h1>What is your minimum expected salary?</h1>
            <form>
                <input type="button" value='As soon as possible' onClick={handleChange('salary')}/> 
                <input type="button" value='As soon as possible' onClick={handleChange('salary')}/>
                <input type="button" value='As soon as possible' onClick={handleChange('salary')}/>
                <input type="button" value='As soon as possible' onClick={handleChange('salary')}/>
                <input type="button" value='As soon as possible' onClick={handleChange('salary')}/>
            </form>
            <p>*Please note, this information will not be shared with companies. This is simply to help is filter out roles for you.</p>
            <div>
                <button onClick={prevForm}>Back</button>
                <button onClick={nextForm}>Next</button>
            </div>
        </>
    )
}

export default SalaryForm;