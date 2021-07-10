import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import submitData from '../action'
import fireB from '../config/fireabase';
function Admin(){
    const state = useSelector(state => state)
    const [roomsDetails , setRoomsDetails]= useState();
    const [washroomsDetails , setWashroomsDetails]= useState();
    const [price , setPrice]= useState();
    const [src , setSrc] = useState()
    const [description , setDescription] = useState()
    const [hotelName , setHotelName] = useState()
    let dispatch = useDispatch()

    let submit = ()=> {
        let data = {
            hotelName,
            roomsDetails,
            washroomsDetails,
            description,
            src,
            price
        }
        fireB.database().ref('Product Data').push(data)
    }
     
    return(
        <div className='container card mt-5 admin-container'>
            <h1 className='text-center p-3 text'>Admin Panel</h1>
        <div className='m-auto w-100'>
        <input type="text" value={hotelName} onChange={(e)=> setHotelName(e.target.value) } className="form-control w-100 p-4 my-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Hotel Name" />
        <input type="text" value={roomsDetails} onChange={(e)=> setRoomsDetails(e.target.value) } className="form-control w-100 p-4 my-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Room Deails" />
        <input type="text" value={washroomsDetails} onChange={(e)=> setWashroomsDetails(e.target.value)} className="form-control w-100 p-4 my-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Washroom Details" />
        <input type="text" value={src} onChange={(e)=> setSrc(e.target.value)} className="form-control w-100 p-4 my-4" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter Image Src"/>
        <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} className="form-control w-100 p-4 my-4" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter Description"/>
        <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} className="form-control w-100 p-4 my-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Price Details" />
        <button onClick={submit} className="w-100 p-2 my-4 admin-button rounded ">Submit</button>
        </div>
        </div>
    )
}

export default Admin;