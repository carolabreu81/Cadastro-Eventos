// Autora: Carolina Abreu | Dia: 29/09/2021 | Cadastro de enventos

let Nome, DiaDoEvento, DiaAtual, QtdPart, Idade, Data, DiaADiaAtualtual

// entrada de dados:
Nome = prompt('Qual é o seu nome? ')
Idade = prompt('Informe sua idade')

Data = new Date()
DiaAtual = (Data.getDate() + '-' + (Data.getMonth() + 1) + '-' + Data.getFullYear()).split('-') 

if (Idade > 18){
    DiaDoEvento = prompt('Qual é o dia do Evento que você quer cadastrar? ').replaceAll('/', '') 
    if (DiaDoEvento > DiaAtual){
        QtdPart = prompt('Informe a quantidade de participantes: ')
        if (QtdPart > 100) {
            alert('O evento esta lotado! Total de: ' + QtdPart + ' participantes')
        } else {
            alert('O evento foi cadastrado com sucesso, quantidade de participantes: ' + QtdPart)
        }
    } else {
        alert('A data do evento é inválida!')
    }
} else {
    alert('Você não tem idade para cadastrar um evento, sua idade é ' + Idade)
}


