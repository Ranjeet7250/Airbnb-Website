if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverirde = require("method-override");
const ejsMate = require("ejs-mate");
const _ExpressError = require("./utlis/ExpressError.js");
const flash = require("connect-flash");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const passport= require("passport");
const LocalStrategy= require("passport-local");
const User = require("./models/user.js");


const listingRouter= require("./routes/listing.js");
const reviewRouter= require("./routes/review.js");
const userRouter= require("./routes/user.js");


app.use(express.static(path.join(__dirname, "/public")))
const MONGO_URL = process.env.ATLAS_URL;
main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverirde("_method"));
app.engine("ejs", ejsMate);

const store = MongoStore.create({
    mongoUrl: MONGO_URL,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter: 24 * 3000,
});

store.on("error", ()=>{
    console.log("session mongo session store error", err);
});

const sessionOptions = {
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly:true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})
app.use("/listing",listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/",userRouter);
app.all("*", (req, res, next) =>{
    next(new _ExpressError(404, "Page not found"));
})
app.use((err, req, res, next) => {
    let {status=500, message="Something went wrong!"} = err;
    res.status(status).render("error.ejs", {message});
})
app.listen(8080, ()=>{
    console.log("server is listening to port 8080");
})