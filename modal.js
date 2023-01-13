//img modal
$(".img-list img").click(function() {
  let 이미지경로 = $(this).attr("src");
  let 대체텍스트 = $(this).attr("alt");
  $("#img-modal-box img").attr({
    src : 이미지경로, 
    alt : 대체텍스트
  });
  $("#img-modal").fadeIn();
})
//  $(".img-list img").click(function() {  ->  .img-list에 있는 모든 img를 클릭 했을 때 함수
// attr은 attribute 속성이다. 
// let 이미지경로 = $(this).attr("src");는 이미지 경로라는 변수에 this의 src  속성을 입력한다는 것

$("#img-modal-btn").click(function() {
  $("#img-modal").fadeOut();
})

// #modal Code
$("#open-btn").click(function() {
  $("#modal").fadeIn();
  $("#modal-box").delay(800).animate({opacity: 1})
});

$("#modal-close").click(function() {
  $("#modal").fadeOut();
  $("#modal-box").delay(800).animate({opacity: 0})
});