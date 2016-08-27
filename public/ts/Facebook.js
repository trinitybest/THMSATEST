(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7&appId=1634299143567446";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function shareFB() {
    FB.ui({
        method: 'share',
        display: 'popup',
        href: 'http://thmsa.azurewebsites.net/',
    }, function (response) { });
}
;
function CM() {
    /* make the API call */
    FB.api("/me/feed", function (response) {
        if (response && !response.error) {
            /* handle the result */
            console.log(response);
            console.log(typeof (response));
            for (var i = 0; i < 5; i = i + 1) {
                $("#listofpost").append('<li><span >' + response.data[i].created_time + ' ' + response.data[i].story + '</span></li>');
            }
        }
    });
}
function checkLoginState() {
    console.log("checkLonginState");
}
;
