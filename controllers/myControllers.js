const generateUniqueId = require("generate-unique-id");

let volstorage = []; 


const defultcon = (req, res) => {
    console.log("defult contorllers");
    res.render('index' , {v : volstorage});
}

const addcon = (req, res) => {
    const { firstName, lastName, email, age, address, city, postcode, country, phone, skills } = req.body;
    const volObj = {
        id: generateUniqueId({length : 4 , useLetters: false}),
        firstName,
        lastName,
        email,
        age,
        address,
        city,
        postcode,
        country,
        phone,
        skills,
    };
    volstorage = [...volstorage,volObj];
    res.redirect('/');
};

const editcon = (req, res) => {
    console.log("edittocon");
    const {id} = req.params;
   
    const singleRec = volstorage.find((vol) => vol.id == id);
    console.log("singlerec",singleRec);
    res.render('editForm' , {singleRec})  
}

const createcon = (req, res) => {
    res.render("create");
    
}

const updatecon = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email,  age, address, city, postcode, country, phone, skills } = req.body;
    
    volstorage = volstorage.map(v=>
        v.id == id ? { id: v.id, firstName, lastName, email,  age, address, city, postcode, country, phone, skills } : v
    );
    res.redirect('/');
};

const deletecon = (req, res) => {
    const { id } = req.params;
    volstorage = volstorage.filter(v => v.id != id);
    res.redirect('/');
};


module.exports = { defultcon , addcon , editcon , updatecon, deletecon , createcon}  