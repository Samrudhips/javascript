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
//collect all the cars price below 2000000
let new_cars=cars.filter((car)=>{
    return car.price>=2000000
})
console.log(new_cars);
