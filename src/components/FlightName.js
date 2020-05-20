import React from 'react';
import img from '../f1.jpeg';
import img3 from '../f4.jpeg';
import img2 from '../f3.jpeg'


const Flight = ( ) =>{
    return (
        <div className='container text-center' id='flight-section'>
            <div className='row'>
            <div className='col-md-12'>
            <img src={img} alt='img' id='img-flight'/>
            <img src={img2} alt='img' id='img-flight'/>
            <img src={img3} alt='img' id='img-flight'/>
           
            <img src={img} alt='img' id='img-flight'/>
            <img src={img2} alt='img' id='img-flight'/>
           
            </div>

            </div>
            
            
            

         
        </div>
    )
}

export default Flight