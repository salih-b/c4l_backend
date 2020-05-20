const db = require("./db-configs.js");

module.exports = {
  add,
  findBy

};

// we are passing in the filter and the table name (string) where we want to findby in
function findBy(filter, table) {
  console.log('in findby helper');
  return db(table).where(filter);
}

// passing in the id and table name (string) where the id will reside
function findById(id, table) {
    console.log("in findbyid helper",id)
    return db(table).where({ id }).first();
  }

  // taking whatever is being added and table name (string), which is the table you want to add to 
async function add(body, table) {
  console.log('in add helper');
  const [id] = await db(table).insert(body, 'id');
  console.log('user and id in add helper-->', body,id)
  return findById(body.id, table);
}

