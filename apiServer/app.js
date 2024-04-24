"use strict";
import express from "express";


const app = express();
const port = 5000;
let card_list=[];


app.get("/hello",(req, res) => {
    const salute = "Hello from server";
    res.status(200).send(salute)});

app.get("/hello/:name", (req,res)=>{
    console.log(req.params)
    const salute = `Hello ${req.params.name}!!`
    res.status(200).send(salute)});


app.post("/Cards", (req,res)=>{
    console.log(req.body)
    card_list.push(req.body)
    res.status(200).send("Card added succesfully")

});


app.listen(port,()=>{
    console.log(`Running on port ${port}`)});

