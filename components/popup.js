import Dom from '../tools/dom.js';
import Core from '../tools/core.js';
import Templated from './templated.js';

export default class Popup extends Templated { 
	
	set Content(content) {
		this.content = content;
		
		Dom.Place(content, this.Node("body"));
	}
	
	get Content() { return this.content; }
	
	constructor() {	
		super(document.body);
		
		this.content = null;
		
		this.Node("close").addEventListener("click", this.onBtnClose_Click.bind(this));
		
		this.Hide();
	}
		
	Show() {
		this.Node("root").style.opacity = 1;
		this.Node("root").style.visibility = "visible";
	}
	
	Hide() {
		this.Node("root").style.opacity = 0;
		this.Node("root").style.visibility = "hidden";
	}
	
	onBtnClose_Click(ev) {
		this.Hide();
	}
	
	Template() {
		return "<div handle='root' class='popup'>" +
				  "<div class='popup-container'>" +
					  "<div class='popup-header'>" +
						  "<div class='popup-title' handle='title'></div>" +
						  "<button class='close' handle='close'>×</button>" +
					  "</div>" +
					
					  "<div class='popup-body' handle='body'></div>" +
				  "</div>" +
			  "</div>";
	}
}