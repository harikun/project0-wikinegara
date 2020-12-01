const negara = document.getElementById('country-search')
const print  = document.getElementById('output')
const getData=()=>{
      const url = `https://restcountries.eu/rest/v2/name/${negara.value}`
         $.ajax({
             url: url
         })
         .done(result)
     }
const cleanData =() => {
        print.innerHTML = "";
    }


$('#search').click(getData);
$('#delete').click(cleanData);   
const result = data =>{
        console.log(data)
        print.innerHTML +=  `
        <div class="card">
        <div class="card-header">
        ${data[0].name}
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0 ">
            <p> Official name of your country is ${data[0].nativeName}, 
                is a country in ${data[0].region}. ${data[0].name} has ${data[0].population} people who is life with harmony.

                The country's capital  ${data[0].capital}. people in this country speak with 
                ${data[0].languages[0].name} language.<br>
             
                at this country if you can buy some food or another thing, you can buy using ${data[0].currencies[0].name}.
                ${data[0].currencies[0].name} has ${data[0].currencies[0].symbol} symbol on the currency. 
                ${data[0].currencies[0].name} is legal currency in this country. <br>
                
                ${data[0].name} has  ${data[0].timezones}. this time zone you need to attantion because almost every
                country has different time zone. if you to know more about this country, you
                can search on some official website about this country, <br> ${data[0].topLevelDomain} is their official website
                yang provide official data or something that you are looking for.
                <br>
            </p>
                <footer class="blockquote-footer">this information provide by <cite title="Source Title">https://restcountries.eu</cite></footer>
            </blockquote>
        </div>
        </div> 
        ` 
                   
 
     }

