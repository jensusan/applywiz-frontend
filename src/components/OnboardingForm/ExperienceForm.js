const ExperienceForm = ({values, handleChange, nextStep}) => {
    const nextForm = e => {
        e.preventDefault();
        nextStep();
    }
    return(
        <>
            <h1>What level of roles would you like to see?</h1>
            <form>
            <input type="button" value='Internships' onChange={handleChange('experience')}/>
            <input type="button" value='Entry Level' onChange={handleChange('experience')}/>
            <input type="button" value='Mid-Senior Level' onChange={handleChange('experience')}/>
            <input type="button" value="Senior Level" onChange={handleChange('experience')}/>
            <div className="btn">
                <button>Back</button>
                <button onClick={nextForm}>Next</button>
            </div>
        </form>
        </>
    )
}

export default ExperienceForm;