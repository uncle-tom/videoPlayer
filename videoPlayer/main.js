var advStop = 0;

var advClose = function(){
  $('.adv').fadeOut();
  $('.adv--close').fadeOut();
}

function showAdv(){
  $('.adv--close').on("click", function(){
    advClose();
    advStop = 1;
  })
  var advCount = 0;
  if (advCount == 0) {
    $('.adv').fadeIn(900);
    $('.adv--close').fadeIn(900);
    $.getJSON('http://constitution.com.ua/ads.json', function(resp){ 
      var HowManyAdv = resp.Adv.length;
      var i = Math.floor(Math.random()*HowManyAdv);
      var durationAdv = resp.Adv[i].duration;
      $('.adv__main--title').html(resp.Adv[i].title);
      $('.adv__main--description').html(resp.Adv[i].description);
      $('.adv').on("click", function(){
        $('.adv').fadeOut();
        window.open(resp.Adv[i].href);
        advStop = 1;
      })
      setTimeout(DurationAdv, durationAdv);
    })
    advCount = 1;
  } 
}

function DurationAdv(){
  if(advStop == 0) {
    advClose();
    setTimeout(showAdv,800)  
  }
}

setTimeout(showAdv,1000)


