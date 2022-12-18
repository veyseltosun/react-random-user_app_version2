import React from 'react'
import Email from "./Email"
// import Phone from "./Phone";
import Location from "./Location";
import phone from "../assets/phone.svg";
import axios from 'axios';
import {useState, useEffect} from "react";
import "./Card.css"

const API_URL = "https://randomuser.me/api/"
 

const Card = () => {

    const [user, setUser] = useState("");


    const getRandomUser =  () =>{

        axios.get(API_URL).then((response) => {
            console.log(response.data.results[0]);
            const userData = response.data.results[0]
            setUser(userData)
        })

    };

    useEffect(() => {
        getRandomUser()

    },[])
    






  return (
    <div className='container'>
        <div className='card'>
            <div className='image-title-box'>
                <img className='img' src={user.picture?.large} alt="user picture"></img>
                <p className='info'>{user.name?.title} {user.name?.first} {user.name?.last}</p>
                
            </div>
            <div className='user-email'>
                <Email className="email"/>
                <p className='info'>{user.email}</p>

            </div>
            <div className='user-phone'>
                <img className='phone' src={phone} alt="phone icon"/>
                <p className='info'>{user.phone}</p>

            </div>
            <div className='user-location'>
                <Location className="location"/>
                <p className='info'>{user.location?.city} / {user.location?.country}</p>

            </div>
            <div className='user-register'>
                <p className='info'>Age: {user.dob?.age}</p>
                <p className='info'>Register Date:{user.registered?.date.slice(0,10)} </p>

            </div>

        </div>
        <div>
            <button className='button' onClick={getRandomUser}>Random User</button>
        </div>
    </div>
  )
}

export default Card