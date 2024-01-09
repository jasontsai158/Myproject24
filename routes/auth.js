const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginvalidation = require("../validation").loginvalidation;
const User = require("../models").userModel;
const jwt = require("jsonwebtoken");
router.use((req, res, next) => {
    console.log("A request is coming in to auth.js");
    next();
});

router.get("/testAPI", (req, res) => {
    const msgObj = {
        message: "Test API is working. ",
    };
    return res.json(msgObj);
});

router.post("/register",async (req, res) => {
    //check the validation of data
    console.log("Register!!!");
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if the user exists
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
    return res.status(400).send("Email has already been registered.");

    // register the user
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
    });
    try {
        const saveUser = await newUser.save();
        res.status(200).send({
            msg: "success",
            savedObject: saveUser,
        });

    }catch (err) {
        res.status(400).send("User not saved.");
    }

});

 //老師的解法
 router.post ("/login", async (req, res) => {
    //確認數據是否符合規範
    let { error } = loginvalidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //確認信箱是否被註冊過
    const foundUser = await User.findOne({email: req.body.email });
    if (!foundUser) {
        return res.status(401).send("can not to find User, please check email address.");
    }
    foundUser.comparePassword(req.body.password, (err, isMatch) => {
        if (err) return res.status(500).send(err);
        if (isMatch) {
            // 製作json web token
            const tokenObject = {_id: foundUser._id, email :foundUser.email};
            //const passportSecret = process.env.PASSPORT_SECRET;
            const token = jwt.sign( tokenObject, process.env.PASSPORT_SECRET);
            return res.send({ message: "成功登入", token: "JWT " + token, user:foundUser
            });
        }else {
            return res.status(401).send("密碼錯誤");
        }
    });
});

module.exports = router;

/* 因為 mongoose 的版本有變動，所以才會出現這個訊息。在新版的 mongoose 中，使用 findOne() 時，已經不接受使用 callback function了的語法了。我們可以改成下列老師的解法：
router.post("/login", (req, res) => {
    // check the validation of data
    const { error } = loginvalidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    User.findOne({email: req.body.email }, function (err, user) {
        if (err) {
            res.status(400).send(err);
        }
        if (!user) {
            res.status(401).send("User not found.");
        }else {
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) return res.status(400).send(err);
                if (isMatch){
                    const tokenObject = {_id: user._id, email: user.email };
                    const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
                    res.send({ sucess: true, token: "JWT" + token, user });
                } else { 
                    res.status(401).send("Wrong password.");
                }
            });
        }
    });
});
 /*/
 