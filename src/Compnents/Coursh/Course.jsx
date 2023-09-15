import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
// import {FaBookmark } from 'react-icons/fa';
const Course = () => {
    
    const [course,setCourse]=useState([]);
    
    const [addCourse,setAddCourse]=useState([]);
    const [totalprice,setTotalPrice]=useState(0)
    const [totalhour,setTotalHour]=useState(0);
    const [remeninghr,setRemainngHr]=useState(0)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[]);
  
 const handleSelect =(course)=>{
  const isTitle =addCourse.find(item=> item.id==course.id)
  let count = course.price;
  let creditCount = course.credit_hr;
  
  if(isTitle){
    // return alert('Your are already purchase this course')
    return toast("Your are already purchase this course !");
  }else{
    addCourse.forEach(item=>{
      creditCount =creditCount+item.credit_hr
    })
    addCourse.forEach(pricevalue=>{
      count=count+pricevalue.price
    })
    
    // const total = creditCount
    const remainng= 20-creditCount;
  
    if(creditCount>20){
      // return alert('You do not have a credit')
      return toast("You do not have a credit !");
    }else{
      setTotalHour(creditCount)
      setTotalPrice(count)
    setRemainngHr(remainng)
    setAddCourse([...addCourse,course])
    }
    
  }
 
    
 };
 
    return (
        
        <div className='flex'>
          <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-5 ml-5'>
            {
                course.map((course)=>( <div  key ={course.id}className="card card-compact w-96 bg-base-100 shadow-xl">
                <img className='p-5' src={course.cover} alt="" />
                <ToastContainer />
                <div className="card-body">
                  <h2 className="card-title">Introduction to C Programming</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  <div className='flex  gap-2'>
                              <img src="dollar.svg" alt="" />
                              
                              <p>Price:{course.price}</p>
               <button><img src="Frame.png" alt="" /></button>
                              <p>Credit: {course.credit_hr}hr</p>
              
                           </div>
                  <div onClick={()=>handleSelect(course)} className="card-actions justify-center">
                    <button className="btn btn-primary color-white w-[280px]">Select</button>
                  </div>
                </div>
              </div>))
            }
            <h3>Total Course:{course.length}</h3>
     
        </div>
        <div>
        <Cart
        addCourse={addCourse}
        remeninghr={remeninghr}
        totalhour={totalhour}
        totalprice={totalprice}
        >

        </Cart>

        </div>
        </div>
    );
};

Course.propTypes = {
    Course:PropTypes.object
    
};

export default Course;