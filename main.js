var advStop = 0;
function showAdv(){
  var advCount = 0;
  if (advCount == 0) {
    $('.adv').fadeIn(900);
    $.getJSON('http://constitution.com.ua/ads.json', function(resp){ 
      var HowManyAdv = resp.Adv.length;
      var i = Math.floor(Math.random()*HowManyAdv);
      var durationAdv = resp.Adv[i].duration;
      $('.adv__title').html(resp.Adv[i].title);
      $('.adv__description').html(resp.Adv[i].description);
      $('.adv--close').on("click", function(){
        $('.adv').fadeOut();
        var advStop = 1;
        //setTimeout(showAdv,4000)
      })
      $('.adv').on("click", function(){
        $('.adv').fadeOut();
        window.open(resp.Adv[i].href);
        var advStop = 1;
        var advCount = 1;
        //setTimeout(showAdv,4000)
      })
      console.log(advStop);
      if (advStop == 0) {
        setTimeout(DurationAdv, durationAdv);
      } else {
        return
      }
    })
    var advCount = 1;
  } 
}

function DurationAdv(){
  $('.adv').fadeOut();
  console.log("Запущено")
  setTimeout(showAdv,800)  
}

setTimeout(showAdv,1000)


