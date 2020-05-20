
exports.seed = function (knex) {
  return knex('communities').insert([
    { community: 'community_1' },
    { community: 'community_2' },
    { community: 'community_3' }
  ]);
};
