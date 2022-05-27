document.querySelector('button').addEventListener('click', getFetch)
const poemsContainer = document.getElementById('poemsEverybody')

const url = "https://poetrydb.org/random"

//Main call
function getFetch(){
  fetch(url)
      .then(res => res.json()) // Parse response as JSON
      .then(data => {
        poem = data[0]
        let newInnerHTML = 
        // HTML markup for random poems
        `
      <h1>${poem.title}</h1>
      <span>${poem.author}</span>
        `
        poem.lines.forEach((line) => {
          newInnerHTML += `<p>${line}</p>`
        })
        poemsContainer.innerHTML = newInnerHTML
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}


//Copies text to clipboard
function copyDivToClipboard() {
  var range = document.createRange() //Creates selection
  range.selectNode(document.getElementById("poemsEverybody"))
  window.getSelection().removeAllRanges() // Clear current selection
  window.getSelection().addRange(range) //To select text
  document.execCommand("copy")
  window.getSelection().removeAllRanges()// To deselect 
}





