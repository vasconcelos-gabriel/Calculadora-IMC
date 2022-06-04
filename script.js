function resultado(){
  let nome = document.getElementById('name')
  let alt =  document.getElementById('altura')
  let ps = document.getElementById('peso')
  let nm  =  String(nome.value)
  let n =  Number(alt.value)
  let p =  Number(ps.value)

  let imc = p  /  (n  * n)
  let pp = document.getElementById('pp')

  if (nome.value.length === 0 || alt.value.length === 0   || ps.value.length === 0 ){
    window.alert('Digite todos os valores')
  }else if(imc <= 16){
    pp.innerHTML = 
    `Olá ${nm}, </br></br>
    Seu IMC é: ${imc.toFixed(2)},  </br></br>
    você com baixo peso muito grave`
  }else if (imc <= 19){
    pp.innerHTML = 
    `Olá ${nm}, </br></br>
    Seu IMC é: ${imc.toFixed(2)},  </br></br>
    você está com baixo peso`
  }else if (imc <= 25){
    pp.innerHTML =
     `Olá ${nm}, </br></br>
     Seu IMC é: ${imc.toFixed(2)},  </br></br>
     você está com o peso normal`
  }else if (imc <= 30){
    pp.innerHTML =
     `Olá ${nm}, </br></br>
     Seu IMC é: ${imc.toFixed(2)},  </br></br>
       você está com sobre peso`
  }else if(imc <= 35){
    pp.innerHTML =
     `Olá ${nm}, </br></br>
     Seu IMC é: ${imc.toFixed(2)},  </br></br>
      você está com obesidade grau 1`
  }else if(imc <= 40){
  pp.innerHTML =
   `Olá ${nm}, </br></br>
    Seu IMC é:   ${imc.toFixed(2)},  </br></br>
    você está com obesidade grau 2 `
  }else {
  pp.innerHTML =
   `Olá ${nm}, </br></br>
   Seu IMC é: ${imc.toFixed(2)},  </br></br>
   você está com obesidade morbida`
  }
}