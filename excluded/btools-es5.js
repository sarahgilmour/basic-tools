// This is a workaround for ie11 because it doesn't support es6. The point is to wrap the 
// ES6 stuff into a single entry point that can be rolled up from the API side instead of
// the application side. This will give us a js file that can be included in the application 
// as a standard es5 script file.
import BT_ES6 from './btools.js';

window.BT = BT_ES6;