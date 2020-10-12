const myEmojis = ["🏀", "🍕", "🏈","🃏"]

function renderEmojis() {
    const emojiContainer = document.getElementById("emojiContainer")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        // write your code here
        // create new element
        let emoji = document.createElement('span')
        //grab text or image
        emoji.textContent = myEmojis[i]
        //append data to container for emojis
        emojiContainer.append(emoji)
        //clear emoji input box     
    }  
}

renderEmojis()
const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function () {
    const emojiInput = document.getElementById("emoji-input")
    //push input value to emojis array
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

const unshiftBtn = document.getElementById('unshift-btn')
unshiftBtn.addEventListener('click', function () {
    const emojiInput = document.getElementById("emoji-input")
    //push input value to emojis array
    if (emojiInput.value) {
        const  emojiInput = document.getElementById("emoji-input")
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
        console.log(emojiInput.value)
        
    }
})

const removeBtn = document.getElementById('pop-btn')
removeBtn.addEventListener('click', function () {
    myEmojis.pop()
    renderEmojis()
})
const shiftBtn = document.getElementById('shift-btn')
shiftBtn.addEventListener('click', function () {
    myEmojis.shift()
    renderEmojis()
})


