window.addEventListener("load", function(){
  let tiposInversionListaVertical = document.getElementById("tipos-inversion");
  let tiposInversionListaHorizontal = document.getElementById("tipos-inversion-horizontal");
  llenarLista(tiposInversionListaVertical);
  llenarLista(tiposInversionListaHorizontal);

  const tipoInversionBoton = document.querySelector(".list-group-item");
  
  //tipoInversionBoton.addEventListener("click", function(){
  //tipoInversionBoton.classList.add("active");
//});

});

function llenarLista(tiposInversionLista){
  let tiposInversionObtenida = ["Ram", "Shyam", "Sita", "Gita"];// Tipos de inversion desde API
  for (let i = 0; i < tiposInversionObtenida.length; ++i) {
      let lista = document.createElement('li');
      lista.classList.add("list-group-item");
      lista.classList.add("list-group-item-action");
      $('li').attr('data-bs-toggle','list');
      lista.innerText = tiposInversionObtenida[i];
      tiposInversionLista.appendChild(lista);
  }
}

// Configuracion de la grafica:
(async function() {
    const dataArray = [
      { year: 2010, count: 13 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const data = {
      labels: dataArray.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: dataArray.map(row => row.count)
        }
      ]
    }
  
    new Chart(
      "myChart",
      {
        type: 'bar',
        data: data,
        options:{
          responsive:true,
          maintainAspectRatio: false,
        }
      }
    );
  })();

  // Inicialización de los tipos de inversion


