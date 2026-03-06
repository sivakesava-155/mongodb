const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");  // For password hashing

// User Schema
const UserSchema = new mongoose.Schema(
  {
    id: {
      type: Number, 
      unique: true,  // Ensure the user id is unique
      required: true
    },
    name: {
      type: String,
      required: true,  // Name should be required
    },
    email: {
      type: String,
      required: true,
      unique: true,  // Ensure the email is unique across all users
      match: [/.+@.+\..+/, 'Please fill a valid email address'], // Simple email validation
    },
    
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],  // Limiting possible gender values
      default: 'other',  // Default value if not specified
    },
    password: {
      type: String,
      required: true,
      minlength: 6,  // Minimum password length for better security
    },
  },
  { timestamps: true }  // Automatically adds createdAt and updatedAt timestamps
);

// Pre-save hook for password hashing
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // Hash the password before saving it
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords (for authentication)
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = UserSchema;