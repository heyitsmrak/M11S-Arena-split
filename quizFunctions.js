function moveImage(imageID, newX, newY, rotation = 0, mirror = false)
{
	var imageToMove = document.getElementById(imageID);
	if (imageToMove)
	{
		imageToMove.offsetHeight; //Force Reflow
		
		//Move image to specified location
		imageToMove.style.left = newX + "px";
		imageToMove.style.top = newY + "px";
		
		//Transform (rotate/mirror)
		var transformValue = `rotate(${rotation}deg)`;
		if (mirror)
		{ 
			transformValue += ` scaleX(-1)`;
		}
		else
		{
			transformValue += ` scaleX(1)`;
		}
		imageToMove.style.transform = transformValue;		
		
	}
	else
	{
		console.error("Could not move image (Not found: " + imageID + ")");
	}
}

function moveTargetToCoords(targetID, newX, newY)
{
	//Move the target so that the center is on the selected coordinates
	var targetImage = document.getElementById(targetID);
	if (targetImage)
	{
		var targetPosInfo = targetImage.getBoundingClientRect();
		newX -= targetPosInfo.width / 2;
		newY -= targetPosInfo.height / 2;

		moveImage(targetID, newX, newY);
	}
	else
	{
		console.error("Could not move image (Not found: " + targetID + ")");
	}
}

function getElementCoords(elementID)
{
	let newX = 0;
	let newY = 0;
	let xString = document.getElementById(elementID).style.left;
	let yString = document.getElementById(elementID).style.top;
	newX = Number(xString.substring(0, xString.length-2));
	newY = Number(yString.substring(0, yString.length-2));	
	return [newX, newY];
}

function moveCharToTarget(charID, targetID, offsetX = 0, offsetY = 0)
{
	//move thar character sprite so that the sprite's feet are centered on the marker
	var imageToMove = document.getElementById(charID);
	var targetImage = document.getElementById(targetID);
	if (imageToMove && targetImage)
	{
		imageToMove.offsetHeight; //Force Reflow
		targetImage.offsetHeight;

		//Get target location and width
		var targetPosInfo = targetImage.getBoundingClientRect();
		var charPosInfo = imageToMove.getBoundingClientRect();
		//Set target coords to center of the target
		var targetX = getElementCoords(targetID)[0] + (targetPosInfo.width / 2) + offsetX;
		var targetY = getElementCoords(targetID)[1] + (targetPosInfo.height / 2) + offsetY;
		console.log(getElementCoords(targetID));
		console.log(targetX);
		console.log(targetY);
		//Subtract the image height and half width from the target pos
		targetX -= (charPosInfo.width / 2);
		targetY -= (charPosInfo.height / 1.5);
		//move the stuff
		imageToMove.style.left = targetX + "px";
		imageToMove.style.top = targetY + "px";
	}
	else
	{
		console.error("Could not move image (Image(s) not found" + charID, " / " + targetID + ")");
	}
}

function hideImage(imageID)
{
	var imageToHide = document.getElementById(imageID);
	if (imageToHide)
	{
		imageToHide.style.display = "none";
	}
	else
	{
		console.error("Could not hide image (Not found: " + imageID + ")");
	}
}

function hideAndFadeImage(imageID, fadeDuration = 1000)
{
	var imageToHide = document.getElementById(imageID);
	if (imageToHide)
	{
		imageToHide.style.transition = `opacity ${fadeDuration}ms`;
		imageToHide.style.opacity = 0;
		setTimeout(function() {
			imageToHide.style.display = "none";
			imageToHide.style.transition = "";
			imageToHide.style.opacity = 1;
		}, fadeDuration);
	}
	else
	{
		console.error("Could not hide image (Not found: " + imageID + ")");
	}
}

function showImage(imageID)
{
	var imageToShow = document.getElementById(imageID);
	if (imageToShow)
	{
		imageToShow.style.display = "inline";
	}
	else
	{
		console.error("Could not display image (Not found: " + imageID + ")");
	}
}

