function showAdv(){
  advCount = 0;
  HowManyAdv = json.Adv.length;
  if (advCount == 0) {
    $('.adv').fadeIn(900);
    var i = Math.floor(Math.random()*HowManyAdv);
    $.getJSON('http://constitution.com.ua/ads.json', function(resp){ 
      $('.adv__title').html(resp.Adv[i].title);
    })
    //$('.adv__title').html(json.Adv[i].title);
    advCount = 1;
  } 
}

setTimeout(showAdv,1000)

$('.adv__close').on("click", function(){
  $('.adv').fadeOut();
  setTimeout(showAdv,4000)
})

var json = {
  "Adv":[{
      "title":"Yandex.ru",
      "description":"Description First Post",
      "href": "http://www.ya.ru"
      },
    {
      "title":"Google.com",
      "description":"Description Second Post",
      "href": "http://www.google.com"
      }]
};
