const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter();

// Create event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');