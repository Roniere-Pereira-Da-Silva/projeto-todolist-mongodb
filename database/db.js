const mongoose = require('mongoose')

const connectToDb = () =>{
 mongoose.connect(
  "mongodb+srv://ronyprogramador:TTUp6VQlEMEsfvUr@todolist.xp0h5uv.mongodb.net/?retryWrites=true&w=majority&appName=todolist",
  {
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
 ).then(() => console.log("MongoDB Atlas CONECTADO")
 ).catch((err)=> console.log(err))
}

module.exports = connectToDb