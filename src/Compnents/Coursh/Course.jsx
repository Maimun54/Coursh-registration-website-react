

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
// import {FaBookmark } from 'react-icons/fa';
const Course = () => {
    
    const [course,setCourse]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])

    return (
        
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-5 ml-5'>
            {
                course.map((course)=>( <div  key ={course.id}className="card card-compact w-96 bg-base-100 shadow-xl">
                <img className='p-5' src={course.cover} alt="" />
                <div className="card-body">
                  <h2 className="card-title">Introduction to C Programming</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  <div className='flex  gap-2'>
                              <img src="dollar.svg" alt="" />
                              
                              <p>Price:15000</p>
                              <button><img src="Frame.png" alt="" /></button>
                              <p>Credit: 1hr</p>
              
                           </div>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary color-white w-[280px]">Buy Now</button>
                  </div>
                </div>
              </div>))
            }
            <h3>Total Coursh:{course.length}</h3>
     
        </div>
    );
};

Course.propTypes = {
    Course:PropTypes.object
    
};

export default Course;