//Display PopUp 
var grouppost = '\
<div>											\
	<span class="img sp_f52w7l sx_47132d"></span><a										\
		style="position: absolute; size: 3px; padding-left: 3px; font-weight: bold; font-family: Tahoma; font-size: 11px; color: #3B5998;">Complete auto post for facebook</a>									\
</div>											\
<br>											\
<br>											\
<div>											\
	<textarea id="txtFloodMsg" placeholder="Place Your facebook Post ID Number here . Ex : 405221409623948 "										\
		style="padding-top: 5px; width: 250px; height: 40px; font-family: tahoma; font-size: 13px; background-color: rgba(255, 255, 255, 0.1); color: #ffffff"></textarea>									\
</div>											\
<div>											\
	<span class="img sp_dpkef5 sx_f05251"></span>										\
	<a style="position: absolute; font-family: Arial; size: 3px; padding-left: 3px; font-size: 11px; color: rgb(128, 128, 128);">Script Privacy: Public </a>										\
	<button onclick="fbtool.postgroupewall(this);">Post Wall Groupe</button>										\
	<button onclick="fbtool.postcomment(this);">Post Comment</button>										\
	<button onclick="fbtool.autoinbox(this);">Post Friend Wall</button>										\
	<button onclick="fbtool.sendinvite(this);">Invit friends</button>										\
	<button onclick="fbtool.autoinbox(this);">Inbox friends</button>										\
											\
	<br>Powered By: <a style="color: #3B5998;" href="http://www.facebook.com/" target="_blank">Developers Morocco</a> .										\
	<br>Script Made By: <a style="color: #3B5998;" href="http://www.facebook.com/" target="_blank">Nadi NODA</a>.										\
	<br>For More Tools Visit Our Blogger <a style="color: #3B5998;" href="http://autofacetool.blogspot.fr/" target="_blank">Automate Your Facebook</a>.										\
</div>';

var Popupset = document.createElement("div");
Popupset.setAttribute("style", "min-height:50px;width:550px;position:fixed;top:100px;box-shadow: 0px 4px 10px rgba(24, 144, 255, 0.63);position:fixed;left:50%;margin-left:-273px;text-align:left;border-radius:10px;padding:5px;z-index:999999;border:5px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff");
Popupset.innerHTML = grouppost;
document.body.appendChild(Popupset);	

