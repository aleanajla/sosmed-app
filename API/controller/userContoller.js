const fs = require('fs')

module.exports = {
    getUser: (req,res) => {
        let{username_email} = req.query;
        let users = fs.readFileSync('./data/users.json')
        res.status(200).send(JSON.parse(users))
    },
    addData: (req,res) => {
        let users = JSON.parse(fs.readFileSync('./data/users.json'))
        users.push(req.body)

        fs.writeFileSync('./data/users.json', JSON.stringify(users))
        res.status(200).send(JSON.parse(fs.readFileSync('./data/users.json')))
    }
}