let btn_prc = document.getElementById('btn_prc');
let btn_ntk = document.getElementById('btn_ntk');
let btn_prc_per = document.getElementById('btn_prc_per');
let btn_ntk_per = document.getElementById('btn_ntk_per');
let btn_close = document.getElementById('close1');

var exam_prc = document.querySelectorAll('.prc-inf-exam');
var exam_ntk = document.querySelectorAll('.ntk-inf-exam');

var per_prc = document.querySelectorAll('.prc-per-inf-exam');
var per_ntk = document.querySelectorAll('.ntk-per-inf-exam');

var exam_main = document.querySelectorAll('.main-inf-exam');


btn_prc.addEventListener('click', function(){
    for (i = 0; i < exam_main.length; i++) {
        exam_main[i].classList.remove('section-active');
        }

    for (i = 0; i < exam_prc.length; i++) {
        exam_prc[i].classList.add('section-active');
    }
    btn_close.classList.add('section-active');
    scroll(0,0)
    
});

btn_ntk.addEventListener('click', function(){
    for (i = 0; i < exam_main.length; i++) {
        exam_main[i].classList.remove('section-active');
        }

    for (i = 0; i < exam_ntk.length; i++) {
        exam_ntk[i].classList.add('section-active');
    }
    btn_close.classList.add('section-active');
    scroll(0,0)
});

btn_prc_per.addEventListener('click', function(){
    for (i = 0; i < exam_main.length; i++) {
        exam_main[i].classList.remove('section-active');
        }

    for (i = 0; i < per_prc.length; i++) {
        per_prc[i].classList.add('section-active');
    }
    btn_close.classList.add('section-active');
    scroll(0,0)
    
});

btn_ntk_per.addEventListener('click', function(){
    for (i = 0; i < exam_main.length; i++) {
        exam_main[i].classList.remove('section-active');
        }

    for (i = 0; i < per_ntk.length; i++) {
        per_ntk[i].classList.add('section-active');
    }
    btn_close.classList.add('section-active');
    scroll(0,0)
});



btn_close.addEventListener('click', function(){
    var course_close = document.querySelectorAll('.section-active');
    for (i = 0; i < course_close.length; i++) {
        course_close[i].classList.remove('section-active');
        }

    for (i = 0; i < exam_main.length; i++) {
        exam_main[i].classList.add('section-active');
        }

        btn_close.classList.remove('section-active');
 });

