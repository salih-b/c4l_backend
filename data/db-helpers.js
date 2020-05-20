// const db = require("./db-configs.js");

// module.exports = {
//   add,
//   find,
//   findBy,
//   findById,
//   weedFind,
//   weedFindBy,
//   weedFindById,
//   findMyWeed,
//   addAllTheWeed,
//   getUserInfo,
//   insertUserInfo, 
//   getUserInfoById,
//   updateUserInfo,
// };
// //////////////////////// Users
// function find() {
//   console.log('in find helper');
//   return db("users").select("id", "username", "password");
// }

// function findBy(filter) {
//   console.log('in findby helper');
//   return db("users").where(filter);
// }

// async function add(user) {
//   console.log('in add helper');
//   const [id] = await db("users").insert(user, 'id');
//   console.log('swear to god ima cut you', user,id)
//   return findById(user.id);
// }

// function findById(id) {
//   console.log("findbyid console damn log",id)
//   return db("users").where({ id }).first();
// }
//  //////////////////////////// Weed
// function weedFind(){

//   console.log('in weedFind my weed')
//   return db('weed');
// }

// function weedFindBy(filter) {
//   console.log('in weedFindby helper');
//   return db("weed").where("Strain",filter).first();
// }


// function weedFindById(id) {
//   console.log("weedFindbyid console damn log",id)
//   return db("weed").where({ id }).first();
// }

// function findMyWeed(){

//   console.log('in weedFind my weed')
//   return db('weed').select("id", "Strain", "Description");
// }


// function addAllTheWeed(weed){
//  return weed.map( strain => {

//    return db('weed').insert(strain).then( dogshit => {
//      return dogshit
//    })
// })
// }

// ////////////////////////////// User Info 
// function getUserInfo(){
// // GET
// return db('user_info')
//   .join('users', 'user_info.users_id', 'users.id')
//   .select('users.username', 'users.id', 'user_info.age', 'user_info.email', 'user_info.height', 'user_info.weight')
// }

// async function insertUserInfo(info){
// // info must include age, users_id, email
//   // POST
//  await db('user_info').insert(info)
// return getUserInfoById(info.users_id);
// }

// function getUserInfoById(id){
//   return db('user_info').where('users_id',id);
// }


//   async function updateUserInfo(theUpdate, theId) {
//     //PUT
//     await db('user_info')
//       .where({ users_id: theId })
//       .update(theUpdate);
//     console.log('in update user info', theId, theUpdate);
//     return getUserInfoById(theId);
//   }