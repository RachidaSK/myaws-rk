function userSignIn(e) {
    e.preventDefault();

    const email = $('#email').val();
    const password = $('#password').val();

    const dataUser = {
        Username: email,
        Pool: userPool
    }

    const dataAuthentication = {
        Username: email,
        Password: password
    }


    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(dataUser);

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(dataAuthentication);

    cognitoUser.authenticateUser(authenticationDetails, {onSuccess, onFailure, mfaRequired});

}

$('#signIn-btn').on('click', userSignIn);

function onSuccess(result) {
    console.log('Result:', result);
    window.location.href= 'profile.html';

    if (result.idToken.jwtToken) {
        localStorage.setItem('idToken', result.idToken.jwtToken);
    }
}

function onFailure(err) {
    console.log('Error: ', err);
    alert('Error: ', err);
}

function mfaRequired() {
    const verificationCode = prompt('Please input verification code', '');
    cognitoUser.sendMFACode(verificationCode, this);
}