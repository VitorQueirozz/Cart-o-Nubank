let cartao = document.querySelector('.cartao')

function cartaoEfeito(event){
    const cartaoWidth = cartao.offsetWidth
    const cartaoHeight = cartao.offsetHeight
    const centerX = cartao.offsetLeft + cartaoWidth/2
    const centerY = cartao.offsetTop + cartaoHeight/2
    const positionX = event.clientX - centerX
    const positionY = event.clientY - centerY
    
    const rotateX = (+1)*25*positionY/(cartaoHeight/2)
    const rotateY = (-1)*25*positionX/(cartaoWidth/2)

    cartao.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

function cartaoSair(event) {
    cartao.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
    cartaoTransicao()
}

function cartaoTransicao(){
    clearInterval(cartao.transitionId)
    cartao.style.transition = `transform 400ms`
    cartao.transitionId = setInterval(() => {
        cartao.style.transition = ''
    }, 400)
}

function cartaoEntra(event) {
    cartaoTransicao()
}

cartao.addEventListener('mousemove', cartaoEfeito)
cartao.addEventListener('mouseleave', cartaoSair)
cartao.addEventListener('mouseenter', cartaoEntra)