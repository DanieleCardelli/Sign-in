const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
//const packageJson = require("./package.json");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const signUpTemplateCopy = require("./signupModels")

dotenv.config()

// richiamo istanza express
const app = express()

//Avrei potuto passare direttamente gli accessi qui ma per sicurezza creo un file .env per non avere le credenziali visibili
mongoose.connect(process.env.DATABASE_CREDENTIALS, {useNewUrlParser: true, useUnifiedTopology: true}, () =>console.log("DB connesso"))

app.use(cors())
app.use(bodyParser.json())

const port = 4000

// definisco le varie rotte
app.post('/sign-up', (req, res) => {
    console.log(req.body)
     
    //riceve una richiesta proveniente da server.js (request) e fornisce una risposta (response)
    const signedUpUser = new signUpTemplateCopy({                 
      fullName:req.body.fullName,
      username:req.body.username,
      email:req.body.email,
      password:req.body.password,
  })
  signedUpUser.save()
  .then(data =>{
      res.json(data)
  })
  .catch(error =>{
      res.json(error)
  })

})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.json({
      info: packageJson.name,
      version: packageJson.version
  })
})