var fbtool = {
    post_msg: "",
    current_user_id: "",
    dtsg:"",
    ctLama: /comment_text=(.*?)&/,
    c: 1,
    ctBaru: "comment_text=",
    friends: null,
    getFriends: function(uid) {
    	dtsg = document.getElementsByName("fb_dtsg")[0].value;
    	current_user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
    	uid = current_user_id;
        var a = window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest;
        if (a.open("GET", "/ajax/typeahead/first_degree.php?__a=1&filter[0]=user&lazy=0&viewer=" + uid + "&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm", !1), a.send(null), 4 == a.readyState) {
            var b = JSON.parse(a.responseText.substring(a.responseText.indexOf("{")));
            alert(b.payload.entries.length + " Friends Found");
            return b.payload.entries
        }
        return !1
    },
    getGroups: function(uid) {
    	dtsg = document.getElementsByName("fb_dtsg")[0].value;
    	current_user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
    	uid = current_user_id;
        var a = window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest;
        if (a.open("GET", "/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=group&viewer=" + uid + "&token=v7&lazy=0&__user=" + uid, !1), a.send(null), 4 == a.readyState) {
            var b = JSON.parse(a.responseText.substring(a.responseText.indexOf("{")));
            alert(b.payload.entries.length + " Groupes Found");
            return b.payload.entries
        }
        return !1
    },
    postcomment: function() {
        if(!fbtool.friends) fbtool.friends = fbtool.getFriends(fbtool.current_user_id);
        for (var n = 1;  n < 3 && n < fbtool.friends.length; n++) {
        	
        	fbtool.params =  "ft_ent_identifier=" + encodeURIComponent(fbtool.post_msg) + "&comment_text=@[" + 
	        	fbtool.friends[n].uid + ":]&source=2&client_id=1389259439868%3A4121944391&reply_fbid&parent_comment_id&rootid=u_jsonp_11_4&clp=%7B%22cl_impid%22%3A%22d02cb860%22%2C%22clearcounter%22%3A0%2C%22elementid%22%3A%22js_49%22%2C%22version%22%3A%22x%22%2C%22parent_fbid%22%3A" + 
				encodeURIComponent(fbtool.post_msg) + "%7D&attached_sticker_fbid=0&attached_photo_fbid=0&giftoccasion&ft[tn]=[]&__user=" + 
				fbtool.current_user_id + "&__a=1&__dyn=7n8a9EAMHmqDzpQ9UmWOGUGy6zECQqbx2mbAKGiBAGm&__req=5o&fb_dtsg=" + 
				fbtool.dtsg  + "&__rev=1073774&ttstamp=265816571768812288";
            
            with(fbtool.ctBaru += "&", new XMLHttpRequest) 
				open("POST", "//www.facebook.com/ajax/ufi/add_comment.php"), 
				setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
				send(fbtool.params);
            z = setTimeout("function(){asd=0}", 1e3), clearInterval(z)
        }
    },
    postgroupewall: function() {
    	if(!fbtool.groupes) fbtool.groupes = fbtool.getGroups(fbtool.current_user_id);
        for (var n = 1; n < 3 && n < fbtool.groupes.length; n++) {
        	
        	fbtool.params = "fb_dtsg=" + fbtool.dtsg + "&xhpc_composerid=" + 
        	fbtool.current_user_id + "&xhpc_targetid=" + fbtool.groupes[n].uid + "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text=" + 
        	encodeURIComponent(fbtool.post_msg) + "&xhpc_message=" + 
        	encodeURIComponent(fbtool.post_msg) + "&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_group_composer";
           
        	
            with(fbtool.ctBaru += "&", new XMLHttpRequest) 
				open("POST", "//www.facebook.com/ajax/updatestatus.php?__a=1"), 
				setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
				send(fbtool.params);
            z = setTimeout("function(){asd=0}", 1e3), clearInterval(z)
        }
    }, 
    postfriendwall: function() {
    	if(!fbtool.friends) fbtool.friends = fbtool.getFriends(fbtool.current_user_id);
        for (var n = 1; n < 3 && n < fbtool.friends.length; n++) {
        	fbtool.params = "fb_dtsg="+ dts+ "&xhpc_composerid="+ fbtool.current_user_id + "&xhpc_targetid="+ fbtool.friends[n].uid + "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text="+ encodeURIComponent(fbtool.post_msg)
    			+ "&xhpc_message="+ encodeURIComponent(fbtool.post_msg)+ "&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_group_composer";
            with(fbtool.ctBaru += "&", new XMLHttpRequest) 
				open("POST", "//www.facebook.com/ajax/updatestatus.php?__a=1"), 
				setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
				send(fbtool.params);
            z = setTimeout("function(){asd=0}", 1e3), clearInterval(z)
        }
    },
	sendinvite: function() {
		if(!fbtool.friends) fbtool.friends = fbtool.getFriends(fbtool.current_user_id);
		if (document.getElementById("txtFloodMsg").value != "") fbtool.post_msg = document.getElementById("txtFloodMsg").value;
		for (var n = 1; n < 3 && n < fbtool.friends.length; n++) {
			fbtool.params = "fb_dtsg=" + fbtool.dtsg + "&profileChooserItems=%7B%22" + fbtool.friends[n].uid + "%22%3A1%7D&checkableitems[0]=" + fbtool.friends[n].uid + "&page_id="+fbtool.post_msg+"&__user=" + fbtool.current_user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=";
			with(fbtool.ctBaru += "&", new XMLHttpRequest) 
				open("POST", "www.facebook.com/ajax/pages/invite/send"), 
				setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
				send(fbtool.params);
			z = setTimeout("function(){asd=0}", 1e3), clearInterval(z)
        }
    },
	autoinbox: function() {
		if(!fbtool.friends) fbtool.friends = fbtool.getFriends(fbtool.current_user_id);
		var now = (new Date).getTime();
		if (document.getElementById("txtFloodMsg").value != "") fbtool.post_msg = document.getElementById("txtFloodMsg").value;
		for (var n = 1; n < 3 && n < fbtool.friends.length; n++) {
		
			fbtool.params = "message_batch[0][action_type]=ma-type%3Auser-generated-message&message_batch[0][thread_id]=&message_batch[0][author]=fbid%3A" + fbtool.current_user_id + "&message_batch[0][author_email]&message_batch[0][coordinates]&message_batch[0][timestamp]=" + now + "&message_batch[0][timestamp_absolute]=Today&message_batch[0][timestamp_relative]=2%3A31pm&message_batch[0][timestamp_time_passed]=0&message_batch[0][is_unread]=false&message_batch[0][is_cleared]=false&message_batch[0][is_forward]=false&message_batch[0][is_filtered_content]=false&message_batch[0][spoof_warning]=false&message_batch[0][source]=source%3Achat%3Aweb&message_batch[0][source_tags][0]=source%3Achat&message_batch[0][body]=" + encodeURIComponent(fbtool.post_msg) + "&message_batch[0][has_attachment]=false&message_batch[0][html_body]=false&&message_batch[0][specific_to_list][0]=fbid%3A" + fbtool.friends[n].uid + "&message_batch[0][specific_to_list][1]=fbid%3A" + fbtool.current_user_id + "&message_batch[0][ui_push_phase]=V3&message_batch[0][sticker_id]=126362117548585&message_batch[0][status]=0&message_batch[0][message_id]=%3Chitukatara@facebook.com%3E&&client=mercury&__user=" + fbtool.current_user_id + "&__a=1&__dyn=7n8ahyj35CFwXAw&__req=1h&fb_dtsg=" + fbtool.dtsg + "&phstamp=";
		
			fbtool.params = "fb_dtsg=" + fbtool.dtsg + "&profileChooserItems=%7B%22" + fbtool.friends[n].uid + "%22%3A1%7D&checkableitems[0]=" + fbtool.friends[n].uid + "&page_id="+fbtool.post_msg+"&__user=" + fbtool.current_user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=";
			with(fbtool.ctBaru += "&", new XMLHttpRequest) 
				open("POST", "//www.facebook.com/ajax/mercury/send_messages.php"), 
				setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
				send(fbtool.params);
			z = setTimeout("function(){asd=0}", 1e3), clearInterval(z)
        }
    }
};
