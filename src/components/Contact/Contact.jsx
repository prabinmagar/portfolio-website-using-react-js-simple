import React, {useState} from 'react';
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id] : e.target.value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div className='contact section-p'>
        <div className='container'>
            <div className='contact-section'>
                <div className='section-title'>
                    <h3 className='text-brown'>contact <span className='text-dark'>me</span></h3>
                    <p className='text'>I offer the right solutions for your digital business.</p>
                </div>
            </div>

            <form className='contact-form mx-auto' onSubmit={handleSubmit}>
                <div className='form-elem'>
                    <input type = "text" value = {formData.name} className = "form-control" placeholder='Name' onChange={handleChange} id = "name" />
                </div>
                <div className='form-elem'>
                    <input type = "text" value = {formData.email} className = "form-control" placeholder='Email' onChange={handleChange} id = "email" />
                </div>
                <div className='form-elem'>
                    <textarea rows = "2" value = {formData.message} className = "form-control" placeholder='Message' onChange={handleChange} id = "message"></textarea>
                </div>
                <button type = "submit" className='bg-brown text-white submit-btn fw-3 fs-22'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact