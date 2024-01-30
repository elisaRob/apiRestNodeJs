const Contact = require('../modeles/Contact');
const catchAsync = require('../helpers/catchAsync')

// const create =catchAsync( async (req,res) => {
//     const contact = await Contact.create(req.body);
//     res.send(contact)

// })

const create = async (req,res) => {
    const contact = await Contact.create(req.body);
    res.send(contact)

}

const getAll = async (req,res) => {
    const contacts = await Contact.find();
    res.send(contacts)
}

const getById = async (req,res) => {
    console.log(req.params.idContact)
    const autreContact = await Contact.findById(req.params.idContact);
    if(autreContact){
        res.send(autreContact);
    }else{
        res.status(404).send('Contact introuvable');
    }
    
}

const updateId = async (req,res) => {

    //le id plus les donénes qu'on veut mettre à jour
    //new : true cela récupère le contact dans son état nouveau dans lesquels on l'a mis à jour
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});

    if(contact){
        res.send(contact)
    } else {
        res.status(404).send('Contact introuvable')
    }

}

const deleteId = async (req,res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if(contact){
        res.send(contact)
    }else{
        res.status(404).send('Contact introuvable')
    }

}

module.exports = {
    create,
    getAll,
    getById,
    updateId,
    deleteId,
    catchAsync
}