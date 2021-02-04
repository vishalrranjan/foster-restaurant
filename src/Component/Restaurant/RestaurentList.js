import React, { useEffect, useState } from 'react'
import './restaurent.css'
import axios from 'axios';
import heroimg from '../../image/hero-img.jpg';

export default function List() {
    const [apiData, setApiData] = useState();
    let Token = localStorage.getItem("token");
    

    useEffect(()=>{
        axios.defaults.headers.common = {'Authorization': `Bearer ${Token}`} //here sending the bearer token for authorization
        axios.get('https://staging.fastor.in/v1/m/restaurant?city_id=118&&')
        .then(res=> {
            setApiData(res.data);
            console.log(res.data);
            console.log(res.data[0].cuisines[1].cuisine_name);
        })
        .catch(err => console.error("Error is here : ", err));
    },[Token])

     if (!apiData) {
        return <span>Loading...</span>;
    }


    return (
        <div>
            <nav className="navbar navbar-light bg-light shadow mb-5 bg-white" >
                <div className="d-flex flex-column">
                    <h3 className="navbar-brand m-0"> { apiData[0].restaurant_name} </h3>
                    <p className="navbar-brand m-0 font"> from {apiData[0].location.location_locality} </p>
                </div>
            </nav>
            <div className="d-flex justify-content-center m-3">
                <img src={heroimg} className="img-fluid hero-img w-75" alt="Responsive"></img>
                <h1 className="right-side"> { apiData[0].restaurant_name} </h1>
            </div>
            <h3 className="container heading">Popular Ones</h3>
            <div className="container d-flex flex-wrap">
                {
                    apiData[0].cuisines.map((cuisines => (
                        <div key={cuisines.cuisine_id} className="mb-3" style={{maxWidth:"540px"}}>
                            <div className="row no-gutters">
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="img-thumbnail" style={{border:`1px solid ${cuisines.color}`}} src="https://i.ibb.co/vcbZ1NF/fast-food-thumbnail.jpg" alt="fast-food-thumbnail" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body" style={{backgroundColor:`${cuisines.color}`, color:`${cuisines.text_color}` }}>
                                        <h5 className="card-title"> {cuisines.cuisine_name} </h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )))
                }
            </div>
        </div>
    )
}
