import express from 'express'
import axios from 'axios'

const app = express()

app.get('/', function(request, response){
    axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then(response => response.data)
    .then((APIData) => {
        console.log("This is the api response!")
        console.log(APIData.abilities[0])
        response.json(APIData.abilities[0])
    })
})

// app.get('/', function(req, res){
//     axios.get("https://pokeapi.co/api/v2/pokemon/mewtwo")
//     .then(response => response.data)
//     .then((APIData) => {
//         console.log("This is the api response!")
//         console.log(APIData)
//         res.send(APIData)
//     })
// })

// app.get('/', function(req, res){
//     axios.get("https://pokeapi.co/api/v2/pokemon/mewtwo")
//     .then(response => response.data)
//     .then((APIData) => {
//         console.log("This is the api response!")
//         console.log(APIData)
//         res.send(APIData)
//     })
// })

// app.get('/', function(req, res){
//     axios.get("https://pokeapi.co/api/v2/pokemon/mewtwo")
//     .then(response => response.data)
//     .then((APIData) => {
//         console.log("This is the api response!")
//         console.log(APIData)
//         res.send(APIData)
//     })
// })


app.listen(3000, function(){
    console.log('test')
})