// const router = require('express').Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const Users = require("../data/db-helpers.js");
// const secrets = require("../api/secrets.js");
// // const shortid = require('shortid');
// const uuidv4 = require('uuid/v4'); // <== NOW DEPRECATED! calling uuidv4() will generate a unique id 
 


// router.post("/register", (req, res) => {
//   let user = req.body; // username, password
//   // user.id = shortid.generate();
//   user.id = uuidv4();

//   // rounds are 2 to the N times
//   const rounds = process.env.HASH_ROUNDS || 14;

//   // hash the user.password
//   const hash = bcrypt.hashSync(user.password, rounds);

//   // update the user to use the hash
//   user.password = hash;
// console.log("***********************",user);
// console.log('in register -->', user.password);

//   Users.add(user)
//     .then(saved => {
//       console.log("am i not here",saved);
//       res.status(201).json({message: "registration complete!",savedUser: saved});
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({ errorMessage: error.message });
//     });
// });

// router.post("/login", (req, res) => {
//   let { username, password } = req.body;

//   // search for the user using the username
//   console.log('in /login -->', username, password);
//   Users.findBy({ username })
//     .then(([user]) => {
//       // if we find the user, then also check that passwords match
//       console.log(user)
//       if (user){
//         if(bcrypt.compareSync(password, user.password)) {
//         // produce a token
//         const token = generateToken(user);

//         // send the token to the client
//         res.status(200).json({ message: "Welcome!", token:token });
//       } else {
//         res.status(401).json({ message: "incorrect credentials!" });
//       }
//     } else {
//       res.status(500).json({ message: "User does not exist :(" });
//     }
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({ errorMessage: error.message });
//     });
// });

// function generateToken(user) {
//   // the data
//   const payload = {
//     userId: user.id,
//     username: user.username,
//   };
//   const secret = secrets.jwtSecret;
//   const options = {
//     expiresIn: "1d",
//   };
  

//   return jwt.sign(payload, secret, options);
// }
// module.exports = router;