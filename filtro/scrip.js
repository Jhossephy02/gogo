function actualizarTamano(valor) {
    document.getElementById('valorTamano').innerText = valor + " cm";
  }
  
  function aplicarFiltros() {
    const filtros = {
      cuidado: document.getElementById('cuidado').value,
      luz: document.getElementById('luz').value,
      mascotas: document.getElementById('mascotas').value,
      diametro: document.getElementById('diametro').value,
      ubicacion: document.getElementById('ubicacion').value,
      tamano: document.getElementById('tamano').value
    };
  
    console.log("Filtros aplicados:", filtros);
  
    alert("Filtros aplicados:\n" + JSON.stringify(filtros, null, 2));
  }
  