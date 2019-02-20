const token = localStorage.getItem('idToken');

if (!token) {
    window.location.href = 'signin.html'; 
}

const url = 'https://lqss2hi618.execute-api.us-east-2.amazonaws.com/Production';

function fetchProductById() {
    $.ajax({
        url: url ,   
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    .then(onSuccess)
    .catch(function(err) {
        console.log(err)
    });
}

fetchProductById();

function onSuccess (response) {
    console.log(response)
  const item = response.data.Items

  item.forEach((element) => {
      console.log(element.Name)
      $('.products').append( `<div class="col-md-4 mt-2">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">${element.Name}</h5>
                                        <p>${element.Location}</p>
                                        <p>$ ${element["Price/day"]}</p>
                                    </div>
                                </div>
                              </div>`)
  })
}