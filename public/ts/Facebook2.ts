function CM2(): void{
  /* make the API call */
  FB.api(
      "/me",
      function (response) {
        if (response && !response.error) {
          /* handle the result */
          console.log(response);
          console.log(typeof(response))
          

              
              $("#listofpost").append('<li><span >'+response.name+'</span></li>');
              $("#listofpost").append('<li><span >'+response.id+'</span></li>');

        }
      }
  );

}