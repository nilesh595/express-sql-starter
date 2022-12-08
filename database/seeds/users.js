/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "Nilesh",
      last_name: "Kalange",
      email: "abc@xyz",
    },
    {
      first_name: "Ganesh",
      last_name: "Kalange",
      email: "def@xyz",
    },
  ]);
};
