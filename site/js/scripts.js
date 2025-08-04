
    const modal = document.getElementById('customAlert');
    const closeButton = document.querySelector('.close-button');

    if(modal !== null ) {
        // Show the modal
        modal.style.display = 'flex';
    }

    if(closeButton !== null) {
        // Close modal when clicking the close button
        closeButton.onclick = function() {
            modal.style.display = 'none';
        };

    }
    // Close modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    $('.button_membership').on('click', function () {
        modal.style.display = 'none';

    })


//   ================== ========================
$(document).ready(function () {
    // if (window.matchMedia('(max-width: 767px)').matches) {
    //     $(".nav-link").on('click', function () {
    //         $(".navbar-collapse").toggleClass("show");
    //     });
    // }
    // ==================================================

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 150) {

            $(".scroll-top").removeClass("non-visible");
            $(".scroll-top").addClass("visible");
        } else {

            $(".scroll-top").addClass("non-visible");
            $(".scroll-top").removeClass("visible");
        }


    });
    // ========================== Back to Top =======================
    $("#scroll-top").on('click', function () {
        $(window).scrollTop(0);
    });

    //=================== upload edit profile img ===================
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                // $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(document).on('change', "#imageUpload", function () {
        readURL(this);
    });
    // ======================================
    $("#js-wizard-form").bootstrapWizard({
        'tabClass': 'nav-tab',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-back',
        'lastSelector': '.btn-last',
        'onNext': function (tab, navigation, index) {
            console.log($('#tab' + index).find('input:checked').val());
            var progressBar = $('#js-progress').find('.progress-bar');
            var progressVal = $('#js-progress').find('.progress-val');
            var current = index + 1;
            if (current > 1) {
                var val = parseInt(progressBar.text());
                val += 40;
                progressBar.css('width', val + '%');
                progressVal.text(val + '%');
            }

        },
        'onPrevious': function (tab, navigation, index) {
            var progressBar = $('#js-progress').find('.progress-bar');
            var progressVal = $('#js-progress').find('.progress-val');
            var current = index - 1;
            if (current !== 1) {
                var val = parseInt(progressBar.text());
                val -= 40;
                progressBar.css('width', val + '%');
                progressVal.text(val + '%');
            }

        }

    });
    // ========================== statistics ===================
    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });
    // =================   Scrollissimo plugin for animate image with scroll  =======================
    // $(window).scroll(function() {
    //     var w = $(window).scrollTop();
    //     console.log(w);
    //     // var vertical = " -" + w / 20 + "px";

    //     // $('.captain-img').css({
    //     //     top: vertical
    //     // });
    // });

    $(window).scroll(function () {
        if (typeof Scrollissimo !== 'undefined')
            Scrollissimo.knock();
    });

    if (typeof Scrollissimo !== 'undefined')
        Scrollissimo.add({
            target: $('.captain-img'),
            property: 'top',
            from: 0,
            to: -100,
            suffix: 'px',
            start: '3700px',
            duration: '400px',
        });

});
//  ================================ change theme =======================
const btn = document.getElementsByClassName("theme");
const theme = document.querySelector("#theme-link");
// var main = document.getElementsByTagName("BODY")[0];


for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", switchStyle);
}

function switchStyle() {
    var selectedSheet = this.getAttribute("data-stylesheet");
    theme.setAttribute("href", selectedSheet);
    localStorage.setItem("lastActiveSheet", selectedSheet);
}

// =================== wow script ===================
new WOW().init();

