// JavaScript Document
var PCmoznosti = ["Kámen", "Nůžky", "Papír"];
    var PCrozhodnuti;
    var hracRozhodnuti;
    var skoreUzivatel = 0;
    var skorePC = 0;
    var createImgUzivatel = document.createElement("IMG");
        createImgUzivatel.setAttribute("height", "100");
    var createImgPC = document.createElement("IMG");
        createImgPC.setAttribute("height", "100");
    
    
    function kamen(){
        hracRozhodnuti = "Kámen";
        createImgUzivatel.setAttribute("src", "kamen.png");
        document.getElementById("obrazekUzivatel").appendChild(createImgUzivatel);
        PChrej();
    }
    
    function papir(){
        hracRozhodnuti = "Papír";
        createImgUzivatel.setAttribute("src", "papir.png");
        document.getElementById("obrazekUzivatel").appendChild(createImgUzivatel);
        PChrej();
    }
    
    function nuzky(){
        hracRozhodnuti = "Nůžky";
        createImgUzivatel.setAttribute("src", "nuzky.png");
        document.getElementById("obrazekUzivatel").appendChild(createImgUzivatel);
        PChrej();
    }
    
    function PChrej() {
        PCrozhodnuti = PCmoznosti[Math.floor(Math.random()*PCmoznosti.length)];
        console.log("PC vybral: " + PCrozhodnuti);
        switch (PCrozhodnuti){
            case "Kámen":
                createImgPC.setAttribute("src", "kamen.png");
                document.getElementById("obrazekPC").appendChild(createImgPC); 
                break;
            case "Nůžky":
                createImgPC.setAttribute("src", "nuzky.png");
                document.getElementById("obrazekPC").appendChild(createImgPC); 
                break;
            case "Papír":
                createImgPC.setAttribute("src", "papir.png");
                document.getElementById("obrazekPC").appendChild(createImgPC); 
                break;
        }
        kdoVyhral();
    }
    
    function kdoVyhral(){
        if(hracRozhodnuti == "Kámen" && PCrozhodnuti == "Nůžky" || hracRozhodnuti == "Nůžky" && PCrozhodnuti == "Papír" || hracRozhodnuti == "Papír" && PCrozhodnuti == "Kámen"){
            document.getElementById("vysledek").innerHTML = "Vyhrál jsi!";
            skoreUzivatel++;
            document.getElementById("skoreUzivatel").innerHTML = skoreUzivatel;
        } 
        else if( hracRozhodnuti == "Kámen" && PCrozhodnuti == "Kámen" || hracRozhodnuti == "Papír" && PCrozhodnuti == "Papír" || hracRozhodnuti == "Nůžky" && PCrozhodnuti == "Nůžky"){      
            document.getElementById("vysledek").innerHTML = "Remíza!";
            }
            else{
            document.getElementById("vysledek").innerHTML = "Prohrál jsi!";
            skorePC++;
            document.getElementById("skorePC").innerHTML = skorePC;
                }
     }