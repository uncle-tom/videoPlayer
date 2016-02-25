function showAdv(){
  advCount = 0;
  if (advCount == 0) {
    $('.adv').fadeIn(900);
    $.getJSON('http://constitution.com.ua/ads.json', function(resp){ 
      HowManyAdv = resp.Adv.length;
      var i = Math.floor(Math.random()*HowManyAdv);
      $('.adv__title').html(resp.Adv[i].title);
      $('.adv__description').html(resp.Adv[i].description);
      $('.adv--close').on("click", function(){
        $('.adv').fadeOut();
        setTimeout(showAdv,4000)
      })
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


