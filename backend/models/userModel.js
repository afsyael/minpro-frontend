import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    join_date: { type: Date, required:true},
    phone_number: { type: String, required:true},
    isAdmin: { type: Boolean, default: false, required: true },
    // isSeller: { type: Boolean, default: false, required: true },
    // seller: {
    //   name: String,
    //   logo: String,
    //   description: String,
    //   rating: { type: Number, default: 0, required: true },
    //   numReviews: { type: Number, default: 0, required: true },
    // },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;
