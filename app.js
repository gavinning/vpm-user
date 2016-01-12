var prompt = require('prompt');

var username = {
    pattern: /^[a-zA-Z][a-zA-Z0-9\-]{4,16}$/,
    message: '用户名以字母开头，由字母、数字、中线组成，且不能少于5位',
    required: true
}

var email = {
    pattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    message: '请输入正确的邮箱地址，官方不会泄露',
    required: true
}

var password = {
    pattern: /.{6,16}/,
    message: '密码必须大于等于6位',
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
        schema.properties['verify password'] = password;
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
