$(document).click(function(e){
    let click = $(e.target)[0]
    let s = $("#s")[0]
    let input = $(".form-control")[0]
    if(click != s && click != input){
        $(".search-wrap").css("width", "0em")
    } else {
        $(".search-wrap").css("width", "8em")
    }
})
console.log($.cookie("guluo"))
$(".user-box .drop-down").hide()
if(!$.cookie("guluo")) {
    $("#message").attr("href", "/login.html")
    $("#message").html(`登录`)
    $("#bell").attr("href", "/register.html")
    $("#bell").html(`注册`)
    $(".avatar").attr("src", "/static/img/avatar/1.png")
    // 强制登录
    // let path = window.location.pathname
    // if(path != "/index.html" && path != "/" && path != "/register.html" && path != "/login.html") {
    //     window.location.href='/login.html'
    // }
} else {
    let inbox = false;
    $(".user-box .avatar").mouseenter(function(){
        $(".user-box .drop-down").fadeIn(200)
    });
    $(".user-box .drop-down").mouseenter(function(){
        inbox = true
    });
    $(".user-box .drop-down").mouseleave(function(){
        inbox = false
        $(".user-box .drop-down").fadeOut(200)
    });
    $(".user-box .avatar").mouseleave(function(){
        setTimeout(()=>{
            if(!inbox) $(".user-box .drop-down").fadeOut(200)
        }, 500)
    });
    
}
