$('#ledon-button').click(function() {
    alert("a");
    $.ajax({
        type: 'POST',
        url: 'http://thmsa.azurewebsites.net:1337/LEDon'
    });
});

function getTweets() {
    alert("a");
    $.ajax({
        type: 'POST',
        url: 'http://thmsa.azurewebsites.net:1337/LEDon'
    });
}