(function () {
	"use strict";

	var KEYCODE_P = 112;

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

	function onKeyPress(e) {
		var playPauseElement;

		if (shouldIgnoreKeyPress(e)) {
			return;
		}

		playPauseElement = getPlayPauseElement();

		if (e.keyCode === KEYCODE_P) {
			playPauseElement.click();
		}		
	}

	document.addEventListener('keypress', onKeyPress);

})();