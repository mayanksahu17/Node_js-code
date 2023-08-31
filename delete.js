const dbconnect  = require('./mongodb')


const deleteData= async()=>{
    let data = await dbconnect();
    let result = await data.deleteMany()
    console.log(result);
    if (result.acknowledged) {
        console.log('record deleted');
    }
}
deleteData();