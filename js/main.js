function askQuestions () {



	var firstName = prompt ('What is your first name?');  // when the user writes stuff the information he puts there is being stored in the browser memory
	var lastName = prompt ('What is your last name?');

	if (firstName == 'General' && lastName != 'Assembly') {

		console.log('What we want');
		alert('Hello General');
	}



	var faveColour = prompt ('What is your favourite colour?').toLowerCase();

	if (faveColour === 'red' ||
		faveColour === 'green' ||
		faveColour === 'blue' ||
		faveColour === 'yellow') {

		$('h2').css('color', faveColour);

	}


	var fullName = firstName + " " + lastName;
	console.log('User is: ' + fullName);
	$('h2').text('Hello ' + fullName);

	var age = prompt ('How old are you?');

	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult');
		alert('Hello, adult!');

	} else if (age >= 13) {

		console.log('User is a teenager');
		alert('Come back in a few years.');

	} else {

		console.log ('User is a child');
		alert ('Go away, child!');
	}


}




// this is how we write comments on js. We can also write like in CSS
// when the page has loaded - we need it to load (DOM) before we do anything otherwise we may be saying 'hey look for h3' but h3 main not have been loaded yet

$(function() {  // it means do this stuff between bracket and bracket 

	//when the user clicks the image, run askQuestions;
	$('img').on('click', askQuestions);

	//hide all the things
	$('h3').next().hide();

	// when the user clicks on an h3
	$('h3').on('click', function() {

		//toggle the next element
		$(this).next().slideToggle(200);  //this refers to the particular h3 that the user clicks on



	});

});
