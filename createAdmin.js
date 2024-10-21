import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "./models/userSchema.js"; // Adjust the path if necessary

async function createAdmin() {
  // Define admin details
  const adminData = {
    firstName: "adminn", // Change to actual first name
    lastName: "One", // Change to actual last name (at least 3 characters)
    email: "adm@gmail.com", // Change to admin email
    phone: "1234567890", // Change to valid phone number
    dob: new Date("1990-01-01"), // Change to actual DOB
    gender: "Male", // Change to appropriate gender
    password: "123456789", // Change to desired password
    role: "Admin",
  };

  // Hash password before saving
  adminData.password = await bcrypt.hash(adminData.password, 10);

  // Create a new admin instance
  const adminUser = new User(adminData);

  // Save admin user to the database
  await adminUser.save();
  console.log("Admin user created successfully!");
}

// MongoDB connection and calling the function
mongoose
  .connect(
    "mongodb+srv://adityajhab76:aditya@cluster0.tx9zg6w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      dbName: "HOSPITAL_MANAGEMENT",
    }
  )
  .then(() => {
    console.log("Connected to database!");
    createAdmin();
  })
  .catch((err) => {
    console.log("Some error occurred while connecting to database:", err);
  });