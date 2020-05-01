const links = document.querySelectorAll('[data-route-link]')
const pages = document.querySelectorAll('[data-component]')

for(let link of links) {
    link.addEventListener('click', (e) => {
        const name = link.dataset.routeLink
        window.location.hash = '#'+name

    })
}

function getComponent (name) {
    let node = Array.from(pages).find(e => e.dataset.component.localeCompare(name) === 0)
    return node
}


function showPage (name) {
    const page = getComponent(name)
    if(!page) return
    page.classList.add('active-page')
}

function hidePage (name) {
    for(let page of pages)
        page.classList.remove('active-page')
}

window.addEventListener('hashchange', (e) => {
    let _newUrl = getRoute(e.newURL) || 'home-page'
    let _oldUrl = getRoute(e.oldURL)
    hidePage(_oldUrl)
    showPage(_newUrl)
})
window.addEventListener('load', (e) => {
    const name = getRoute(this.location.hash)
    //hidePage(name)
    if(getComponent(name)) {
        window.location.hash = '#/'+name
    } else {
        window.location.hash = '#/home-page'
    }
})

function getRoute(path) {
    return path.substr(path.indexOf('#')+2)
   
}
