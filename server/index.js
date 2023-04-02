const express =require("express")
const app=express();
const mongoose=require('mongoose')
const UserModel=require("./models/Users")
const cors=require("cors")

app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://sanjeevi:Dhoni777@cluster0.rqkin0g.mongodb.net/MernTutorial?retryWrites=true&w=majority")
app.get("/getUsers",(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
})
app.post("/createUser",async (req,res)=>{
    const user=req.body;
    const newUser=new UserModel(user);
    await newUser.save();
    res.json(user);
})
// app.delete("/deleteUser/:_id",async(req,res)=>{
//     try{
//         const deleteuser=await UserModel.findByIdAndDelete(req.params.id);
//         if(!req.params.id){
//             return res.status(400).send();
//         }
//         res.send(deleteuser);
//     }
//     catch(e){
//         res.status(500).send(e);
//     }
// })
// app.delete('/deleteUser/:id', function(req, res){
//     var id = req.params.id;
//     Client.deleteClient(id, function(err, client){
//         if(err){
//             res.json(err);
//         }
//         else {
//             res.json(client);
//         }
//     });
//  });
app.listen(3001,()=>{
    console.log("Server runs perfectly!");
})