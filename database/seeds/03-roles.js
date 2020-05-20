
exports.seed = function (knex) {
  return knex('roles').insert([
    { role: 'supervisor', title: 'agriculture' },
    { role: 'promoter' },
    { role: 'teacher' },
    { role: 'field manager' },
    { role: 'supervisor', title: 'health' },
    { role: 'field officer' }
  ]);
};
