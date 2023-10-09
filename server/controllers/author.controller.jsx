const Author = require('../models/authors.model.jsx');

module.exports = {
    
    getAllAuthors: (req, res) => {
        Author.find({})
            .then((allAuthors) => res.json(allAuthors))
            .catch((err) => res.status(400).json(err));
    },

    createNewAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => res.json(newAuthor))
            .catch(err => res.status(400).json(err));
    },

    getOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id})
            .then((oneAuthor) => res.json(oneAuthor))
            .catch(err => res.status(400).json(err));
    },

    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true, runValidators:true})
            .then((updatedAuthor) => res.json(updatedAuthor))
            .catch((err) => res.status(400).json(err))
        },

        deleteAuthor: (req, res) => {
            Author.deleteOne({ _id: req.params.id })
                .then(deleteConfirm => res.json(deleteConfirm))
                .catch(err => res.status(400).json(err))
        }
}