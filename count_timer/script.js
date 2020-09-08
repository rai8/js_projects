const day = document.getElementById("days")
const hour = document.getElementById("hours")
const min = document.getElementById("mins")
const sec = document.getElementById("seconds")

const birthday = "25 September 2020"

function countDown() {
  const birthDayDate = new Date(birthday)
  const currentDate = new Date()
  const miniSeconds = (birthDayDate - currentDate) / 1000
  const seconds = Math.floor(miniSeconds) % 60
  const minutes = Math.floor(miniSeconds / 60) % 60
  const hours = Math.floor(miniSeconds / 3600) % 24
  const days = Math.floor(miniSeconds / 3600 / 24)
  // console.log(days)
  day.innerText = days
  hour.innerText = hours
  min.innerText = minutes
  sec.innerText = seconds
}
countDown()

setInterval(countDown, 1000)
