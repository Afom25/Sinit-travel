import React from 'react';
import Flight from './FlightName';



const Form = () => {
return (
    <div>

    <form className='form'>
        <button type='button' class='btn btn-primary'>Book</button>
    </form>
    
    <Flight/>
    
    </div>   

);
}


export default Form