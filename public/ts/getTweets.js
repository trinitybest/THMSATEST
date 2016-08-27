$('#ledon-button').click(function () {
    alert("a");
    $.ajax({
        type: 'POST',
        url: 'http://thmsa.azurewebsites.net:1337/LEDon'
    });
});
function getTweets() {
    console.log("getTweets");
    $.ajax({
        type: 'POST',
        url: 'http://thmsa.azurewebsites.net/LEDon'
    });
}
