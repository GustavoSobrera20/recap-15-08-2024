idade = 0

idade = prompt("digite sua idade")
  if (idade >= 18){
    alert ("vc é maior de idade")}
  else if (idade <18){
     alert ("vc é menor de idade")
    }
console.log ("----------------------------------")
   numero = prompt ("digite seu valor")
   
    if (numero <0){
      alert("seu numero é zero")
    }else if (numero <0){
      alert ("seu numero é negativo")
    }else {
      alert ("seu numero é positivo")
    }
console.log ("----------------------------------")
  num = 0

num = prompt ("DIGITE SEU NUMERO")
 if (num %2 == 0){
  alert ("seu numero é PAR")
  }
else if(num  %2 != 0){
  alert ("seu numero é IMPAR")
}    
console.log ("----------------------------------")
num = prompt ("digite sua nota")

if (num > 7){
  alert("esta totalmente aprovado")
}
else if (num >= 5){
 alert("esta em recuperaçao")
}
else if (num <= 4){
 alert("esta em reprovado")
}
   console.log ("----------------------------------")
num1 = 0
num2 = 0
operacao = ""
num1 = prompt("Digite o primeiro numero")
num2 = prompt("Digite o segundo numero")
operacao = prompt("Digite a operacao")
if (operacao == "soma"){
  alert(parseInt(num1) + parseInt(num2))
}
else if(operacao == "subtracao"){
  alert(parseInt(num1) - parseInt(num2))
}
else if(operacao == "divisao"){
  alert(parseInt(num1) / parseInt(num2))
}
else if(operacao == "multiplicacao"){
  alert(parseInt(num1) * parseInt(num2))
}

/*atividade realizada apos a voltas das ferias */
