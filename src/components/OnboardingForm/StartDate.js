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
        <>
        <h1>When are you looking to start your new job?</h1>
        <form>
            <input type="button" value='As soon as possible' onClick={handleChange('startDate')}/>
            <input type="button" value='In the next three months' onClick={handleChange('startDate')}/>
            <input type="button" value='In the next year' onClick={handleChange('startDate')}/>
            <input type="button" value="I'm not sure" onClick={handleChange('startDate')}/>
            <div className="btn">
                <button onClick={prevForm}>Back</button>
                <button onClick={nextForm}>Next</button>
            </div>
        </form>
        </>
    )
}

export default StartDate;