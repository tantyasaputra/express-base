const express = require('express');
const app = express();


var book = [
    {   
        "id": 1,
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
      },
      { "id"    : 2,
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
      },
      { "id"    : 3,
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
      }
]
//GET LIST BOOK
app.get('/', (req, res)=>{
    res.status(200).send(book)
});

//ADD BOOK
app.post('/', (req, res)=>{
    body = req.body //
    book.push(body)//Insert body yang dikirim ke database book
    res.send(book)
})

//PUT name from book
app.put('/:id', (req, res)=>{
    id = parseInt(req.params.id)
    authorNew = req.body.author
    
    for (var i = 0; i < book.length; i++){        
        if (book[i].id === id ){
            book[i].author = authorNew            
        }        
    }
    res.send(book)
})

//DELETE
app.delete('/:id', (req, res)=>{
    id = parseInt(req.params.id)
    
    for (var i = 0; i < book.length; i++){        
        if (book[i].id === id ){
            book.splice(i, 1)          
        }        
    }
    res.send(book)
})
module.exports = app;