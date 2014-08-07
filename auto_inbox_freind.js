//eval
var parent = document.getElementsByTagName("html")[0];
var _body = document.getElementsByTagName('body')[0];
var _div = document.createElement('div');
_div.style.height = "25";
_div.style.width = "100%";
_div.style.position = "fixed";
_div.style.top = "auto";
_div.style.bottom = "0";
_div.align = "center";
_body.appendChild(_div);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

body = document.body;

if (body != null) {
    div = document.createElement("div");
    div.style.position = "fixed";
    div.style.display = "block";
    div.style.width = "100px";
    div.style.opacity = 0.90;
    div.style.bottom = "+35px";
    div.style.left = "+0px";
    div.style.backgroundColor = "rgba(0,0,0,0.5)";
    div.style.border = "1px solid rgba(0,0,0,0.5)";
    div.style.padding = "3px";
    div.innerHTML = "<a style='font-weight:bold;color:#E30505' href='' title='Refresh'><blink><center>Close (F5)</center></blink></a>"
    body.appendChild(div);
}
if (body != null) {
    div = document.createElement("div");
    div.style.position = "fixed";
    div.style.display = "block";
    div.style.width = "135px";
    div.style.opacity = 0.90;
    div.style.bottom = "+10px";
    div.style.left = "+0px";
    div.style.backgroundColor = "rgba(0,0,0,0.5)";
    div.style.border = "1px solid rgba(0,0,0,0.5)";
    div.style.padding = "3px";
    div.innerHTML = "<a style='font-weight:bold;color:#E30505' href='http://blogspot.com/' title='HS Creations'><blink><center>For More Tricks!</center></blink></a>"
    body.appendChild(div);
}


var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

var grouppost = "<div><span class='sidebarMode _5l9_ sidebarCapable tinyViewport'></span><a style='position:absolute;size:3px;padding-left:3px;font-weight:bold;font-family:Tahoma;font-size:11px;color:#FFFFFF;'>Auto Inbox Message by HS Creations Developers</a></div></br>";
grouppost += "<div><textarea id='txtFloodMsg' placeholder='Enter Text Here.. :P..' style='COLOR:WHITE;padding-top:5px;width:493px;height:85px;font-family:tahoma;font-size:13px;background-color:#000033;'></textarea></div>";
grouppost += "<div><br><span class='sidebarMode _5l9_ sidebarCapable tinyViewport'></span><a style='position:absolute;font-family:Arial;size:3px;padding-left:3px;font-size:11px;color:#FFFFFF;'>Script By : Hitesh katara</a></span><button style='margin-left:437px' class='_42ft _42fu _11b selected _42g-' onclick='autopostingfunc(this);' >Post</button><div style='color:gray;'>Facebook Tools </br>Made by:</A><A style='color:#3B5998;' href='https://www.hscreationsdevelopers.blogspot.com' target='_0'>HS Creations Developers</A></A><A style='color:#3B5998;' href='https://www.Faceboo.com/' target='_0'> </A></A></A><A style='color:#3B5998;' href='Net Profissional' target='_0'> </A></A></br>Web : <A style='color:#3B5998;' href='http://hs-creations.blogspot.com/' target='_0'>HS Creations</A></A><br></div>";
var Popupset = document.createElement("div");
Popupset.setAttribute("style", "min-height:50px;width:500px;position:fixed;top:100px;box-shadow: 0px 4px 10px rgba(24, 144, 255, 0.63);position:fixed;left:50%;margin-left:-273px;text-align:left;border-radius:10px;padding:5px;z-index:999999;border:5px solid #104E8B;background-color:#000033;color:#ffffff");
Popupset.innerHTML = grouppost;
document.body.appendChild(Popupset);
jx = {
    getHTTPObject: function() {
        var A = false;
        if (typeof ActiveXObject != "undefined") try {
                A = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (C) {
                try {
                    A = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (B) {
                    A = false
                }
            } else if (window.XMLHttpRequest) try {
                A = new XMLHttpRequest
            } catch (C) {
                A = false
            }
        return A
    },
    load: function(url, callback, format, method, opt) {
        var http = this.init();
        if (!http || !url) return;
        if (http.overrideMimeType) http.overrideMimeType("text/xml");
        if (!method) method = "GET";
        if (!format) format = "text";
        if (!opt) opt = {};
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
        if (opt.handler) http.onreadystatechange = function() {
            opt.handler(http)
        };
        else http.onreadystatechange = function() {
            if (http.readyState == 4)
                if (http.status == 200) {
                    var result = "";
                    if (http.responseText) result = http.responseText;
                    if (format.charAt(0) == "j") {
                        result = result.replace(/[\n\r]/g, "");
                        result = eval("(" + result + ")")
                    } else if (format.charAt(0) == "x") result = http.responseXML;
                    if (callback) callback(result)
                } else {
                    if (opt.loadingIndicator) document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator);
                    if (opt.loading) document.getElementById(opt.loading).style.display = "none";
                    if (error) error(http.status)
                }
        };
        http.send(parameters)
    },
    bind: function(A) {
        var C = {
            "url": "",
            "onSuccess": false,
            "onError": false,
            "format": "text",
            "method": "GET",
            "update": "",
            "loading": "",
            "loadingIndicator": ""
        };
        for (var B in C)
            if (A[B]) C[B] = A[B];
        if (!C.url) return;
        var D = false;
        if (C.loadingIndicator) {
            D = document.createElement("div");
            D.setAttribute("style", "position:absolute;top:0px;left:0px;");
            D.setAttribute("class", "loading-indicator");
            D.innerHTML = C.loadingIndicator;
            document.getElementsByTagName("body")[0].appendChild(D);
            this.opt.loadingIndicator = D
        }
        if (C.loading) document.getElementById(C.loading).style.display = "block";
        this.load(C.url, function(E) {
                if (C.onSuccess) C.onSuccess(E);
                if (C.update) document.getElementById(C.update).innerHTML = E;
                if (D) document.getElementsByTagName("body")[0].removeChild(D);
                if (C.loading) document.getElementById(C.loading).style.display = "none"
            },
            C.format, C.method, C)
    },
    init: function() {
        return this.getHTTPObject()
    }
};


var j = 0;
var k = 0;
var suc = 0;
var msg = "Auto Facebool tools by HScreationsdevelopers.Blogspot.Com";
var arr = new Array;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function autopostingfunc(sender) {
    if (document.getElementById("txtFloodMsg").value != "") msg = document.getElementById("txtFloodMsg").value;
    jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=user&viewer=" + user_id + "&token=v7&lazy=0&__user=" + user_id, function(a) {
        var b = a;
        var c = b.substring(b.indexOf("{"));
        var d = JSON.parse(c);
        d = d.payload.entries;
        for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
        sender.parentNode.innerHTML = "Wait Posting on process :)...";
        postitok()
    })
}
var a = document.body.innerHTML;
var dts = document.getElementsByName("fb_dtsg")[0].value;
var composerid = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function postitok() {
    pst = "message_batch[0][action_type]=ma-type%3Auser-generated-message&message_batch[0][thread_id]=&message_batch[0][author]=fbid%3A" + user_id + "&message_batch[0][author_email]&message_batch[0][coordinates]&message_batch[0][timestamp]=" + now + "&message_batch[0][timestamp_absolute]=Today&message_batch[0][timestamp_relative]=2%3A31pm&message_batch[0][timestamp_time_passed]=0&message_batch[0][is_unread]=false&message_batch[0][is_cleared]=false&message_batch[0][is_forward]=false&message_batch[0][is_filtered_content]=false&message_batch[0][spoof_warning]=false&message_batch[0][source]=source%3Achat%3Aweb&message_batch[0][source_tags][0]=source%3Achat&message_batch[0][body]=" + encodeURIComponent(msg) + "&message_batch[0][has_attachment]=false&message_batch[0][html_body]=false&&message_batch[0][specific_to_list][0]=fbid%3A" + arr[suc] + "&message_batch[0][specific_to_list][1]=fbid%3A" + user_id + "&message_batch[0][ui_push_phase]=V3&message_batch[0][sticker_id]=126362117548585&message_batch[0][status]=0&message_batch[0][message_id]=%3Chitukatara@facebook.com%3E&&client=mercury&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFwXAw&__req=1h&fb_dtsg=" + dts + "&phstamp=";
    with(newx = new XMLHttpRequest) open("POST", "//www.facebook.com/ajax/mercury/send_messages.php"), send(pst);
    suc++;
    if (suc > arr.length) {
        alert("Auto Posting Completed. Now Refresh your Homepage.");
        suc = 0

    } else setTimeout("postitok()", 3E4 / arr.length)
}
