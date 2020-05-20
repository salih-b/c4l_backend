exports.seed = function (knex) {
  return knex('workers').insert([
    { 
      first_name: 'fake', 
      last_name: 'user',
      username: 'fo1',
      password: 'fo1', 
      role_name: 'field manager',
      zone_id: 2,
      community_id: 3 
     },
     { 
      first_name: 'fake', 
      last_name: 'user2',
      username: 's1',
      password: 's1', 
      role_name: 'supervisor',
      community_id: 3 
     },
  ]);
};
