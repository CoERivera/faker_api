const express = require("express");
const app = express();
const port = 8000;

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

// req is shorthand for request
// res is shorthand for response
app.get("/api/user/company", (req, res) => {
    const userCompany = {
        user: createUser(),
        company: createCompany()
    }
    res.json(userCompany);
});

// req is shorthand for request
// res is shorthand for response
app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));

// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        productName: faker.commerce.productName(),
        productPrice: "$" + faker.commerce.price(),
        productDepartment: faker.commerce.department()
    };
    return newFake;
};

const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

// we can create a function to return a random / fake "User"
const createUser = () => {
    const newFake = {
        userFirstName: faker.name.firstName(),
        userLastName: faker.name.lastName(),
        userJobTitle: faker.name.jobTitle()
    };
    return newFake;
};

const newFakeUser = createUser();
console.log(newFakeUser);

// The output of the above console log will look like this
// {
//     firstName: 'Caleb',
//     lastName: 'Wiza',
//     jobTitle: 'International Implementation Agent'
// }

// we can create a function to return a random / fake "Company"
const createCompany = () => {
    const newFake = {
        companyName: faker.company.name(),
        companySuffix: faker.company.companySuffix(),
        companyCatchPhrase: faker.company.catchPhrase()
    };
    return newFake;
};

const newFakeCompany = createCompany();
console.log(newFakeCompany);

// The output of the above console log will look like this
// {
//     name: 'Padberg, Grimes and Blanda',
//     suffix: 'Inc',
//     catchPhrase: 'Switchable bandwidth-monitored initiative'
// }