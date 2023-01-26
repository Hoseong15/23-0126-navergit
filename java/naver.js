// label 클릭 했을 때 실행할 함수
$('label').on('click', function(e) {
  // form 안에 있는  input을 전송하는 동작을  e.preventDefauli();로 중단
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');

  if($(this).children('.checkbox-img').hasClass('checked')) {
    //checked-img가 checkdd 클래스를 가지고 있을 때 실행 할 코드
    $(this).children('input[type="checkbox"]'),Attr('checked')
  } else {
    //checked-img가 checkdd 클래스를 가지고 않을 때 실행 할 코드
    $(this).children('input[type="checkbox"]'),removeAttr('checked')
  }
})

$("label").click(function() {
  if($(this).is(":checked")){
    $(".checkbox-img").attr("checked", true);
  } else{
    $(".checkbox-img").attr("checked", false);
  }
})