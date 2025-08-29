const mongoos = require('mongoose');



const Product_Schema = mongoos.Schema({
    
    name : {
        type: String,
        require: [true,'please enter the name , without name product donot exist']
        
    },
    Quantity : {
           type : Number,
           require: [true,'please enter the quantity , without quantity product donot exist'],
           default:0


    },
    price:{
        type: Number,
        require: [true,'please enter the price , without price product donot exist'],
        default:0

    } ,
    image:{
          type: String,
          require : true,
          default: ''
    }
},
    {

        Timestamp: true

    }
);
const Product = mongoos.model('Product', Product_Schema);