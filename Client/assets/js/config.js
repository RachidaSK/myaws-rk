// Set up Amazon Cognito Pool Data
const poolData = {
    UserPoolId: 'us-east-2_kQP6qDQAD',
    ClientId: '25moacfn0vo7k5ba2uokg0l1dh'
};

// Initialize Amazon Cognito Identity
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);