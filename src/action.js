// import firebase from './config/fireabase';

// function submitData(data){
//     return (dispatch)=> {
//         dispatch({type:'updateData' , name:'mughees'})
//     }
   
// }

// export default submitData


// const state = useSelector(state => state)
//     const [firebaseData, setFirebaseData] = useState()
    
//         const ProductMainData = {
//             image: state.productData[i].image,
//             title: state.productData[i].title,
//             badroom: state.productData[i].badroom,
//             bathroom: state.productData[i].bathroom,
//             price: state.productData[i].price
//         }
//     const justSet = () => {
//         firebaseApp.database().ref("Product Data").set(ProductMainData)
//     }
//     useEffect(() => {
//         justSet()
//         const checkVal = firebaseApp.database().ref("Product Data").once('value', (data) => {
//             setFirebaseData(data.val())
//         })
//     }, [])

