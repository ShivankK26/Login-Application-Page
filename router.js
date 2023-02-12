//This page is used for Logging in the Application.
var express = require("express");
var router = express.Router();



const credential = {
    email : "admin@gmail.com",
    password : "admin123"
}


//Router.post() submits the data whereas router.get() requests the data.

// login user
router.post('/login', (req, res)=>{

    if(req.body.email == credential.email && req.body.password == credential.password){

        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        //res.end("Login Successful...!");

    }
    else{
        //res.end() function is used to end the response process.
        res.end("Invalid Username")

    }
});



// route for dashboard
router.get('/dashboard', (req, res) => {

    if(req.session.user){

        res.render('dashboard', {user : req.session.user})

    }
    else{

        res.send("Unauthorize User")

    }
})



// route for logout
router.get('/logout', (req ,res)=>{

    req.session.destroy(function(err){

        if(err){

            console.log(err);
            res.send("Error")

        }
        else{

            res.render('base', { title: "Express", logout : "logout Successfully...!"})

        }
    })
})


module.exports = router;
