$('#ledon-button').click(function () {
    alert("a");
    $.ajax({
        type: 'POST',
        url: 'http://thmsa.azurewebsites.net/LEDon'
    });
});
