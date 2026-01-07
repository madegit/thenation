var tnAdBlock = false;
//adblock detection:start
var ADS_URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

function checkAdsBlocked(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callback(xhr.status === 0 || xhr.responseURL !== ADS_URL);
        }
    };
    xhr.open('HEAD', ADS_URL, true);
    xhr.send(null);
}
checkAdsBlocked(function(adsBlocked) {
    tnAdBlock = adsBlocked;
});
//adblock detection:end


	if (typeof tn_custom_variables === 'undefined') {
		var tn_custom_variables = {};
	}

	
    let user_role = "anonymous"; 
    let user_zip = '';
    var checknc 		   = getCookie('SESSchecknc');
		var currentUrl 		   = document.URL;
		
		function getCookie(name){
			var re = new RegExp(name + "=([^;]+)");
			var value = re.exec(document.cookie);
			return (value != null) ? unescape(value[1]) : null;
		}		
		var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
		var global_vars = {site_url:'https://www.thenation.com',login_text:'Log In',login_url:'https://www.thenation.com/login/',admin_link:'https://www.thenation.com/wp-admin/', dash_link: 'https://www.thenation.com/dashboard'}; 
		var user_name_cookie = getCookie('SESSname');
		var admin_name_cookie = getCookie('SESSadminname');
		var is_admin_cookie = getCookie('is_admin');
	
		if (is_admin_cookie == "true") {
			var check_user_logged_in = 1;
		} else {
			var check_user_logged_in = user_name_cookie;
		}
			
		if(check_user_logged_in != null){
			
			var check_user_info = getCookie('SESSuserinfo');
			
			if (check_user_info != null) {
				check_user_info = Base64.decode(check_user_info);	
				check_user_info = JSON.parse(check_user_info);
				var user_roles = check_user_info.roles;
        user_zip = check_user_info.zip;	
				
				if (user_roles.includes('subscriber') && null == getCookie('SESSsus_user')) {
					user_role = "subscriber";	
				}

				if (user_roles.includes('nation_user') && null == getCookie('SESSexpireduser')) {
					user_role = "nation_user";
				}
				
				if ((user_roles.includes('subscriber') || user_roles.includes('nation_user')) && null != getCookie('SESSsus_user')) {
					user_role = "suspended_user";
				}

				if (user_roles.includes('nation_user') && null != getCookie('SESSexpireduser')) {
					user_role = "expired_user";
				}	
				
				if (user_roles.includes('nation_user') && null != getCookie('SESSfree_user')) {
					user_role = "free_user";
				}
				if (user_roles.includes('staff_subscriber') && null != getCookie('SESSstaff_sub_user')) {
					user_role = "staff_subscriber";
				}
				
				if (user_roles.includes('premium_subscriber')) {
					user_role = "premium_subscriber";
				}
			} else {
				user_role = "cms_user";
			}	

		}
		//paywall counter
			let hard_paywall = false;
			let unique_IDs = [];
			let tn_free_articles = [];
			let total_pageviews = 0;
			let cookie_suffix = (user_role == "anonymous")?"anon":"reg";
			let paywall_cookie = "article_counter_"+cookie_suffix;
			let paywall_cookie_expiry = null;
			const paywall_cookie_data = getCookie(paywall_cookie);
			if(paywall_cookie_data) {
			const parsed_pcd = JSON.parse(paywall_cookie_data);
			unique_IDs = parsed_pcd.unique_IDs;
			tn_free_articles = [...unique_IDs];
			total_pageviews = parsed_pcd.total;
			paywall_cookie_expiry = parsed_pcd.expiry;
			}
			//push pageviews if article
			if(tnContentSection == "article"){
			if(unique_IDs.indexOf(tnPostID) === -1) unique_IDs.push(tnPostID);
			total_pageviews += 1;
			setPaywallCookie(unique_IDs, total_pageviews, paywall_cookie_expiry, null, null, paywall_cookie);
			}




function getLightboxCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

function tnDebounce(fn, wait = 100) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

