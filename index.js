const items = document.querySelectorAll('.js-item')



items.forEach(item => {
  item.addEventListener('mouseenter', () => toggleClass(item))
})

items.forEach(item => {
  item.addEventListener('mouseleave', () => toggleClass(item))
})

function toggleClass(item) {
  item.classList.toggle('test')
}







