$(document).ready(function () {
    
    $(".control_menu").hover(function ()
    {
        $(".remain_box").css({"transform":"scale(1.05)"});
        $(".control_menu").css({"transform":"scale(1.05)"});
    }, function () {
        $(".remain_box").css({"transform":"scale(1)"});
        $(".control_menu").css({"transform":"scale(1)"});
    });

    $("a.setting").click(function ()
    {
     $(".dim").fadeIn();
       $(".popup_setting_time").fadeIn(); 
    });
    $(".popup_setting_time > input").eq(0).click(function () {
        if($(".time_setting_popup_contents input[type='number']").eq(0).val() == "" || $(".time_setting_popup_contents input[type='number']").eq(1).val() == "")
        {
            alert("공부시간, 휴식시간 모두 입력해 주세요!");
        }
        else
        {
            $(".dim").fadeOut();
            $(".popup_setting_time").fadeOut(); 
        }
    });
   $(".popup_setting_time > input").eq(1).click (function () {
    $(".dim").fadeOut();
    $(".popup_setting_time").fadeOut(); 
    $(".time_setting_popup_contents input[type='number']").eq(0).val() = null
    $(".time_setting_popup_contents input[type='number']").eq(1).val() = null
   });
});