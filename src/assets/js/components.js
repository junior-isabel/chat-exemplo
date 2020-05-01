
const template = document.querySelector('#app-navbar')
const node = template.content.cloneNode(true)

if ('content' in document.createElement('template')) {
  document.querySelectorAll('.apply-navbar').forEach(item => {
    const node = template.content.cloneNode(true)
    item.appendChild(node)
  })
}
