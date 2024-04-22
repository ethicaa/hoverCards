
const blurImg = document.getElementById("innercard1");
blurImg.addEventListener("mouseover", function(){
  document.getElementById("img1").style.height = "296px";
  document.getElementById("img1").style.width="184px";
})
blurImg.addEventListener("mouseout", function(){
  document.getElementById("img1").style.height = "300px";
  document.getElementById("img1").style.width="190px";
})

const blurImg2 = document.getElementById("innercard2");
blurImg2.addEventListener("mouseover", function(){
  document.getElementById("img2").style.height = "296px";
  document.getElementById("img2").style.width="184px";
})
blurImg2.addEventListener("mouseout", function(){
  document.getElementById("img2").style.height = "300px";
  document.getElementById("img2").style.width="190px";
})