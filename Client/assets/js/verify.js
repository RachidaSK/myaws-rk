function userSignUp(e) {
    e.preventDefault();
    console.log('hi');

    const code = $('#code').val();
    const email = $('#email').val();

    const dataUser= {
       Username: email,
        Pool: userPool
    }

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(dataUser);

    cognitoUser.confirmRegistration(code, true, handleConfirmRegistration);

}

$('#verify-btn').on('click', userSignUp);

function handleConfirmRegistration (err,result) {
    if(!err) {
        window.location.href= 'profile.html';
        alert('Success')
    } else {
        console.log('Error:', err);
        alert('Failure to validate code');
    }
}