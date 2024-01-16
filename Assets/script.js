const key = "d8edc27e021c7cfd8f0799f88d400613";



$('#search-button').on('click', function (e) {
  e.preventDefault();

  const search = $('#search-input').val().trim();

  $('#today').attr('class', 'mt-3');
  
  fetchWeather(search);
});
