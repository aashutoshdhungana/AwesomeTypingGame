const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const crypto = require('crypto');
const bcrypt = require('bcrypt');

//  USER SCHEMA 

const userSchema = new mongoose.Schema({
    //IMAGES
    image:{
        type: String
    },
    // NAME
    name:{
        type: String,
        required:[true, "Please add a name"]
    },
    // EMAIL ADDRESS
    email:{
            type: String,
            required:[true, "Enter the email address"],
          //  unique: [true, "Please enter the new email"],
          /*  match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter the valid email address'
              ]
          */
        },
    password:{
            type: String,
            required: [true, 'password is required'],
            select: false,
        },

        //AGE
    number:{
            type: Number,
            required:[true, "Please enter the age"]
        },
  
        //PHONE NUMBER
    phone:{
            type: Number,
            required:[true,"Please add the phone number"],
          //  unique: [true, "Add the new numer that is not mentioned preciously"]
        },

   

},
{timestamps: true}  // IT SET THE "CREATED AT AND UPDATED AT" AUTOMATICALLY
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (password) {

  var data=   await bcrypt.compare(password, this.password);
  console.log(data);
  return data;
};

module.exports=  mongoose.model("Users",userSchema);