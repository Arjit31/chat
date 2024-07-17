import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  password: {
    type: String,
    required: [true, 'Please add a name'],
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
