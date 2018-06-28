

var apiKey = "cec4d1e8e9564722a3ca97278d4ce5b3";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?api-key=" + apiKey;

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    
}).catch(function() {
    alert("catch error");
});


