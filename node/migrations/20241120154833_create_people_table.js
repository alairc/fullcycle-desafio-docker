/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  exports.up = async function(knex) {
    const exists = await knex.schema.hasTable('people');
    if (!exists) {
        return knex.schema.createTable('people', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
        });
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('people');
};
