let sound = event => {
    playSound(event.code.toLowerCase())
}

let valueButton = element => {
    let song = document.getElementById('input').value

    if(song !== '') {
        let songArray = song.split('')
        playComposition(songArray)
    }
}

document.body.addEventListener('keyup', sound)

document.querySelector('.composer button')
    .addEventListener('click', valueButton)

function playSound(sound) {
    let audioElement = document.getElementById(`s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    
    if(audioElement) {
        audioElement.currentTime = 0
        audioElement.play()
    }

    if(keyElement) {
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }
}

function playComposition(songArray) {
    let wait = 0
    songArray.forEach((element) => {
        setTimeout(() => {
            playSound(`key${element}`)
        }, wait)
    wait += 250
    })
}