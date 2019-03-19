$(document).ready(function(){
  // var _url="https://my-json-server.typicode.com/doet/pwaapi/products"
  // var dataResults = ""
  // var catResults = ""
  // var categories = []
  // var items
  //
  // function renderPage(data){
  //   $.each(data, function(key, items){
  //     _cat = items.category
  //     dataResults += "<div>"
  //                   +"<h3>"+ items.nama +"</h3>"
  //                   +"<p>"+ _cat +"</p>"
  //                 +"</div>";
  //     if($.inArray(_cat,categories)==-1){
  //       categories.push(_cat)
  //       catResults+="<option value'"+ _cat +"'>"+ _cat+"</options>"
  //     }
  //   })
  //   $('#products').html(dataResults)
  //   $('#cat_select').html("<options value='all'>semua</option>"+catResults)
  // }
  //
  // var networkDataRecived = false
  //
  // var networkUpdate = fetch(_url).then(function(response){
  //   return response.json()
  // }).then(function(data){
  //   networkDataRecived = true
  //   renderPage(data)
  // })
  // caches.match(_url).then(function(response){
  //   if(!response) throw Error('no datra no cache')
  //   return response.json()
  // }).then(function(data){
  //   if(!networkDataRecived){
  //     renderPage(data)
  //     console.log('data render')
  //   }
  // }).catch(function(){
  //   return networkUpdate
  // })
  //
  // //fungsi filter
  // $('#cat_select').on('change',function(){
  //   updateProduct($(this).val())
  // })
  //
  // function updateProduct(cat){
  //   var dataResults = ""
  //   var _newUrl = _url
  //   if (cat!='all')
  //   _newUrl = _url +"?category="+cat
  //
  //   $.get(_newUrl, function(data){
  //     $.each(data, function(key, items){
  //       _cat = items.category
  //       dataResults += "<div>"
  //                     +"<h3>"+ items.nama +"</h3>"
  //                     +"<p>"+ _cat +"</p>"
  //                   +"</div>";
  //     })
  //     $('#products').html(dataResults)
  //   })
  // }
})

//pwa
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
      // Registration was successful
      // console.log('ServiceWorker registration successful with scope: ', registration.scope);
    // }).catch(function(err) {
      // registration failed :(
      // console.log('ServiceWorker registration failed: ', err);
    // });
  });
}
