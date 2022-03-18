const RoleType = ({values, handleChange, nextStep, prevStep}) => {
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
            <form>
            <input type="button" value='Software Engineering' onClick={handleChange('roleType')}/>
            <input type="button" value='Data' onClick={handleChange('roleType')}/>
            <input type="button" value='Product' onClick={handleChange('roleType')}/>
            <input type="button" value="Design" onClick={handleChange('roleType')}/>
            <input type="button" value="Marketing" onClick={handleChange('roleType')}/>
            <input type="button" value="Other Engineering" onClick={handleChange('roleType')}/>
            <div className="btn">
                <button onClick={prevForm}>Back</button>
                <button onClick={nextForm}>Next</button>
            </div>
        </form>
        </>
    )
}

export default RoleType;