function showAndFadeImage(imageID, fadeDuration = 500)
{
	var imageToShow = document.getElementById(imageID);
	if (imageToShow)
	{
		imageToShow.style.display = "inline";
		imageToShow.style.opacity = 0;
		imageToShow.offsetHeight; //Force Reflow
		imageToShow.style.transition = `opacity ${fadeDuration}ms`;
		imageToShow.style.opacity = 1;
		setTimeout(function() {
			imageToShow.style.transition = "";
		}, fadeDuration);
	}
	else
	{
		console.error("Could not hide image (Not found: " + imageID + ")");
	}
}


function hideGroup(groupID)
{
	var groupToHide = document.getElementById(groupID);
	if (groupToHide)
	{
		groupToHide.style.display = "none";
	}
	else
	{
		console.error("Could not hide group (Not found: " + groupID + ")");
	}
}

function hideAndFadeGroup(groupID, fadeDuration = 1000)
{
	var groupToHide = document.getElementById(groupID);
	if (groupToHide)
	{
		groupToHide.style.transition = `opacity ${fadeDuration}ms`;
		groupToHide.style.opacity = 0;
		setTimeout(function() {
			groupToHide.style.display = "none";
			groupToHide.style.transition = "";
			groupToHide.style.opacity = 1;
		}, fadeDuration);
	}
	else
	{
		console.error("Could not hide group (Not found: " + groupID + ")");
	}
}

function showGroup(groupID)
{
	var groupToShow = document.getElementById(groupID);
	if (groupToShow)
	{
		groupToShow.style.display = "inline";
	}
	else
	{
		console.error("Could not display group (Not found: " + groupID + ")");
	}
}

function showAndFadeGroup(groupID, fadeDuration = 500)
{
	var groupToShow = document.getElementById(groupID);
	if (groupToShow)
	{
		groupToShow.style.display = "inline";
		groupToShow.style.opacity = 0;
		groupToShow.offsetHeight; //Force Reflow
		groupToShow.style.transition = `opacity ${fadeDuration}ms`;
		groupToShow.style.opacity = 1;
		setTimeout(function() {
			groupToShow.style.transition = "";
		}, fadeDuration);
	}
	else
	{
		console.error("Could not hide group (Not found: " + groupID + ")");
	}
}

function changeImage(imageID, newImagePath)
{
	var imageToChange = document.getElementById(imageID);
	if (imageToChange)
	{
		imageToChange.src = newImagePath;
	}
	else
	{
		console.error("Could not change image (Not found: " + imageID + ")");
	}
}

function reanimate(objID, animationName)
{
	var objToAnimate = document.getElementById(objID);
	if (objToAnimate)
	{
		objToAnimate.classList.remove(animationName);
		objToAnimate.offsetHeight;
		objToAnimate.classList.add(animationName);
		
	}
	else
	{
		console.error("Could not animate (Not found: " + objID + ")");
	}
}

function cancelAnimation(objID, animationName)
{
	var objToAnimate = document.getElementById(objID);
	if (objToAnimate)
	{
		objToAnimate.classList.remove(animationName);
		objToAnimate.offsetHeight;
	}
	else
	{
		console.error("Could not animate (Not found: " + objID + ")");
	}
}

//Function for setting the alert box settings (setText, addText
function setText(divID, newMessage)
{
	var divToChange = document.getElementById(divID);
	if (divToChange)
		divToChange.innerHTML = newMessage;
	else
		console.error("Could not change text (Not Found: " + divID + ")");
}

function addText(divID, newMessage)
{
	document.getElementById(divID).innerHTML += newMessage;
}

function setBgAndColor(divID, newBG, newColor)
{
	document.getElementById(divID).style.backgroundColor = newBG;
	document.getElementById(divID).style.color = newColor
}

// Draw a tether from a fixed portal to a moving player target.
function drawTether(portalID, targetID, tetherID)
{
	var portalPos = getElementCoords(portalID);
	var targetPos = getElementCoords(targetID);

	var deltaX = targetPos[0] - portalPos[0];
	var deltaY = targetPos[1] - portalPos[1];
	var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	var angleRad = Math.atan2(deltaY, deltaX);
	var angleDeg = angleRad * (180 / Math.PI);

	moveImage(tetherID, portalPos[0], portalPos[1], angleDeg, false);
	document.getElementById(tetherID).style.width = distance + "px";
}