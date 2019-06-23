const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value)

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    document.getElementById("language").onchange = function(){
        translate.changeParameters(Translate(document.getElementById("word").value,document.getElementById("language").value));
    }
}

function translateWord(e){
    translate.changeParameters(Translate(document.getElementById("word").value,document.getElementById("language").value));
    translate.translateWord((error,response)=>{
        // Başarılı
        if(error === null){
        }
        // Hata oluştu
        else{

        }
    });
    e.preventDefault();
}