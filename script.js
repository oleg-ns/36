//2
$('.wants-to-be-blue').blue()
//3
$('li').last().prev().prev().blue()
//4
$('#make-me-blue').blue()
$('section:first div:last').blue()
$('p span:first').blue()
$('span i:last').blue()
$('section:last div > div').blue()
//5
$("div").last().prev().blue()
$("div").first().next().blue()
$("div").last().blue()
$("div").last().prev().prev().prev().blue()
$("div").first().next().next().next().blue()
$("div").first().blue()
$("div").first().next().next().blue()
$("div").last().prev().prev().blue()
$("div").last().prev().prev().prev().prev().blue()
//6
$("div[class!='bomb']").blue()
//7
$(document).ready(setTimeout(function () {
    $('div').blue();
},1000))
//8
