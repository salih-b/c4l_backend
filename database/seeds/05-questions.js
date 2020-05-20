
exports.seed = function (knex) {
  return knex('questions').insert([
    { question: 's1_q1', survey_id: 1 },
    { question: 's1_q2', survey_id: 1 },
    { question: 's1_q3', survey_id: 1 },
    { question: 's1_q4', survey_id: 1 },
    { question: 's2_q1', survey_id: 2 },
    { question: 's2_q2', survey_id: 2 },
    { question: 's2_q3', survey_id: 2 },
    { question: 's2_q4', survey_id: 2 },
    { question: 's3_q1', survey_id: 3 },
    { question: 's3_q2', survey_id: 3 },
    { question: 's3_q3', survey_id: 3 },
    { question: 's3_q4', survey_id: 3 },
    { question: 's4_q1', survey_id: 4 },
    { question: 's4_q2', survey_id: 4 },
    { question: 's4_q3', survey_id: 4 },
    { question: 's4_q4', survey_id: 4 },
  ]);
};
