(function () {
	"use strict";

	var debug = false;

	var KEYCODE_P = 112,
		KEYCODE_J = 106,
		KEYCODE_K = 107;

	function shouldIgnoreKeyPress(e) {
		if (e.target.nodeName === 'INPUT') {
			return;
		}		
	}

	function getPlayPauseElement(){		
		if (document.getElementById('client')) {
			return document.getElementById('client').contentDocument.getElementById('playPause');
		}
		else if (document.getElementById('playPause')) {
			return document.getElementById('playPause');
		}

		throw 'Could not locate the Play/Pause element';
	}

	function getPrevTrackElement(){
		if (document.getElementById('client')) {
			return document.getElementById('client').contentDocument.getElementById('prev');
		}
		else if (document.getElementById('prev')) {
			return document.getElementById('prev');
		}

		throw 'Could not locate the Previous Track element';		
	}

	function getNextTrackElement(){
		if (document.getElementById('client')) {
			return document.getElementById('client').contentDocument.getElementById('next');
		}
		else if (document.getElementById('next')) {
			return document.getElementById('next');
		}

		throw 'Could not locate the Next Track element';		
	}

	function onKeyPress(e) {
		var playPauseElement,
			prevTrackElement,
			nextTrackElement;

		if (debug) {
			console.debug(e.keyCode);
		}

		if (shouldIgnoreKeyPress(e)) {
			return;
		}

		playPauseElement = getPlayPauseElement();
		prevTrackElement = getPrevTrackElement();
		nextTrackElement = getNextTrackElement();

		if (e.keyCode === KEYCODE_P) {
			playPauseElement.click();
		}		
		else if (e.keyCode === KEYCODE_J) {
			prevTrackElement.click();
		}
		else if (e.keyCode === KEYCODE_K) {
			nextTrackElement.click();
		}
	}

	document.addEventListener('keypress', onKeyPress);

})();