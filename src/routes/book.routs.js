const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

// MIDDLEWARE: Obtener libro por ID
const getBook = async (req, res, next) => {
    let book;
    const { id } = req.params;

    // Verificar si el ID es válido (24 caracteres hexadecimales)
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({
            message: 'El ID del libro no es válido'
        });
    }

    try {
        book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({
                message: 'El libro no fue encontrado'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }

    res.book = book;
    next();
};

// OBTENER TODOS LOS LIBROS
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        console.log('GET ALL:', books);

        if (books.length === 0) {
            return res.status(204).json([]); // Responde con 204 si no hay libros
        }

        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREAR UN NUEVO LIBRO
router.post('/', async (req, res) => {
    const { title, author, genere, publication_date } = req.body;

    // Validar que todos los campos estén presentes
    if (!title || !author || !genere || !publication_date) {
        return res.status(400).json({
            message: 'Los campos título, autor, género y fecha de publicación son obligatorios'
        });
    }

    const book = new Book({
        title,
        author,
        genere,
        publication_date
    });

    try {
        const newBook = await book.save();
        console.log('Libro creado:', newBook);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.get('/:id',getBook, async(req,res)=>{
    res.json(res.book)
})

router.put('/:id',getBook, async(req,res)=>{
   try {
    const book = res.book
    book.title= req.body.title||book.title
    book.author= req.body.author||book.author
    book.genere= req.body.genere||book.genere
    book.publication_date= req.body.publication_date||book.publication_date

    const updateBook = await book.save()
    res.json(updateBook)
   } catch (error) {
    res.status(400).json({
        message:error.message
    })
   }
})

router.patch('/:id',getBook, async(req,res)=>{
    if(!req.body.title && !req.body.author && !req.body.genere && !req.body.publication_date){
        res.status(400).json({
            message:'al menos uno de estos cam´pos debe ser enviado: Título,Autor,Ggénero o la Fecha de Publicación'
        })
    }
    try {
     const book = res.book
     book.title= req.body.title||book.title
     book.author= req.body.author||book.author
     book.genere= req.body.genere||book.genere
     book.publication_date= req.body.publication_date||book.publication_date
 
     const updateBook = await book.save()
     res.json(updateBook)
    } catch (error) {
     res.status(400).json({
         message:error.message
     })
    }
 })

 router.delete('/:id', getBook, async (req, res) => {
    try {
        const book = res.book;
        await book.deleteOne(); // Alternativamente, usa `book.delete()`
        res.json({
            message: `El libro ${book.title} fue eliminado`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Exportar las rutas
module.exports = router;
