function userSignUp(e) {
    e.preventDefault();
    console.log('hi');

    const name = $('#name').val();
    const email = $('#email').val();
    const password = $('#password').val();

    const dataName = {
        Name: "name",
        Value: name
    }

    const dataEmail = {
        Name: "email",
        Value: email
    }

    const attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);
    
    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    
    userPool.signUp(email, password, [attributeName, attributeEmail], null, handleCognitoSignup);
}

$('#signUp-btn').on('click', userSignUp);

function handleCognitoSignup(err, result) {
    if (!err) {
        window.location.href='verify.html';

        console.log('Result:', result);
        console.log('Cognito User :', result.user);
        console.log('Username:', cognitoUser.getUsername());
    } else {
        console.log('Error:', err);
        alert('An error occured', err);
    }
}



