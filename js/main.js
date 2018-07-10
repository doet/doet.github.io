$(document).ready(function(){
  var _url="https://my-json-server.typicode.com/doet/pwaapi/products"
  var dataResults = ""
  var catResults = ""
  var categories = []

  $.get(_url, function(data){
    $.each(data, function(key, item){
      dataResults += "<div>"
                    +"<h3>"+ items.name +"</h3>"
                    +"<p>"+ items.name +"</p>"
                  +"</div>";
    })

    $('#products').html(dataResults)
  })
})
