console.log('May Node be with you')

const express = require('express');
const { dirname } = require('path');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors())

let areaPerimeter ={
    "square": {"area": "l*l","peri": "4l"},
    "rectangle": {"area": "l*b", "peri": "2l+2b"},
    "triangle": {"area":"1/2b*h", "peri": "sum of 3 sides"},
    "circle": {"area": "22/7*rsquared", "peri": "2*22/7*r"}
}
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html' );
})

app.get('/api/formulae/:shapeName', (req, res)=>{
    const shape = req.params.shapeName.toLowerCase()
    console.log(shape)
    if(areaPerimeter[shape]){
        res.json(areaPerimeter[shape])
    }else{
        res.send('Not available')
    }
})

/*app.get('/api', (req,res)=>{
    res.json(savage)
})*/
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})