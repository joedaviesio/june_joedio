// central is element creation and landing state 
// newelements is functions related to user behaviour - different states 
// data is variable inputs
let body_container = document.getElementById('body_container'); 
let comp01 = document.getElementById('comp01');
let comp02 = document.getElementById('comp02');
let comp03 = document.getElementById('comp03');
let comp04 = document.getElementById('comp04');
let comp05 = document.getElementById('comp05');
let comp06 = document.getElementById('comp06');
let comp07 = document.getElementById('comp07');
let button_comp = document.getElementById('button_comp');
let footer_comp = document.getElementById('footer_comp');



// header 
function header_total(comp)
{
let prime_header = document.createElement('div');
prime_header.classList.add('prime_header_container');
let prime_header_h1 = document.createElement('div');
prime_header_h1.classList.add('prime_header');
let prime_header_a = document.createElement('a'); 
prime_header_a.innerHTML = titles.prime_header;
prime_header_a.href = '';
let prime_header_i = document.createElement('i'); 
prime_header_i.classList.add (nav_icon.type);
prime_header_i.classList.add (nav_icon.title);
prime_header_i.classList.add (nav_icon.size);
prime_header_i.id = "nav_bars";

prime_header_h1.append(prime_header_a);
prime_header.append(prime_header_h1);
prime_header.append(prime_header_i);

comp.append(prime_header);
}
header_total(comp01);

// function ere(comp_x) {
//     header_total(comp01);
//     comp_x.append(comp01);
// };
// ere(comp03);

// subheader
function sub_header_total(comp){

let sub1 = document.createElement('div');
sub1.classList.add('sub_header');
sub1.classList.add('sub_header_color_on');
sub1.id = ('sub' + [i]);

sub1.innerHTML = sub_header_options[i];

comp.append(sub1);

// sub_header.append(sub1);
}

let sub_header = document.createElement('div');
sub_header.classList.add('sub_header_container');
for(i=0; i<sub_header_options.length; i++)
{
sub_header_total(sub_header, i);
};
comp03.append(sub_header);

// contact button
function button_total(comp){
let button_container = document.createElement('div');
button_container.classList.add('button_container');
button_container.id = 'button_container';
let button = document.createElement('button');
button.classList.add('button');
button.id = 'button';
let contact = document.createElement('div');
contact.classList.add('contact'); 
contact.innerHTML = titles.button1;
let button_fa = document.createElement('i');
button_fa.classList.add(button_icon.type);
button_fa.classList.add(button_icon.title);
button_fa.classList.add(button_icon.size);

button.append(contact);
button.append(button_fa);
button_container.append(button);

comp.append(button_container);
}
// button_total(button_comp);




// footer
// function footer_total(comp){
// let footer = document.createElement('div');
// footer.classList.add('footer');
// comp.append(footer);
// }
// footer_total(footer_comp);

// img1 
function img1_total(comp, popo){
let img1_wide = document.createElement('div');
img1_wide.classList.add('img1_wide');
img1_wide.id = 'img1_wide';

let img1_container = document.createElement('div');
img1_container.classList.add('img1_container');
img1_container.classList.add('holds-the-iframe');
img1_container.id = 'img1_container';

let img1 = document.createElement('img');
img1.classList.add('img1');
img1.id = 'img1';

img1_container.append(img1);
img1_wide.append(img1_container);
comp.append(img1_wide);

img1.src = popo;
}
// img1_total(comp02, photos.landing);
// img1_total(comp06, photos.landing);

// text
function text_total(comp, textinner){

let text_container = document.createElement('div');
text_container.classList.add('text_container');
let text = document.createElement('div');
text.classList.add('text'); 
text.innerHTML = textinner;
text_container.append(text);
comp.append(text_container);

}
// text_total(comp05, para.bio);


// dropdown
function dropdown_test(comp, i){

let dropdown_container = document.createElement('div');
dropdown_container.classList.add('dropdown_container');

let dropdown_text_container = document.createElement('div'); 
dropdown_text_container.classList.add('dropdown_text_container');

let dropdown_text = document.createElement('div'); 
dropdown_text.classList.add('dropdown_text'); 

dropdown_text.innerHTML = dropdown_options[i]; 
dropdown_text.id = ('dt' + [i]);

dropdown_text_container.append(dropdown_text);
dropdown_container.append(dropdown_text_container);

comp.append(dropdown_container);
}

let dropdown_container_wide = document.createElement('div');
dropdown_container_wide.classList.add('dropdown_container_wide');
dropdown_container_wide.classList.add('modaloff');
for(i=0; i<dropdown_options.length; i++)
{
    dropdown_test(dropdown_container_wide, i);
}
comp07.append(dropdown_container_wide);

