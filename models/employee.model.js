const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    titre: {
        type: String
        
    },
    numero: {
        type: String
    },
    quantite: {
        type: String
    },
    etagere: {
        type: String
    }
});



mongoose.model('Employee', employeeSchema);