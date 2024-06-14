let btn_openedu = document.getElementById('btn-openedu');
let btn_exam = document.getElementById('btn-exam');
let btn_ulearn = document.getElementById('btn-ulearn');
let btn_elearn = document.getElementById('btn-elearn');
let btn_close = document.getElementById('close');

var course_openedu = document.querySelectorAll('.openedu-inf-course');
var course_exam = document.querySelectorAll('.exam-inf-course');
var course_ulearn = document.querySelectorAll('.ulearn-inf-course');
var course_elearn = document.querySelectorAll('.elearn-inf-course');
var course_main = document.querySelectorAll('.main-inf-course');


btn_openedu.addEventListener('click', function(){
    for (i = 0; i < course_main.length; i++) {
        course_main[i].classList.remove('section-active');
        }

    for (i = 0; i < course_openedu.length; i++) {
        course_openedu[i].classList.add('section-active');
    }
    btn_close.classList.add('section-active');
    scroll(0,0)
    
});

btn_exam.addEventListener('click', function(){
    for (i = 0; i < course_main.length; i++) {
        course_main[i].classList.remove('section-active');
        }

    for (i = 0; i < course_exam.length; i++) {
        course_exam[i].classList.add('section-active');
    }
    btn_close.classList.add('section-active');
    scroll(0,0)
});


btn_ulearn.addEventListener('click', function(){
    for (i = 0; i < course_main.length; i++) {
        course_main[i].classList.remove('section-active');
        }

    for (i = 0; i < course_ulearn.length; i++) {
        course_ulearn[i].classList.add('section-active');
    }
    btn_close.classList.add('section-active');
    scroll(0,0)
});

btn_elearn.addEventListener('click', function(){
    for (i = 0; i < course_main.length; i++) {
        course_main[i].classList.remove('section-active');
        }

    for (i = 0; i < course_elearn.length; i++) {
        course_elearn[i].classList.add('section-active');
    }
    btn_close.classList.add('section-active');
    scroll(0,0)
});

btn_close.addEventListener('click', function(){
    var course_close = document.querySelectorAll('.section-active');
    for (i = 0; i < course_close.length; i++) {
        course_close[i].classList.remove('section-active');
        }

    for (i = 0; i < course_main.length; i++) {
        course_main[i].classList.add('section-active');
        }

        btn_close.classList.remove('section-active');
 });

