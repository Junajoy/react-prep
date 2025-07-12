import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import Error from "./Error";



export default function(){
    const [formData,setFormData]=useState({
        fullName:'',
        loanAmount:'',
        purpose:'',
        tenure:''

    });
    const [errors,setErrors]=useState({});
    const navigate=useNavigate();
    
    const validate=()=>{
        const errs={};
        if(formData.fullName===''){
            errs.fullName="name is required";
        }
        if((formData.loanAmount==='' )|| (formData.loanAmount<10000)){
            errs.loanAmount="a min LOAN AMOUNT of 10000 IS REQUIRED";
        }

        if(formData.purpose===''){
            errs.purpose="purpose required";
        }

        
        setErrors(errs);
        return Object.keys(errs).length===0;

     };

    const handleChange=(e)=>{
        
        setFormData({...formData,[e.target.name]:e.target.value});

    };

    const handleSubmit=(e)=>{

        e.preventDefault();
       
        if(validate()){
           navigate('/Welcome');
        }
        else{
           navigate('/Error');
        }

    };


    return(
        <form onSubmit={handleSubmit}>
       <h1>Bank form</h1>
        <div>Full Name:<input
            type='text'
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
        /></div>
    
        <div>
            Loan Amount:   
        <input
        onChange={handleChange}
        placeholder="Loan Amount greater than 9999"
        type="number"
        name="loanAmount"
        value={formData.loanAmount}
        /></div>
        

        <div>
            Purpose:   

        <select onChange={handleChange}
        name="purpose"
        value={formData.purpose}
        >
            <option value="">Select Purpose</option>
            <option value="Car">Education</option>
            <option value="House">House</option>
            <option value="Car">Car</option>

        </select></div>

        <div>
            Tenure:

        <input
        type="number"
        onChange={handleChange}
        placeholder="tenure"
        value={formData.tenure}
        name="tenure"
        /></div>


        
        


      
        
       
        <div>
        
        <button type='submit'>Submit</button>
        </div>

    </form>
    )


}