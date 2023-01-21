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
    trocarconteudo(id);
    console.log("id selecionado foi -> ",id );
}

function trocarconteudo(id){
    $("header.header-main div.cont-button").remove();
    $("section.main main").html(``);
    switch(id){
        case 0://clientes
            $("header.header-main").append(`
                <div class="cont-button">
                    <button onclick="addForm(0)">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            `);
            $("section.main main").html(`
                <div class="controles">
                    <input type="text">
                    <button onclick="buscarCliente()">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div class="cont-data">
                </div>
            `)
            //adicionar dados
            let img = "/img/iconPeople.svg"
            for(cliente of clients){
                $("section.main main div.cont-data").append(`
                <div class="item-people" onclick="showMaxInfoClient(${cliente.id})">
               <i class="fa-sharp fa-solid fa-circle-user"></i>
                <h1>${cliente.nome}</h1>
                </div>
                `)
            }
            $(`img[name="iconPeople"]`).attr("src","/img/iconPeople.svg");
        break;
    }
}
function addForm(index){
    $("body").append(forms[index]);
    if(checkDevice()){
        $("div.fosco div.card form").addClass("column")
    }
}
if(checkDevice()){
    $("nav div.title-nav,ul li").css("font-size","2.5pc")
    // $("section.main").addClass("cell");
}