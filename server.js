const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')

app.use(express.json())

const userRoute = require('./routes/usersRoute')
const transactionsRoute = require('./routes/transactionsRoute')

app.use('/api/users/' , userRoute)
app.use('/api/transactions',transactionsRoute)

 
const PORT  = process.env.PORT || 3000

if(process.env.NODE_ENV === 'production')
{
     app.use('/' , express.static('client/build'))

     app.get('*' , (req, res)=>{
         res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
     })
}



const DATABASE_URL = "mongodb+srv://vaijayanti34:22rINeIUP5YVa0pp@cluster0.mhbxwqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))




    \section{Technical Skills}
    \resumeHeadingSkillStart
     \resumeSubItem{Programming} % Category
       {Python, C/C++, Java}
       \resumeSubItem{Database Management} % Category
       {MongoDB*}
       \resumeSubItem{Web Technologies} % Category
       {HTML, CSS, JavaScript, React, Node.js, Express.js, Next.js}
       \resumeSubItem{Tools} % Category
       {Numpy, Matplotlib, Tkinter, Pyside6, PyQt, Pygame}
       \resumeSubItem{CAD/CAM} % Category
       {Fusion 360}
       \resumeSubItem{Miscellaneous} % Category
       {GIT, VS Code, Arduino, Atom*}
       \resumeSubItem{Operating System} % Category
       {Windows, Ubuntu*}
   %  \resumeSubItem{Operating Systems}
   %  {Windows, Linux*} 
   \hfill \textit{\footnotesize{* Elementary proficiency}} \hspace{3mm}
    \resumeHeadingSkillEnd