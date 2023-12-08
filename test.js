// var x =20 ;
// var y =30;
// var z =50;

// if(x>y && x>z){
// console.log('X is highest number')
// }
// else if(y>x && y>z){
// console.log('y is highest number')
// }
// else if(z>y && z>x ){
// console.log('z is highest number')
// }

function run(){
  try{
    return 100;
  }finally{
    // eslint-disable-next-line no-unsafe-finally
    return 200;
  }
}
const output =run()
console.log(output)

