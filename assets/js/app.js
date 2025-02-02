document.addEventListener('DOMContentLoaded', () => {
    // TimeStampShow JS
    let timeStamp = document.querySelector('.timestamp');
    setInterval(() => {
        timeStamp.innerHTML = TimeStamp(false, false, true);
    }, 1000);

    // Toggle JS
    let toggle_btn = document.getElementById('toggle_btn');
    toggle_btn.onclick = () => {
        let menu = document.querySelector(".my_navbar ul");
        menu.classList.toggle("active");
        let icon = document.querySelector(".toggle_btn .icon");

        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-bars-staggered");
        } else {
            icon.classList.remove("fa-bars-staggered");
            icon.classList.add("fa-bars");
        }
    }
    //==========Live Chat JS============//
    let chat_icon = document.querySelector('.my_chat_wrapper .chat_icon');
    let chat_box = document.querySelector('.my_chat_wrapper .chat_box');

    chat_icon.addEventListener('click', () => {
        chat_box.classList.toggle('active');
    })


    // Header Sticky JS
    let header_bottom = document.querySelector('.header_bottom');
    let Sticky_height = header_bottom.offsetTop + header_bottom.offsetHeight;
    window.addEventListener('scroll', () => {

        if (window.scrollY > Sticky_height) {
            header_bottom.classList.add('active');
        } else {
            header_bottom.classList.remove('active');
        }
    });






});

