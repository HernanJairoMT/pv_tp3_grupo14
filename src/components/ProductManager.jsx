import { useEffect } from 'react';

function ProductManager() {
  const productos = [
    { Producto: "Teclado", precio: 30000 },
    { Producto: "Auriculares", precio: 49000 },
    { Producto: "Mouse", precio: 15000 },
    { Producto: "Monitor", precio: 80000 },
    { Producto: "Webcam", precio: 25000 },
  ];

  useEffect(() => {
    console.log("1- MOSTRAR TODOS LOS PRODUCTOS");
    productos.forEach((p) =>
      console.log(`Producto: ${p.Producto} - Precio: $${p.precio}`)
    );

    console.log("2. PRODUCTOS CON PRECIO MAYOR A $20");
    const mayoresA20 = productos.filter((p) => p.precio > 20);
    console.log(mayoresA20);

    console.log("3. PRODUCTOS CON IVA INCLUIDO(21%)");
    const conIVA = productos.map((p) => ({
      ...p,
      precio: (p.precio * 1.21).toFixed(2),
    }));
    console.log(conIVA);

    console.log("4. PRODUCTOS ORDENADOS POR PRECIO(mayor a menor)");
    const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
    console.log(ordenados);

    console.log("5. PRODUCTO NUEVO AGREGADO(Parlante Bluetooth)");
    const conParlante = [...productos, { descripcion: "Parlante Bluetooth", precio: 59000.9 }];
    console.log(conParlante);

    console.log("6. PRODUCTO CON PRECIO MAS BAJO ELIMINADO");
    const minPrecio = Math.min(...productos.map(p => p.precio));
    const sinMasBarato = productos.filter(p => p.precio !== minPrecio);
    console.log(sinMasBarato);
  }, []);

  return (
    <div>
        <br></br>
      <h2>Gestión de Productos (Ejercicio Adicional)</h2>
      <p>Revisá la consola para ver los resultados del ejercicio.</p>
    </div>
  );
}

export default ProductManager;