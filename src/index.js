const messages = [
    "Oscar",
    "Ana",
    "Jessica",
    "Diego",
    "Laura",
    "Nicolay"
]

const randomMsg = ()=>{
    const message = messages[Math.floor(Math.random()* messages.length)]
    console.log(message)
}

module.exports = {randomMsg}