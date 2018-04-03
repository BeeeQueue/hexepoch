const elements = document.querySelectorAll('.number')
const app = document.getElementById('app')

function update() {
  // Split epoch date into array with numbers
  const now = Date.now().toString()

  // Get the color using substring and set the background to it
  const color = `#${now.substring(3, 9)}`
  app.style.backgroundColor = color

  // Iterate through each number
  now.split('').forEach((num, i) => {
    const html = elements[i].innerHTML

    // Stop here if the number is the same as the elements content
    if (html === num) return

    // Set content to new number
    elements[i].innerHTML = num
  })
}

// Update every 33 milliseconds
setInterval(update, 33)
