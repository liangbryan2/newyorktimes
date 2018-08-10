var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var params = {'api-key': "cec53b1c160747d389d923d7adafdf94",};

url += '?' + $.param(params);
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

var startYearInput;
var endYearInput;

if ($('#startInput').val()) {
  if ((!isNaN(startYearInput)) && (startYearInput.length === 4)) {
    params['begin_date'] = $('#startInput').val() + '0101';
  }  
}

if ($('#endInput').val()) {
  if ((!isNaN(endYearInput)) && (endYearInput.length === 4)) {
    params['end_date'] = $('#endInput').val() + '1231';
  }  
}



