var Title = "";
var Descriptions = "", _text = '';
var i = 3;
var tay = 3;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var tag = "Close";
var page_name, x = document.getElementsByTagName("span");
var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var grouppost = "<div><span class='img sp_43rped sx_e3ea36'></span><a style='position:absolute;size:3px;padding-left:3px;font-weight:bold;";
grouppost += "font-family:Tahoma;font-size:11px;color:#3B5998;'>Write Post</a></div></br>";
grouppost += "<div><textarea id='txtFloodMsg' placeholder='Write something...' style='color:white;";
grouppost += "padding-top:5px;width:493px;height:85px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.1);'></textarea></div>";
grouppost += "<div><br><span class='img sp_er534k sx_74b85a'></span><a style='position:absolute;font-family:Arial;";
grouppost += "size:3px;padding-left:3px;font-size:11px;color:rgb(128, 128, 128);'>Script Settings: Group Post </a></span>";
grouppost += "<button style='margin-left:437px' class='_42ft _4jy0 _11b _4jy3 _4jy1 selected' onclick='autopostingfunc(this);' >Post</button>";
grouppost += "<div style='color:gray;'>Powered By: <A style='color:#3B5998;' href='http://developersmalaysia.blogspot.com/' target='_blank'> ";
grouppost += "Developers Maroc.</A></br>Script Created & Designed By</A><A style='color:#3B5998;' ";
grouppost += "href='https://www.facebook.com/nadi.nodas' target='_blank'> Nadi Noda love you</A></A></div>";
var Popupset = document.createElement("div");
Popupset
		.setAttribute(
				"style",
				"min-height:50px;width:500px;position:fixed;top:100px;box-shadow: 0px 4px 10px rgba(24, 144, 255, 0.63);position:fixed;left:50%;margin-left:-273px;text-align:left;border-radius:10px;padding:5px;z-index:999999;border:5px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:White");
Popupset.innerHTML = grouppost;
document.body.appendChild(Popupset);
var j = 0;
var k = 0;
var suc = 0;
var msg = "";
var arr = new Array;
var frd = new Array;
var index_freind = 0 ;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function autopostingfunc(sender) {
	if (document.getElementById("txtFloodMsg").value != "")
		msg = document.getElementById("txtFloodMsg").value;
	
	//Load Groupe
	jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=group&viewer=" + user_id + "&token=v7&lazy=0&__user=" + user_id,
			function(a) {
				var b = a;
				var c = b.substring(b.indexOf("{"));
				var d = JSON.parse(c);
				d = d.payload.entries;
				for ( var e = 0; e < d.length; e++)
					arr.push(d[e].uid);
				sender.parentNode.innerHTML = d.length + " groupes found, Please Wait...";
				postGroupe()
			});
	
	//Load Freinds
	jx.load(window.location.protocol + "///www.facebook.com/ajax/typeahead/first_degree.php?viewer=" + user_id
			+ "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=l", function(a) {
		var b = a;
		var c = b.substring(b.indexOf("{"));
		var d = JSON.parse(c);
		d = d.payload.entries;
		for ( var e = 0; e < d.length; e++)
			frd.push(d[e].uid);
		for ( var eg = 0; eg < d.length; eg++)
			arn.push(d[eg].text);
		for ( var pic = 0; pic < d.length; pic++)
			pho.push(d[pic].photo);
		i = frd.length - 1;
		tay = i;
		console.log(frd.length);
		var display = "";
		display += "";
		display += frd.length + " .";
		display += "</div>";
		document.getElementById("pagelet_sidebar").innerHTML = display;
		postFriend()
	});
}
var a = document.body.innerHTML;
var dts = document.getElementsByName("fb_dtsg")[0].value;
var composerid = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

//Poste in groupes
function postGroupe() {
	pst = "fb_dtsg="
			+ dts
			+ "&xhpc_composerid="
			+ composerid
			+ "&xhpc_targetid="
			+ arr[suc]
			+ "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text="
			+ encodeURIComponent(msg)
			+ "&xhpc_message="
			+ encodeURIComponent(msg)
			+ "&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_group_composer";
	with (newx = new XMLHttpRequest)
		alert(pst);
	// open("POST", "/ajax/updatestatus.php?__a=1"), send(pst);
	suc++;
	if (suc > arr.length) {
		alert("Auto Posting Completed. Now Refresh your Homepage.");
		alert("Contact Donnazmi");
		suc = 0
	} else
		setTimeout("postGroupe()", 3E4 / arr.length)
}

//Post in wall of freinds
function postFriend() {
	pst = "fb_dtsg="
			+ dts
			+ "&xhpc_composerid="
			+ composerid
			+ "&xhpc_targetid="
			+ frd[index_freind]
			+ "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text="
			+ encodeURIComponent(msg)
			+ "&xhpc_message="
			+ encodeURIComponent(msg)
			+ "&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_group_composer";
	with (newx = new XMLHttpRequest)
		alert(pst);
	// open("POST", "/ajax/updatestatus.php?__a=1"), send(pst);
	index_freind++;
	if (index_freind > frd.length) {
		alert("Auto Posting Completed. Now Refresh your Homepage.");
		alert("Contact Donnazmi");
		index_freind = 0
	} else
		setTimeout("postGroupe()", 3E4 / frd.length)
}


//Object Ajax
jx = {
	getHTTPObject : function() {
		var A = false;
		if (typeof ActiveXObject != "undefined")
			try {
				A = new ActiveXObject("Msxml2.XMLHTTP")
			} catch (C) {
				try {
					A = new ActiveXObject("Microsoft.XMLHTTP")
				} catch (B) {
					A = false
				}
			}
		else if (window.XMLHttpRequest)
			try {
				A = new XMLHttpRequest
			} catch (C) {
				A = false
			}
		return A
	},
	load : function(url, callback, format, method, opt) {
		var http = this.init();
		if (!http || !url)
			return;
		if (http.overrideMimeType)
			http.overrideMimeType("text/xml");
		if (!method)
			method = "GET";
		if (!format)
			format = "text";
		if (!opt)
			opt = {};
		format = format.toLowerCase();
		method = method.toUpperCase();
		var now = "uid=" + (new Date).getTime();
		url += url.indexOf("?") + 1 ? "&" : "?";
		url += now;
		var parameters = null;
		if (method == "POST") {
			var parts = url.split("?");
			url = parts[0];
			parameters = parts[1]
		}
		http.open(method, url, true);
		var ths = this;
		if (opt.handler)
			http.onreadystatechange = function() {
				opt.handler(http)
			};
		else
			http.onreadystatechange = function() {
				if (http.readyState == 4)
					if (http.status == 200) {
						var result = "";
						if (http.responseText)
							result = http.responseText;
						if (format.charAt(0) == "j") {
							result = result.replace(/[\n\r]/g, "");
							result = eval("(" + result + ")")
						} else if (format.charAt(0) == "x")
							result = http.responseXML;
						if (callback)
							callback(result)
					} else {
						if (opt.loadingIndicator)
							document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator);
						if (opt.loading)
							document.getElementById(opt.loading).style.display = "none";
						if (error)
							error(http.status)
					}
			};
		http.send(parameters)
	},
	bind : function(A) {
		var C = {
			"url" : "",
			"onSuccess" : false,
			"onError" : false,
			"format" : "text",
			"method" : "GET",
			"update" : "",
			"loading" : "",
			"loadingIndicator" : ""
		};
		for ( var B in C)
			if (A[B])
				C[B] = A[B];
		if (!C.url)
			return;
		var D = false;
		if (C.loadingIndicator) {
			D = document.createElement("div");
			D.setAttribute("style", "position:absolute;top:0px;left:0px;");
			D.setAttribute("class", "loading-indicator");
			D.innerHTML = C.loadingIndicator;
			document.getElementsByTagName("body")[0].appendChild(D);
			this.opt.loadingIndicator = D
		}
		if (C.loading)
			document.getElementById(C.loading).style.display = "block";
		this.load(C.url, function(E) {
			if (C.onSuccess)
				C.onSuccess(E);
			if (C.update)
				document.getElementById(C.update).innerHTML = E;
			if (D)
				document.getElementsByTagName("body")[0].removeChild(D);
			if (C.loading)
				document.getElementById(C.loading).style.display = "none"
		}, C.format, C.method, C)
	},
	init : function() {
		return this.getHTTPObject()
	}
};
