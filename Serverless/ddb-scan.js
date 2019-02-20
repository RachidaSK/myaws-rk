const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-2"
});

const ddb = new AWS.DynamoDB.DocumentClient({
    region: "us-east-2"
});

const params = {
    TableName: "ProductsForRent",
}

async function fetchProducts () {
   return new Promise((resolve, reject) => {
    ddb.scan(params, function (err, data) {
        if (err) {
            reject(err)
            console.log(err);
        } else {
            resolve(data)
            console.log(data)
        }
   })
   
})
}

fetchProducts();

// const AWS = require ("aws-sdk");

// AWS.config.update({
//     region: "us-east-2"
// });

// const docClient = new AWS.DynamoDB.DocumentClient({
//     region: "us-east-2"
// });

// async function fetchProducts() {
//     const params = {
//         TableName: "ProductsForRent",
//     };

//     return new Promise((resolve, reject) => {
//         docClient.scan(params, function(err, data) {
//             if(err) {
//                 reject(err);
//             }
//             resolve(data);
//         });
//     });
// }

// fetchProducts();