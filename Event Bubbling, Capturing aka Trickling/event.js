document.getElementById('grand')
  .addEventListener("click", (e) => {
    // e.stopPropagation()
    console.log('Grand Parent')
  }, 1)
document.getElementById('parent')
  .addEventListener("click", (e) => {
    // e.stopPropagation()
    console.log('Parent Parent')
  }, 1)
document.getElementById('child')
  .addEventListener("click", (e) => {
    // e.stopPropagation()
    e.preventDefault()
    console.log('Child Parent')
  }, 1)