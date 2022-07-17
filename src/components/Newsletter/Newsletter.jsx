import React, {useState} from 'react';
import "./Newsletter.css";

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div className='newsletter section-p'>
        <div className='container'>
            <div className='workprocess-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>subscribe <span className='text-white'>to newsletter</span></h3>
                </div>

                <form className='newsletter-form mx-auto' onSubmit={handleSubmit}>
                    <div className='form-elem'>
                        <input type = "text" value = {formData.name} className = "form-control" placeholder='Name' onChange={handleChange} id = "name" />
                    </div>
                    <div className='form-elem'>
                        <input type = "text" value = {formData.email} className = "form-control" placeholder='Email' onChange={handleChange} id = "email" />
                    </div>
                    <button type = "submit" className='bg-brown text-white submit-btn fw-3 fs-22'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter