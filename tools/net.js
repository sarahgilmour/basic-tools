export default class Net {
	
	/**
	* Execute a web request
	*
	* Parameters :
	*	url : String, the request URL
	*	success : Function, the success callback function
	*	failure : Function, the failure callback function
	* Return : none
	*
	* TODO : This should return a promise object
	*
	*/
	static Request(url, success, failure) {
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			if (this.readyState != 4) return;
		
			// TODO : Switched to this.response, check if it breaks anything
			if (this.status == 200) success(this.response);
			
			else failure({ status:this.status, response:this.response });
		};
		
		xhttp.open("GET", url, true);
		
		xhttp.send();
	}
	
	/**
	* Get a parameter value from the document URL
	*
	* Parameters :
	*	name : String, the name of the parameter to retrieve from the URL
	* Return : String, the value of the parameter from the URL, an empty string if not found
	*/
	static GetUrlParameter (name) {				
		name = name.replace(/[\[\]]/g, '\\$&');
		
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
		
		results = regex.exec(window.location.href);
		
		if (!results) return null;
		
		if (!results[2]) return '';
		
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
	
	/**
	* Download content as a file
	*
	* Parameters :
	*	name : String, the name of the file to download
	*	content : String, the content to assign to the downloaded file
	* Return : none
	*/
	static Download(name, content) {
		var link = document.createElement("a");
		
		link.href = "data:application/octet-stream," + encodeURIComponent(content);
		link.download = name;
		link.click();
		link = null;
	}
}