import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Signup-back-end", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB connected");
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  dob: String,
  gender: String,
});

const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const appointmentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  gender: String,
  phone: String,
  date: Date,
  time: String,
  department: String,
});
const User = mongoose.model("User", userSchema);
const login = mongoose.model("login", loginSchema);
const Appointment = mongoose.model("Appointment", appointmentSchema);

app.delete("/appointments", async (req, res) => {
  try {
    await Appointment.deleteMany({}); // Delete all appointments
    res.status(200).json({ message: "All appointments cleared successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'it.b.32.sandeep.yadav@gmail.com', // your email
    pass: 'Sandeep123' // your password
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, dob, gender } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "User already signed up" });
    }

    const newUser = new User({
      username,
      email,
      password,
      dob,
      gender,
    });

    await newUser.save();

    res.status(200).json({ message: "Successfully signed up" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/book-appointment", async (req, res) => {
  try {
    const { name, age, email, gender, phone, date, time, department } = req.body;

    // Create a new appointment document
    const newAppointment = new Appointment({
      name,
      age,
      email,
      gender,
      phone,
      date,
      time,
      department,
    });

    // Save the appointment to the database
    await newAppointment.save();

    // Send email notification
    const mailOptions = {
      from: 'it.b.32.sandeep.yadav@gmail.com',
      to: email,
      subject: 'Appointment Confirmation',
      text: `Dear ${name},\n\nYour appointment has been successfully booked.\n\nDate: ${date}\nTime: ${time}\nDepartment: ${department}\n\nThank you.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(200).json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});
