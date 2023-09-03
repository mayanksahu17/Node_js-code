const express = require('express')
require('./config')
const products = require('./product');
const product = require('./product');
const app = express();
app.use(express.json())
app.post('/create',async(req,resp)=>{
  let data = new product(req.body);
  let result = data.save();
   console.log(req.body);
  resp.send(" hey ");

})

app.get('/get',async(req,res)=>{
  let data = await product.find()
  res.send(data)
  console.log(data);
})

app.listen(5000)

app.delete("/delete/:_id",async(req,res)=>{
  let data = await product.deleteOne(req.params)
  console.log(data);
  res.send(data)
})


app.put("/update/:_id",async (req, resp) => {
  console.log(req.params)
  let data = await product.updateOne(
      req.params,
      {$set: req.body}
  );
  resp.send(data);
})

