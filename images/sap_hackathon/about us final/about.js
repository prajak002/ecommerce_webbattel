let imageNo=0; 			
let images=[];	
let time=3000;	
	 
images[0] = "1.jpeg";
images[1] = "2.jpeg";
images[2] = "3.jpeg";
images[3] = "4.jpeg";

function changeImg()
{
	document.slide.src=images[imageNo];
	if(imageNo<images.length-1)
		imageNo++; 
	else 
		imageNo = 0;
	setTimeout("changeImg()",time);
}
window.onload=changeImg; //function changeImg is called upon visiting the website