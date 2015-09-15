'use strict';

var linkRed = $('#clickRed');
var linkGreen = $('#clickGreen');
var linkBlue = $('#clickBlue');
var tabRed = $('#red');
var tabGreen = $('#green');
var tabBlue = $('#blue');

$('.hidden').hide();

function displayRed() {
	$('.hidden').hide();
	$('.show').hide();
	$(tabRed).show();
	$('.tab').css({'backgroundColor': 'white'})
	$('.red').css({'backgroundColor': 'red'})
}

function displayGreen() {
	$('.hidden').hide();
	$('.show').hide();
	$(tabGreen).show();
	$('.tab').css({'backgroundColor': 'white'})
	$('.green').css({'backgroundColor': 'green'})
}

function displayBlue() {
	$('.hidden').hide();
	$('.show').hide();
	$(tabBlue).show();
	$('.tab').css({'backgroundColor': 'white'})
	$('.blue').css({'backgroundColor': 'blue'})
}

$(linkRed).click(displayRed);
$(linkGreen).click(displayGreen);
$(linkBlue).click(displayBlue);