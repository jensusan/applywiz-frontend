import { useState } from "react";
import Profile from "./Profile/Profile";
import StartDate from "./StartDate";
import LanguageForm from "./LanguageForm";
import LocationForm from "./LocationForm";
import ExperienceForm from "./ExperienceForm";
import RoleTypeForm from "./RoleTypeForm";
import CompanySize from "./CompanySizeForm";
import IndustryForm from "./IndusrtyForm";
import VisaForm from "./VisaForm";
import SalaryForm from "./SalaryForm";
import VeteranForm from "./VeteranForm";
import FormComplete from "./FormComplete";
// const axios = require(axios);

const OnboardingForm = () => {

    // function addSurvey(userInput) {
    //     axios.post(`${URL}survey/`, userInput).then(response => {
    //         console.log(response)
    //     }).catch(error => {
    //         console.log(error.response.data)
    //     })
    // }

    const [userInput, setUserInput] =useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        resume: '',
        linkedIn: '',
        phoneNumber: '',
        zipCode: '',
        startDate: '',
        location: '',
        experience: '',
        roleType: '',
        industry: '',
        companySize: '',
        visa: '',
        language: '', 
        salary: '',
        veteran: '',
        disability: ''
    })

    const nextStep = () => {
        setUserInput(prevState => ({
            ...prevState, 
            step: step + 1
        }))
    }
    console.log(userInput)
    const prevStep = () => {
        // const {step} = userInput;
        setUserInput(prevState => ({
            ...prevState, 
            step: step - 1
        }))
    }

    const handleChange = input => e => {
        setUserInput(prevState => ({...prevState, [input]: e.target.value}))
    }

    const {step } = userInput
    const {firstName,
    lastName,
    email,
    website,
    resume,
    linkedIn,
    phoneNumber,
    zipCode,
    startDate,
    location,
    experience,
    roleType,
    industry,
    companySize,
    visa,
    language, 
    salary,
    veteran,
    disability} = userInput
    const values = {firstName,
        lastName,
        email,
        website,
        resume,
        linkedIn,
        phoneNumber,
        zipCode,
        startDate,
        location,
        experience,
        roleType,
        industry,
        companySize,
        visa,
        language, 
        salary,
        veteran,
        disability}

        switch(step) {
            case 1:
                return(
                <Profile 
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                    prevStep={prevStep}
                    />
                )
            case 2:
                return(
                    <StartDate 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                    )
            case 3:
                return(
                    <LocationForm 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                    )
            case 4:
                return(
                    <ExperienceForm 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                            )
            case 5:
                return(
                    <RoleTypeForm
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                         )
            case 6:
                return(
                    <IndustryForm 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}
                         />
                )
            case 7: 
                return(
                    <CompanySize 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                )
            case 8:
                return(
                    <VisaForm 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                )
            case 9:
                return(
                    <LanguageForm 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                )
            case 10:
                return(
                    <SalaryForm 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                )
            case 11:
                return(
                    <VeteranForm 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                )
            case 12: 
                return(
                    <FormComplete 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        prevStep={prevStep}/>
                )
        }
};

export default OnboardingForm;