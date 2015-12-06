
function askQuestions() {

var firstName = prompt( 'What is your first name?');
var lastName = prompt( 'What is your last name?') ; 

var fullName = firstName + ' '  + lastName;

console.log("User's name is : " + fullName) ;
$('h2').text('hello' + " " + fullName)
var age = prompt('How old are you?');

age = parseInt(age);

if (age>=18) {
	console.log ('User is an adult')
	alert ('Welcome adult!');

} else if (age>=13) {

	console.log ('User is a teenager');
	alert('Come back in a few years');
} else {

	console.log('User is a child');
	alert('Go away, child!')

}

if (firstName == 'General' && lastName !== 'Assembly') {
	console.log ('User is General, not Assembly');
	alert ('Welcome General!');	
}

else {alert('Piss off General Assembly')

}

var faveColour = prompt('what is your favourite colour?').toLowerCase();
	if (faveColour == 'red' ||
	 	faveColour == 'green' ||
	 	favecolour == 'blue' ||
	 	favecolour == 'yellow') {


	$('h1').css('color',faveColour);

}

}






//When the page has loaded
$(function() {


	$('img').on('click', askQuestions);

	// hide all but the first Things
	$ ('h3').not(':first-of-type').next().hide();

	// When the user clicks on an h3
	$('h3').on('mouseover',function(){

		//close all the sections
		$('h3').not(this).next().slideUp(100);

	//hide the next element
	$(this).next().slideToggle(500);
	});

});







/* JS comment */
// JS line comment 







