import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

export default function Login() {

    const [phoneNo, setPhoneNo] = useState();

    function handleChange(e) {
        let inputNo = e.target.value;
        setPhoneNo(inputNo);
    }

    function onSubmit(e){
        e.preventDefault();
        let user = {
            phone: phoneNo,
            dial_code: "+"+91,
        }
        // console.log(user);
        console.log(phoneNo);

        axios.post("https://staging.fastor.in:/v1/pwa/user/register?", user)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("phoneNo", phoneNo);

            if(res.data.status_code === 200 ){
                window.location.replace('/login');
            } else{
                alert('something wring please try again.');
            }
        })
        .catch((err) => console.error("Error is here : ", err));
        setPhoneNo(" ");
    }

    return (
        <div className="login">
            <div className="wrapper">
                <div className="header">
                    <h1>LOGIN HERE</h1>
                </div>
                <form className="form-container" onSubmit={onSubmit}>
                    <div className="input-group">
                        <input className="login-field"  onChange={handleChange} type="tel" placeholder="Mobile Number" max='10' />
                        <input className="login-btn" type="submit" value="Enter OTP" />
                    </div>
                </form>
            </div>
        </div>
    )
}
