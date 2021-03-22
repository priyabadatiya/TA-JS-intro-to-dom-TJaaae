got.houses.forEach(obj => {
    obj.people.forEach(elm => {
        var div = document.createElement('div')
        var img = document.createElement('img')
        var h2 = document.createElement('h2')
        var p = document.createElement('p')
        var button = document.createElement('a')
        img.src = elm.image
        h2.innerText = elm.name
        var div2 = document.createElement('div')
        div2.style.display = "flex"
        div2.append(img, h2)
        p.innerText = elm.description
        button.innerText = "LearnMore!"
        button.href = elm.wikiLink
        button.className = 'button'
        div.append(div2, p, button)
        div.className = "box"
        document.querySelector('.append').append(div)
    })

})