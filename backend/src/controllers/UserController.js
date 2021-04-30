const bcrypt = require('bcrypt-nodejs')
const User = require('../models/User');

const encryptPassword = password =>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt);
}

module.exports ={

    async register(req, res){
        const {email, name, password} = req.body;
        const userExist = await User.findOne({where: {email}})
        if(userExist){
            return res.status(400).send('Usuário ja cadastrado')
        }
        const newPassword = encryptPassword(password)
        const user = await User.create({name, email, password:newPassword})
        return res.status(201).json(user)
    },

    async login(req, res){
        const {email, password} = req.body;
        const user = await User.findOne({where:{email}})
        if(!user){
            return res.status(404).send('Email inválido')
        }
        const isMatch = bcrypt.compareSync(password, user.password)
        if(!isMatch){
            return res.status(404).send('Senha inválida')
        }        
        return res.status(200).json({'email': user.email, 'name':user.name})
    },
}