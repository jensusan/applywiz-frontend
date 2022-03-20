import {useState} from 'react'
import {Wrapper} from './Form-styled';
const CompanySize = ({values, handleChange, nextStep, prevStep, handleShowForm, showForm}) => {
    const nextForm = e => {
        e.preventDefault();
        nextStep();
    }
    const prevForm = e => {
        e.preventDefault();
        prevStep();
    }

    const [showCompanyForm, setShowCompanyForm] = useState(false);
    
    const handleShowCompanyForm = () => {
        setShowCompanyForm(true);
    }
    return(
        <>
        {!showCompanyForm && 
        <Wrapper>
        <div className="container">
            <h1>Do you want to work for a specific size of company?</h1>
            <form>
                <input type='button' value='No'/>
                <input type='button' value ='Yes' onClick={handleShowCompanyForm}/>
            </form>
        </div>
        <div className='btn'>
            <button className='direction-btn' onClick={prevForm}>Back</button>
            <button className='direction-btn' onClick={nextForm}>Next</button>
        </div>
        </Wrapper>
        }
       
        {showCompanyForm && 
        <Wrapper>
            <div className="container">
                <h1>What size company do you prefer?</h1>
                <form>
                    <input type='button' value='0-50' onClick={handleChange('companySize')} />
                    <input type='button' value='50-100' onClick={handleChange('companySize')} />
                    <input type='button' value='100-500' onClick={handleChange('companySize')} />
                    <input type='button' value='500-1000' onClick={handleChange('companySize')} />
                    <input type='button' value='1000 +' onClick={handleChange('companySize')} />
            </form>
            </div>
            <div className='btn'>
                <button className='direction-btn' onClick={prevForm}>Back</button>
                <button className='direction-btn' onClick={nextForm}>Next</button>
            </div>
            </Wrapper>
        }

        </>
    )
}

export default CompanySize;