$(document).ready(function(){
	

	var newsUrl = 'https://json-data.herokuapp.com/restaurant/news/1';
	$.ajax({
		url:newsUrl,
		method: 'get',
		dataType: 'json',
	}).then(function(news){
		
		var newsGet = {
			news:news
		};



		var newsTemplate = $("#newsTemplate").text();
		var newsHTML = Mustache.render(newsTemplate,newsGet);
		$("#newsContainer").html(newsHTML);
		console.log(newsGet);


});


	var menuUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';
	$.ajax({
		url:menuUrl,
		method: 'get',
		dataType: 'json',
	}).then(function(menu){
		
		var beer=menu.Beer.map(function(obj){
			return {
				"id": obj.id,
				"item": obj.item,
				"price":obj.price,
				"style": obj.style,
				"abv": obj.abv,
				"description": obj.description,
				"allergies": obj.allergies,
				"favorite": obj.favorite,
				"bottle": obj.bottle,
				"draught": obj.draught,
			};

		});
	

		var beerGet = {
			beer:beer
		};

		var beerTemplate = $("#beerTemplate").text();
		var beerHTML = Mustache.render(beerTemplate,beerGet);
		$("#beerContainer").html(beerHTML);
		



			var entree=menu.entrees.map(function(obj){
				return {
					"id": obj.id,
					"item": obj.item,
					"price":obj.price,
					"description": obj.description,
					"allergies": obj.allergies,
					"favorite": obj.favorite,
					"spicy": obj.spicy,
					"vegan": obj.vegan,
					};
					
				});

		var entreeGet = {
			entree:entree
		};

		var entreeTemplate = $("#entreeTemplate").text();
		var entreeHTML = Mustache.render(entreeTemplate,entreeGet);
		$("#entreeContainer").html(entreeHTML);


		

	});

	var specialUrl = 'https://json-data.herokuapp.com/restaurant/special/1';
	$.ajax({
		url:specialUrl,
		method: 'get',
		dataType: 'json',
	}).then(function(special){
		
		var specialGet= {special:special};



	var specialTemplate = $("#specialTemplate").text();
		var specialHTML = Mustache.render(specialTemplate,specialGet);
		$("#lastMeal").html(specialHTML);
		

});
	

	


































});








