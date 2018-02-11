var axios = require('axios');

const URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyALtmPBjLMXNCFxH99_aTLsZhmGUz9oDqM&address=';

module.exports = {
  getGeoCode: function (location) {
    var requestUrl = `${URL}${location}`;
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }, 
}