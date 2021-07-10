import { useEffect, useState } from "react";
import fireB from "../config/fireabase";
import { useHistory } from "react-router";
import {useSelector} from 'react-redux'
function Details(){
    const [index , setIndex] = useState()
    const [data , setData] = useState()
    let state = useSelector(state => state.data)
    console.log(state)
    let a = useHistory()
    console.log(a)
    useEffect(()=>{
        setIndex(a)
    },[])
    console.log(a.location.state)  
    return(state ?
<div className='container-fluid details-container d-flex'>
        <div className='col-md-8 border rounded'>
        <img className='w-100' src={state[a.location.state].src} />
        <h1 className='my-4'>{state[a.location.state].hotelName}</h1>
    </div>
    <div className='col-md-4 border'>
        <h1 className='text-center'>Facilities</h1>
            <div className='border p-2 my-2'><h3>{state[a.location.state].roomsDetails}</h3></div>
            <div className='border p-2 my-2'><h3>{state[a.location.state].washroomsDetails}</h3></div>
            <div><p>{state[a.location.state].description}</p></div>
            <div><h3 className='text-center py-2 text-primary'>{state[a.location.state].price}</h3></div>
            <div><button className='btn btn-danger w-100 mt-5'>Book Now</button></div>
    </div>

</div>
   :null ) 
}

export default Details;