var prompt = require('prompt');

var username = {
    pattern: /^[a-zA-Z\s\-]+$/,
    message: 'Name must be only letters, spaces, or dashes',
    required: true
}

var email = {
    pattern: /\w@\w*\.\w/,
    message: 'Must be input your email',
    required: true
}

var password = {
    hidden: true,
    required: true
}

exports.reg = function(schema, fn){
    if(typeof schema === 'function'){
        fn = schema;
        schema = {};
        schema.properties = {};
        schema.properties.username = username;
        schema.properties.password = password;
        schema.properties.email = email;
    }
    prompt.message = exports.message || '';
    prompt.delimiter  = exports.delimiter || '';
    prompt.start();
    prompt.get(schema, fn);
}

exports.login = function(schema, fn){
    if(typeof schema === 'function'){
        fn = schema;
        schema = {};
        schema.properties = {};
        schema.properties.username = username;
        schema.properties.password = password;
    }
    prompt.message = exports.message || '';
    prompt.delimiter  = exports.delimiter || '';
    prompt.start();
    prompt.get(schema, fn);
}
