const btn = document.getElementById('btn');
const text = document.getElementById('text');

function handleClick(e) {
    e.preventDefault()

    //hold input text to speech
    const text2Speech = text.value

    //transform
    const transformation = new SpeechSynthesisUtterance(text2Speech)

    //audio output
    window.speechSynthesis.speak(transformation)

    //clean up input
    text.value = ""
}

btn.addEventListener("click", handleClick)