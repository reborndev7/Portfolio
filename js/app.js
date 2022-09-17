//-------------
//Scroll Effect
//-------------
window.addEventListener("scroll", function(){
    const header = document.querySelector(".pages");
    header.classList.toggle("sticky", window.scrollY > this.screen.height/2);
})

const TypeWriter = function(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.txt = "";
    this.wordIndex = 0;
    this.type();
    this.isDeleting = false;
}

//-----------
//Type Method
//-----------
TypeWriter.prototype.type = function() {
    //Current index of words
    const current = this.wordIndex % this.words.length;
    const fulltxt = this.words[current];
    if(this.isDeleting) {
        //Remove char
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    }
    else {
        //add char
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    //Insert text into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    //Id word is complete
    if(!this.isDeleting && this.txt === fulltxt) {
        //Make a pause at the end
        typeSpeed = this.wait;
        //Set isDeleting to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //Move to the next word
        this.wordIndex++;
        //Make a pause before typing new word
        typeSpeed = 300;
    }


    setTimeout(()=> this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

document.querySelector('#myimg').addEventListener('mouseover', changetored);
document.querySelector('#myimg').addEventListener('mouseout', changetoyellow);
function changetored() {
    document.querySelector(".image--border").style.border = "1rem solid #ba181b";
};
function changetoyellow() {
    document.querySelector(".image--border").style.border = "1rem solid #f2a519";
};

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".pages");
    const navlinks = document.querySelectorAll(".pages li");
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navlinkfade 0.5s ease ${index / 7 + 0.3}s`
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();
