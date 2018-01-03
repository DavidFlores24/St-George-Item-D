// JavaScript Document
$(document).ready(function() {
	"use strict";
	$('.scroll-down').click(function() {
		$('.carousel-caption').animate( {
			scrollTop: "1000px"
		}, "slow");
	});
	
	$('.scroll-up').click(function() {
		$('.carousel-caption').animate( {
			scrollTop: "-1000px"
		}, "slow");
	});
});