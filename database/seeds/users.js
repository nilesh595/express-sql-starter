/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "abc",
      last_name: "xyz",
      email: "abc@xyz.com",
    },
    {
      first_name: "def",
      last_name: "ghi",
      email: "def@ghi.com",
    },
  ]);
};
