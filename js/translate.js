class Translate{
    constructor(word, language){
        this.apikey = "trnsl.1.1.20190622T140241Z.76ebc472c47b2eb7.ff14f6cf17f5a22179aca45ec505814903318ef8";
        this.word = word;
        this.language = language;

        this.xhr = new XMLHttpRequest();
    }

    translateWord(callback){
        const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
        
        this.xhr.open("GET", endPoint);

        this.xhr.onload = ()=>{
            if(this.xhr.status === 200){
                const json = JSON.parse(this.xhr.responseText);
                const text = json.text[0];
                callback(null,text);
            }
            else{
                const error = "Bir hata oluştu.";
                callback(error,null);
            }
        }

        this.xhr.send();
    }

    changeParameters(newWord, newLang){
        this.word = newWord;
        this.language = newLang;
    }
}
