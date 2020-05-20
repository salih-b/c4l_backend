
exports.seed = function (knex) {
  return knex('zones').insert([
    { zone_letter: 'A', community_id: 1 },
    { zone_letter: 'B', community_id: 1 },
    { zone_letter: 'C', community_id: 1 },
    { zone_letter: 'D', community_id: 1 },
    { zone_letter: 'A', community_id: 2 },
    { zone_letter: 'B', community_id: 2 },
    { zone_letter: 'C', community_id: 2 },
    { zone_letter: 'D', community_id: 2 },
    { zone_letter: 'A', community_id: 3 },
    { zone_letter: 'B', community_id: 3 },
    { zone_letter: 'C', community_id: 3 },
    { zone_letter: 'D', community_id: 3 },
  ]);
};
