// const router = require("express").Router();
// const bcrypt = require("bcryptjs");

// const Users = require("../users/users-model.js");

// router.post("/register", (req, res) => {
//   let user = req.body; // username, password

//   // rounds are 2 to the N times
//   const rounds = process.env.HASH_ROUNDS || 14;

//   // hash the user.password
//   const hash = bcrypt.hashSync(user.password, rounds);

//   // update the user to use the hash
//   user.password = hash;

//   Users.add(user)
//     .then(saved => {
//       res.status(201).json(saved);
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({ errorMessage: error.message });
//     });
// });

// router.post("/login", (req, res) => {
//   let { username, password } = req.body;

//   // search for the user using the username
//   Users.findBy({ username })
//     .then(([user]) => {
//       // if we find the user, then also check that passwords match
//       if (user && bcrypt.compareSync(password, user.password)) {
//         req.session.loggedIn = true;
//         res.status(200).json({ message: "Welcome!" });
//       } else {
//         res.status(401).json({ message: "You cannot pass!" });
//       }
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({ errorMessage: error.message });
//     });
// });

// router.get("/logout", (req, res) => {
//   if (req.session) {
//     req.session.destroy(error => {
//       if (error) {
//         res.status(500).json({
//           errorMessage:
//             "you can checkout any time you like by you can never leave.....",
//         });
//       } else {
//         res.status(204).end();
//       }
//     });
//   } else {
//     res.status(204).end();
//   }
// });

// module.exports = router;
