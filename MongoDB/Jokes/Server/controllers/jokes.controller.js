const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json(allJokes)
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => {
            res.json(oneJoke)
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({joke: newJoke})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id},req.body, {new: true, runValidators: true})
        .then(updatedJoke => {
            res.json({joke: updatedJoke})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

//Could also have done the below. This would turn my routes into const findAllJokes, const findOneJoke, etc...

// module.exports= {
//     findAllJokes,
//     findOneJoke,
//     createJoke,
//     updateJoke,
//     deleteJoke
// };