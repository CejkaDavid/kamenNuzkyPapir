// JavaScript Document
var PCmoznosti = ["Kámen", "Nůžky", "Papír"];
    var PCrozhodnuti;
    var hracRozhodnuti;
    var skoreUzivatel = 0;
    var skorePC = 0;
    
    function kamen(){
        hracRozhodnuti = "Kámen";
        PChrej();
    }
    
    function papir(){
        hracRozhodnuti = "Papír";
        PChrej();
    }
    
    function nuzky(){
        hracRozhodnuti = "Nůžky";
        PChrej();
    }
    
    function PChrej() {
        PCrozhodnuti = PCmoznosti[Math.floor(Math.random()*PCmoznosti.length)];
        console.log("PC vybral: " + PCrozhodnuti)
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