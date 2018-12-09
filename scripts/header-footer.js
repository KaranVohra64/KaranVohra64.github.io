
function initHF(){
	header();
	enableButtons();
}

function header(){
	var div = document.createElement("div");

	div.id = 'header';

	div.style.width = '100%';
	div.style.height = '100%';
	//div.style.backgroundColor = 'blue';
	div.style.paddingBottom = '1%';
	div.style.marginBottom = '1%';

	var before = document.getElementById('main-content'); 

	document.body.insertBefore(div, before);

	topBar();
	footer();
	navigation();

	document.getElementById('main-content').onresize = function(){console.log('found'); navigation();}
	pageTitle();
	
}

function topBar(){
	var div = document.createElement('div')

	div.id = 'header-top-bar';

	div.style.width = '100%';
	div.style.height = '100%';
	div.style.backgroundColor = '#0000e6';
	div.style.position = 'sticky';
	div.style.top = '0'

	var parent = document.getElementById('header');

	parent.appendChild(div);

	populateTopBar();
}

function pageTitle(){
	var div = document.createElement('div');

	div.id = 'page-title';

	div.style.width = '80%';
	div.style.height = '50%';
	div.style.margin = '0 auto';
	//div.style.backgroundColor = 'purple';

	var parent = document.getElementById('header');

	parent.appendChild(div);

	addTitle();
}

function addTitle(){
	var title = document.createElement('p');
	var name = document.getElementsByTagName('title')[0].innerHTML;

	title.id = 'title-text';

	title.style.textAlign = 'center';
	title.innerHTML = name;

	title.style.fontSize = '80px';
	title.style.position = 'relative';
	title.style.color = 'white';
	title.style.fontFamily = 'Arial Black';
	title.style.margin = '0 auto';

	var parent = document.getElementById('page-title');

	parent.appendChild(title);
}

function populateTopBar(){
	var menuDiv = document.createElement('div');
	var logoDiv = document.createElement('div');
	var accountDiv = document.createElement('div');

	menuDiv.id = 'header-menu';
	logoDiv.id = 'header-logo';
	accountDiv.id = 'header-account';

	menuDiv.style.backgroundColor = 'white';
	menuDiv.style.position = 'absolute';
	menuDiv.style.width = '4%';
	menuDiv.style.minWidth = '40px';
	menuDiv.style.height = '100%';
	menuDiv.style.top = '0px';
	menuDiv.style.left = '0px';
	menuDiv.style.display = 'block';

	logoDiv.style.backgroundColor = '#0000e6';
	logoDiv.style.position = 'relative';
	logoDiv.style.width = '170px';
	logoDiv.style.height = '100%';
	logoDiv.style.minHeight = '40px';
	logoDiv.style.display = 'block';
	logoDiv.style.margin = '0 auto';


	accountDiv.style.backgroundColor = 'white';
	accountDiv.style.position = 'absolute';
	accountDiv.style.width = '4%';
	accountDiv.style.height = '100%';
	accountDiv.style.top = '0px';
	accountDiv.style.right = '0px';
	accountDiv.style.display = 'block';


	var parent = document.getElementById('header-top-bar');

	parent.appendChild(menuDiv);
	parent.appendChild(logoDiv);
	parent.appendChild(accountDiv);

	popMenu = function() {
		var image = document.createElement('img');
		image.src = '../media/hamburger.png';
		image.style.width = '100%';
		image.style.height = '40px';
		image.style.maxWidth = (menuDiv.offsetWidth * .8) + 'px';
		console.log(menuDiv.offsetHeight); //why the fuck does this not work?!?!

		var parent = document.getElementById('header-menu');
		parent.appendChild(image);
	}

	popLogo = function() {
		var text = document.createElement('p');
		text.innerHTML = '-1 Playground';

		text.style.fontSize = '20px';
		text.style.color = 'white';
		text.style.fontFamily = 'Arial Black';
		text.style.margin = '0 auto';

		var parent = document.getElementById('header-logo');
		parent.appendChild(text);
	}

	popAccount = function() {
		var text = document.createElement('p');
		text.innerHTML = '-DNF-';

		var parent = document.getElementById('header-account');
		parent.appendChild(text);
	}

	popMenu();
	popLogo();
	popAccount();
}

function footer(){
	var div = document.createElement('footer');

	div.id = 'footer';

	div.style.width = '100%';
	div.style.height = '100%';
	div.style.backgroundColor = 'blue';
	div.style.position = 'relative';
	div.style.bottom = '0';
	div.style.marginTop = '25px';

	document.body.appendChild(div);

	populateFooter(div);

}

function populateFooter(footer){
	var contactDiv = makeDiv();
	var contactDivTitle = makeTitle('Contact Me');
	var contactDivList = makeList(['Phone: (650) 704-9317', 'Email: karanvohra64@gmail.com']);

	footer.appendChild(contactDiv);
	contactDiv.appendChild(contactDivTitle);
	contactDiv.appendChild(contactDivList);
}

function makeDiv(){
	var div = document.createElement('div');
	div.style.width = '20%';
	div.style.height = 'auto';
	div.style.position = 'relative';
	div.style.backgroundColor = '#0000e6';
	div.style.padding = '.5%';

	return div;
}

