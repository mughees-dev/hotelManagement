function Card(props){
    return(
        
            <div className='card my-5 card_custom'>
                <img className='w-100 p-2' src={props.src} />
                <div className='d-flex'>
                <div className='col-md-9'>
                <h1 className=' p-2'>{props.hotelName}</h1>
                </div>
                <div className='col-md-3 p-2'><h6>From {props.price}</h6></div>
                </div>
            </div>
           
    )
}

export default Card;