// ================= programs slider =====================
var programs = new Swiper("#programsSlider", {

    slidesPerView: 1,
    spaceBetween: 100,
    // effect: "coverflow",
    centeredSlides: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    loop: false,
    grabCursor: true,
    direction: "vertical",
    mousewheelControl: true,
    watchSlidesProgress: true,
    mousewheel: {
        releaseOnEdges: true,
    },
    pagination: {
        el: ".swiper-pagination-programs",
        clickable: true
    },
    // autoplay: {
    //     delay: 5000,
    //     pauseOnMouseEnter:true,
    //    disableOnInteraction: false,
    // },
    speed: 1000,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // slidesPerView: "auto",
    //spaceBetween: 20,
    // freeMode: true,
    // breakpoints: {
    //     640: {
    //         slidesPerView: "auto",
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: "auto",
    //         spaceBetween: 20,
    //     },
    //     1024: {
    //         slidesPerView: "auto",
    //         spaceBetween: 30,
    //     },
    // },
});
// ============================ partners slider ====================
var partners = new Swiper("#partners-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 5000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 35,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
    },
});
// ======================= testmonial ======================
var swiper = new Swiper("#testmonial", {
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 5000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});
//===============================transformation=======================
var swiper = new Swiper("#transformation-slider", {

    spaceBetween: 20,
    loop: false,
    // grabCursor: true,
    // centeredSlides: true,
    keyboard: {
        enabled: true,
    },
    speed: 800,
    // autoplay: {
    //     enabled: true,
    //     delay: 1000,
    //     pauseOnMouseEnter: true,
    //     autoplayDisableOnInteraction: false,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        510: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 25,

        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,

        },
        1200: {
            slidesPerView:4,
            spaceBetween: 40,

        },
    }
});


