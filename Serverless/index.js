const {fetchProductsById, fetchProducts} = require('./product');


exports.handler = async (event, context) => {
    const queryParams = event.queryStringParameters;
    console.log(event);

    try {
        
        const data = await fetchProducts();

        console.log(data);
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                data
            }),
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        };

        return response;

    } catch (err) {
        console.log("Error:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: err.message || 'Internal Server Errror',
            })
        }
    }
}

