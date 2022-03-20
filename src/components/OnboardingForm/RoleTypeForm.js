import {Wrapper} from './Form-styled';

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
        <Wrapper>
        <div className="container">
            <h1>What type of roles would you like to see?</h1>
            <form>
                <input type="button" value='Software Engineering' onClick={handleChange('roleType')}/>
                <input type="button" value='Data' onClick={handleChange('roleType')}/>
                <input type="button" value='Product' onClick={handleChange('roleType')}/>
                <input type="button" value="Design" onClick={handleChange('roleType')}/>
                <input type="button" value="Marketing" onClick={handleChange('roleType')}/>
                <input type="button" value="Other Engineering" onClick={handleChange('roleType')}/>
           
            </form>
        </div>
        <div className="btn">
            <button className='direction-btn' onClick={prevForm}>Back</button>
            <button className='direction-btn' onClick={nextForm}>Next</button>
        </div>
        </Wrapper>
    )
}

export default RoleType;