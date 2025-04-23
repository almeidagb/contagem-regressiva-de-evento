const daysEL = document.getElementById('days') 
const hoursEL = document.getElementById('hours') 
const minEL = document.getElementById('min') 
const secondsEL = document.getElementById('seconds') 
const messageEL = document.getElementById('message') // Elemento para a mensagem

// A data final deve ser uma string válida no formato 'YYYY-MM-DDTHH:MM:SS'
const dayend = "2025-09-23T00:00:00" // Exemplo de data no futuro

function countdown() {
    const datedayEnd = new Date(dayend) // Convertendo a data final para o formato Date
    const currentDate = new Date() // Obtenha a data atual

    const totalSeconds = (datedayEnd - currentDate) / 1000

    // Se o tempo já acabou, exibe a mensagem e para o intervalo
    if (totalSeconds <= 0) {
       
        
        messageEL.innerHTML = "Tempo Esgotado!"// Exibe a mensagem de tempo expirado
        return // Sai da função
    }

    // Cálculo de dias, horas, minutos e segundos
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const min = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    // Atualiza os elementos HTML com os valores calculados
    daysEL.innerHTML = formatTime(days)
    hoursEL.innerHTML = formatTime(hours)
    minEL.innerHTML = formatTime(min)
    secondsEL.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time // Adiciona o zero à esquerda se necessário
}

// Inicia a contagem regressiva e define o intervalo
countdown()
const countdownInterval = setInterval(countdown, 1000)