// list
function list_comp(comp, i) {
    let list_component = document.createElement('div');
    list_component.classList.add('list_component'); 

    let list_header_container_wide = document.createElement('div'); 
    list_header_container_wide.classList.add('list_header_container_wide');

    let list_header_container = document.createElement('div'); 
    list_header_container.classList.add('list_header_container');

    let list_icon = document.createElement('i'); 
    list_icon.classList.add(list_total[i].icon_type);
    list_icon.classList.add(list_total[i].icon_title);
    list_icon.classList.add(list_total[i].icon_size);
    list_icon.classList.add('list_icon');

    let list_header = document.createElement('div');
    list_header.classList.add('list_header'); 

    list_header.innerHTML = list_total[i].title; 

    list_header_container.append(list_icon);
    list_header_container.append(list_header);
    list_header_container_wide.append(list_header_container);
    list_component.append(list_header_container_wide);

    let list_text = document.createElement('div'); 
    list_text.classList.add('list_text'); 
    list_text.innerHTML = list_total[i].text;

    list_component.append(list_text);

    comp.append(list_component);
}

let list_wide = document.createElement('div'); 
list_wide.classList.add('list_wide');

for(i=0; i<list_total.length; i++)
{
    list_comp(list_wide, i);
}

// comp03.append(list_wide); 

//  blog

    // blog
function blog_comp(comp, i) {
    let blog_component = document.createElement('div');
    blog_component.classList.add('blog_component'); 

    let blog_header_container_wide = document.createElement('div'); 
    blog_header_container_wide.classList.add('blog_header_container_wide');

    let blog_header_container = document.createElement('div'); 
    blog_header_container.classList.add('blog_header_container');

    let blog_icon = document.createElement('i'); 
    blog_icon.classList.add(blog_total[i].icon_type);
    blog_icon.classList.add(blog_total[i].icon_title);
    blog_icon.classList.add(blog_total[i].icon_size);
    blog_icon.classList.add('blog_icon');

    let blog_header = document.createElement('div');
    blog_header.classList.add('blog_header'); 

    blog_header.innerHTML = blog_total[i].title; 

    blog_header_container.append(blog_icon);
    blog_header_container.append(blog_header);
    blog_header_container_wide.append(blog_header_container);
    blog_component.append(blog_header_container_wide);

    let blog_text = document.createElement('div'); 
    blog_text.classList.add('blog_text'); 
    blog_text.innerHTML = blog_total[i].text;

    blog_component.append(blog_text);

    if (blog_total[i].blog_img_boolean == 'true'){
        let blog_img_container = document.createElement('div');
        blog_img_container.classList.add('blog_img_container'); 
        blog_img_container.classList.add('holds-the-frame'); 
        let blog_img = document.createElement('img'); 
        blog_img.classList.add('blog_img');
        blog_img.src = blog_total[i].blog_img_src;

        blog_img_container.append(blog_img);

        blog_component.append(blog_img_container);

    }
  
    comp.append(blog_component);
}

    let blog_wide = document.createElement('div'); 
    blog_wide.classList.add('blog_wide');

        for(i=0; i<blog_total.length; i++)
{
    blog_comp(blog_wide, i);
            }

        // comp03.append(blog_wide); //

    // socials

    // social 
function socials_comp(comp, i){


    let socials_container = document.createElement('div');
    socials_container.classList.add('socials_container'); 

    let socials_a = document.createElement('a');
    socials_a.href = socials_total[i].href; 
    console.log('k');

    let socials_icon = document.createElement('i'); 
    socials_icon.classList.add(socials_total[i].icon_type);
    socials_icon.classList.add(socials_total[i].icon_title);
    socials_icon.classList.add(socials_total[i].icon_size);
    socials_icon.classList.add('social_fa');

    socials_a.append(socials_icon);
    socials_container.append(socials_a);

    comp.append(socials_container);
}

let socials_wide = document.createElement('div');
socials_wide.classList.add('socials_wide'); 

for(i=0; i<socials_total.length; i++)
{
    socials_comp(socials_wide, i);
}

// comp05.append(socials_wide);

//  third header 

function third_header(comp) {
        let thc = document.createElement('div');
        thc.classList.add('third_header_container'); 

        let th = document.createElement('div');
        th.classList.add('third_header'); 

        th.innerHTML = titles.slogan;

        thc.append(th);

        comp.append(thc);
}

// third_header(comp02);

//  iframe component 

comp04.append(blog_wide); 

