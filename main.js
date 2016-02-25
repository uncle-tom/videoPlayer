var advStop = 0;
function showAdv(){
  var advCount = 0;
  $('.adv--close').on("click", function(){
        $('.adv').fadeOut();
        advStop = 1;
        return advStop;
      })
  if (advCount == 0) {
    $('.adv').fadeIn(900);
    $.getJSON('http://constitution.com.ua/ads.json', function(resp){ 
      var HowManyAdv = resp.Adv.length;
      var i = Math.floor(Math.random()*HowManyAdv);
      var durationAdv = resp.Adv[i].duration;
      $('.adv__title').html(resp.Adv[i].title);
      $('.adv__description').html(resp.Adv[i].description);
      
      $('.adv').on("click", function(){
        $('.adv').fadeOut();
        window.open(resp.Adv[i].href);
        advStop = 1;
      })
      console.log(advStop);
        setTimeout(DurationAdv, durationAdv);
    })
    advCount = 1;
  } 
}

function DurationAdv(){
  if(advStop == 0) {
    $('.adv').fadeOut();
    console.log("Запущено")
    setTimeout(showAdv,800)  
  }
}

setTimeout(showAdv,1000)


