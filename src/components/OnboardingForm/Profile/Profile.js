import {Wrapper} from './Profile-styled';


const Profile = ({values, handleChange, nextStep, handleFileChange}) => {
    const nextForm = e => {
        e.preventDefault();
        nextStep();
    }
    
   

    return(
        <Wrapper>
        <h1 className='title'>Please fill in the information below to get started!</h1>
        <div className="profile_form">
            <div className="profile_img">
                <img src='/photo-filler.png' alt='photo icon'/>
                <input type='file'/>
            </div>
            <div className="profile_content">
                <form action="">
                    <label>*First Name:
                        <input type="text" onChange={handleChange('firstName')}
                        defaultValue={values.firstName}/>
                    </label>
                    <label>*Last Name:
                        <input type="text" onChange={handleChange('lastName')}
                        defaultValue={values.lastName}/>
                    </label>
                    <label>*Email Address:
                        <input type="email" onChange={handleChange('email')}defaultValue={values.email}/>
                    </label>
                    <label>Website:
                        <input type="text" onChange={handleChange('website')}
                        defaultValue={values.website}/>
                    </label>
                    <label>Resume:
                        <input type="file" 
                        onChange={handleFileChange('resume')}/>
                    </label>
                    <label>LinkedIn:
                        <input type="text" onChange={handleChange('linkedIn')}
                        defaultValue={values.linkedIn}/>
                    </label>
                    <label>*Phone Number:
                        <input type="text" onChange={handleChange('phoneNumber')}
                        defaultValue={values.phoneNumber}/>
                    </label>
                    <label>*Zip Code:
                        <input type="text" onChange={handleChange('zipCode')}
                        defaultValue={values.zipCode}/>
                    </label>
                   
                </form>
                
            </div>
        </div>
        <div className="btn">
                        <button>Back</button>
                        <button onClick={nextForm}>Next</button>
                    </div>
        </Wrapper>
    )
}

export default Profile;