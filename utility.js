// Could also change this to use HSL so you avoid colors that are too bright
function generateColor() {
    const r = Math.floor(Math.random() * 188);
    const g = Math.floor(Math.random() * 188);
    const b = Math.floor(Math.random() * 188);

    return `rgb(${r}, ${g}, ${b})`
}

function generateIndex() {
    return Math.floor(Math.random() * quotes.length)
}