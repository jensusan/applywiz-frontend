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
        <>
            <h1>Are you interested in a specific indusrty?</h1>
            <form>
                <input type="button" value='As soon as possible' onChange={handleChange('startDate')}/>
                <input type="button" value='In the next three months' onChange={handleChange('startDate')}/>
                <input type="button" value='In the next year' onChange={handleChange('startDate')}/>
                <input type="button" value="I'm not sure" onChange={handleChange('startDate')}/>
                <div className="btn">
                    <button onClick={prevForm}>Back</button>
                    <button onClick={nextForm}>Next</button>
                </div>
            </form>
        </>
    )
}

export default IndustryForm;