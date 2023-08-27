import Resident from "../../models/resident.model";

async function run() {
  const residents = [
    {
      "firstName": "Liam",
      "lastName": "Smith",
      "dateOfBirth": "1985-05-15",
      "email": "liam.smith@example.com",
      "roomNumber": "101",
      "countryOfBirth": "Australia"
    },
    {
      "firstName": "Olivia",
      "lastName": "Brown",
      "dateOfBirth": "1990-03-21",
      "email": "olivia.brown@example.com",
      "roomNumber": "102",
      "countryOfBirth": "Australia"
    },
    {
      "firstName": "Noah",
      "lastName": "Williams",
      "dateOfBirth": "1988-09-10",
      "email": "noah.williams@example.com",
      "roomNumber": "103",
      "countryOfBirth": "Australia"
    },
    {
      "firstName": "Ava",
      "lastName": "Jones",
      "dateOfBirth": "1995-07-08",
      "email": "ava.jones@example.com",
      "roomNumber": "104",
      "countryOfBirth": "Australia"
    },
    {
      "firstName": "William",
      "lastName": "Wilson",
      "dateOfBirth": "1992-01-25",
      "email": "william.wilson@example.com",
      "roomNumber": "105",
      "countryOfBirth": "Australia"
    }
  ]


  await Resident.deleteMany();
  await Resident.insertMany(residents);

  console.log('Resident seeder completed.');
}

export { run };
