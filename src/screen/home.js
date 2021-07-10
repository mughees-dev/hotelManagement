import {useHistory} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux'
import {  useState } from 'react';
import updateData from '../assets/action'
import Gallery from '../components/SLider';
import CardLayout from '../layout/Cardlayout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Home(){
  const mughees = useSelector(mughees => mughees)
 return(
   <div>
     <Navbar />
     <Gallery />
    <CardLayout />
    <Footer />
   </div>
 )
}

export default Home;