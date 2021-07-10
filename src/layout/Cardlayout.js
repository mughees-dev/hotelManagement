import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import fireB from '../config/fireabase';
import {useState , useEffect} from 'react';
import update from '../assets/action';
import Details from '../screen/details';
import {useHistory} from 'react-router-dom'

function CardLayout(){
    const [data , setData] = useState()
    const state = useSelector(state => state.data);
    console.log(state)
    let dispatch = useDispatch()
    useEffect(()=>{
     dispatch(update())
        },[])
        let history = useHistory()
    return(
        <div>
           <div  className='cardlayout'>{state ? state.map((v,i)=>{
               return(
                   <div className='col-md-4' onClick={()=>history.push("/details", i)}><Card 
                   src={v.src}
                   price = {v.price}
                   hotelName = {v.hotelName}
                   />
                   </div>
               )
           }):null}</div>
        </div>
    )
}

export default CardLayout;