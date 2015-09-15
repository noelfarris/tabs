(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
	$('.tab').css({ 'backgroundColor': 'white' });
	$('.red').css({ 'backgroundColor': 'red' });
}

function displayGreen() {
	$('.hidden').hide();
	$('.show').hide();
	$(tabGreen).show();
	$('.tab').css({ 'backgroundColor': 'white' });
	$('.green').css({ 'backgroundColor': 'green' });
}

function displayBlue() {
	$('.hidden').hide();
	$('.show').hide();
	$(tabBlue).show();
	$('.tab').css({ 'backgroundColor': 'white' });
	$('.blue').css({ 'backgroundColor': 'blue' });
}

$(linkRed).click(displayRed);
$(linkGreen).click(displayGreen);
$(linkBlue).click(displayBlue);

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map