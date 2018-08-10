var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var params = {'api-key': "cec53b1c160747d389d923d7adafdf94",};

url += '?' + $.param(params);

var startYearInput = $('#startYear').val();
var endYearInput = $('#endYear').val();

// checks for start date param
if (startYearInput) {
  if ((!isNaN(startYearInput)) && (startYearInput.length === 4)) {
    params['begin_date'] = startYearInput + '0101';
  }  
}

// checks for end date param 
if (endYearInput) {
  if ((!isNaN(endYearInput)) && (endYearInput.length === 4)) {
    params['end_date'] = endYearInput + '1231';
  }  
}

var searchTerm = $('#search').val();

params['q'] = searchTerm;

var numRecords = parseInt($('#numberofrecords').val());

$('#search').on('click', function() {
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    for (var i = 0; i < numRecords; i++) {
      var newDiv = $('<div>');
      var title = result.response.docs[i].headline.main;
      var author = result.response.docs[i].byline.original;
      var link = result.response.docs[i].web_url;
      var linkTag = $('<a>');
      linkTag.attr('href', link);
      linkTag.text(title);
      newDiv.append(linkTag);
      newDiv.append(author);
      $('#result').prepend(newDiv);
    }
  }).fail(function(err) {
    throw err;
  });

});







