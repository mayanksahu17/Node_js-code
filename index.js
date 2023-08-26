
const express = require('express')
const app = express();

const path = require('path')

const publicpath = path.join(__dirname,'public')



app.set('view engine','ejs');
// app.use(express.static(publicpath))
app.get('',(_,resp)=>{
      resp.sendFile(`${publicpath}/index.html`)
})
app.get('/profile',(_,resp)=>{
   const user = {
      name:'Mayank Sahu',
      email:'mayank@gmail.com',
      city : 'noida',
      skills: ['c++','java','php','nodejs']
   }
      resp.render('profile',{user})
})

app.get('/login',(_,resp)=>{
      resp.render('login')
})

app.get('/about',(req,resp)=>{
      resp.sendFile(`${publicpath}/about.html`)
})
app.get('/home',(req,resp)=>{
      resp.sendFile(`${publicpath}/home.html`)
})

app.get('*',(req,resp)=>{
   resp.sendFile(`${publicpath}/NoPage.html`)
})


//  console.log(publicpath);

app.listen(5000)




































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