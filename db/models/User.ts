import { Schema, model, models, Model } from "mongoose";

interface IAddress {
  name: string;
  telephone: string;
  city: string;
  zipCode: string;
  address: string;
}
interface IUser {
  fullName: string;
  email: string;
  password: string;
  createdAt: Date;
  addresses: [IAddress];
  role: string;
  isVerified: boolean;
}

const addressSchema = new Schema<IAddress>({
  name: { type: String },
  telephone: { type: String },
  city: { type: String },
  zipCode: { type: String },
  address: { type: String },
});

const userScheme = new Schema<IUser>({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: function () {
      return Date.now();
    },
  },
  addresses: [addressSchema],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const User = (models.User as Model<IUser>) || model<IUser>("User", userScheme);

export default User;
