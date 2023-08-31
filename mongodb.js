

// import {mongoclient } from 'mongodb
const { MongoClient } = require("mongodb");

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const database = 'e-comm';

// Create a new MongoClient
const client = new MongoClient(url);

async function dbconnect() {
  
        // Use connect method to connect to the server
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(database);
       return db.collection('products');
      //   const response = await collection.find({name:"iPhone 13"}).toArray();
      //   console.log(response);
    
}

// getdata();


module.exports = dbconnect;

















































// const express = require('express')
// const reqFilter = require('./middlewares')
// const app = express();
// const route = express.Router();
// // application lavel middleware     

// //    app.use(reqFilter)
// route.use(reqFilter)

// app.get('/',(req,res)=>{
//       res.send('welcome to home page')
// })
// app.get('/users',(req,res)=>{
//       res.send('welcome to users page')
// }) 
// // rout lavel middleware
// route.get('/about',(req,res)=>{
//       res.send('welcome to users page')
// })

// route.get('/contact',(req,res)=>{
//       res.send('welcome to contact page')
// })
 
// app.use('/',route) //isse last likhna hota h


// const app = express();
// application lavel middleware     
// const reqFilter = (req,res,next)=>{
//       console.log('reqFilter');
//       if (!req.query.age) {
//           res.send("Please Provide Age")  
//       }else if (req.query.age<=18 ){
//             res.send("You can not access this page" ) 
//       }else  {
//             res.send("You can  access this page" ) 
//       }
//       next();
// }
//    app.use(reqFilter)

// app.get('/',(req,res)=>{
//       res.send('welcome to home page')
// })
// app.get('/users',(req,res)=>{
//       res.send('welcome to users page')
// })
// app.get(reqFilter,'/about',(req,res)=>{
//       res.send('welcome to users page')
// })

// app.get('*',(req,resp)=>{
//    resp.sendFile(`${publicpath}/NoPage.html`)
// })


//  console.log(publicpath);

// app.listen(5000)




































// const express = require('express')
//  const app = express();
//  app.get('',(req,res)=>{
//    res.send(`<h1>Welcome , This is home page</h1>
//    <a href = "/about"> Go to about page` )
//  });

//  app.get('/about',(req,res)=>{
//    res.send(`<h1>This is about page</h1> 
//    <input type="text" placeholder="Username">
//    <button>fuck me</button>`)
//  });

//  app.get('/Help',(req,res)=>{
//    res.send("hello , This is Help page")
//  });

// app.listen(5000);


































// asyncronous node js and handling async node js
// let a = 10
// let b = 0

// let waitingData = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve(30)
//    },2000)
// })
// waitingData.then((data)=>{
//    console.log(a+data);
// })



// CRUD WITH FILE SYSTEM
// 
// const { error } = require('console');
// const fs = require('fs')  
// const path = require('path') 
// const dirPath = path.join(__dirname,"CRUD")
// const filepath = `${dirPath}/apple.txt`;
// // create file 
// fs.writeFileSync(filepath,"This is a fruit");

// // read file
// fs.readFile(filepath,'utf8',(error,item)=>{
//   console.log(item);
// })

// Update file
 
// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//    if(!err){
//       console.log("File is updated");
//    }
// })


// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//    if(!err){
//             console.log("File is updated");
//          }
// });

// fs.unlinkSync(`${dirPath}/fruit.txt`)






// show file list with file system
// const fs = require('fs')

//  const path = require('path');
//  const dir_path = path.join(__dirname,'files');
// //  console.warn(dir_path);
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(dir_path+"/Hello"+i+".txt","A simple text file");
   
// }

// fs.readdir(dir_path,(error,files)=>{
//    files.forEach((item)=>{
//       console.log("File Name is ",item);
      
// })
// })




//  create file with command line

// const fs = require('fs');
// const input = process.argv;
// if(input[2]=='add'){
// fs.writeFileSync(input[3],input[4])}
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid Output");
// }




// console.log(process.argv);
// const http = require("http");
// const data  = require('./data')
// http.createServer((req,resp)=>{
//    resp.writeHead(200,{'content-Type' : "application\json"});
//    resp.write(JSON.stringify(data))
//   resp.end();
// }).listen(2000);





























// const dataControl = (req,resp) =>
// {
//     resp.write("Hello, This is anilsss sidhu");
//     resp.end();
// }



// http.createServer(dataControl).listen(4500);
// console.log("hey buddy")