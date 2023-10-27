
window.addEventListener("load", function(){
  inicializarBotonSimularInversion();
  let tiposInversionListaVertical = document.getElementById("tipos-inversion");
  let tiposInversionListaHorizontal = document.getElementById("tipos-inversion-horizontal");
  llenarLista(tiposInversionListaVertical);
  llenarLista(tiposInversionListaHorizontal);

  
  //const tipoInversionBoton = document.querySelector(".list-group-item");
  
  //tipoInversionBoton.addEventListener("click", function(){
  //tipoInversionBoton.classList.add("active");
//});

});

function inicializarBotonSimularInversion(){
  /*
  const boton = document.getElementById("boton-simular-inversion");
  boton.addEventListener("click", function(){
    $("#myModal").modal();
  });
*/
console.log("inicializarBotonSimularInversion")
$("#boton-simular-inversion").click(function(){
  $("#myModal").modal();
});
}

function llenarLista(tiposInversionLista){

  let tiposInversionObtenidos = ["Ram", "Shyam", "Sita", "Gita", "fuck"];// Tipos de inversion desde API
  for (let i = 0; i < tiposInversionObtenidos.length; ++i) {
      let tipoInversion = document.createElement('li');
      tipoInversion.classList.add("list-group-item");
      tipoInversion.classList.add("list-group-item-action");
      tipoInversion.innerText = tiposInversionObtenidos[i];
      tiposInversionLista.appendChild(tipoInversion);
  }

  // 
  $('li').attr('data-bs-toggle','list');
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


