import LoginGoogle from "./GoogleLogin";
import Facebook from "./FacebookLogin";
function Navbar(){
    return(
       <div>
         <div className='navbar navbar_custom d-flex align-items-center'>
           <div classNam='col-md-9'>
             <h4 className='text-light'>PAK HOTEL MANAGEMENT</h4>
           </div>
           <div className='col-md-3 d-flex'>
           <LoginGoogle />
           <Facebook />
           
           </div>
         </div>
       </div>
    )
}

export default Navbar;