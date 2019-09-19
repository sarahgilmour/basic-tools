// Static tools
import Core from './tools/core.js';
import Net from './tools/net.js';
import Dom from './tools/dom.js';
import Util from './tools/util.js';

// Instantiatable components
import Evented from './components/evented.js';
import Templated from './components/templated.js';
import Popup from './components/popup.js';
import Tooltip from './components/tooltip.js';

export default class BT {
	
    static get nls() { return Core.nls; }
	
    static set nls(value) { Core.nls = value; }
	
    static get locale() { return Core.locale; }
	
    static set locale(value) { Core.locale = value; }
	
	static get Core() { return Core; }
	
	static get Net() { return Net; }
	
	static get Dom() { return Dom; }
	
	static get Util() { return Util; }
	
	static get Components() {
		return {
			Evented : Evented,
			Templated : Templated,
			Popup : Popup,
			Tooltip : Tooltip
		};
	}
}