$(function() {
    $.ajax({
    url: "https://reqres.in/api/users?page=2",
   method: "GET",
    dataType: "json",
    success: function(data) {
        var str = "" ;
       for(var i= 0; i < data.data.length; i++){
        str +=' First Name :'+data.data[i].first_name+'<br>Last Name'+data.data[i].last_name+'<br>' +data.data[i].email+'<br><br>'; 
       }
      $("body").html(str);
    }
    });
});