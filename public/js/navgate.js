function activeNav(){
    if($("nav").css("left")=="-600px"){
        $("nav").css("left","0px");
    }else{
        $("nav").css("left","-600px");
    }
}
$("nav ul li").attr("onclick","selectNav(this) ");
function selectNav(i){
    $("nav ul li.active").removeClass("active");
    $(i).addClass("active");
    let id = 0;
    for(li of $("nav ul li")){
        if(li == i){
            activeNav();
            $("header h2#title-header").html(li.textContent)
            break;
        }else{
            id++;
        }
    }
    console.log("id selecionado foi -> ",id );
}

if(checkDevice()){
    $("nav div.title-nav,ul li").css("font-size","2.5pc")
}