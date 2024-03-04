const mongoose=require('mongoose');
const bycrypt=require('bcryptjs');
const userSchema=new mongoose.Schema({
    username:{type:String,unique:true},password:String
})
//methode pre teb3a userSchema yo93d ystana f save(n9ou bch yjik objet a3ml hachage ll password )
userSchema.pre('save',async function(next){
    const user=this;
    if(user.isModified('password')){
        userpassword=await bcrypthas(user.password,10)
    }next();
})
const user =mongoose.model('user',userSchema)

module.exports=user;