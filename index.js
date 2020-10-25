const get = element => document.getElementById(element);

//Targeting the ID
let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");


//Targeting when somebody open the hamburger button
open.addEventListener('click', () =>{
  nav.classList.add('open-nav');
})


exit.addEventListener('click', () =>{
  nav.classList.remove('open-nav');
})