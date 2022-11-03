let nav_bar = document.getElementById('nav_bars');
let sub0 = document.getElementById('sub0');
let sub1 = document.getElementById('sub1');
let sub2 = document.getElementById('sub2');
let input_container = document.getElementById('input_container');
let dt0 = document.getElementById('dt0');
let dt1 = document.getElementById('dt1');
let dt2 = document.getElementById('dt2');
let dt3 = document.getElementById('dt3');
let dt4 = document.getElementById('dt4');
let dt5 = document.getElementById('dt5');
let button_container = document.getElementById('button_container');
let iframe_component = document.getElementById('iframe_component');


nav_bar.onclick = function() {

    console.log(dropdown_container_wide);

    if (dropdown_container_wide.classList.contains('modalon')) {
        dropdown_container_wide.classList.remove('modalon');
        dropdown_container_wide.classList.add('modaloff')
    }
    else {
        
        dropdown_container_wide.classList.remove('modaloff');
        dropdown_container_wide.classList.add('modalon');
    
    }
}

function sub0_display(){

// 
iframe_component.innerHTML = '';
comp02.innerHTML = '';
comp04.innerHTML = '';
comp05.innerHTML = '';
comp06.innerHTML = '';
comp09.innerHTML = '';
comp10.innerHTML = '';
comp11.innerHTML = '';
console.log('hello world');
comp04.append(list_wide); 


input_container.style.display = 'none';

sub1.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';
sub0.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';
sub2.style.backgroundColor = '#6c5aa6';

if (dropdown_container_wide.classList.contains('modalon')) {
    dropdown_container_wide.classList.remove('modalon');
    dropdown_container_wide.classList.add('modaloff')
}


} 

function sub1_display(){

    iframe_component.innerHTML = '';
    comp02.innerHTML = '';
    comp04.innerHTML = '';
    comp05.innerHTML = '';
    comp06.innerHTML = '';
    comp09.innerHTML = '';
    comp10.innerHTML = '';
    comp11.innerHTML = '';
    img1_total(comp04, photos.she_my_ex);
    text_total(comp04, para.she_my_ex_p);
    img1_total(comp05, photos.bp);
    text_total(comp05, para.blondinis_p);
    img1_total(comp06, photos.perry);
    text_total(comp06, para.techno_p);
    img1_total(comp09, photos.trytasee);
    text_total(comp09, para.trytasee_p);
    img1_total(comp10, photos.hip_hop);
    text_total(comp10, para.hip_hop_p);
    img1_total(comp11, photos.web);
    text_total(comp11, para.web_p);

    input_container.style.display = 'none';

    sub0.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';
    sub1.style.backgroundColor = '#6c5aa6';
    sub2.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';

    if (dropdown_container_wide.classList.contains('modalon')) {
        dropdown_container_wide.classList.remove('modalon');
        dropdown_container_wide.classList.add('modaloff')
    }


} 

function sub2_display(){
    iframe_component.innerHTML = '';
    comp02.innerHTML = '';
    comp04.innerHTML = '';
    comp05.innerHTML = '';
    comp06.innerHTML = '';
    comp09.innerHTML = '';
    comp10.innerHTML = '';
    comp11.innerHTML = '';
    input_container.style.display = 'none';
 
    console.log('hello world');
    comp04.append(blog_wide); 

    sub0.style.backgroundColor = '#6c5aa6';
    sub2.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';
    sub1.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';

    if (dropdown_container_wide.classList.contains('modalon')) {
        dropdown_container_wide.classList.remove('modalon');
        dropdown_container_wide.classList.add('modaloff')
    }

    // 

    

} 

function socials_display(){
    iframe_component.innerHTML = '';
    comp02.innerHTML = '';
    comp04.innerHTML = '';
    comp05.innerHTML = '';
    comp06.innerHTML = '';
    comp09.innerHTML = '';
    comp10.innerHTML = '';
    comp11.innerHTML = '';
    input_container.style.display = 'none';
    comp05.append(socials_wide);
    if (dropdown_container_wide.classList.contains('modalon')) {
        dropdown_container_wide.classList.remove('modalon');
        dropdown_container_wide.classList.add('modaloff')
    }
    sub0.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';
    sub1.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';
    sub2.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';

} 

function contact_display(){
    iframe_component.innerHTML = '';
    comp02.innerHTML = '';
    comp04.innerHTML = '';
    comp05.innerHTML = '';
    comp06.innerHTML = '';
    comp09.innerHTML = '';
    comp10.innerHTML = '';
    comp11.innerHTML = '';
    input_container.style.display = 'flex';
    sub0.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';
    sub1.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';
    sub2.style.backgroundColor = 'rgba(191, 96, 107, 0.518)';
    button_comp.innerHTML = '';
    if (dropdown_container_wide.classList.contains('modalon')) {
        dropdown_container_wide.classList.remove('modalon');
        dropdown_container_wide.classList.add('modaloff')
    }

} 



dt1.onclick = sub2_display;
sub0.onclick = sub2_display;

dt2.onclick = sub1_display;
sub1.onclick = sub1_display;

dt3.onclick = sub0_display;
sub2.onclick = sub0_display;



dt4.onclick = socials_display;

dt5.onclick = contact_display;

// button.onclick = contact_display;