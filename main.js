var startSliderIndex = 0;
var images = ['img0.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg'];
var time = 1000;

function changeImg(){
  document.slideImg.src = images[startSliderIndex];

  if (startSliderIndex < images.length - 1) {
    startSliderIndex++;
  } else {
    startSliderIndex = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
