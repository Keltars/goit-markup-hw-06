const body = document.body
const menu = document.querySelector(".mob-menu")
const modal = document.querySelector(".backdrop")

// console.log(isOpen)
console.log(body)

function openMob(){
    menu.classList.add("is-open")
    body.style.overflow = 'hidden';
}

function closeMob() {
    menu.classList.remove("is-open")
    body.style.overflow = 'auto';

}

function openModal() {
    modal.classList.add("is-open")
    body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove("is-open")
    body.style.overflow = 'auto';
}