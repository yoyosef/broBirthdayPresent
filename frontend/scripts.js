const button = document.getElementById("myButton")


button.addEventListener("click", function(){
    const request = new Request('/random', {method: 'GET'});
    fetch(request).then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
    .then(url => {
        console.log(url)
        window.location.href = url.url
    })
    .catch(error => console.log(error))
})