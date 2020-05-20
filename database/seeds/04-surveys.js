

exports.seed = function (knex) {
  return knex('surveys').insert([
    { survey_name: 'survey1' },
    { survey_name: 'survey2' },
    { survey_name: 'survey3' },
    { survey_name: 'survey4' }
  ]);
};
