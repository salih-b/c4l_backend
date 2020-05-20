const router = require('express').Router();
const Fo = require('../database/db-helpers.js');
// const authenticator = require('../auth/authenticate-middleware.js')


// POST
// add family
router.post("/addFamily", (req, res) => {
    let family = req.body; // family_name, zone_id, community_id, field_officer_id

    Fo.add(family, "families")
      .then(saved => {
        console.log('family has been saved ?? -->',saved);
        res.status(201).json({message: "Family Added!",saved_family: saved});
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: error.message });
      });
  });

// add individual
router.post("/addIndividual", (req, res) => {
    let individual = req.body; // first_name,last_name,family_id, date_of_birth, gender, hoh, relationship_to_hoh, martial_status

    Fo.add(individual, "individuals")
      .then(saved => {
        console.log('individual has been saved ?? -->',saved);
        res.status(201).json({message: "Individual Added !",saved_individual: saved});
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: error.message });
      });
  });

// post add reposnes
router.post("/addResponse", (req, res) => {
    let response = req.body; // reponse, question_id, family_id (not required), individual_id (not required)

    Fo.add(response, "responses")
      .then(saved => {
        console.log('response has been saved ?? -->',saved);
        res.status(201).json({message: "Response Sent!",saved_response: saved});
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: error.message });
      });
  });

// GET
// get all families
// get all familiy members
// get survey for annual family 
router.get("/",(req,res) => {
    weed.weedFind().then(weed => {
        res.status(200).json(weed)
      }).catch(err => {
        res.status(500).json(err.message)
    })
});
// GET THE DATA SET FOR DATA SCIENCE
router.get("/data",(req,res) => {
    weed.findMyWeed().then(weed => {
        res.status(200).json(weed)
      }).catch(err => {
          res.status(500).json(err.message)
      })
});

// GET STRAIN BY ID
router.get("/:id",(req,res) => {
    const {id} =req.params;
    weed.weedFindById(id).then(weed => {
        res.status(200).json(weed)
      }).catch(err => {
        res.status(500).json(err.message)
    })
});



// GET SPECIFIC INFO

// router.get("/weed",(req,res) => {
//     weed.findBy(req.body).then(weed => {
//         res.status(200).json(weed)
//       })
// })

router.use(authenticator);

router.post("/high", async (req, res) => {
    try{
        const weedData = [];
    const search = req.body.search.join('%20');
    const results = await axios.get(`https://cannapi.herokuapp.com/predict?family_input=${search}`)
    
    await results.data[0].map(async strain => {
        try{
       const strainInfo = await weed.weedFindBy(strain)
            weedData.push(strainInfo)
  
            return weedData
        } 
        catch(err){
            res.status(500).json(err)
        } 
        return weedData
    })
        setTimeout(()=>{
            res.status(200).json(weedData)
        },5000)
    }
    catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;