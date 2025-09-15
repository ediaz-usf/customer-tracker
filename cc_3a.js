// Define an array of customers
let customers = [
    {
        custName: "John",
        email: "john@example.com",
        purchases:[
            "laptop",
            "smartphone",
            "headphones"
        ]
    },
    {
        custName: "Jane",
        email: "jane@example.com",
        purchases:[
            "tablet",
            "smartwatch"
        ]
    },
    {
        custName: "Kevin",
        email: "kevin@example.com",
        purchases:[
            "speaker",
            "charger"
        ]
    }
]

// Add customer to the array
customers.push({
    custName: "Alice",
    email: "alice@example.com",
    purchases:[
        "tablet",
        "smartwatch"
    ]
});

// Remove first customer from the array
customers.shift();

// Update customer info
customers[0].email = "janey123@example.com"

// Add a new purchase to a customer
customers[2].purchases.push("smartwatch band");

// Display customer information
customers.forEach(customer => console.log(`${customer.custName}\t|\t${customer.email}\t|\t${customer.purchases.length}`));

