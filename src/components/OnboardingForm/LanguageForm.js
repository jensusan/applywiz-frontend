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
        <>
        <h1>Do you speak any other languages?</h1>
        <button>Yes</button>
        <button onClick={nextStep}>No</button>
        <form>
            <label>
                <p>What language(s) do you speak?</p>
                <input type="text" onChange={handleChange('language')}/>
            </label>
        </form>
        <button onClick={prevForm}>Back</button>
        <button onClick={nextForm}>Next</button>
        </>
    )
}

export default LanguageForm;