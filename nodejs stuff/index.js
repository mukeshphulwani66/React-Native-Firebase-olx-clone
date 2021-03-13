const admin =  require('firebase-admin')
const express = require('express')
const app = express()

var serviceAccount = require("PATH TO FIREBASE ADMIB SDK JSON");
app.use(express.json())
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.post('/send-noti',(req,res)=>{
    console.log(req.body)
   const message = {
    notification:{
        title:"new ad",
        body:"new ad posted click to open"
    },
    tokens:req.body.tokens
}

admin.messaging().sendMulticast(message).then(res=>{
   console.log('send success')
}).catch(err=>{
    console.log(err)
}) 
})

app.listen(3000,()=>{
    console.log('surver running')
})
