window.addEventListener("load", function(){
  console.log("fuck1");
fuck();

});

function fuck(){
  let data = ["Ram", "Shyam", "Sita", "Gita"];
  let list = document.getElementById("tipos-inversion");
  for (i = 0; i < data.length; ++i) {
      let li = document.createElement('li');
      li.innerText = data[i];
      list.appendChild(li);
  }
}

// Configuracion de la grafica:
(async function() {
  console.log("fuck2");
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