function unitToMilliseconds(unit) {
  switch (unit) {
    case 'seconds':
      return 1000; // 1 second = 1000 ms
    case 'minutes':
      return 60 * 1000; // 1 minute = 60 seconds
    case 'hours':
      return 60 * 60 * 1000; // 1 hour = 60 minutes
    case 'days':
      return 24 * 60 * 60 * 1000; // 1 day = 24 hours
	  case 'weeks':
		return 7 * 24 * 60 * 60 * 1000; // ..1 Week = 7 days
    case 'months':
      // Assume 1 month = 30 days
      return 30 * 24 * 60 * 60 * 1000;
    case 'years':
      // Assume 1 year = 365 days
      return 365 * 24 * 60 * 60 * 1000;
    default:
    return 0;
  }
}

function getClientInfo() {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    // Device Type
    let deviceType = "Desktop";
    if (/android/.test(userAgent) || /iphone|ipad|ipod/.test(userAgent) || /blackberry|iemobile|opera mini/.test(userAgent)) {
        deviceType = /ipad/.test(userAgent) ? "Tablet" : "Mobile";
    }

    // Operating System
    let os = "Other Systems";
    if (platform.includes('win')) os = "Windows";
    if (platform.includes('mac')) os = "Mac";
    if (platform.includes('linux')) os = "Linux";
    if (/iphone|ipad|ipod|ios/.test(userAgent)) os = "iOS";
    if (/android/.test(userAgent)) os = "Android";

    // Browser
    let browser = "Other browser";
    if (/chrome|crios/.test(userAgent) && !/edg|opr/.test(userAgent)) browser = "Chrome";
    else if (/safari/.test(userAgent) && !/chrome/.test(userAgent)) browser = "Safari";
    else if (/firefox/.test(userAgent)) browser = "Firefox";
    else if (/msie|trident/.test(userAgent)) browser = "IE";
    else if (/edg/.test(userAgent)) browser = "Edge";
    else if (/opera|opr/.test(userAgent)) browser = "Opera";

    return { deviceType, os, browser };
}

function getUrlParams() {
  const params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }
  return params;
}

const cdevice = getClientInfo().deviceType.toLowerCase(); //'Desktop', 'Mobile', 'Tablet'
const cos = getClientInfo().os.toLowerCase(); //'Windows', 'Mac', 'Linux', 'iOS', 'Android', 'Other systems'
const cbrowser = getClientInfo().browser.toLowerCase(); //'Chrome', 'Safari', 'Firefox', 'IE', 'Edge', 'Opera', 'Other browser'


function sendActivityLog({
  experienceId,
  templateId,
  segmentId,
  clickCount,
  closeCount,
  pageviewCount
}) {
  const endpoint = 'https://prod-paywall.thenation.com/api/activity-logs/store-activityLog';

  const payload = {
    experience_id: experienceId,
    template_id: templateId,
    segment_id: segmentId,
    click_count: clickCount,
    close_count: closeCount,
    impression_count: pageviewCount,
    page_url: tnPostURL,
    browser_name: cbrowser,
  };

  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  .then(response => {
    console.log('Activity-log sent, status:', response.status);
  })
  .catch(error => {
    // optional: log errors
    console.error('Activity-log error:', error);
  });

}

function registerInteractions(config, d) {
  config.forEach(({ element: selector, listen_once, event_listeners }) => {
    const el = document.querySelector(selector);
    if (!el) {
      console.warn(`No element matches selector "${selector}"`);
      return;
    }
	
    event_listeners.forEach(eventName => {
		if(eventName == "rightclick") eventName = "contextmenu";
      el.addEventListener(
        eventName,
        event => {
          callLightboxFunc(d);
        },
        { once: listen_once }
      );
    });
  });
}

function setPaywallCookie(uniqueIDs, totalPageviews, expiryUTC, expiryValue, expiryUnit, name){
				let cookie_json = {};
uniqueIDs = uniqueIDs.slice(-20); //to keep cookie size under control
		if(!expiryUTC && expiryValue){
			const unit = expiryUnit.toLowerCase();
    const factor = unitToMilliseconds(unit);
    
    if (factor) {
      const date = new Date();
      date.setTime(date.getTime() + expiryValue * factor);
	  expiryUTC = date.toUTCString();
    }
	}
	cookie_json = {
			unique_IDs: uniqueIDs,
			total: totalPageviews,
			expiry: expiryUTC
			};

  		let cookieStr = `${name}=${JSON.stringify(cookie_json)}; path=/`;
      cookieStr += (expiryUTC)?`; expires=${expiryUTC}`:'';
	  	document.cookie = cookieStr;
			}

