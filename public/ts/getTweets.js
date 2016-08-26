$('#ledon-button').click(function () {
    $.ajax({
        type: 'POST',
        url: 'http://thmsa.azurewebsites.net:1337/LEDon'
    });
});
