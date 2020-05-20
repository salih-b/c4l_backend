const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../database/db-helpers.js");
const secrets = require("../api/secrets.js");
// const uuidv4 = require('uuid/v4'); // <== NOW DEPRECATED! calling uuidv4() will generate a unique id 
 


router.post("/workersregisteration", (req, res) => {
  let user = req.body; // username, password, first_name, last_name, role_name, zone_id (not required), community_id 
//   user.id = uuidv4(); // this creates a non integer unique id (very long string)

  const rounds = process.env.HASH_ROUNDS || 10;
  // hash the user.password
  const hash = bcrypt.hashSync(user.password, rounds);
  // update the user to use the hash
  user.password = hash;
console.log("this is user in worker registration after password and id security implemented",user);

  Users.add(user, "workers")
    .then(saved => {
      console.log('user has been saved ?? -->',saved);
      res.status(201).json({message: "registration complete!",saved_user: saved});
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
});

router.post("/workerslogin", (req, res) => {
  let { username, password } = req.body;

  // search for the user using the username
  console.log('in workers login -->', username, password);
  Users.findBy({ username }, "workers")
    .then(([user]) => {
      // when we find the user, then also check that passwords match
      console.log(user)
      if (user){
        if(bcrypt.compareSync(password, user.password)) {
        // produce a token
        const token = generateToken(user);
        // send the token to the client
        res.status(200).json({ message: "Welcome!", token:token });
      } else {
        res.status(401).json({ message: "incorrect credentials!" });
      }
    } else {
      res.status(500).json({ message: "User does not exist :(" });
    }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
});

function generateToken(user) {
  // the data
  const payload = {
    user_id: user.id,
    username: user.username,
  };
  const secret = secrets.jwtSecret;
  const options = {
    expiresIn: "1d",
  };
  

  return jwt.sign(payload, secret, options);
}
module.exports = router;