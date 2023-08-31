const dbconnect = require('./mongodb')
const db = require('./mongodb')


const updateData  =async ()=>{
let data  = await dbconnect();
let result = await data.updateOne(
    {name: ' Samsung S21 Ultra'},
  { $set: { name :'Samsung s24 ultra',price : '$200000'}}
)// it takes two objects first condition obj. 
console.log(result);
}
updateData()