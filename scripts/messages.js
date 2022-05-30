let count = 0
const read = document.getElementById("read")
const unread = document.getElementById("unread")

fetch("scripts/messages.json")
    .then(res => res.json())
    .then(data => {
        for (const i of data) {
            const name = document.createElement("h5")
            const sent = document.createElement("p")
            const br = document.createElement("br")
            const message = document.createElement("h6")
            const element = document.createElement("div")

            element.className = "element"

            name.innerText = i.name
            sent.innerText = i.sent
            message.innerText = i.message

            element.appendChild(name)
            element.appendChild(sent)
            element.appendChild(br)
            element.appendChild(message)

            i.read ? read.appendChild(element) : unread.appendChild(element)
            count++
        }
    })