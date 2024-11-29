let cars=[
    {model:'Swift',brand:'Maruthi',price:800000,color:'White'},
    {model:'Dzire',brand:'Maruthi',price:600000,color:'Black'},
    {model:'X1',brand:'BMW',price:5800000,color:'White'},
    {model:'Xuv300',brand:'Mahindra',price:1800000,color:'Black'},
    {model:'Creta',brand:'Hyundai',price:2800000,color:'Black'},
    {model:'Fortuner',brand:'Toyota',price:3800000,color:'Pink'},
    {model:'Scorpio',brand:'Mahindra',price:1800000,color:'Pink'},
    {model:'Nano',brand:'TATA',price:100000,color:'Yellow'},
    {model:'Nexon',brand:'TATA',price:1200000,color:'Yellow'},
    {model:'Campass',brand:'JEEP',price:2800000,color:'Red'},
    {model:'Roxx',brand:'Mahindra',price:1800000,color:'Green'}

   
]
//collect all white color cars
//collect all cars their prices below 2000000
//collect all mahindra cars
//add 5000 tax to all cars and collect into new array
// white_cars=cars.filter((car)=>{
//    return car.color==="White"
// })
// console.log(white_cars);
//using filter method
let white_cars=[]
for(let car of cars){
    if(car.color==="White"){
        white_cars.push(car)

    }
}
console.log(white_cars);


