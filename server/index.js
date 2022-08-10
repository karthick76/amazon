const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'root123',
    database: 'ecomme',
    port:3306,
  });
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true})); 

app.post("/adverise", (req, res)=>{
    const content = req.body.content;
    const imgPath = req.body.imgPath;
    const sqlInsert1 = "INSERT INTO adversiment (content, imgPath) VALUES (?,?)";
    db.query(sqlInsert1,[content, imgPath], (err, result)=>{
       res.send(result);
    });
})
app.get("/viewad", (req,res)=>{
    const sqlSelect1 = 
    "SELECT * FROM adversiment";
    db.query(sqlSelect1,(err, result)=>{
        res.send(result);
    });
});

app.delete('/deletead/:id',(req,res)=>{
    const id = req.params.id;
    db.query("DELETE FROM adversiment WHERE id = ?",id,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post("/addproduct", (req, res)=>{

    const productId = req.body.productId;
    const productName = req.body.productName;
    const brand = req.body.brand;
    const item = req.body.item;
    const price = req.body.price;
    const path = req.body.path;
    const description = req.body.description;
    const sqlInsert = "INSERT INTO add_product (productId, productName, brand, item, price, path, description) VALUES (?,?,?,?,?,?,?)";
    db.query(sqlInsert,[productId, productName, brand, item, price, path, description], (err, result)=>{
        console.log(result);
    });
})
app.get("/viewproduct", (req,res)=>{
    const sqlSelect = 
    "SELECT * FROM add_product";
    db.query(sqlSelect,(err, result)=>{
        res.send(result);
    });
});

app.put("/updateproduct/:id",(req,res)=>{
    const id=req.body.id;
    const productId = req.body.productId;
    const productName = req.body.productName;
    const brand = req.body.brand;
    const item = req.body.item;
    const price = req.body.price;
    const path = req.body.path;
    const description = req.body.description;
    db.query("UPDATE add_product SET productId = ?, productName = ?, brand = ?, item = ?, price = ?, path = ?, description = ? WHERE id = ?",
    [productId, productName, brand, item, price, path, description, id],(err,result)=>{
        if(err)
        {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    db.query("DELETE FROM add_product WHERE id = ?",id,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.listen(3001, ()=>{
    console.log("Running on Port 3001");
});