function callLightboxFunc(d){

let delay_value = d.delay_value;
let delay_type = d.delay_type;

        if(delay_type == "scroll_depth_px" || delay_type == "scroll_depth_percent")
        {
                function handleScroll() {
					if (delay_type === "scroll_depth_percent") {
    const percentscroll = delay_value / 100;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = scrollTop / docHeight;

    if (scrolled >= percentscroll) {
      showLightbox(d);
      window.removeEventListener("scroll", handleScroll);
    }
  }
					else {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop >= delay_value) {
        showLightbox(d);
        window.removeEventListener("scroll", handleScroll);
    }  
}
}
           

            window.addEventListener("scroll", handleScroll);
        }
        else if(delay_type == "time")
        {
            setTimeout(function(){ showLightbox(d); }, delay_value*1000); //time in seconds
        }
		else if(delay_type == "idle")
        {
				let idleTimer; //variable to hold the timer ID

				function resetIdleTimer() {
				//clear the previous timer if any
				clearTimeout(idleTimer);
				
				idleTimer = setTimeout(() => {
					showLightbox(d);
				}, delay_value*1000);
				}

				const activityEvents = [
				'mousemove',
				'keydown',
				'scroll',
				'touchstart'
				];

				activityEvents.forEach(event => {
				document.addEventListener(event, resetIdleTimer, false);
				});

				resetIdleTimer();
        }
		else showLightbox(d);
}

function showLightbox(d) {

	//skip the lightbox if one is already being shown
if (document.querySelector('.lightbox-container') && d.display_type == "modal") {
    return;
  }

	const uniqueID = "e"+d.eid+"s"+d.sid+"t"+d.tid;
	const inlineString = (d.display_type == "inline")?"-inline-":'-';
for (const cookie of d.cookies) {

  let cookieStr = `${cookie.name}=${cookie.value}; path=${cookie.path}`;
  
  if (cookie.domain) {
    cookieStr += `; domain=${cookie.domain}`;
  }
  
  if (!cookie.sessionCookie && cookie.expiration && cookie.expirationUnit) {
    const unit = cookie.expirationUnit.toLowerCase();
    const factor = unitToMilliseconds(unit);
    
    if (factor) {
      const date = new Date();
      date.setTime(date.getTime() + cookie.expiration * factor);
      cookieStr += `; expires=${date.toUTCString()}`;
    }
  }
  
  document.cookie = cookieStr;
  
}

    if (d.js) {
    if (d.js.trim()) {
      try {
        const script1 = document.createElement('script');
    script1.textContent = d.js;
    document.body.appendChild(script1); 
      } catch (e) {
        console.error("Error executing Run JS code:", e);
      }
    }
    }

	if(!d.html) return;
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-container-'+uniqueID;
	overlay.classList.add('tn-lightbox', 'lightbox'+inlineString+'container');
    const modal = document.createElement('div');
	modal.id = 'lightbox-inner-'+uniqueID;
	modal.classList.add('lightbox'+inlineString+'inner');
	const closeButton = (d.allow_close)?'<button type="button" aria-label="Close" class="close-btn lb-close-button"></button>':'';
    modal.innerHTML = closeButton+d.html;
  
    if (d.css) {
      const styleEl = document.createElement('style');
      styleEl.type = 'text/css';
      styleEl.textContent = d.css;
      modal.appendChild(styleEl);
    }

    const customScripts = modal.querySelectorAll('[custom-script]');
  customScripts.forEach(scriptContainer => {
    const code = scriptContainer.textContent;
    if (code.trim()) {
      try {
        // Execute the code in the global context
        const script2 = document.createElement('script');
    script2.textContent = code;
    overlay.appendChild(script2); 
       
      } catch (e) {
        console.error("Error executing custom script:", e);
      }
    }
    scriptContainer.remove();
  });
  
    overlay.appendChild(modal);
	if(d.display_type == "modal")
    document.body.appendChild(overlay);
	else {
		const inline_container = document.querySelector(d.inline_container_selector);

		if (inline_container) {
			inline_container.appendChild(overlay);
		} else {
		console.error(`No element found matching the selector: ${d.inline_container_selector}`);
		}
	}

	sendActivityLog({
	experienceId: d.eid,
	templateId: d.tid,
	segmentId: d.sid,
	clickCount: 0,
	closeCount: 0,
	pageviewCount: 1
	});
  
    

  const experience_cookie = "lightbox_not_first_visit";
  const experience_cookie_date = new Date();
  experience_cookie_date.setTime(experience_cookie_date.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days from now
document.cookie = experience_cookie+"=true;" + "expires=" + experience_cookie_date.toUTCString() + ";path=/";

    

  


var lightboxContainer = document.getElementById(overlay.id);
var clickableElements = lightboxContainer.querySelectorAll('a, button:not(.close-btn)');
        clickableElements.forEach(function(element) {
          element.addEventListener('click', function(event) {
			//log click count
			sendActivityLog({
			experienceId: d.eid,
			templateId: d.tid,
			segmentId: d.sid,
			clickCount: 1,
			closeCount: 0,
			pageviewCount: 0
			});
          });
        });
    // Define a global close() function that removes the modal overlay
    function close_popup() {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
		//log close count
		sendActivityLog({
			experienceId: d.eid,
			templateId: d.tid,
			segmentId: d.sid,
			clickCount: 0,
			closeCount: 1,
			pageviewCount: 0
			});
      }

    }

	
	var closeButtonBinder = lightboxContainer.getElementsByClassName("close-btn");

		Array.prototype.forEach.call(closeButtonBinder, function(element) {
			element.addEventListener('click', () => {
    close_popup();
  });
		});
  
}
				
		const url = 'https://prod-paywall.thenation.com/api/fetch-experience/';
		function isPrebidAvailable () {
  return (
    window.pbjs &&                   
    typeof window.pbjs.requestBids === 'function' &&  
    window.pbjs.libLoaded === true      
  );
}
let adblockerValue = (!isPrebidAvailable())?'adblockers_enabled':'no_adblockers';


