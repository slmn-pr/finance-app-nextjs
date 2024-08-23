import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";

dotenv.config({
  path: ".env.local",
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

const categories = [
  "Housing",
  "Transport",
  "Health",
  "Food",
  "Education",
  "Other",
];
const types = ["Income", "Expense", "Investment", "Saving"];

const seedUsers = async () => {
  for (let i = 0; i < 5; i++) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: faker.internet.email(),
        password: "password",
      });

      if (error) throw new Error(error);
    } catch (error) {
      console.error("Error adding user", error);
    }
  }
};

async function seed() {
  let transactions = [];
  await seedUsers();

  const {
    data: { users },
    error: listUsersError,
  } = await supabase.auth.admin.listUsers();

  if (listUsersError) {
    console.error("Cannot list users");
    return;
  }

  const userIds = users.map((user) => user.id);

  for (let i = 0; i < 100; i++) {
    const created_at = faker.date.past();

    const user_id = faker.helpers.arrayElement(userIds);

    let category = faker.helpers.arrayElement(categories);
    let type = faker.helpers.arrayElement(types);
    let amount;
    switch (type) {
      case "Income":
        amount = faker.number.int({ min: 2000, max: 9000 });
        break;
      case "Expense":
        amount = faker.number.int({ min: 10, max: 1000 });
        break;

      case "Investment":
        amount = faker.number.int({ min: 2000, max: 9000 });
        break;

      case "Saving":
        amount = faker.number.int({ min: 3000, max: 10000 });
        break;
    }

    transactions.push({
      created_at,
      amount,
      type,
      description: faker.lorem.sentence(),
      category,
      user_id,
    });
  }

  const { error } = await supabase.from("transactions").insert(transactions);

  if (error) {
    console.error("Error inserting data", error);
  } else {
    console.log(`${transactions.length} transactions stored`);
  }
}

seed().catch((error) => console.error(error));
