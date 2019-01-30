import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

export class SectretWord {
    private word : string = "test";
    private wordArray = new Array();

    constructor() {

    }
    /**
     * GetWord
     */
    public async GetWord()  {
        let temp: string = "";
        let wordOutput = document.getElementById("content").children[1] as HTMLParagraphElement;
        await axios.get("http://api.evang.dk/randomwords/", {
        'headers': 
        {
            'numberOfWords': 1,
            'maxWordLength': 10,
            'minWordLength': 8,
        }
        })
        .then(function (response)
        {
            temp = response.data.words[0];
            console.log(response.data.words[0]);
        })
        this.word = temp;
        wordOutput.innerHTML = this.InitWord(this.word);
        
    }

    /**
     * Init
     */
    public InitWord(word : string) : string
    {
        let result : string = "";

        for (let i = 0; i < word.length; i++) {
            this.wordArray[i] = "__ ";
            result += "__ ";
        }
        return result;
    }

    /**
     * RevealLetter
     */
    public RevealLetter(input : string) : string {
        let result : string = "";
        let charList = new Array();
        for (let i = 0; i < this.word.length; i++) {
            if(input == this.word.charAt(i)){
                this.wordArray[i] = " " +  input + " ";
            }
        }
        this.wordArray.forEach(element => {
            result += element;
        });

        return result;
    }

    public Contains(ch : string) : boolean {
        for(let char of this.word) {
            if(ch == char){
                return true;
            }
        }
        return false;
    }

    /**
     * ToString : string
     */
    public ToString() : string {
        return "The word is " + this.word;
    }
}

export class Canvas {
    private canvas = document.getElementById("canvas") as HTMLCanvasElement;
    private ctx = this.canvas.getContext("2d");

    constructor() {

    }

    /**
     * DrawHead
     */
    public DrawHead() {
        this.ctx.beginPath();
        this.ctx.arc(100, 75, 50, 0,2 * Math.PI);
        this.ctx.stroke();
    }

    /**
     * DrawBody
     */
    public DrawBody() {
        this.ctx.fillRect(100, 125, 1.5, 100);
    }

    /**
     * DrawArm
     */
    public DrawArm(dir : string) {
        if (dir == "right") {
            this.ctx.fillRect(75, 125, 1.5, 100);
        }
        
    }

    /**
     * DrawLegs
     */
    public DrawLeg() {
        
    }

    /**
     * DrawToe
     */
    public DrawToe() {
        
    }

    /**
     * DrawHat
     */
    public DrawHat() {
        
    }
}

