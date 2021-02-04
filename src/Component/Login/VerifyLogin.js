import React,{ useState } from 'react'
import axios from 'axios';


export default function VerifyLogin() {
    const [inputOtp, setInputOtp] = useState();
    let phoneNo = localStorage.getItem("phoneNo");

    function handleChange(e) {
        let otp = e.target.value;
        setInputOtp(() => otp);
    }

    function handleSubmit(e){
        e.preventDefault();

        let verifyUser = {
            // "phone": 9818979450,
            "phone": phoneNo,
            "otp": inputOtp,
            "dial_code": "+"+91
        }

        axios.post("https://staging.fastor.in/v1/pwa/user/login", verifyUser)
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.data.token);

            if(res.data.status_code === 200 ){
                window.location.replace('/list');
                console.log('hello');
            } else{
                alert('something wring please try again.');
            }
        })
        .catch((err) => console.error("Error is here : ", err));
        setInputOtp(" ");
    }
    
    return (
        <div className="login">
            <div className="wrapper">
                <div className="header">
                    <h1>LOGIN HERE</h1>      
                </div>
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input className="login-field" onChange={handleChange} type="tel" placeholder="Enter OTP" />
                        <input className="login-btn" type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}
