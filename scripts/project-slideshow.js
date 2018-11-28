function initProjectButtons(){
	var getButtons = document.getElementsByClassName('project-button');
	initImages(getButtons);
	initSlideshow(getButtons);

}

function initImages(getButtons){ //show first image only
	for(var i = 0; i < getButtons.length; i++){
		var button = getButtons[i];
		var images = button.getElementsByClassName('project-button-bg');
		for(var x = 0; x < images.length; x++){
			if(x == 0){
				images[x].style.display = 'block';
			}
			else{
				images[x].style.display = 'none';
			}
		}
	}
}

function initSlideshow(getButtons){
	for(var i = 0; i < getButtons.length; i++){
		var button = getButtons[i];

		button.onmouseover = function(){
			var self = this;
			setTimeout(function(){playSlideshow(self);}, 2000);
		}

		button.onclick = function(){
			moveButtons(getButtons, this);
			var overview = displayOverview(this);
			initOverview(overview);
		}
	}
}

function playSlideshow(self){
	var getImages = self.getElementsByClassName('project-button-bg');

	for(var i = 0; i < getImages.length; i++){
		var currentImage = getImages[i];
		if(i == getImages.length - 1){
			var nextImage = getImages[0];
		}
		else{
			var nextImage = getImages[i+1];
		}
		if(currentImage.style.display == 'block'){
			currentImage.style.display = 'none';
			nextImage.style.display = 'block';
			return;
		}
	}
}

function moveButtons(getButtons, self){
	var buttonStorage = getButtons;
	var labelStorage = new Array();
	var parent = buttonStorage[0].parentNode;

	var curIndex = self.id.split('-')[1];
	var cur;

	while(buttonStorage.length > 0){
		var button = buttonStorage[0];
		var label = button.getElementsByClassName('project-label')[0].cloneNode(true);

		labelStorage.push(label);

		button.parentNode.removeChild(button);
	}

	for(var i = 0; i < labelStorage.length; i++){
		var labelButton = labelStorage[i];
		var text = labelButton.getElementsByClassName('project-title')[0];

		text.style.position = 'relative';
		labelButton.style.position = 'relative';
		labelButton.id = 'project-' + (i+1);

		if(i+1 == curIndex){
			labelButton.style.backgroundColor = 'purple';
			cur = labelButton;
		}

		labelButton.style.width = '20%';
		labelButton.style.margin = '1%';
		labelButton.style.display = 'inline-block';

		parent.appendChild(labelButton);

		labelButton.onclick = function(){
			var overview = displayOverview(this);
			initOverview(overview);
			this.style.backgroundColor = 'purple';
			cur.style.backgroundColor = null;
			cur = this;
		}
	}
}

function initOverview(overview){
	var getProjectOverviewSelectors = overview.getElementsByClassName('project-overview-selector');
	var getProjectSelectors = overview.getElementsByClassName('project-selector');

	for(var x = 0; x < getProjectSelectors.length; x++){
		getProjectOverviewSelectors[x].style.display = 'none';
		getProjectSelectors[x].style.backgroundColor = 'blue';
	}

	var initOverview = getProjectOverviewSelectors[0];
	var initSelector = getProjectSelectors[0];

	initOverview.style.display = 'block';
	initSelector.style.backgroundColor = 'purple';

	for(var i = 0; i < getProjectSelectors.length; i++){
		var selector = getProjectSelectors[i];
		selector.onclick = function(){
			var index = this.id.split('-')[1] - 1;
			var nextOverview = getProjectOverviewSelectors[index]

			console.log(nextOverview);

			initSelector.style.backgroundColor = null;
			this.style.backgroundColor = 'purple';
			initSelector = this;
			initOverview.style.display = 'none';
			nextOverview.style.display = 'block';
			initOverview = nextOverview;

		}
	}
}

function displayOverview(button){
	var index = button.id.split('-')[1];
	
	var getOverviewContainer = document.getElementById('overview-container');
	getOverviewContainer.style.display = 'block';

	var getOverviews = document.getElementsByClassName('project-container');

	var returnOverview;

	for(var i = 0; i < getOverviews.length; i++){
		var overview = getOverviews[i];
		if(index == overview.id.split('-')[1]){
			overview.style.display = 'block';
			returnOverview = overview;
		}else{
			overview.style.display = 'none';
		}
	}

	return returnOverview;
}


