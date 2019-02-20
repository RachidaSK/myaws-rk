const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-2"
});

const docClient = new AWS.DynamoDB.DocumentClient({
    region: "us-east-2"
});

const params = {
    TableName: "ProductsForRent",
}

async function fetchProducts() {
    return new Promise((resolve, reject) => {
       docClient.scan(params, function (err, data) {
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

async function fetchProductsById(id) {
    const params = generateParamsById(id);
    return new Promise((resolve, reject) => {
        docClient.query(params, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}


function generateParamsById(id) {
    const TableName = "ProductsForRent";
    const params = {
        TableName,
        KeyConditionExpression: "#id = :i",
        ExpressionAttributeNames: {
            "#id": "Id"
        },
        ExpressionAttributeValues: {
            ':i': parseFloat(id)
        }
    }
    return params;
}

module.exports = {
    generateParamsById,
    fetchProductsById,
    fetchProducts
}