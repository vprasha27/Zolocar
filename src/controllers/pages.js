const express = require("express");
const router = express.Router();
const PUBLISHABLE_KEY = "pk_test_Wl2rlrhGcvRBzUSYmAK7FhSE00nHDHsr3N"

router.get("/form", (req, res) => {
    res.render("form");
  
});

router.get("/main", (req, res) => {
    res.render("main");
  
});

router.get("/login", (req, res) => {
    res.render("login");
  
});

router.get("/register", (req, res) => {
    res.render("register");
  
});

router.get("/profile", (req, res) => {
    res.render("user-profile");
  
});

router.get("/hostcars", (req, res) => {
    res.render("hostcars");
  
});

router.get("/adminregister", (req, res) => {
    res.render("admin-register");
  });

router.get("/adminlogin", (req, res) => {
    res.render("admin-login");
  });  

router.get("/adminuserslist", (req, res) => {
    res.render("admin-users-list");
  });  


  router.get("/admincarslist", (req, res) => {
    res.render("admincarslist");
  });  
  router.get("/cars", (req, res) => {
    res.render("cars");
  }); 

  router.get("/cardetails/:id", (req, res) => {
    res.render("cardetails");
  });


  router.get("/billing", (req, res) => {
    res.render("billing");
    Key:PUBLISHABLE_KEY
  });

 router.get("/ride/search", (req, res) => {
    res.render("ride");
  });

  router.get("/bookinglist", (req, res) => {
    res.render("admin-booking-list");
  });

  router.get("/accountinfo", (req, res) => {
    res.render("host-account-info");
  });  

  router.get("/hosthome", (req, res) => {
    res.render("hosthome");
  }); 


  router.get("/bankinfo", (req, res) => {
    res.render("admin-accountinfo-list");
  }); 


  router.get("/forgot-password", (req, res) => {
    res.render("forgotpassword");
  }); 

  router.get("/otp", (req, res) => {
    res.render("otp");
  }); 


  router.get("/reset-password", (req, res) => {
    res.render("resetpassword");
  }); 

  router.get("/admincars", (req, res) => {
    res.render("admincars");
  }); 

  router.get("/zolocars", (req, res) => {
    res.render("zolocars");
  }); 


  router.get("/addnotification", (req, res) => {
    res.render("adminnotify");
  });


  router.get("/notificationlist", (req, res) => {
    res.render("adminnotificationlist");
  });

  router.get("/notificationupdate/:id", (req, res) => {
    res.render("adminupdatenotify");
  });
module.exports = router;