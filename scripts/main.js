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
}

function displayGreen() {
	$('.hidden').hide();
	$('.show').hide();
	$(tabGreen).show();
}

function displayBlue() {
	$('.hidden').hide();
	$('.show').hide();
	$(tabBlue).show();
}

$(linkRed).click(displayRed);
$(linkGreen).click(displayGreen);
$(linkBlue).click(displayBlue);