const data = {
  content_section: tnContentSection,
    content_author: window.tnContentAuthor,
  user_type: user_role,
  url: tnPostURL,
  tags: window.tnContentTags,
  url_parameters: getUrlParams(),
  target_devices: cdevice,
  target_os: cos,
  target_browsers: cbrowser,
  postal_code: user_zip,
  referred_from: document.referrer,
  adblockers: adblockerValue,
  utc_time: new Date().toISOString(),
  custom_variables: tn_custom_variables,
  total_pageviews: total_pageviews,
  unique_pageviews: unique_IDs.length,
  environment: "production"
};

fetch(url, {
    method: 'POST', 
    headers: {
        'x-api-token': '54SBvkcDGvrvLs5ANeHrknVHJyJdhDFppGa8YaUH',
        'x-private-key': '40RWGQuu3eVH8Qzp9y4sFH9emknixpXk9zRRHXtp',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
})
.then(response => response.json()) 
.then(items => {
	items.forEach(data => {
    const experience_id = data.experience_id;
    const segment_id = data.matched_segment_id;
    const template_id = data.template_id;
	const exp_temp = data?.experience_template;
	const interactions = (data?.interactions?.interactions !== undefined)?data.interactions.interactions:false;
    const html = (data?.experience_template?.html !== undefined)?JSON.parse(JSON.stringify(data.experience_template.html)):'';
    const css = (data?.experience_template?.css !== undefined)?JSON.parse(JSON.stringify(data.experience_template.css)):'';
    const js = (data?.javascript_code !== undefined)?JSON.parse(JSON.stringify(data.javascript_code)):'';
    const delay_type = (exp_temp)?data.experience_template.delay_type:'';
    const delay_value = (exp_temp)?data.experience_template.delay_value:'';
    const cookies = data?.cookies;
    const on_first_visit = data?.on_first_visit;
	const desktop_exit_side = (data?.viewport_exit_settings)?data.viewport_exit_settings.desktop_exit_side:false;
	const mobile_back_button_enabled = (data?.viewport_exit_settings)?data.viewport_exit_settings.mobile_back_button_enabled:false;
	const allow_close = (exp_temp)?data.experience_template.allow_close:false;
	const display_type = (exp_temp)?data.experience_template.display_type:false;
	const inline_container_selector = (exp_temp)?data.experience_template.inline_container_selector:false;
	const custom_cookies = data?.custom_cookies;
	
    const experience_cookie = "lightbox_not_first_visit";
    let viewLightbox = true;

    //if on first visit is true, check for cookie
    if(on_first_visit && getCookie(experience_cookie)) return;

	//check custom cookie conditions
	if(custom_cookies){
	function cookieConditions() {
  for (const { name, value: values, condition } of custom_cookies) {
    const cookieVal = getCookie(name);
    switch (condition) {
      case 'equals_one_of':
        if (!values.includes(cookieVal)) {
          return false;
        }
        break;
      case 'does_not_equal':
        if (values.includes(cookieVal)) {
          return false;
        }
        break;
      default:
        return false;
    }
  }
  // All conditions passed
  return true;
}
if(!cookieConditions()) return; //cookie conditions did not match

	}

	

	if(data?.page_view_meter && tnContentSection == "article"){

		const page_view_meter = data.page_view_meter;

		//skip if referrer domain matches
		if(page_view_meter.excluded_referral_sites && document.referrer){
						const refHost = new URL(document.referrer).hostname.toLowerCase();

				const isExcluded = page_view_meter.excluded_referral_sites.some(domain => {
				domain = domain.toLowerCase();
				return (
					refHost === domain ||
					refHost.endsWith(`.${domain}`)
				);
				});

				if (isExcluded) {
				unique_IDs.pop();
				total_pageviews -= 1;
				setPaywallCookie(unique_IDs, total_pageviews, paywall_cookie_expiry, null, null, paywall_cookie)
				return;
				}
		}
		
		hard_paywall = (page_view_meter.meter_unique_pages_only && unique_IDs.length > page_view_meter.expire_after_value)?true:((!page_view_meter.meter_unique_pages_only && total_pageviews > page_view_meter.expire_after_value)?true:false);
		if(!hard_paywall){

		if(page_view_meter.reset_after_checkbox && !paywall_cookie_expiry){
			setPaywallCookie(unique_IDs, total_pageviews, paywall_cookie_expiry, page_view_meter.reset_after_value, page_view_meter.reset_after_unit, paywall_cookie)
		}

    }
	else {
		if(tn_free_articles.includes(tnPostID)) return;
		unique_IDs.pop();
		total_pageviews -= 1;
		setPaywallCookie(unique_IDs, total_pageviews, paywall_cookie_expiry, null, null, paywall_cookie)
	}
}

    if(viewLightbox) 
    {

		let eid = experience_id;
		let sid = segment_id;
		let tid = template_id;
		const lightboxParams = {
			eid,
			sid,
			tid,
			html,
			css,
			js,
			cookies,
			allow_close,
			display_type,
			inline_container_selector,
			delay_type,
			delay_value		
		};

    

        if(desktop_exit_side && cdevice == "desktop") {

			if(desktop_exit_side == "top_side"){


				function onMouseOutTopSide(event) {
					if (event.clientY <= 0) {
    callLightboxFunc(lightboxParams);
    document.removeEventListener('mouseout', onMouseOutTopSide);
  }
}
document.addEventListener('mouseout', onMouseOutTopSide);


			}
			else {

				function onMouseOutAllSides(event) {
  if (
    event.clientY < 0 ||
    event.clientX < 0 ||
    event.clientX > window.innerWidth ||
    event.clientY > window.innerHeight
  ) {
    callLightboxFunc(lightboxParams);
    document.removeEventListener('mouseout', onMouseOutAllSides);
  }
}

document.addEventListener('mouseout', onMouseOutAllSides);
			}

			
		}
		else if(mobile_back_button_enabled && cdevice == "mobile"){
				 let shown = false;
    const STATE = { trapped: true };

    window.history.replaceState(STATE, '');

    window.addEventListener('popstate', e => {
      if (e.state && e.state.trapped) {
        if (!shown) {
          shown = true;
          callLightboxFunc(lightboxParams);        
          history.pushState(STATE, '');  // keep them here
        } else {
          shown = false;
          history.back();
        }
      }
    });
			}
	    else if(interactions) { //inject interactions
			registerInteractions(interactions, lightboxParams);
		}
        else callLightboxFunc(lightboxParams); 
    }
});
})
.catch(error => {
    console.error('Error Paywall API:', error);
});