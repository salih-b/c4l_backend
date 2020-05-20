exports.up = function (knex) {
    return knex.schema
        .createTable('communities', tbl => {
            tbl.increments();
            tbl.string('community', 60).notNullable();
        })
        .createTable('surveys', tbl => {
            tbl.increments();
            tbl.string('survey_name', 60).notNullable();
        })
        .createTable('zones', tbl => {
            tbl.increments();
            tbl.string('zone_letter', 2).notNullable();
            tbl.integer('community_id')
                .unsigned()
                .notNullable()
                .references('communities.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.unique(['zone_letter', 'community_id'])
        })
        .createTable('roles', tbl => {
            tbl.increments();
            tbl.string('role_name', 50).notNullable();
            tbl.string('title', 50).unique();
            tbl.unique(['role_name', 'title']);
        })
        .createTable('workers', tbl => {
            tbl.increments();
            tbl.string('first_name', 50).notNullable();
            tbl.string('last_name', 50).notNullable();
            tbl.string('username', 50).notNullable().unique();
            tbl.string('password', 50).notNullable();
            tbl.string('role_name')
                .notNullable()
                .references('roles.role_name')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('zone_id')
                .unsigned()
                // .notNullable() supervisors are not assigned to zone
                .references('zones.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('community_id')
                .unsigned()
                .notNullable()
                .references('communities.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            // created at timestamp
            tbl.timestamp("created at").defaultTo(knex.fn.now());
        })
        .createTable('families', tbl => {
            tbl.increments();
            tbl.string('family_name', 50).notNullable();
            tbl.integer('zone_id')
                .unsigned()
                .notNullable()
                .references('zones.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('community_id')
                .unsigned()
                .notNullable()
                .references('communities.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('field_officer_id')
                .unsigned()
                .notNullable()
                .references('workers.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            // created at timestamp
            tbl.timestamp("created at").defaultTo(knex.fn.now());
        })
        .createTable('individuals', tbl => {
            tbl.increments();
            tbl.string('first_name', 50).notNullable();
            tbl.string('last_name', 50).notNullable();
            tbl.integer('family_id')
                .unsigned()
                .notNullable()
                .references('families.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            // should this be notNullable 
            tbl.date('date_of_birth');
            tbl.string('gender').notNullable();
            tbl.boolean('hoh').notNullable();
            tbl.string('relation_to_hoh').notNullable();
            tbl.string('marital_status').notNullable();
            // created at timestamp
            tbl.timestamp("created at").defaultTo(knex.fn.now());
        })
        
        .createTable('questions', tbl => {
            tbl.increments();
            tbl.text('question', 200).notNullable();
            tbl.integer('survey_id')
                .unsigned()
                .notNullable()
                .references('surveys.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('responses', tbl => {
            tbl.increments();
            tbl.string('response').notNullable();
            tbl.integer('question_id')
                .unsigned()
                .notNullable()
                .references('questions.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('family_id')
                .unsigned()
                // .notNullable() sometimes a question will be solely individual based
                .references('families.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('individual_id')
                .unsigned()
                .references('individuals.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('survey_role', tbl => {
            tbl.integer('survey_id')
                .unsigned()
                .notNullable()
                .references('surveys.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('role_id')
                .unsigned()
                .notNullable()
                .references('roles.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.unique(['survey_id', 'role_id'])
        })
        // ********
        .createTable('completed_surveys', tbl => {
            tbl.increments();
            tbl.integer('survey_id')
                .unsigned()
                .notNullable()
                .references('surveys.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('worker_id')
                .unsigned()
                .notNullable()
                .references('workers.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('family_id')
                .unsigned()
                // .notNullable()
                .references('families.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('individual_id')
                .unsigned()
                .references('individuals.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            // completed at timestamp
            tbl.timestamp("completed at").defaultTo(knex.fn.now());
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('completed_surveys')
        .dropTableIfExists('survey_role')
        .dropTableIfExists('responses')
        .dropTableIfExists('questions')
        .dropTableIfExists('individuals')
        .dropTableIfExists('families')
        .dropTableIfExists('workers')
        .dropTableIfExists('roles')
        .dropTableIfExists('zones')
        .dropTableIfExists('surveys')
        .dropTableIfExists('communities')
};