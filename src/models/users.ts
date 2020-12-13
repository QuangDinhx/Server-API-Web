import mongoose, { Schema } from "mongoose"



export type IUserDocument = mongoose.Document & {
  
  userName:string;
  password: string;
  permission:string;
  
};

const userSchema = new mongoose.Schema(
  { 
    
    userName: { type: String }, // tên hiển thị
    password: { type: String }, 
    permission: {type:String},
    
    
  },
  { timestamps: true }
);
// gradeSchemal.plugin(softdelete);

export const Users = mongoose.model<IUserDocument>("users", userSchema,"users");
