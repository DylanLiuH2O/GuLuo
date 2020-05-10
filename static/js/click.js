$('.clik').on('click','li',function(){
    alert($(this).text());
})

function myFunction(te){
    document.getElementsByClassName("clik")[0].removeAttribute("style");
    document.getElementsByClassName("clik")[1].removeAttribute("style");
    document.getElementsByClassName("clik")[2].removeAttribute("style");

    var node=document.createElement("LI");
    /*var te=new String();
    te=document.getElementById().innerHTML;*/
	var textnode=document.createTextNode(te);
	node.appendChild(textnode);
	var item=document.getElementById("ti").childNodes[0];
    item.replaceChild(textnode,item.childNodes[0]);
    var co=document.getElementById(te);
    co.style.color='red';

}



