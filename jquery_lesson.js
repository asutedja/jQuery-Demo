//You can run the initial examples in yoru console.
//As you get further down the list, you may want to write the code
//into your document.ready function in index.html
//This will make the changes persistent. 

//Example #1
//You can target html elements just like css.
$('h1');
$('div');
//Notice that '.content' returns an array of elements. 
$('.content');
$('#one');
$('#two');
$('#three');


//Example 2
//You can add classes with addClass
$('.content').addClass('primary');
$('#two').addClass('second');
$('#three').addClass('third');
$('#four').addClass('fourth');
$('#five').addClass('fifth');

//You can remove classes with removeClass
$('.content').removeClass('primary');
$('#two').removeClass('second');
$('#three').removeClass('third');
$('#four').removeClass('fourth');
$('#five').removeClass('fifth');

//Example 3
//You can toggle classes with toggle class
$('.content').toggleClass('primary')
$('#two').toggleClass('second');
$('#three').toggleClass('third');
$('#four').toggleClass('fourth');
$('#five').toggleClass('fifth');

//Example 4
//You can make inline styles with .css
$('.content').css('background-color', 'white');

//Example 5
//You can change text content with .text
$('.content').text('You can add text using .text ()');

//Example 6
//You can change html content with .html
$('.content').html('<div class=small-square></div>');

//Example 7
//You can append elements with .append
$('#main').append('<div class="content blank"></div>');

//Example 8
//You can store elements in variables
var blankSquare = '<div class="content blank"></div>';
//You can reverse the syntax of append with appendTo
$(blankSquare).appendTo('#main');

//Example 9
//You can grabe the contents of html tags.
var textSquare= '<div class="content blank textSquare"> You can grab this text using .text()</div>';
$('#main').append(textSquare);
//What is the value of text after line 62?
var text = $('.textSquare').text();
$('.content').text(text);

//Example 10
//You can detach elements from the DOM and store them using .detach()
var one = $('#one').detach();
$('#main').append(one);

//Example 11
//Because jQuery selectors return an array, you can iterate over the returned elements.
var groupOfDivs = $('.content').detach();
var i = 0;

while(i<10){
  $(groupOfDivs[i]).appendTo('#main');
   i++;
 }

//Example 12
//You can chain methods together. 
var groupOfDivs = $('.content').detach();
var i = 0;
while(i<10){
  $(groupOfDivs[i]).html('<h1>i</h1>').appendTo('#main');
   i++;
 }

//Example 12 fills all the square with the letter i, 
//but we want to use i to number them. How do we do that?

//Example 13
//You can interpolate html and javascript
var i = 0;

while(i<10){
  //We build a string using the value of the javascript variable i
  $(groupOfDivs[i]).html('<h1>'+i+'</h1>').appendTo('#main');
  i++;
}

//Example 14
//jQuery has animations. Visit the jQuery effects webpage to learn more about this
//https://api.jquery.com/category/effects/
//
$( ".content" ).animate(
    {
        left: "+=50",
        top: "+=50",
        opacity: 0.25
    },
    10000,
    function() {
        $(".content").html('<h1>Your animation has finished');
    }
);



//Event handlers-Copy these into your document.ready function on index.html
//Event handlers allow you to create functions that only run when 
//a certain event happens on the page, like the user clicking a button.

//Example 15: .on allows you to pass an event and a callback function
$('#show-divs').on('click', function(){
  $('.content').toggleClass('primary');
});

//Example 16: .click simplifies the .on syntax
$('#add-div').click(function(){
  $('#main').append('<div class="content"></div>');
});

//Example 17: Combining mouseenter and mousleave, we create a function that runs
//when the user hovers over an area of the page. 
$('.content').on('mouseenter', function(){
   $(this).html('<img class="gif" src="giphy.gif">');
});
$('.content').on('mouseleave', function(){
   $(this).html('');
});