// ========================= testmonialLanding =======================
var swiper = new Swiper("#testmonialLanding", {
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 5000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 5,

        },
    },
});
// ========================= results ===========================
var swiper = new Swiper("#results-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 5000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
// ===========================================
var swiper = new Swiper("#LadiesStories", {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    // loop: true,

    // autoplay: {
    //     delay: 0,
    //     pauseOnMouseEnter: true,
    //     disableOnInteraction: false,
    // },
    speed: 4000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
// ======================= ladiesStoriesSlider ================
var swiper = new Swiper("#ladiesStoriesSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    // loop: true,

    // autoplay: {
    //     delay: 0,
    //     pauseOnMouseEnter: true,
    //     disableOnInteraction: false,
    // },
    speed: 4000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween:  0,
        },
    },
});
// ====================== transSlider =========================
var swiper = new Swiper("#transSlider", {
    spaceBetween: 20,
    effect: 'fade',
    pagination: {
        el: ".swiper-pagination",
        //   dynamicBullets: true,
        clickable: true,
    },
});
// ====================== stories-slider =========================
var swiper = new Swiper("#stories-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 2,

    //     },
    //     1024: {
    //         slidesPerView:"auto",
    //         spaceBetween: 20,
    //     },
    // },

});
// ============================================
$(function () {


    // ===================== code ===============
    $(".only-number").on('input', function (e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
})
// ========================== scrolling ==========================
// about
let toAbout = document.querySelector('.toAbout');
let about = document.querySelector('#second-about');
if (toAbout != null && about != null) {
    toAbout.addEventListener('click', function () {
        about.scrollIntoView(true);
    });
}

// success story
let toStory = document.querySelector('.toStory');
let story = document.querySelector('#successStory');

if (toStory != null && story != null) {
    toStory.addEventListener('click', function () {
        story.scrollIntoView(true);
    });
}
// sst-programs
let toPrograms = document.querySelectorAll('.toPrograms');
let program = document.getElementById('sst-programs');

if (toPrograms != null && program != null) {
    toPrograms.forEach(el => {
        el.addEventListener('click', function () {
            program.scrollIntoView(true);
        })
    });
}
// testmonial
let toTestmonial = document.querySelector('.toTestmonial');
let testmonial = document.querySelector('#testmonials');

if (toTestmonial != null && testmonial != null) {
    toTestmonial.addEventListener('click', function () {
        testmonial.scrollIntoView(true);
    });
}
// start
let tostart = document.querySelector('.start');
let startAbout = document.querySelector('#about-sst');
if (tostart != null && startAbout != null) {
    tostart.addEventListener('click', function () {
        startAbout.scrollIntoView(true);
    });
}

// ===================== validation=======================
(function () {
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {

            form.addEventListener('submit', function (event) {
                console.log("test");
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


// sticky header
$(document).ready(function () {
    if ($('#not-sticky').length != 0) {
        return;
    }
    var $sticky = $('header');
    if ($sticky.length === 0) return;
    var stickyOffsetTop = $sticky.offset().top;
    let pathUrl = window.location.pathname;
    let ArrNoTAnimation=['/register','/login','/forgot-password','/change-password' ,''];
    if(!ArrNoTAnimation.includes(pathUrl)){
        $(window).scroll(function (e) {
            e.preventDefault();

            var scrollTop = $(window).scrollTop();

            if (scrollTop > stickyOffsetTop) {
                $sticky.addClass('sticky-navbar');
            } else {
                $sticky.removeClass('sticky-navbar');
            }
        });

    }


});








// $(document).ready(function () {
//     if($('#not-sticky').length!=0){
//         return;
//     }
//     var $sticky2 = $('.blackfriday-sec');
//     if ($sticky2.length === 0) return;
//     var stickyOffsetTop2 = $sticky2.offset().top;

//     $(window).on('scroll',function (e) {
//         e.preventDefault();

//         var scrollTop = $(window).scrollTop();

//         if (scrollTop > stickyOffsetTop2) {
//             $sticky2.addClass('sticky-navbar2');
//         } else {
//             $sticky2.removeClass('sticky-navbar2');
//         }

//         if($sticky2.length > 0) {
//              if (window.matchMedia('(min-width: 769px)').matches) {
//                  $('.sticky-navbar').css('top','73px');
//              }else if(window.matchMedia('(min-width: 575px)').matches){
//                  $('.sticky-navbar').css('top','67px');
//              }else if(window.matchMedia('(min-width: 400px)').matches){
//                  $('.sticky-navbar').css('top','29px');
//              }else if(window.matchMedia('(min-width: 284px)').matches){
//                  $('.sticky-navbar').css('top','35px');
//              } else {
//                  $('.sticky-navbar').css('top','48px');
//              }
//         } else {
//              $('.sticky-navbar').css('top','0');
//         }


//     });
// });

// navbar collapse
if ($(".navbar").length) {
    var myCollapsible = document.getElementById('collapsibleNavbar')
    myCollapsible.addEventListener('show.bs.collapse', function () {

        $(".navbar-toggler-icon").addClass("collapsed");

    });
    myCollapsible.addEventListener('hide.bs.collapse', function () {

        $(".navbar-toggler-icon").removeClass("collapsed");

    })
}


//scroll effect
$(window).on('scroll', revealOnScroll);

function revealOnScroll() {
    var scrolled = $(window).scrollTop(),
        winheightpadded = $(window).height() * 1.1;

    $(".effect,.text-gradient").each(function () {
        var $this = $(this),
            offsetTop = $this.offset().top;

        if (scrolled + winheightpadded > offsetTop) {
            if ($this.data('timeout')) {
                window.setTimeout(function () {
                    $this.addClass('active');
                }, parseInt($this.data('timeout'), 10));
            } else {
                $this.addClass('active');

            }
        }
    });

}

revealOnScroll();


// text shadow effect
let supports3DTransforms = document.body.style['WebkitPerspective'] !== undefined || document.body.style['MozPerspective'] !== undefined;

function linkify(selector, char_crossfade) {

    var cc = (char_crossfade != null) ? char_crossfade : "150";
    var ad = 0;

    if (supports3DTransforms) {
        $.each(selector, function () {
            var nodes = $(this);
            var char_count = $.trim(nodes.text()).length;
            var char_at = $.trim(nodes.text());
            nodes.empty();
            for (var i = 0; i < char_count; i++) {
                var node = char_at[i];
                if (node != " ") {
                    nodes.append('<div  class="letter"  data-letter="' + node + '">' +
                        '<span class="char2" style="animation-delay:' + ((i * cc) + ad) + 'ms;" >' +
                        node + ' </span>' + node +
                        '<span class="char1" style="-webkit-animation-delay:' + ((i * cc) + ad) +
                        'ms;animation-delay:' + ((i * cc) + ad) + 'ms;" >' +
                        node + '</span>' +
                        '</div>');
                }
                // else{
                // 	nodes.append('<span class="letter"> &nbsp </span>');
                // }
            }
            ad += (char_count * char_crossfade);
        });
    } else {
        selector.addClass("letter");
    }
}

linkify($(".text-shadow"), 200);




$(function () {
    // ========================= phone number ==================

    $("input[type='tel']").on('input', function (e) {
        $(this).val($(this).val().replace(/[^\+0-9]/g, ''));
    });
});
//==================copy===============
/*
const editor = document.querySelector('.editor');
editor.onclick = () => {
  navigator.clipboard.writeText(window.location.href);
}
 */


//====================phone======================
$(document).ready(function () {
    /*
     $('#phone').intlTelInput({
       dropdownContainer: 'body'
     });
     */

    $('.input-container').on('scroll', function () {
        $(window).scroll();
    });
});

//================select==================
$("#SelectBtn").on('click', function () {
    var autocomplete1 = $("#autocomplete1").val();
});


//==============carsoul========


// const news = ["<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>",
//     "<h2>BLACK FRIDAY <strong class='default-color' > SALE</strong></h2>"]



let tickerText = "";
//looping through the news array
//for (let i = 0; i < news.length; i++) {
  //  tickerText += news[i];
//}

//document.querySelector("#scroll").innerHTML = tickerText;


//==========animation text==============
//if ($('#text').length) {
//let text = document.querySelector('#text');

//text.setAttribute('data-text', text.innerHTML);

//document.body.innerHTML += '<div style="position: absolute; bottom: 0; left: 0; right: 0; padding: .5em; font-size: 12px; font-family: monospace; text-align: center; pointer-event: none;">Click anywhere to re-run</div>';

//var lr = document.querySelector('html');
//window.addEventListener('click', () => {
  //  var newone = lr.cloneNode(true);
   // lr.parentNode.replaceChild(newone, lr);
   // lr = newone;
//});
//}



//==================================copy-icon====================================

var copyButtons = document.querySelectorAll('.copyButton');
copyButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        var textToCopy = document.querySelectorAll('.textToCopy')[index];
        var textarea = document.createElement('textarea');
        textarea.value = textToCopy.textContent;
        textarea.style.position = 'fixed';
        textarea.style.opacity = 0;

        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);

        document.body.removeChild(textarea);
        if (successful) {
            toastr.success(window.messageCopy, textarea.value);
        }
    });
});



//=================================close button======================================
$(".closebtn").click(function () {
    $(this).parent().remove();
});


//==================================scroll with nav active====================================
const sections = document.querySelectorAll(".section-wrapper");
window.addEventListener("scroll", navHighlighter);
this.navHighlighter()

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        document.getElementById("home").classList.add("active");
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ){
            document.querySelector(".nav-link[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".nav-link[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

//==================================search with table====================================
$(document).ready(function() {
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','false');
        });

        $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','true');
        });

        var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if(jobCount == '0') {$('.no-result').show();}
        else {$('.no-result').hide();}
    });
});

