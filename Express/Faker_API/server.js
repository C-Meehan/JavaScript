const {faker} = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

const createUser = () =>{
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        _id: faker.database.mongodbObjectId()
    }
    return newUser;
};

const createCompany = () =>{
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.name.jobType(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany())
});

app.get("/api/user/companies", (req, res) => {
    res.json({user: createUser(), company: createCompany()})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );