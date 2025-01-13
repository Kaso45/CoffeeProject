const path = require(`path`);
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const expressLayouts = require("express-ejs-layouts");
const MongoStore = require("connect-mongo");
const session = require("express-session");

const port = process.env.PORT || 3000;

app.use(
  session({
    secret: "coffeeProjectNhom4",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://project-management:12345nhom4@cluster0.kgyvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

// import
const users = require("./routes/auth");
const products = require(`./routes/productRoutes`);
const cart = require("./routes/cartRoutes");
const connectDB = require('./config/database')
dotenv.config();

app.use(cors());
app.use(cookieParser());

//tro toi file css
app.use(express.static(path.join(__dirname, `public`)));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

// Kết nối MongoDB
connectDB()

// epress-ejs-layout
app.use(expressLayouts);
app.set("layout", "layouts/main");

// routes
app.use(users);
app.use(products);
app.use(cart);

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
