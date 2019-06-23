const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value)
const ui = new UI();

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    document.getElementById("language").onchange = function(){
        ui.change();
    }
}

function translateWord(e){
    e.preventDefault();
    
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);
    translate.translateWord((error,response)=>{
        // Başarılı
        if(error === null){
            ui.displayTranslate(response);
        }
        // Hata oluştu
        else{
            console.error("Hata Oluştu");
        }
    });
}