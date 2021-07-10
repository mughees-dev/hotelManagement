import { useDispatch } from "react-redux";
import fireB from '../config/fireabase'
let update = ()=>{
return (dispatch) => {
    let a =[];
    fireB.database().ref('/').child('Product Data').on('child_added' , data=>{

        // console.log(data.val())
        var obj = data.val();
        obj.id=data.key
        a.push(obj)
        // console.log(obj) 
        dispatch({type:'updateData' , data :a})
    })
}
    
}

export default update;