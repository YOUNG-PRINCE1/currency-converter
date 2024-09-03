// $(document).ready(function () {
//     $.ajax({
//         type: "get",
//         url: "'https://weather-forcast-30-days.p.rapidapi.com/",
//         dataType: "json",
//         headers: {
//             'x-rapidapi-key': '19f1293594msh2a43548bd23c04bp13c891jsn8d348a0842de',
//             'x-rapidapi-host': 'weather-forcast-30-days.p.rapidapi.com'
//         },
//         success: function (response) {
//             console.log(response);
            
//         },
//         error: function(err){
//             console.log(err);
//         }
//     });
// });

// $(document).ready(function () {
    
//     $.ajax({
//         type: "get",
//         url: "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",
//         dataType: "json",
//         headers: {
//             'x-rapidapi-key': '19f1293594msh2a43548bd23c04bp13c891jsn8d348a0842de',
//             'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
//         },
//         success: function (response) {
//             $.each(response, function (index, element) { 
//                  let option = `<option value="${element.symbol}">${element.name}</option>`

//                  $("#from").append(option)
//                  $("#to").append(option)
//             });
            
//         },


//         error: function (err){
//             console.log(err);
            
//         }
//     });
// });

// $("button").click(function(){
//     let text = $("input").val()
//     let currencyfrom = $("#from").val()
//     let currencyto = $("#to").val()


//     $.ajax({
//         type: "post",
//         url: "https://currency-converter18.p.rapidapi.com/api/v1/convert?from=EUR&to=KWD&amount=10",
//         dataType: "json",
//         data: {from: currencyfrom, to: currencyto, text: text},
//         headers: {
//             'x-rapidapi-key': '19f1293594msh2a43548bd23c04bp13c891jsn8d348a0842de',
//             'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
//         },
//         success: function (response) {
//             console.log(response);
                        
//         },
//         error: function(response){
//             console.log(err);
            
//         }
//     });
// })

$(document).ready(function () {
    
    $.ajax({
        type: "get",
        url: "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",
        dataType: "json",
        headers: {
            'x-rapidapi-key': '73bf3dc9f0mshdd15137a87b6ecap193e9ajsn74ab3ffad566',
            'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
        },
        success: function (response) {
            $.each(response, function (index, element) { 
                 let option = `<option value="${element.symbol}">${element.name}</option>`

                 $("#from").append(option)
                 $("#to").append(option)
            });
            
        },


        error: function (err){
            console.log(err);
            
        }
    });
});

$("button").click(function(){
    let text = $("input").val()
    let currencyfrom = $("#from").val()
    let currencyto = $("#to").val()


    $.ajax({
        type: "get",
        url: `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${currencyfrom}&to=${currencyto}&amount=${text}`,
        dataType: "json",
        headers: {
            'x-rapidapi-key': '73bf3dc9f0mshdd15137a87b6ecap193e9ajsn74ab3ffad566',
            'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
        },
        success: function (response) {
            $("h2").text(response.result.convertedAmount);
          
            
                        
        },
        error: function(response){
            console.log(err);
            
        }
    });
})