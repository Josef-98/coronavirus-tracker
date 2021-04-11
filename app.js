$(function () {
  // get countries for selctor
  $.get("https://restcountries.eu/rest/v2/all",
    function (countrie) {

      for (let i = 0; i < countrie.length; i++) {
        //recuperation des donnee
        var name = countrie[i].name;
        var flag = countrie[i].flag;
        //creation du composant html card      
        var option = `   
                <option value="${flag}">${name}</option>`
        var content = $("#select").html();

        $("#select").html(content + option)

      }

    }

  )
  // get flag for every country
  $("#select").change(function () {
    var imgurl = (($(this).val()))
    var namecountry = ($(this).find('option:selected').text())
    var imghtml = `   
      <img src="${imgurl}" alt="" class="text-center rounded-circle " width="45"
      height="45">`
    $("#img").html(imghtml);
    // get datacorona

    $.get("https://corona.lmao.ninja/v3/covid-19/countries/" + namecountry,
      function (data) {
        console.log(data)
        var todayCases = data.todayCases;
        var todayRecovered = data.todayRecovered;
        var todayDeaths = data.todayDeaths;
        var totalCases = data.cases
        var totalRecovered = data.recovered
        var totalDeaths = data.deaths
        // console.log(Recovered)
        //creation du composant html recovred      
        var option2 = ` ${todayCases}`
        var content2 = $("#todayCases").html();

        $("#todayCases").html(option2)

        //creation du composant html confirmed     
        var option3 = ` ${todayRecovered}`
        var content3 = $("#todayRecovered").html();

        $("#todayRecovered").html(option3)

        //creation du composant html deaths     
        var option4 = ` ${todayDeaths}`
        var content4 = $("#todayDeaths").html();

        $("#todayDeaths").html(option4)

        //creation du composant html Total cases    
        var option5 = ` ${totalCases}`
        var content5 = $("#totalCases").html();

        $("#totalCases").html(option5)

        //creation du composant html Total cases    
        var option6 = ` ${totalRecovered}`
        var content6 = $("#totalRecovered").html();

        $("#totalRecovered").html(option6)

        //creation du composant html Total cases    
        var option7 = ` ${totalDeaths}`
        var content7 = $("#totalDeaths").html();

        $("#totalDeaths").html(option7)

      }



    )


  }); 

  // map
  $("#vmap").vectorMap({
    map: 'world_en',
    backgroundColor: 'white',
    borderColor: '#555',
    color: '#a691dd',
    hoverOpacity: 0.7,
    selectedColor: '#5431be',
    enableZoom: true,
    enableDrag: true,
    showTooltip: true,
    normalizeFunction: 'polynomial',

  });

 
}

)


