let enviar = document.querySelector('#enviar')
enviar.addEventListener('click', verificar)

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    let img = document.querySelector('#img')
    let sexo = document.querySelector('#sexo')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.src = 'imgs/bebe-m.png'
            }
            else if (idade <= 18) {
                img.src = 'imgs/adol-m.png'
            }
            else if (idade <= 50) {
                img.src = 'imgs/adult-m.png'
            }
            else {
                img.src = 'imgs/idoso-m.png'
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.src = 'imgs/bebe-f.png'
            }
            else if (idade <= 18) {
                img.src = 'imgs/adol-f.png'
            }
            else if (idade <= 50) {
                img.src = 'imgs/adult-f.png'
            }
            else {
                img.src = 'imgs/idosa-f.png'
            }
        }

        img.style.marginTop = "17px";
        sexo.style.marginTop = "20px";
        res.innerHTML = `Detectamos: ${genero} de ${idade} anos`
    }


}