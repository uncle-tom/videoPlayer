function showAdv(){
  advCount = 0;
  HowManyAdv = json.Adv.length;
  if (advCount == 0) {
    $('.adv').fadeIn(900);
    var i = Math.floor(Math.random()*HowManyAdv);
    $.getJSON('http://constitution.com.ua/ads.json', function(resp){ 
      $('.adv__title').html(resp.Adv[i].title);
      $('.adv__description').html(resp.Adv[i].description);
      $('.adv').on("click", function(){
        $('.adv').fadeOut();
        window.open(resp.Adv[i].href);
        setTimeout(showAdv,4000)
  })
    })
    advCount = 1;
  } 
}

setTimeout(showAdv,1000)

$('.adv__close').on("click", function(){
  $('.adv').fadeOut();
  setTimeout(showAdv,4000)
})
