const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")
let buttonClk = document.getElementById('push-btn')
let userEmoji = document.getElementById('emoji-input')

for (let i = 0; i < myEmojis.length; i++) {
    // write your code here
    // create new element
    let emoji = document.createElement('span')
    //grab text or image
    emoji.textContent = myEmojis[i]
    //append data to container for emojis
    emojiContainer.append(emoji)
        
}


const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function () {
    const emojiInput = document.getElementById("emoji-input")
    console.log(emojiInput.value)
})