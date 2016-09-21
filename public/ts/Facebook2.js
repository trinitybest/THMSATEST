function CM2() {
    /* make the API call */
    FB.api("/me", function (response) {
        if (response && !response.error) {
            /* handle the result */
            console.log(response);
            console.log(typeof (response));
            $("#listofpost").append('<li><span >' + 'Name: '+response.name + '</span></li>');
            $("#listofpost").append('<li><span >' + 'ID: '+response.id + '</span></li>');
        }
    });
}
