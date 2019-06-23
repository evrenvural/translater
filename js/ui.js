class UI{
    constructor(){
        this.outputImage = document.getElementById("outputImage");
        this.outputLanguage = document.getElementById("outputLanguage");
        this.outputWord = document.getElementById("outputWord");
    
        this.languageList = document.getElementById("language");
    }

    change(){
        this.outputImage.src = `assets/images/${this.languageList.value}.png`;
        this.outputLanguage.textContent = this.languageList.options[this.languageList.selectedIndex].textContent; 
    }

    displayTranslate(response){
        this.outputWord.textContent = response;
    }
}