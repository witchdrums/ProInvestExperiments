window.addEventListener("load", function(){
  inicializarBotonSimularInversion();
  llenarLista();

});

function inicializarBotonSimularInversion(){
    $("#boton-simular-inversion").click(function(){
      console.log("hola :D");
    });
}

function llenarLista(){
  let divTiposInversion = document.getElementById("div-tipos-inversiones")
  let tiposInversionObtenidos = ["CETES", "BONOS", "BONDDIA", "BONDES", "INVERSIONX"];// Tipos de inversion desde API
  for (let i = 0; i < tiposInversionObtenidos.length; ++i) {
      let botonTipoInversion = document.createElement('input');
      if (i===0) {
          botonTipoInversion.setAttribute("checked","");
      }
      botonTipoInversion.setAttribute("id", tiposInversionObtenidos[i]);
      botonTipoInversion.setAttribute("type", "radio");
      botonTipoInversion.setAttribute("name", "tipo-inversion");
      botonTipoInversion.setAttribute("autocomplete", "off");
      botonTipoInversion.classList.add("btn-check");
      divTiposInversion.appendChild(botonTipoInversion);

      let labelTipoInversion = document.createElement("label");
      labelTipoInversion.classList.add("btn");
      labelTipoInversion.classList.add("btn-outline-primary");
      labelTipoInversion.setAttribute("for", tiposInversionObtenidos[i]);
      labelTipoInversion.innerText = tiposInversionObtenidos[i];
      divTiposInversion.appendChild(labelTipoInversion);
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


