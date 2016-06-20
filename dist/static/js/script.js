/**
 * Just a little script to adjust width according the headline
 */

(function () {
    var _content = null;
    var _title = null;
    var _topLink = null;
    var _diff = null;
    var _wWidth = null;

    var _position = function() {
        // elements
    	_content = document.querySelector('.content');
	    _title = document.querySelector('.content__title');
	    _topLink = document.querySelector('.content__link');

        // window size
        _wWidth = Object.prototype.hasOwnProperty.call(window, 'innerWidth') ? window.innerWidth : document.body.clientWidth;
        if (_wWidth >= 896) {
        	_diff = _content.offsetWidth - _title.offsetWidth;
            _topLink.style.right =  _diff/16 + 'em';
            _topLink.style.top =  -(_topLink.offsetHeight/16) + 'em';
        } else {
            _topLink.removeAttribute('style');
        }
    }

    document.addEventListener("DOMContentLoaded", _position.bind(this));
    window.addEventListener("resize", _position.bind(this));
    document.addEventListener("resize", _position.bind(this));
})();