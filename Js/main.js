const BBDD = [
    {
        "id": 1,
        "nombre": "Blue Label",
        "img": "./assets/img/bluelabel.jpg",
        "precio": 200,
        "cantidad": 1
    },
    {
        "id": 2,
        "nombre": "Red Label",
        "img": "./assets/img/redlabel.jpg",
        "precio": 30,
        "cantidad": 1
    },
    {
        "id": 3,
        "nombre": "Smirnoff",
        "img": "./assets/img/smirnoff.png",
        "precio": 10,
        "cantidad": 1
    },
    {
        "id": 4,
        "nombre": "Absolut",
        "img": "./assets/img/absolut.png",
        "precio": 20,
        "cantidad": 1
    },
    {
        "id": 5,
        "nombre": "Jaggermaister",
        "img": "./assets/img/jagger.jpg",
        "precio": 40,
        "cantidad": 1
    },
    {
        "id": 6,
        "nombre": "Jack Danields",
        "img": "./assets/img/jackdanields.jpg",
        "precio": 150,
        "cantidad": 1
    },

]

const carrito = [];

let total = 0;

function renderizarProductos() {

    let tienda = document.getElementById('tienda');


    BBDD.forEach((e)=>{
        
        let productoHTML = 
        
        `
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img src="${e.img}" class="card-img-top" alt="card">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                    <p>${e.precio}€</p>
                <button class="btn btn-primary" onClick="agergarProductoAlCarrito(${e.id})">Añadir al carrito</button>
            </div>
        </div>
    </div>
        `
        tienda.innerHTML += productoHTML

    });

}

renderizarProductos(); 

function agergarProductoAlCarrito(id){ 

    let producto = BBDD.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id); 

    if(productoEnCarrito){ 
        productoEnCarrito.cantidad++; 
    }else { 
        producto.cantidad = 1; 
        carrito.push(producto);

    
    }

    renderizarCarrito()

}

function renderizarCarrito(){ 

    let carritoHTML = document.getElementById('carrito')

    html = ''; 

    carrito.forEach((producto, id) => { 

        html += `
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="card">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                    <p>${producto.precio}€</p>
                    <p>${producto.cantidad}</p>
                <button class="btn btn-danger" onClick="eliminarProductoDelCarrito(${id})">eliminar</button>
            </div>
        </div>
    </div>
        `
    }); 

    carritoHTML.innerHTML = html; 

    calcularTotal(); 
}

function calcularTotal(){ 
    carrito.forEach((producto) =>{
        total += producto.cantidad * producto.precio;
    })

}

const eliminarProductoDelCarrito = (id)=> {

    console.log(carrito[id].cantidad)
    carrito[id].cantidad--; 
    console.log(carrito[id].cantidad); 

    if(carrito[id].cantidad == 0){ 

        carrito.splice(id,1);

    }

    renderizarCarrito()

}

