import {useState} from 'react'
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
        <>
        <h1>Do you want to work for a specific size of company?</h1>
        <button>No</button>
        <button onClick={handleShowCompanyForm}>Yes</button>
        <div>
            <button onClick={prevForm}>Back</button>
            <button onClick={nextForm}>Next</button>
        </div>
        </>
        }
       
        {showCompanyForm && 
        <>
            <form>
                <p>What size company do you prefer?</p>
                <input type='button' value='0-50' onClick={handleChange('companySize')} />
                <input type='button' value='50-100' onClick={handleChange('companySize')} />
                <input type='button' value='100-500' onClick={handleChange('companySize')} />
                <input type='button' value='500-1000' onClick={handleChange('companySize')} />
                <input type='button' value='1000 +' onClick={handleChange('companySize')} />
                
            </form>
            <div>
            <button onClick={prevForm}>Back</button>
            <button onClick={nextForm}>Next</button>
            </div>
            </>
        }

        </>
    )
}

export default CompanySize;