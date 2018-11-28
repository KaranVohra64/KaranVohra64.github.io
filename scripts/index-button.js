var locations = new Array('index.html', 'projects.html','contact-me.html','contact-me.html','contact-me.html');

function redirect(){
	var buttonArr = document.getElementsByClassName('index-buttons');

	for(var i = 0; i < buttonArr.length; i++){
		var sendTo = locations[i];
		buttonArr[i].onclick = function() {window.location = locations[this.id.split('-')[1]-1];}
	}
}