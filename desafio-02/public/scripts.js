const modalOverlay = document.querySelector('.modal-overlay')

const modal = document.querySelector('.modal')

const cards = document.querySelectorAll('.card')

function verifyMaximize() {
    if (modal.classList.contains('maximize')){
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
}

for (let card of cards) {
    card.addEventListener('click', function () {
        const url_id = card.getAttribute('id')
        modalOverlay.classList.add('active')
        verifyMaximize()
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${url_id}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
    verifyMaximize()
    modalOverlay.querySelector('iframe').src = ""
})
