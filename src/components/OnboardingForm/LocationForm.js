import {Wrapper} from './Form-styled';

const LocationForm = ({values, handleChange, nextStep, prevStep}) => {
    const nextForm = e => {
        e.preventDefault();
        nextStep()
    }
    const prevForm = e => {
        e.preventDefault();
        prevStep()
    }
    return(
        <Wrapper>
            <div className="container">
                <h1>Where would you like to work?</h1>
                <form>
                    <input type="button" value='New York, New York' onClick={handleChange('location')}/>
                    <input type="button" value='Seattle, Washington' onClick={handleChange('location')}/>
                    <input type="button" value='San Francisco, California' onChange={handleChange('location')}/>
                    <input type="button" value="Austin, Texas" onClick={handleChange('location')}/>
                    <input type="button" value="Remote, USA" onClick={handleChange('location')}/>
           
                </form>
            </div>
            <div className="btn">
                <button className='direction-btn' onClick={prevForm}>Back</button>
                <button className='direction-btn' onClick={nextForm}>Next</button>
            </div>
        </Wrapper>
    )
}

export default LocationForm;