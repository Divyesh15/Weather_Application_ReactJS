How to make weather application in ReactJS
1) wonder about how to get weather data?
Don't worry, there are lots of APIs out there which you can use to fetch required weather information for free with limited access. I have used OpenWeatherMap API for fetching weather information city-vise. Its free account allows to make up to 60 requests in a minute and you can fetch data with respect to various filter as per your need. You can check their services and plans on its official website: https://openweathermap.org/api/one-call-api
After creating an account, you need to get a key for making requests to API. The key can be found on your profile. You need to specify the key in an HTTP request that you make to access weather data.

2) Code in ReactJS
the main concept that would be helpful while making this application is ReactJs states. So if you don't know how the state in ReactJs works, then go and clear your concepts first. 
For those who are familiar with programming, State is just like a global variable and whenever you change the value of the state, it reflects immediately on the front-end.
Following things are changing as per the user requests
    city: City name
    status: (specify whether the information is found or not ) 
    country: Country name
    description: small description of weather condition 
    humidity: shows humidity 
    temp: shows the temperature
you can declare states as per your requirements.

3) Making an API call
you can fetch the weather details as per your need. The full description of ways of making calls is given on Openweathermap's website. don't forget to include key in the HTTP request.


You can refer my code for your reference and I strongly recommend you write your own code if you really want to develop something and strengthen your skills!
Happy Codding!