$(document).ready(function() {
    $(".search2").keyup(function () {
        var searchTerm2 = $(".search2").val();
        var listItem = $('.results2 tbody').children('tr');
        var searchSplit2 = searchTerm2.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $(".results2 tbody tr").not(":containsi('" + searchSplit2 + "')").each(function(e){
            $(this).attr('visible','false');
        });

        $(".results2 tbody tr:containsi('" + searchSplit2 + "')").each(function(e){
            $(this).attr('visible','true');
        });

        var jobCount = $('.results2 tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if(jobCount == '0') {$('.no-result').show();}
        else {$('.no-result').hide();}
    });
});

//============================upppppload img========================
$(document).ready(function() {


    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.personal-avatar').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});


//============================scroll========================
$(document).ready(function() {
    let scroll = document.querySelector(".scroll"), isDown = !1, scrollX, scrollLeft;
    scroll && scroll.addEventListener("mouseup", () => {
        isDown = !1, scroll.classList.remove("active")
    }), scroll && scroll.addEventListener("mouseleave", () => {
        isDown = !1, scroll.classList.remove("active")
    }), scroll && scroll.addEventListener("mousedown", e => {
        e.preventDefault(), isDown = !0, scroll.classList.add("active"), scrollX = e.pageX - scroll.offsetLeft, scrollLeft = scroll.scrollLeft
    }), scroll && scroll.addEventListener("mousemove", e => {
        if (isDown) {
            e.preventDefault();
            var t, s = (e.pageX - scroll.offsetLeft - scrollX) * 2;
            scroll.scrollLeft = scrollLeft - s
        }
    });
})


//============================sticky navTabs========================
$(document).ready(function () {
    window.onscroll = function() {stickyNav()};

    var navbar = document.querySelector('.static-in-responsive');
    if (navbar) {
        var sticky = navbar.offsetTop;

        function stickyNav() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("fixed");
            } else {
                navbar.classList.remove("fixed");
            }
        }
    }
    
});
