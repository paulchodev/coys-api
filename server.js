const express = require('express')
const app = express()
const PORT = 8000

const roster = {
    'harry kane':{
        'age': 28,
        'nationality': 'England',
        'postion': 'Forward',
        'height': '6ft2in'
    },
    'son heung min':{
        'age': 29,
        'nationality': 'South Korea',
        'postion': 'Forward',
        'height': '6ft'
    },
    'dejan kulusevski':{
        'age': 22,
        'nationality': 'Sweden',
        'postion': 'Midfielder',
        'height': '6ft1in'
    },
    'rodrigo bentacur':{
        'age': 24,
        'nationality': 'Uruguay',
        'postion': 'Midfielder',
        'height': '6ft2in'
    },
    'pierre-emile hojbjerg':{
        'age': 26,
        'nationality': 'Denmark',
        'postion': 'Midfielder',
        'height': '6ft1in'
    },
    'lucas moura':{
        'age': 29,
        'nationality': 'Brazil',
        'postion': 'Forward',
        'height': '5ft8in'
    },
    'oliver skipp':{
        'age': 21,
        'nationality': 'England',
        'postion': 'Midfielder',
        'height': '5ft9in'
    },
    'christian romero':{
        'age': 24,
        'nationality': 'Argentina',
        'postion': 'Defender',
        'height': '6ft1in'
    },
    'davinson sanchez':{
        'age': 25,
        'nationality': 'Colombia',
        'postion': 'Defender',
        'height': '6ft2in'
    },
    'ben davies':{
        'age': 29,
        'nationality': 'England',
        'postion': 'Defender',
        'height': '5ft11in'
    },
    'emerson royal':{
        'age': 23,
        'nationality': 'Brazil',
        'postion': 'Defender',
        'height': '5ft11in'
    },
    'sergio reguilon':{
        'age': 25,
        'nationality': 'Spain',
        'postion': 'Defender',
        'height': '5ft10in'
    },
    'ryan sessegnon':{
        'age': 22,
        'nationality': 'England',
        'postion': 'Defender',
        'height': '5ft10in'
    },
    'steven bergwijn':{
        'age': 24,
        'nationality': 'Netherlands',
        'postion': 'Midfielder',
        'height': '5ft10in'
    },
    'hugo lloris':{
        'age': 35,
        'nationality': 'France',
        'postion': 'Goalkeeper',
        'height': '6ft2in'
    },
    'pierluigi gollini':{
        'age': 27,
        'nationality': 'Italy',
        'postion': 'Goalkeeper',
        'height': '6ft4in'
    },
    'unknown':{
        'age': 0,
        'nationality':  'unknown',
        'postion':  'unknown',
        'height':  'unknown'
    }

}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{
    let playerName = req.params.name.toLowerCase()
    if(roster[playerName]){
        res.json(roster[playerName])
    }else{
        res.json(roster[unknown])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})