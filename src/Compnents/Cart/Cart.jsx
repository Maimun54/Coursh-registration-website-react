import PropTypes from 'prop-types';
const Cart = ({addCourse,totalhour,remeninghr,totalprice}) => {
    
    
    return (
        
        <div>
          <h2 className="my-5 font-medium">Credit Hour Remaining {remeninghr} hr</h2>
          <hr />
          <h2 className='font-bold '>Course Name</h2>
          <hr /> 
         
          {
            
        addCourse.map((course,idx)=>( <ol key={idx}>{idx+1}.{course.title}</ol>))
        
          } 
          <h3 className="my-20">Total credit hour:{totalhour}</h3>
          
          <h3>Total Price :{totalprice} USD</h3>
        </div>
    );
};
Cart.propTypes = {
    Course:PropTypes.object,
    totalhour:PropTypes.object,
    remeninghr:PropTypes.object,
    totalprice:PropTypes.object,
    addCourse:PropTypes.func.isRequired
};
export default Cart;