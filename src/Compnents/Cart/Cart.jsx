
const Cart = ({addCourse,totalhour,remeninghr,totalprice}) => {
    
    
    return (
        
        <div>
          <h3 className="my-5">Credit Hour Remaining {remeninghr} hr</h3>
          <hr />
          <h3>Course Name</h3>
          <hr /> 
         
          {
            
        addCourse.map((course,idx)=>( <ol key={idx}>{idx+1}.{course.title}</ol>))
        
          } 
          <h3 className="my-20">Total credit hour:{totalhour}</h3>
          
          <h3>Total Price :{totalprice} USD</h3>
        </div>
    );
};

export default Cart;