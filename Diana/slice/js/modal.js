/*const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');

});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');

});*/


$(document).ready(function () {
    $('.modal-link').click(function () {
        $('.modal-person').show();
        $('.modal-bg').show();
    });
    $('.modal-person .close').click(function () {
        $('.modal-person').hide();
        $('.modal-bg').hide();
    })
})

$(document).ready(function () {
    let popup = document.querySelector(".content-popup")
    $('.details').click(function (event) {
        console.log(event)

        //<p>${event.currentTarget.querySelector('p').innerText}</p>
        popup.innerHTML = `
        
        <div class="modal-popup">

            <div class="container-image">
                <img src="${event.currentTarget.querySelector('img').getAttribute('src')}" alt="">
            </div>

            <div class="container-descripcion">
                <p>PRACTITIONER</p>
                <h1>${event.currentTarget.querySelector('h3').innerText} <i class="fab fa-linkedin"></i></h1>
                <h3>${event.currentTarget.querySelector('p').innerText}</h3>
                <button class="mini"><i class="fas fa-map-marker-alt"></i>&nbsp;Lima,Perú</button> &nbsp;&nbsp;&nbsp;
                <button class="mini"><i class="fas fa-suitcase"></i>&nbsp;UX-Service design</button>
            </div>
        </div>`
        //console.log(event.currentTarget.querySelector('p').innerText)
        // console.log(event.target.innerText)
    });
})
