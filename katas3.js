//Exercício 1
function XRunning(array) {

    for (let cont = 0; cont < array.length; cont++)
    {
        let newArray = [...array] 
        newArray[cont] = "x"
        console.log(newArray)
    }
}
XRunning(["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"])

//Exercício 2
function vowelsCounter(lista) {
    let string = ""
    let contVowels = 0
    let newArray = []
    
    for (let i = 0; i < lista.length; i++) {

        string = lista[i]       
        contVowels = 0

        for (let j = 0; j < string.length; j++) {
            

            if (string[j] == "a") {
                contVowels += 1         
            } else if (string[j] == "e") {
                contVowels += 1
            } else if (string[j] == "i") {
                contVowels += 1
            } else if (string[j] == "o") {
                contVowels += 1
            } else if (string[j] == "u") {
                contVowels += 1
            }
            else {
                contVowels += 0
            }
        }
        newArray.push(contVowels)

    } 
  
    return newArray
}
console.log(vowelsCounter(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]))

//Exercício 3
function stringTripletGroup(string) {
    let arrayStrings = []
    let newString = ""
    let letra1 = ""
    let letra2 = ""
    let letra3 =""

    for (let i = 0; i < string.length; i +=3) {
              
       if(string[i]){
        letra1 = string[i]
       }else{
        letra1 = ""
       }

       if(string[i+1]){
         letra2 = string[i+1]
       }else{
        letra2 = ""
       }

       if(string[i+2]){
        letra3 = string[i+2]
       }else{
        letra3 = ""
       }
       newString = letra1 + letra2 + letra3

            arrayStrings.push(newString)    
    }
    return arrayStrings
}
console.log(stringTripletGroup("Os três mosqueteiros"))

//Exercício 4
function dominantPet(lista) {
    let contDog = 0
    let contCat = 0

    for (let cont = 0; cont < lista.length; cont++) {
        console.log(lista[cont].toUpperCase())
        if (lista[cont].toUpperCase() == "DOG") {            
            contDog += 1
        }else if(lista[cont].toUpperCase() == "CAT") {
            contCat += 1
        }
    }

    if (contDog > contCat) {
        console.log("DOG!")
    } else if (contCat > contDog) {
        console.log("CAT!")
    } else {
        console.log("DRAW!")
    }

}
dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"])

//Exercício 5
function divisibleList (lista,numero){
    novaLista = []
    for(let cont = 0; cont < lista.length; cont ++){
        if(lista[cont] % numero == 0){
            novaLista.push(lista[cont])
        }
    }
    return novaLista

}
console.log(divisibleList ([14, 25, 32, 50, 35, 30], 5))

//Exercício 6
function trustMeOrNot (bool, numero){
    let array = []   

    for(let cont = 0; cont < numero; cont ++){
        if(bool == true){     
            array.push(bool)
        }else{
            array.push(bool)
        }
    }   
    return array

}
console.log(trustMeOrNot (true,8))

//Exercício 7
function changeLampStatus (lista){
    let array = []
    for(let cont = 0; cont < lista.length; cont ++){

        if(lista[cont] == true){
            array.push(false)
        }else{
            array.push(true)
        }
    }
    return array
}
console.log(changeLampStatus ([false, false, true, false, true, true, true]))

//Exercício 8
function gradeAverage (lista){
let soma = 0
let media = 0
    for(let cont = 0; cont < lista.length; cont ++){
        soma += lista[cont]
    }
    media = soma / lista.length
    
    return `A média das notas é: ${media.toFixed(2)}`

}
console.log(gradeAverage ([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]))

//Exercício 9
 function canvasDeliveriesPercentage (lista){
    let soma = 0
    let porcentagem = 0
        for(let cont = 0; cont < lista.length; cont ++){
            soma += lista[cont]
        }
        porcentagem = (soma/(10*lista.length))*100
        return `A porcentagem total de entregas atingida é: ${porcentagem.toFixed(2)}%`
        
 }
 console.log(canvasDeliveriesPercentage ([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]))

 //Exercício 10
function shouldIGo (lista){
    let array = []
    for (let cont = 0; cont < lista.length; cont++) {

        if (lista[cont] == "R" || lista[cont] == "r") {
            array.push("Stop!")
        }else if (lista[cont] == "Y" || lista[cont] == "y") {
            array.push("Attention!")
        }else{
            array.push("Go!")
        }
    }
    return array
}
console.log(shouldIGo (["R", "r", "G", "y", "G", "Y", "g"]))