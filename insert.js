const dbConnect = require('./mongodb')


const insert =async()=>{
const db = await dbConnect();

const docs  = [
    
    {name: ' Samsung S22 Ultra',brand: 'Samsung',price: '$120000',category : 'Flagship',},
  

]

const result =await db.insertMany(docs);
if(result.acknowledged){
    console.log('data inserted\n',result);
}
}
insert()