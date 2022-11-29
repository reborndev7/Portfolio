//-------------
//Scroll Effect
//-------------
(function ($) {
    $(window).on('scroll', () => {
        const header = $(".nav-list");
        const stickyHeader = $(".sticky");
        if (window.scrollY > 180) {
            header.addClass("hide");
            stickyHeader.removeClass("hide");
        }
        else {
            header.removeClass("hide");
            stickyHeader.addClass("hide");
        }
        if ($('.pages').length) {
            $('.sticky .pages').find('a').each(function secondaryMenuList() {
                const docViewTop = $(window).scrollTop();
                var element = $(this).attr('href');
                if (element !== '#' && element !== null && element !== undefined && !element.startsWith('/')) {
                    let outerHeight = 0;
                    $(element).each(function () {
                        outerHeight += $(this).outerHeight();
                    });
                    const elemTop = $(element).offset().top;
                    const elemBottom = elemTop + outerHeight;
                    if ((elemTop <= (docViewTop + 120)) && (elemBottom >= (docViewTop - 30)) === true) {
                        $('a').removeClass('nav-active');
                        $(this).addClass('nav-active');
                    } else {
                        $(this).removeClass('nav-active');
                    }
                }
            });
        }
    });
    $('#myimg').on('mouseover', changetored);
    $('#myimg').on('mouseout', changetoyellow);
    function changetored() {
        $(".image--border").css("border", "1rem solid #ba181b");
    };
    function changetoyellow() {
        $(".image--border").css("border", "1rem solid #f2a519");
    };
    const navSlide = () => {
        const burger = $(".burger");
        const nav = $(".pages");
        const navlinks = $(".pages li");

        burger.on('click', () => {
            nav.classList.toggle('nav-active');
            navlinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navlinkfade 0.5s ease ${index / 7 + 0.3}s`
                }
            });
            burger.toggleClass('toggle');
        });
    }
    navSlide();
    $(".pages a[href^='#']").on('click', function() {
        var element = $(this).attr('href');
        var top = $(element).offset().top;
        $('html, body').animate(
            {
                scrollTop: top - 65,
            }, 100
        );
        window.location.hash = $(this).prop('hash');
    });
})(jQuery);
const TypeWriter = function (txtElement, words, wait = 2000) {
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
TypeWriter.prototype.type = function () {
    //Current index of words
    const current = this.wordIndex % this.words.length;
    const fulltxt = this.words[current];
    if (this.isDeleting) {
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

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    //Id word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
        //Make a pause at the end
        typeSpeed = this.wait;
        //Set isDeleting to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //Move to the next word
        this.wordIndex++;
        //Make a pause before typing new word
        typeSpeed = 300;
    }


    setTimeout(() => this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

