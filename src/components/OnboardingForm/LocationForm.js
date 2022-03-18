const LocationForm = ({values, handleChange, nextStep}) => {
    const nextForm = e => {
        e.preventDefault();
        nextStep()
    }
    return(
        <>
        <h1>Where would you like to work?</h1>
        <form>
            <input type="button" value='New York, New York' onClick={handleChange('location')}/>
            <input type="button" value='Seattle, Washington' onClick={handleChange('location')}/>
            <input type="button" value='San Francisco, California' onChange={handleChange('location')}/>
            <input type="button" value="Austin, Texas" onClick={handleChange('location')}/>
            <input type="button" value="Remote, USA" onClick={handleChange('location')}/>
            <div className="btn">
                <button>Back</button>
                <button onClick={nextForm}>Next</button>
            </div>
        </form>
        </>
    )
}

export default LocationForm;