const configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds125060.mlab.com:25060/nodetodosample'
    }
}