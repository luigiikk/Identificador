function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')


        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/criançahomem.png')
                img.style.width = '180px'
            }else if (idade < 21){
                img.setAttribute('src', 'img/jovemhomem.png')
                img.style.width = '180px'
            }else if (idade < 50) {
                img.setAttribute('src', 'img/adultohomem.png')
                img.style.width = '180px'
            }else {
                img.setAttribute('src', 'img/idosohomem.png')
                img.style.width = '180px'
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/criançamulher.png')
                img.style.width = '180px'
            }else if (idade < 21){
                img.setAttribute('src', 'img/jovemmulher.png')
                img.style.width = '180px'
            }else if (idade < 50) {
                img.setAttribute('src', 'img/mulheradulta.png')
                img.style.width = '180px'
            }else {
                img.setAttribute('src', 'img/mulheridosa.png')
                img.style.width = '180px'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

    
}