
document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola mundo desde evenListener")
    document.getElementById('demo').innerHTML = "Chauu!"
})

document.getElementById('boton-color').addEventListener('click', function(){
    document.body.style.backgroundColor = '#ff0011'
})

document.getElementById('default').addEventListener('click', function(){
    document.body.style.backgroundColor = 'cadetblue'
})

document.getElementById('ocultar').addEventListener('click', function(){
    document.getElementById('demo').style.display = 'none'
})

document.getElementById('ejecutar').addEventListener('click', function(){
    const collection = document.getElementsByClassName('prueba')
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = 'blue';
    }
})


