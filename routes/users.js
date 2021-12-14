const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config/database");
const bcrypt = require("bcryptjs");

// back - end

//***********************호범 */
router.get("/findalluser", (req, res, next) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

//***********************정식 */
router.post("/register", (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.getUserByName(newUser.name, (err, user) => {
    // err,user은 임의로 사용하는 것 그냥 username이 있으면 user, 없으면 err 로 생각하면 편하다.
    if (err) throw err;
    if (user) {
      return res.json({ success: false, msg: "이미 같은 이름이 존재합니다." });
    } else {
      User.addUser(newUser, (err, user) => {
        if (err) {
          res.json({ success: false, msg: "등록 실패" });
        } else {
          res.json({ success: true, msg: "등록 성공" });
        }
      });
    }
  });
});

router.post("/authenticate", (req, res, next) => {
  const name = req.body.name;
  const password = req.body.password;
  User.getUserByName(name, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "사용자가 없음" });
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        let tokenUser = {
          _id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          point: user.point,
        };
        const token = jwt.sign({ data: tokenUser }, config.secret, {
          expiresIn: 604800,
        });
        res.json({
          success: true,
          token: token,
          user: tokenUser,
        });
      } else {
        return res.json({ success: false, msg: "실패" });
      }
    });
  });
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      user: {
        name: req.user.name,
        username: req.user.username,
        email: req.user.email,
        point: req.user.point,
      },
    });
  }
);

router.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      admin: {
        name: req.user.name,
        username: req.user.username,
        email: req.user.email,
        point: req.user.point,
      },
    });
  }
);

router.post("/point", (req, res, next) => {
  let userData = {
    name: req.body.name,
    point: req.body.point,
  };
  User.point(userData, (err, ok) => {
    if (err) throw err;
    if (ok) {
      res.json({
        msg: "point 적립 성공",
      });
    }
  });
});

router.post("/getpoint", (req, res, next) => {
  const name = req.body.name;
  User.getUserByName(name, (err, user) => {
    if (err) throw err;
    if (user) {
      res.json(user);
    }
  });
});

router.post("/delete", (req, res, next) => {
  User.deleteUser(req.body._id, (err, ok) => {
    if (err) throw err;
    if (ok) {
      res.json({
        msg: req.body.name + "님의 아이디 삭제가 완료되었습니다.",
      });
    }
  });
});

// **********************************용호********************************

router.post("/ChangePW", (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    password: req.body.password,
  });

  bcrypt.genSalt(10, function (err, salt) {
    if (err) throw err;

    bcrypt.hash(newUser.password, salt, function (err, hash) {
      if (err) throw err;
      newUser.password = hash;
      console.log(hash);
      console.log(newUser.password);

      User.updateOne(
        { name: newUser.name },
        { $set: { password: newUser.password } },
        (err) => {
          if (err) {
            console.log("Change password 실패");
            console.error(err);
          }
          console.log("Change password 성공");
        }
      );
    });
  });
});

router.post("/registertoken", (req, res, next) => {

    
  const token = req.body.token;

  User.savetoken(req.body.username, token, (err, cert) => {
      if (err) throw err;
      if (cert) {
      return res.json({
      success: true,
      cert: token,
      });
      } else {
      return res.json({
      success: false,
      msg: "Certificate issuing failed...",
      });
      }
      });
})

router.post('/authenticatetoken',(req,res,next)=>{
  const token = req.body.token;
  User.getUserBytoken(token,(err,user)=>{
      if(err) throw err;
      if(!user){
          return res.json({success:false, msg:'사용자가 없음'});
      }
      let tokenUser={
          _id:user._id,
          name:user.name,
          username:user.username,
          email:user.email,
          point:user.point,
      }
      const token = jwt.sign({data:tokenUser},config.secret,{expiresIn:604800});
      res.json({
          success:true,
          token:token,
          userNoPW:tokenUser
      });
  })
})

module.exports = router;
