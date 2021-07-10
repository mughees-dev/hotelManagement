const initial = {
   hotels:[]
}

const userReducer = (state = initial , action)=>{
  console.log(action) 
  switch(action.type){
    case "updateData":
      return {...initial,
              data : action.data
      }
      default :
      return state
  }
}

export default userReducer;