function makeTitle(text){
	var title = document.createElement('p');
	title.style.color = 'white';
	title.style.fontSize = '1vw';
	title.style.fontWeight = 'bold';
	title.style.fontFamily = 'Arial Black';
	title.innerHTML = text + '<br><hr>';

	return title;
}

function makeList(listArray){
	var ul = document.createElement('ul');
	ul.style.paddingLeft = '10%';
	for(var i = 0; i < listArray.length; i++){
		var li = document.createElement('li');
		li.style.position = 'relative';
		li.style.fontSize = '1vw';
		li.style.color = 'white';
		li.innerHTML = listArray[i];
		ul.appendChild(li);
	}

	return ul;
}

function enableButtons(){
	var menu = document.getElementById('header-menu');
	var menuButton = document.getElementById('header-menu');
	var nav = document.getElementById('navigation');
	var main = document.getElementById('main-content');
	
	var menuOpen = 0;

	menu.onclick = function(){
		if(menuOpen == 0){
			nav.style.display = 'block';
			main.style.marginLeft = '0%'
			openNavigation(nav, menuButton, main);
			menuOpen = 1;
		}
		else if(menuOpen == 1){
			closeNavigation(nav, menuButton);
			main.style.marginLeft = '10%'
			menuOpen = 0;
		}
	};
}


function reformatNavigation(){
	var div = document.getElementById('navigation');
	var size = getDistance();

	div.style.height = size + 'px';
}


function navigation(){
	var size = getDistance();

	var div = document.createElement('div');

	div.id = 'navigation';

	div.style.width = '15%';
	div.style.height = size + 'px';
	div.style.backgroundColor = '#00004d';
	div.style.position = 'sticky';
	div.style.float = 'left';

	var parent = document.getElementById('header');

	parent.appendChild(div);

	initNavigation();
}

function initNavigation(){
	var nav = document.getElementById('navigation');
	nav.style.display = 'none';
	nav.style.width = '0%';
	nav.style.marginRight = '2.5%';
	populateMenu();
}

function openNavigation(nav, menu, main){
	var curMenuWidth = parseFloat(menu.style.width.slice(0, -1));
	var curNavWidth = parseFloat(nav.style.width.slice(0, -1));

	//console.log(document.getElementById('main-content'))
	//console.log(document.getElementById('main-content').style.marginLeft)

	if(curMenuWidth < 15){
		if(curNavWidth < curMenuWidth){
			nav.style.width = (curNavWidth + 1) + '%';
		}else{
			menu.style.width = (curMenuWidth + 1) + '%';
			nav.style.width = (curNavWidth + 1) + '%';
		}
		setTimeout(function(){openNavigation(nav,menu, main);}, 1);
	}
}

function closeNavigation(nav, menu){
	var curMenuWidth = parseFloat(menu.style.width.slice(0, -1));
	var curNavWidth = parseFloat(nav.style.width.slice(0, -1));

	if(curNavWidth > 0){
		if(curMenuWidth > 4){
			menu.style.width = (curMenuWidth - 1) + '%';
			nav.style.width = (curNavWidth - 1) + '%';
		}else{
			nav.style.width = (curNavWidth - 1) + '%';
		}
		setTimeout(function(){closeNavigation(nav,menu);}, 1);
	}
	if(curNavWidth == 0){
		nav.style.display = 'none';
	}
}

function populateMenu(){

	var pages = new Array('index.html', 'projects.html', 'contact-me.html');
	var tag = new Array('Home', 'Projects', 'Contact Me');
	var parent = document.getElementById('navigation');

	for(var i = 0; i < pages.length; i++){
		var div = document.createElement('div');
		div.id = 'nav-button-' + (i+1);
		div.style.width = '100%';
		div.style.height = '50px';
		div.style.backgroundColor = '#0000e6';
		div.style.margin = '5px 0px';
		div.style.position = 'sticky';
		div.style.overflow = 'hidden';

		parent.appendChild(div);

		var text = document.createElement('p');
		text.style.fontSize = '20px';
		text.style.fontFamily = 'Arial Black';
		text.style.fontWeight = 'bold';
		text.style.textAlign = 'center';
		text.style.color = 'white';
		text.style.margin = '0';
		text.innerHTML = tag[i];

		div.appendChild(text);


		var getDiv = document.getElementById(div.id);

		var sendTo = pages[i];

		var source = getCurrentURL();


		getDiv.onclick = function() {window.open(source + pages[this.id.split('-')[2]-1], '_self')}

	}

}

function getCurrentURL(){
	var currentURL = window.location.href;
	var splitURL = currentURL.split('/');
	var source = '';

	for(var i = 0; i < splitURL.length-1; i++){
		source += splitURL[i] + '/';
	}

	return source;
}

function getDistance(){
	console.log('got distance');
	var footer = document.getElementById('footer');
	var topBar = document.getElementById('header-top-bar');

	var heightF = footer.offsetHeight;
	var heightTB = topBar.offsetHeight;
	var heightWin = document.body.offsetHeight;

	var distance = heightWin - heightF - heightTB;

	return distance;
}

