$('#ledon-button').click(function () {
    alert("a");
    $.ajax({
        type: 'POST',
        url: 'http://thmsa.azurewebsites.net/LEDon'
    });
});
function getTweets() {
    console.log("getTweets");
    $.ajax({
        type: 'GET',
        url: 'http://thmsa.azurewebsites.net/LEDon'
    });
}
function postTweets() {
    console.log("getTweets");
    $.ajax({
        type: 'POST',
        url: 'http://thmsa.azurewebsites.net/LEDon'
    });
}
