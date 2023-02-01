const listaUsuarios = async()=>{ //funcion para consumir un json y convertirlo en una lista
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const datos = await response.json()
    const numAleatorio = Math.floor(Math.random()*11) //Usamos un numero generado al azar para seleccionar un perfil del json
    let nombre = ``
    let webs = ``
    let tableNew = ``
    let tableWork = ``

    //iteramos la lista generada por el jsnon y guardada en datos
    datos.forEach((datos, index) => {
        if (index == numAleatorio) {//si el numero de index es igual al numero generado aleatoriamente se utiliza ese perfil para mostrar la informacion
            nombre = `<H1>${datos.name}</H1>`
            webs = `<H2>${datos.website}</H2>`
            nombres.innerHTML = nombre
            web.innerHTML = webs

            //creamos el contenido de la tabla dinamica
            tableNew = `<tr>
              <th>Ciudad</th>
              <td>${datos.address.city}</td>
            </tr>
            <tr>
              <th>Calle</th>
              <td>${datos.address.street}</td>
            </tr>
            <tr>    
              <th>Departamento</th>
              <td>${datos.address.suite}</td>
            </tr>
            <tr>
              <th>Codigo Postal</th>
              <td>${datos.address.zipcode}</td>
            </tr>
            <tr>
              <th>Telefono</th>
              <td>${datos.phone}</td>
            </tr>
            <tr>
              <th>Mail</th>
              <td>${datos.email}</td>
            </tr>
            `
            tablaDatos.innerHTML = tableNew;

            
            tableWork = `<tr>
              <th>Compania</th>
              <td>${datos.company.name}</td>
            </tr>
            <tr>
              <th>Descripcion</th>
              <td>${datos.company.catchPhrase}</td>
            </tr>
            <tr>    
              <th>Trabajo realizado</th>
              <td>${datos.company.bs}</td>
            </tr>
            `
         
            tablaTrabajo.innerHTML = tableWork
              console.log(datos)
              console.log(numAleatorio)
            
        }
        
    });
    

}



window.addEventListener('load', function(){
    listaUsuarios()
})

