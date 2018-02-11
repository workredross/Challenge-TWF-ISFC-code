var axios = require('axios');

const URL = 'https://ifsc.razorpay.com/';

module.exports = {
  getIfscData: function (inputValue) {
    var requestUrl = `${URL}${inputValue}`;
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