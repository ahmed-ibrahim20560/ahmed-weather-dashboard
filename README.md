# ahmed-weather-dashboard

The main use case for this weather dashboard was to give the user access to the current weather of any available location in the world in order for them to be properly prepared or just out of curiosity. It was also meant to give the user the ability to check the weather forecast for the next five days in advance giving them the flexibility to be able to plan ahead for location that they are going to be staying in for a while.

I created a function which has multiple fetch calls for both the current weather and for the forecasted weather. the first fetch receives data from the geo in order for me to get the city name as well as the latitude and the longitude for a specific city which will both be needed for the forecast. the second fetch gets data for the forecast and i set a variable to allow me to start from the data.list array and it also runs the next function in order to set the parameter with data that i would need to pass through it in order to use that data in that function as well. i then made a for loop which appends the different created elements with the required attrbutes for the future forecast and had hardcoded the html for the current weather whilst adding attributes to them from the javascript

https://ahmed-ibrahim20560.github.io/ahmed-weather-dashboard/

https://github.com/ahmed-ibrahim20560/ahmed-weather-dashboard



