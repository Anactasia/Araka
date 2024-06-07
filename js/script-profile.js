let btn_change = document.getElementById('btn-redact-change');
let btn_save = document.getElementById('btn-redact-save');

var profile_actions = document.querySelector('.card-profile-action');
var profile_actions1 = document.querySelector('.card-profile-action1');


btn_change.addEventListener('click', function(){
    profile_actions.classList.remove('active');
    profile_actions1.classList.add('active'); 
});

btn_save.addEventListener('click', function(){
    profile_actions1.classList.remove('active');
    profile_actions.classList.add('active'); 
 });