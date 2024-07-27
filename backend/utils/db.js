const mongoose = require('mongoose')

const db_URL = 'mongodb+srv://ajitsarwade77:Ajit@7769@cluster0.10k43gg.mongodb.net/being-addective?retryWrites=true&w=majority&appName=Cluster0'

const db_Connection = () =>{
    mongoose.connect(db_URL ,{
      useNewUrlParser: true,
  useUnifiedTopology: true,
    })
  .then(() => {console.log("database is Connected")}).catch((err) =>{
   console.log(err)
})
}

db_Connection();

exports.db_Connection;
