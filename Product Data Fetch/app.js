fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then((res) => {
    console.log(res)
    const main = document.querySelector('#main')

    res.forEach(element => {
        let product = element

        const div = document.createElement('div')
        
        const img = document.createElement('img')
        img.src = product.image
       div.appendChild(img)

        const title = document.createElement('h3')
        title.innerHTML = product.title
       div.appendChild(title)

        const price = document.createElement('p')
        price.innerHTML = "Rs."+" "+ product.price
       div.appendChild(price)

       main.appendChild(div)

        
    })

})
.catch((err) =>{
    console.log(err)
})
            