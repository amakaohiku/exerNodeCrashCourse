const url = require('url');

const myURL = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host (Root domain)
console.log(myURL.host);

// Host name (does not get the port)
console.log(myURL.hostname);

// Path name
console.log(myURL.pathname);

// Serialized query
console.log(myURL.search);

// Params Object
console.log(myURL.searchParams);

// Add params
myURL.searchParams.append('abc', '123');
console.log(myURL.searchParams);

// Loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
