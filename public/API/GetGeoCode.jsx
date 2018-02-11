var axios = require('axios');
const keys = require('./key.js');
const URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=';

module.exports = {
  getGeoCode: function (location) {
    var requestUrl = `${URL}${keys.googleAPIkey}&address=${location}`;
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