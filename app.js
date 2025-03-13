const Days = document.getElementById("Days")
const Hours = document.getElementById("Hours")
const Minutes = document.getElementById("Minutes")
const Seconds = document.getElementById("Seconds")

let eidDate = new Date("1 april 2025 00:00:00").getTime()

function timer() {
    const currentDate = new Date().getTime()
    let difference = eidDate -currentDate

    let days = Math.floor(difference / 1000 / 60 / 60 / 24)
    let hours = Math.floor(difference / 1000 / 60 / 60) % 24
    let minutes = Math.floor(difference / 1000 / 60) % 60
    let seconds = Math.floor(difference / 1000) % 60

    Days.innerHTML = days
    Hours.innerHTML = hours
    Minutes.innerHTML = minutes
    Seconds.innerHTML = seconds
}

setInterval(timer , 1000)