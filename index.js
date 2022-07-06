const listaCombo = [{
        id: 1,
        nombre: "Combo 1",
        principal: "Hamburguesa",
        Agregado1: "queso cheddar",
        Agregado2: "tomate",
        Aderezo: "mayonesa",
        Papas: "chicas",
        Bebida: "coca regular",
        cantidad: 1,
        ValorVenta: "600",
    },
    {
        id: 2,
        nombre: "Combo 2",
        principal: "Hamburguesa",
        Agregado1: "queso dambo",
        Agregado2: "lechuga",
        Aderezo: "ketchup",
        Papas: "grande",
        Bebida: "sprite",
        cantidad: 1,
        ValorVenta: "800",
    },
    {
        id: 3,
        nombre: "Combo 3",
        principal: "Hot Dog",
        Agregado1: "queso cheddar",
        Agregado2: "pepino",
        Aderezo: "mayonesa",
        Papas: "chicas",
        Bebida: "coca regular",
        cantidad: 1,
        ValorVenta: "400",
    },
    {
        id: 4,
        nombre: "Combo 4",
        principal: "Hot Dog",
        Agregado1: "queso cheddar",
        Agregado2: "pepino",
        Aderezo: "mayonesa",
        Papas: "grandes",
        Bebida: "coca zero",
        cantidad: 1,
        ValorVenta: "500",
    },
];

const contenedorProductos = document.getElementById("contenedor-combo");

for (const producto of listaCombo) {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3 ";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
    <div class="card">
        <div class="card-body">
        <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
        <p class="card-text">Principal: <b>${producto.principal}</b></p>
        <p class="card-text">Agregado 1: <b>${producto.Agregado1}</b></p>
        <p class="card-text">Agregado 2: <b>${producto.Agregado2}</b></p>
        <p class="card-text">Aderezo: <b>${producto.Aderezo}</b></p>
        <p class="card-text">Papas: <b>${producto.Papas}</b></p>
        <p class="card-text">Bebida: <b>${producto.Bebida}</b></p>
        <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
        <p class="card-text">Precio Venta: <b>${producto.ValorVenta}</b></p>
        </div>
    </div>`;
    contenedorProductos.append(column);
}