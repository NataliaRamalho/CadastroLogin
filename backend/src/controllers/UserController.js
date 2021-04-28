const User = require('../models/User');

module.exports ={
    async register(req, res){
        const {email, name, password} = req.body;
        const user = await User.create({name, email, password})
        return res.json(user)
    },

    async login(req, res){
        const {email, password} = req.body;
        const user = await User.findOne({where: {email, password}, attributes: ['id','email','name']});
        return res.json(user)
    }
}