const Author = require("../models/author.model")

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => {
            const lowerCaseAuthors = allAuthors.map(author => ({
                ...author.toObject(),
                name: author.name.toLowerCase()
            }));
            const sortedAuthors = lowerCaseAuthors.sort((a, b) => a.name.localeCompare(b.name));
            res.json(sortedAuthors);
            console.log(sortedAuthors);
        })
        .catch(err => {
            res.json({message: "Something went wrong", error: err});
        }); 
    // Author.find().sort([["name", 1]])
    //     .then(allAuthors => {
    //         res.json(allAuthors)
    //         console.log(allAuthors)
    //     })
    //     .catch(err => {
    //         res.json({message: "Something went wrong", error: err})
    //     }); 
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.status(200).json({author: newAuthor})
        })
        .catch(err => {
            res.status(500).json({message: "Something went wrong", error: err})
        });
}

module.exports.findOneAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(author => {console.log("Found me"); res.json(author)})
        .catch(err => res.status(500).json({message: "Something went wrong", error: err}));
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.status(200).json(updatedAuthor))
        .catch(err => {
            res.status(500).json({message: "Something went wrong", error: err})
        })
}

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}