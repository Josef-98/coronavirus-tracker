$(function () {
    // get all countries data corona
    $.get("https://corona.lmao.ninja/v3/covid-19/countries",
        function (data) {
            for (let i = 0; i < data.length; i++) {
                //recuperation des donnee
                var country = data[i].country;
                var flagurl = data[i].countryInfo.flag
                var iso3 = data[i].countryInfo.iso3
                var cases = data[i].cases
                var deaths = data[i].deaths
                var recovered = data[i].recovered
                var todayDeaths = data[i].todayDeaths
                var todayCases = data[i].todayCases
                var critical = data[i].critical
                var active = data[i].active
                //creation du composant html
                var option = `
                <div class="col-lg-6">
                   <div class="card my-3 text-center" >
                       <div class="card-header">
                           <h4  class="card-title"><span class="mr-2 mx-2"><img
                                       src="${flagurl}" width="50"
                                       alt=""></span> <span id="namecountry"  >${country}</span>
                           </h4>
                       </div>
                       <div class="card-body widget">
                           <div class="row">
                               <div class="col-xl-3 mb-3"> <span>Cases</span>
                                   <h4>${cases}</h4>
                               </div>
                               <div class="col-xl-3 mb-3"><span>Death</span>
                                   <h4>${deaths}</h4>
                               </div>
                               <div class="col-xl-3 mb-3"><span>Recovered</span>
                                   <h4>${recovered}</h4>
                               </div>
                               <div class="col-xl-3 mb-3"><span>Today Death</span>
                                   <h4>${todayDeaths}</h4>
                               </div>
                               <div class="col-xl-3 mb-3"><span>Today Cases</span>
                                   <h4>${todayCases}</h4>
                               </div>
                               <div class="col-xl-3 mb-3"><span>Critical</span>
                                   <h4>${critical}</h4>
                               </div>
                               <div class="col-xl-3 mb-3"><span>Active Cases</span>
                                   <h4>${active}</h4>
                               </div>
                           </div>
                        </div>
                   </div>

                </div>`

                var content = $("#test").html();

                $("#test").html(content + option)




            }
        })

    // cibler l'input search

    $("#inputsearch")
        .keyup(function () {
            var valuer = $("#inputsearch").val().toLowerCase();
            var countryname2 = $("#test").children()
            for (let i = 0; i < countryname2.length; i++) {
                var namecountry3 = $(countryname2[i]).find("#namecountry").text().toLowerCase();
                console.log(namecountry3)

                if(namecountry3.includes(valuer)==true){

                    $(countryname2[i]).removeClass("d-none")
                }
                else{
                    $(countryname2[i]).addClass("d-none")
                }

            }

        })








    // var input_search_task = document.getElementById('myInput');
    // // activer l'evenement keyup sur input 
    // input_search_task.addEventListener('keyup', filtertask)
    // function filtertask() {
    //     // recuper la valeur saisie par l'utilisateur 
    //     var searchKey = input_search_task.value.toLocaleLowerCase();
    //     // on cible tout la liste 
    //     var list_li_task = document.querySelectorAll("ul.list-task li")

    //     // parcourir la liste des li avec la boucle for 
    //     for (let i = 0; i < list_li_task.length; i++) {
    //         var task_value = list_li_task[i].children[1].textContent.toLocaleLowerCase();
    //         console.log(list_li_task[i].children)
    //         if (task_value.includes(searchKey) == true) {
    //             list_li_task[i].classList.remove("d-none")
    //         }
    //         else {
    //             list_li_task[i].classList.add("d-none")
    //         }

    //     }
    // }



})

