function showAdv(){
	advCount = 0;
	if (advCount == 0) {
		$('.adv').fadeIn(900);
		var i = Math.floor(Math.random()*2)
		$('.adv__title').html(json.Adv[i].title);
		advCount = 1;
	} 
}

setTimeout(showAdv,1000)

$('.adv__close').on("click", function(){
	$('.adv').fadeOut();
	setTimeout(showAdv,5000)
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

$('.adv__title').html(json.Adv[0].title)