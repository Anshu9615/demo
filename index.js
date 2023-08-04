// filename: lambda_function.js
exports.handler = async (event, context) => {
    const message = "Hello from your Lambda function , lets do an update!";
    console.log(message);
    return {
        statusCode: 200,
        body: JSON.stringify(message)
    };
};
