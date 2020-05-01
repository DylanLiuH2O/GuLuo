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
if($.cookie("guluo")) {
    $("#message").attr("href", "#")
    $("#message").html(`<img src="/static/img/user-nav/message.svg" alt="">`)
    $("#bell").attr("href", "#")
    $("#bell").html(`<img src="/static/img/user-nav/bell.svg" alt="">`)
    $(".avatar").attr("src", "/static/img/avatar/3.png")
} else {
    $("#message").attr("href", "/login.html")
    $("#message").html(`登录`)
    $("#bell").attr("href", "/register.html")
    $("#bell").html(`注册`)
    $(".avatar").attr("src", "/static/img/avatar/1.png")
    let path = window.location.pathname
    if(path != "/index.html" && path != "/" && path != "/register.html" && path != "/login.html") {
        window.location.href='/login.html'
    }
}
