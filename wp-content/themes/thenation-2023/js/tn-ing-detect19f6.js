async function chrome76Detection() {
	if ('storage' in navigator && 'estimate' in navigator.storage) {
		const {usage, quota} = await navigator.storage.estimate();
		if(quota < 120000000)
			return true;
		else
			return false;
	} else {
		return false;
	}
}

function isNewChrome () {
    var pieces = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/);
    if (pieces == null || pieces.length != 5) {
        return undefined;
    }
    major = pieces.map(piece => parseInt(piece, 10))[1];
	if(major >= 76)
		return true
	return false;
}

var PrivateWindow = new Promise(function (resolve, reject) {
	try {
		var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
			   navigator.userAgent &&
			   navigator.userAgent.indexOf('CriOS') == -1 &&
			   navigator.userAgent.indexOf('FxiOS') == -1;
				 
		if(isSafari){
			//Safari
			var e = false;
			if (window.safariIncognito) {
				e = true;
			} else {
				try {
					window.openDatabase(null, null, null, null);
					window.localStorage.setItem("test", 1)
					resolve(false);
				} catch (t) {
					e = true;
					resolve(true); 
				}
				void !e && (e = !1, window.localStorage.removeItem("test"))
			}
		} else if(navigator.userAgent.includes("Firefox")){
			//Firefox
			var db = indexedDB.open("test");
			db.onerror = function(){resolve(true);};
			db.onsuccess =function(){resolve(false);};
		} else if(navigator.userAgent.includes("Edge") || navigator.userAgent.includes("Trident") || navigator.userAgent.includes("msie")){
			//Edge or IE
			if(!window.indexedDB && (window.PointerEvent || window.MSPointerEvent))
				resolve(true);
			resolve(false);
		} else {	//Normally ORP or Chrome
			//Other
			if(isNewChrome())
				resolve(chrome76Detection());

			const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
			if (!fs) resolve(null);
			else {
				fs(window.PERSISTENT, 100, function(fs) { 
					resolve(false);
				}, function(err) {
					resolve(true);
				});
			}
		}
	}
	catch(err) {
		console.log(err);
		resolve(null);
	}
});

function isPrivateWindow(callback) {
	if (navigator.userAgent.indexOf("MAZBot") > -1) {
		callback(false);
	} else {
		PrivateWindow.then(function(is_private) {
			console.log(is_private);
			callback(is_private);
		});	
	}	
}

isPrivateWindow(function(is_private) {
	if (is_private && check_user_logged_in == null) {
		
		dataLayer.push({
			'event': 'gaIncognitoPageView',
			'gaEventCategory': 'incognito-new',
			'gaEventAction': 'view',
			'gaEventLabel': document.location.origin,
		});	
		
		$('body').css('background', '#323639'); 
		
		var _popupHtml = '';
		var top_logo = document.location.origin + '/wp-content/themes/thenation/images/TheNation-logo-no-space.png';
		var middle_bolo = document.location.origin + '/wp-content/themes/thenation/images/the-nation-ad-blocker-new.png';
		
		_popupHtml += '<div style="background:#323639;height: 100%;position: absolute;top: 0;width: 100%;z-index: 9999999;">';
			_popupHtml += '<div style="max-width: 800px;margin: 0 auto;text-align: center;">';
				_popupHtml += '<div style="padding: 100px 15px 15px;">';
					_popupHtml += '<img src='+top_logo+' alt="The Nation">';
				_popupHtml += '</div>';
				
				_popupHtml += '<div class="content-part">';
					_popupHtml += '<h2 style="color: #fff;font-family: \'Knockout 49 A\',\'Knockout 49 B\';line-height: 34px;margin-bottom: 25px;">You’re using a browser set to<br>private or incognito mode.</h2>';
					_popupHtml += '<p style="font-size: 18px;color: #fff;margin-bottom: 60px;">To continue reading articles in this mode, please<br><a href="'+ document.location.origin +'/login/" style="color: #cc0e0e;text-decoration: underline !important;" class="tn-incognito-login">log in to your account.</a></p>';
					_popupHtml += '<p style="font-size: 18px;color: #fff;">Not a <i>Nation</i> subscriber?</p>';
					_popupHtml += '<a href="'+ thenation_globals.tn_incognito_sub +'" class="tn-incognito-sub" target="_blank" style="background: #cc0e0e;text-decoration: none;color: #fff;padding: 10px 16px;letter-spacing: 1px;font-size: 22px;white-space: nowrap;display: inline-block;font-family: \'Knockout 49 A\',\'Knockout 49 B\';text-transform: uppercase;">Subscribe Now</a>';
					_popupHtml += '<p style="font-size: 18px;color: #fff;"><a href="'+ document.location.origin +'"    class="tn-incognito-home" style="color: #cc0e0e;text-decoration: underline !important;margin-top: 60px; display: inline-block;">Back to <i>The Nation</i> homepage</a></p>';
					_popupHtml += '<p style="font-size: 18px;color: #fff;">If you believe you received this message in error, <a href="'+ document.location.origin +'/contact-us/" class="tn-incognito-contact" style="color: #cc0e0e;text-decoration: underline !important;">contact customer service.</a></p>';
				_popupHtml += '</div>';
			_popupHtml += '</div>';
		_popupHtml += '</div>';
		
		jQuery('body').append(_popupHtml);
		jQuery('body').css('overflow','hidden');
	}
});