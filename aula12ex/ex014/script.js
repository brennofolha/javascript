function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = '../manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOM TARDE!
        img.src = '../tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // BOM NOITE!
        img.src = '../noite.jpg'
        document.body.style.background = '#515154'
    }
}



