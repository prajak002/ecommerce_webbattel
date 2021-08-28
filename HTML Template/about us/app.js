let imageNo=0; 			
let images=[];	
let time=3000;	
	 
images[0] = "https://ae01.alicdn.com/kf/H562f712d027d44c59ec43a677f3fab24v/Logitech-G502-LIGHTSPEED-Wireless-Gaming-Mouse-2-4GHz-Wireless-HERO-16000DPI-Support-Windows10-8-7-for.jpg_Q90.jpg_.webp";
images[1] = "https://cdn.mos.cms.futurecdn.net/wAqRDhxmwSS8oHbns3rACW.jpg";
images[2] = "https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..1569470766.jpg";
images[3] = "https://images.indianexpress.com/2021/04/Samsung-Gaming-Monitor.jpg";

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