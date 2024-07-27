const mongoose = require('mongoose')

const db_URL = 'mongodb://localhost:27017/being-addective'

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