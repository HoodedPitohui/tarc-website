var imgArray1 = new Array();
imgArray1[0] = new Image();
imgArray1[0].src = '../images/rahan.jpg';
imgArray1[1] = new Image();
imgArray1[1].src = '../images/original-team.jpg';
imgArray1[2] = new Image();
imgArray1[2].src = '../images/presentation-award.png';
imgArray1[3] = new Image();
imgArray1[3].src = '../images/nats.png';
imgArray1[4] = new Image();
imgArray1[4].src = '../images/first-launch.jpg';
var imgNum = 0;
function swapImageRight()
{
	var img = document.getElementById('swap');
	imgNum++;
	img.src = imgArray1[ imgNum % imgArray1.length ].src;
}
function swapImageLeft()
{
	var img = document.getElementById('swap');
	imgNum--;
	if (imgNum < 0)
		imgNum = 3;
	img.src = imgArray1[ imgNum % imgArray1.length ].src;
}