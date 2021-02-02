function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src = "bancoImagens/manha.jpg"
        document.body.style.background = "#A9DCFB"
    } 
    else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = "bancoImagens/tarde.jpg"
        document.body.style.background = "#FEC519"
    } else {
        //BOA NOITE
        img.src = "bancoImagens/noite.jpg"
        document.body.style.background = "#002F5D"
    }
}