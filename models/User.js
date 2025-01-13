const mongoose = require('mongoose');

// dtb của users
const usersDB = mongoose.connection.useDb('users');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 6,
      maxlength: 20,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
); // Phần này đã sửa dấu phẩy và cú pháp

module.exports = usersDB.model('User', userSchema);
