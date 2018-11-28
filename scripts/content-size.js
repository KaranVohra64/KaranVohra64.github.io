function initMainContent(){
	var main = document.getElementById('main-content');
	var head = document.getElementById('header');
	var foot = document.getElementById('footer');
	var winHeight = window.innerHeight;
	var headerHeight = head.offsetHeight;
	var footerHeight = foot.offsetHeight;
	var mainHeight = main.offsetHeight;

	var whiteSpace = winHeight - (headerHeight + footerHeight + mainHeight);

	var newMainHeight = winHeight - (headerHeight + footerHeight) - 70;

	main.style.minHeight = newMainHeight + 'px';

	resize();
}

function resize(){
	window.onresize = function() {initMainContent();}
}