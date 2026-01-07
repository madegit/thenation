function getUrlParameter(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var r = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
    return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
}

function getCookie(e) {
    var r = new RegExp(e + "=([^;]+)").exec(document.cookie);
    return null != r ? unescape(r[1]) : null
}

function isValidEmailAddress(e) {
    return new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(e)
}

function isValidPassword(e) {
    return new RegExp(/^[a-zA-Z0-9!@#$%]{6,}$/i).test(e)
}
jQuery(document).ready(function() {
    (jQuery(window).width() < 800 || jQuery(window).height() < 500) && jQuery(".thickbox").each(function(e, r) {
        var a = .75 * window.innerWidth,
            s = .75 * window.innerHeight,
            t = jQuery(this).attr("href"),
            n = "width=" + a + "&height=" + s;
        t = t.replace("width=600&height=550", n), jQuery(this).attr("href", t)
    })
}), jQuery(window).resize(function() {
    (jQuery(window).width() < 800 || jQuery(window).height() < 500) && jQuery(".thickbox").each(function(e, r) {
        var a = .75 * window.innerWidth,
            s = .75 * window.innerHeight,
            t = jQuery(this).attr("href"),
            n = "width=" + a + "&height=" + s;
        t = t.replace("width=600&height=550", n), jQuery(this).attr("href", t)
    })
}), jQuery(document).on("click", ".pcdLoginButton", function(e) {
    e.preventDefault();
    var r = jQuery(this),
        a = r.closest(".search__form"),
        s = a.find(".pcd_email"),
        t = a.find(".pcd_pwd"),
        n = !1,
        i = r.parents(".lightbox-form").parent().attr("id");
    if (a.find("#checkbox3").prop("checked") && (n = !0), a.find(".e_mail_field_con").find(".errormsg").remove(), a.find(".pwd_field_con").find(".errormsg").remove(), a.find("#login-recaptcha").find(".errormsg").remove(), s.val().length < 1) return a.find(".e_mail_field_con").append('<p class="errormsg">E-Mail is a required field.</p>'), s.removeClass("valid").addClass("error"), !1;
    if (!isValidEmailAddress(s.val())) return a.find(".e_mail_field_con").append('<p class="errormsg">Not a valid E-Mail Address.</p>'), s.removeClass("valid").addClass("error"), !1;
    if (t.val().length < 1) return a.find(".pwd_field_con").append('<p class="errormsg">Password is a required field.</p>'), t.removeClass("valid").addClass("error"), !1;
    if ("" == jQuery("#login-recaptcha-verify").val()) return $("#login-recaptcha").append('<p class="errormsg">Please Validate Captcha.</p>'), t.removeClass("valid").addClass("error"), !1;
    r.hide(), a.find("img.loaderImg").show();
    var o = {
        action: "sfg_action",
        email: s.val(),
        password: t.val(),
        remember: n
    };
    jQuery.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: o,
        success: function(e) {
            if ("string" == typeof e && null != e && "null" != e)
                if ("success" == (e = JSON.parse(e)).status) {
                    null != typeof getUrlParameter("reader_id") && null != typeof tp && tp.push(["init", function() {
                        tp.amp.login({
                            userToken: e.token,
                            userState: {
                                userType: "subscriber"
                            },
                            loginSuccess: function() {
                                var e = tp.util.getQueryParamByName("return");
                                window.location.href = e + "#success=true"
                            }
                        })
                    }]);
                    var s = getUrlParameter("redirect_uri");
                    if (null != typeof s && -1 < s.indexOf("applenews://") && null != typeof e.token) {
                        var t = e.token;
                        return window.location.href = s + "?access_token=" + t, !1
                    }
                    var n = getUrlParameter("fb_instant_login");
                    if (null != typeof n && "" != n) return window.location.href = "https://" + window.location.hostname + "/fb-instant-login/?nc=1", !1;
                    var o = document.referrer;
                    if (o.indexOf("/logout/") > -1 && (o = "https://" + window.location.hostname), "TB_ajaxContent" === i) o = window.location.href;
                    else {
                        var l = getUrlParameter("return_to");
                        "" != l && null != typeof l && (o = l)
                    }
                    if (null != getCookie("SESSname") && o.indexOf("hash") > -1 && o.indexOf("reset") > -1 && (o = window.location.hostname), null != e.list && null != e.list && "" != e.list) {
                        var d = localStorage.getItem("tn_sfg_local");
                        null != d && null != d && "" != d && localStorage.removeItem("tn_sfg_local");
                        var u = JSON.parse(e.list);
                        d = [], u.forEach(function(e, r) {
                            d.push(parseInt(e))
                        }), localStorage.setItem("tn_sfg_local", JSON.stringify(d))
                    }
                    window.location.replace(o)
                } else "warning" == e.status ? (a.find("img.loaderImg").hide(), r.show(), a.closest(".row").find("#primaryError").show(), a.closest(".row").find("#primaryError > .error > p.errormsg").html(e.msg)) : "fail" == e.status && (a.find("img.loaderImg").hide(), r.show(), a.closest(".row").find("#primaryError").show(), a.closest(".row").find("#primaryError > .error > p.errormsg").html(e.msg));
            else a.find("img.loaderImg").hide(), r.show(), a.closest(".row").find("#primaryError").show(), a.closest(".row").find("#primaryError > .error > p.errormsg").html("We are unable to login at this time. Please try again later.")
        }
    })
}), jQuery(document).on("click", ".freeRegButton", function(e) {
    e.preventDefault();
    var r = jQuery(this),
        a = r.closest(".search__form"),
        s = a.find(".pcd_email"),
        t = a.find(".pcd_pwd");
    r.parents(".lightbox-free_reg-form").parent().attr("id");
    if (a.find(".e_mail_field_con").find(".errormsg").remove(), a.find(".pwd_field_con").find(".errormsg").remove(), s.removeClass("error").addClass("valid"), t.removeClass("error").addClass("valid"), s.val().length < 1) return a.find(".e_mail_field_con").append('<p class="errormsg">E-Mail is a required field.</p>'), s.removeClass("valid").addClass("error"), !1;
    if (!isValidEmailAddress(s.val())) return a.find(".e_mail_field_con").append('<p class="errormsg">Not a valid E-Mail Address.</p>'), s.removeClass("valid").addClass("error"), !1;
    if (t.val().length < 1) return a.find(".pwd_field_con").append('<p class="errormsg">Password is a required field.</p>'), t.removeClass("valid").addClass("error"), !1;
    if ("" == jQuery("#register-recaptcha-verify").val()) return a.find(".pwd_field_con").append('<p class="errormsg">Please refresh page and try again.</p>'), !1;
    a.find("img.loaderImg").show();
    var n = {
        action: "tn_create_user",
        email: s.val(),
        password: t.val()
    };
    jQuery.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: n,
        success: function(e) {
            if ("string" == typeof e && null != e && "null" != e)
                if ("success" == (e = JSON.parse(e)).status) {
                    a.find("img.loaderImg").hide(), a.closest(".row").find("#primaryError-reg").hide(), a.closest(".row").find("#primarySuccess-reg").show();
                    var r = jQuery(".tn-login-close").attr("href");
                    a.closest(".row").find("#primarySuccess-reg > .success > p.successmsg").html("You have successfully signed up. Click <a href='" + r + "'>here</a> to continue reading. An activation link has been sent to your email address. Please check your inbox or spam folder for the link.")
                } else "warning" == e.status ? (a.find("img.loaderImg").hide(), a.closest(".row").find("#primarySuccess-reg").hide(), a.closest(".row").find("#primaryError-reg").show(), a.closest(".row").find("#primaryError-reg > .error > p.errormsg").html(e.msg)) : "fail" == e.status && (a.find("img.loaderImg").hide(), a.closest(".row").find("#primarySuccess-reg").hide(), a.closest(".row").find("#primaryError-reg").show(), a.closest(".row").find("#primaryError-reg > .error > p.errormsg").html(e.msg));
            else a.find("img.loaderImg").hide(), a.closest(".row").find("#primarySuccess-reg").hide(), a.closest(".row").find("#primaryError-reg").show(), a.closest(".row").find("#primaryError-reg > .error > p.errormsg").html("Something went wrong.")
        }
    })
}), jQuery(document).on("click", "#reset_password", function (r) {
    r.preventDefault();
    var s = jQuery(this),
        a = s.closest("#lightboxform"),
        t = a.find("#user_new_password"),
        n = a.find("#user_retype_password"),
        o = getUrlParameter("email");
    if (
        ((i = getUrlParameter("hash")),
        a.find(".re_pwd_field_con").find(".errormsg").remove(),
        a.find(".pwd_field_con").find(".errormsg").remove(),
        n.removeClass("error").addClass("valid"),
        t.removeClass("error").addClass("valid"),
        t.val().length < 1)
    )
        return t.append('<p class="errormsg">Password is a required field.</p>'), t.addClass("error"), !1;
    if (!isValidPassword(t.val()))
        return (
            a.find(".pwd_field_con").append('<p class="errormsg">A minimum 6 characters password length is required which must include letter, number and special character.<br>Special Characters like ! @ # $ % are only allowed.</p>'),
            t.removeClass("valid").addClass("error"),
            !1
        );
    if ((n.val().length < 1 && (a.find(".re_pwd_field_con").append('<p class="errormsg">Confirmation Password is a required field.</p>'), n.removeClass("valid").addClass("error")), t.val() != n.val()))
        return a.find(".re_pwd_field_con").append('<p class="errormsg">The password and confirmation password do not match.</p>'), n.removeClass("valid").addClass("error"), !1;
    if ("" == jQuery("#reset-recaptcha-verify").val()) return a.find(".re_pwd_field_con").append('<p class="errormsg">Please refresh page and try again.</p>'), !1;
    if (o.length < 1) return n.parent().append('<p class="errormsg">There is some error!!</p>'), t.removeClass("valid").addClass("error"), n.addClass("error"), !1;
    s.hide(), a.find("img.loaderImg").show();
    var l = { action: "freeuser_password_reset_action", email: o, password: t.val(), rpassword: n.val(), token: i };
    jQuery.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: l,
        success: function (r) {
            null != r && "null" != r
                ? "success" == (r = JSON.parse(r)).status
                    ? (a.find("img.loaderImg").hide(),
                      s.show(),
                      a.closest(".row").find("#primaryError-reg").hide(),
                      a.closest(".row").find("#primarySuccess-reg").show(),
                      a.closest(".row").find("#primarySuccess-reg > .success > p.successmsg").html("You have successfully set your password."))
                    : "fail" == r.status &&
                      (a.find("img.loaderImg").hide(),
                      s.show(),
                      a.closest(".row").find("#primarySuccess-reg").hide(),
                      a.closest(".row").find("#primaryError-reg").show(),
                      a.closest(".row").find("#primaryError-reg > .error > p.errormsg").html(r.msg))
                : (a.find("img.loaderImg").hide(),
                  s.show(),
                  a.closest(".row").find("#primarySuccess-reg").hide(),
                  a.closest(".row").find("#primaryError-reg").show(),
                  a.closest(".row").find("#primaryError-reg > .error > p.errormsg").html("Something went wrong."));
        },
    })
}), jQuery(document).on("click", "#sfg_rest_password", function(e) {
    e.preventDefault();
    var r = jQuery(this),
        a = r.closest("#sfg_password_reset_form"),
        s = a.find("#sfg_user_email"),
        t = a.find("#sfg_user_new_password"),
        n = a.find("#sfg_user_retype_password"),
        i = getUrlParameter("hash");
    if (a.find(".errormsg").remove(), a.find("input").removeClass(), s.val().length < 1) return s.parent().append('<p class="errormsg">E-Mail is a required field.</p>'), s.removeClass("valid").addClass("error"), !1;
    if (!isValidEmailAddress(s.val())) return s.parent().append('<p class="errormsg">Not a valid E-Mail Address.</p>'), s.addClass("error"), !1;
    if (t.val().length < 1) return t.parent().append('<p class="errormsg">Password is a required field.</p>'), t.addClass("error"), !1;
    if (!isValidPassword(t.val())) return t.parent().append('<p class="errormsg">A minimum 6 characters password length is required which must include letter, number and special character.<br>Special Characters like ! @ # $ % are only allowed.</p>'), t.addClass("error"), !1;
    if (n.val().length < 1) return n.parent().append('<p class="errormsg">Password is a required field.</p>'), n.addClass("error"), !1;
    if (t.val() != n.val()) return n.parent().append('<p class="errormsg">The password and confirmation password do not match.</p>'), t.removeClass("valid").addClass("error"), n.addClass("error"), !1;
    r.hide(), a.find("img.loaderImg").show();
    var o = {
        action: "sfg_password_reset_action",
        email: s.val(),
        password: t.val(),
        token: i
    };
    jQuery.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: o,
        success: function(e) {
            "string" == typeof e ? "success" == (e = JSON.parse(e)).status ? (a.parents(".article-body").html("<p>" + e.msg + "</p>"), document.body.scrollTop = 0, document.documentElement.scrollTop = 0) : "fail" == e.status && (a.find("img.loaderImg").hide(), r.show(), a.find("#sfg_primary_error").show(), a.find("#sfg_primary_error").html('<p class="errormsg">' + e.msg + "</p>")) : !1 === e && (a.find("img.loaderImg").hide(), r.show(), a.find("#sfg_primary_error").show(), a.find("#sfg_primary_error").text('<p class="errormsg">SFG Communication Error,Please try again.</p>'))
        }
    })
}), "undefined" != typeof sfg_options && "1" != sfg_options.enable_dash_options && jQuery(document).on("click", ".header_subscribe", function(e) {
    var r;
    e.preventDefault(), r = null != getCookie("SESSname") ? document.location.origin + "?sfglogin=1&nc=1" : jQuery(this).attr("href"), window.open(r, "_blank")
}),
jQuery(document).on("click", "#cms_rest_password", function(e) {
    e.preventDefault();
    var r = jQuery(this),
        a = r.closest("#sfg_password_reset_form"),
        s = a.find("#sfg_user_email"),
        t = a.find("#sfg_user_new_password"),
        n = a.find("#sfg_user_retype_password"),
        c = getUrlParameter("hash")
        i = getUrlParameter("hash");
    if (a.find(".errormsg").remove(), a.find("input").removeClass(), s.val().length < 1) return s.parent().append('<p class="errormsg">E-Mail is a required field.</p>'), s.removeClass("valid").addClass("error"), !1;
    if (!isValidEmailAddress(s.val())) return s.parent().append('<p class="errormsg">Not a valid E-Mail Address.</p>'), s.addClass("error"), !1;
    if (t.val().length < 1) return t.parent().append('<p class="errormsg">Password is a required field.</p>'), t.addClass("error"), !1;
    if (!isValidPassword(t.val())) return t.parent().append('<p class="errormsg">A minimum 6 characters password length is required which must include letter, number and special character.<br>Special Characters like ! @ # $ % are only allowed.</p>'), t.addClass("error"), !1;
    if (n.val().length < 1) return n.parent().append('<p class="errormsg">Password is a required field.</p>'), n.addClass("error"), !1;
    if (t.val() != n.val()) return n.parent().append('<p class="errormsg">The password and confirmation password do not match.</p>'), t.removeClass("valid").addClass("error"), n.addClass("error"), !1;
    r.hide(), a.find("img.loaderImg").show();
    var o = {
        action: "cms_password_reset_action",
        email: s.val(),
        password: t.val(),
        token: i,
        code: c
    };
    jQuery.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: o,
        success: function(e) {
            "string" == typeof e ? "success" == (e = JSON.parse(e)).status ? (a.parents(".article-body").html("<p>" + e.msg + "</p>"), document.body.scrollTop = 0, document.documentElement.scrollTop = 0) : "fail" == e.status && (a.find("img.loaderImg").hide(), r.show(), a.find("#sfg_primary_error").show(), a.find("#sfg_primary_error").html('<p class="errormsg">' + e.msg + "</p>")) : !1 === e && (a.find("img.loaderImg").hide(), r.show(), a.find("#sfg_primary_error").show(), a.find("#sfg_primary_error").text('<p class="errormsg">SFG Communication Error,Please try again.</p>'))
        }
    })
}), "undefined" != typeof sfg_options && "1" != sfg_options.enable_dash_options && jQuery(document).on("click", ".header_subscribe", function(e) {
    var r;
    e.preventDefault(), r = null != getCookie("SESSname") ? document.location.origin + "?sfglogin=1&nc=1" : jQuery(this).attr("href"), window.open(r, "_blank")

}), jQuery(document).on("click", ".pcdResetPasswordButton", function(e) {
    e.preventDefault();
    var r = jQuery(this),
        a = r.closest(".search__form"),
        s = a.find(".pcd_email"),
        
        i = r.parents(".lightbox-form").parent().attr("id");
    if(a.find(".e_mail_field_con").find(".errormsg").remove(),a.find("#reset-password-recaptcha").find(".errormsg").remove(), s.val().length < 1) return a.find(".e_mail_field_con").append('<p class="errormsg">E-Mail is a required field.</p>'), s.removeClass("valid").addClass("error"), !1;
    if (!isValidEmailAddress(s.val())) return a.find(".e_mail_field_con").append('<p class="errormsg">Not a valid E-Mail Address.</p>'), s.removeClass("valid").addClass("error"), !1;
    
    //if ("" == jQuery("#reset-password-recaptcha-verify").val()) return $("#reset-password-recaptcha").append('<p class="errormsg">Please refresh page and try again.</p>'), s.removeClass("valid").addClass("error"), !1;
    //r.hide(), a.find("img.loaderImg").show();
    var o = {
        action: "reset_password_combined",
        email: s.val(),
        
    };
    jQuery.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: o,
        success: function(e) {
            if ("string" == typeof e && null != e && "null" != e)
                if ("success" == (e = JSON.parse(e)).status) {
                    a.find("img.loaderImg").hide(), a.closest(".row").find("#primaryError-reg").hide(), a.closest(".row").find("#primarySuccess-reg").show();
                    var link = jQuery(".tn-login-close").attr("href");
                    a.closest(".row").find("#primarySuccess-reg > .success > p.successmsg").html(e.msg)
                } else "warning" == e.status ? (a.find("img.loaderImg").hide(), r.show(), a.closest(".row").find("#primaryError-reg").show(), a.closest(".row").find("#primaryError-reg > .error > p.errormsg").html(e.msg)) : 

                "fail" == e.status && (a.find("img.loaderImg").hide(),r.show(), a.closest(".row").find("#primaryError-reg").show(), a.closest(".row").find("#primaryError-reg > .error > p.errormsg").html(e.msg));
            else a.find("img.loaderImg").hide(), r.show(), a.closest(".row").find("#primaryError-reg").show(), a.closest(".row").find("#primaryError-reg > .error > p.errormsg").html("We are unable to login at this time. Please try again later.")
        }
    })
});
var e = tnUserInfo();
if (0 != e) {
    jQuery("#login_status .header_subscribe").addClass("header-dashboard"), jQuery("#mobile .header_subscribe").addClass("header-dashboard"), "undefined" != typeof sfg_options && "1" == sfg_options.enable_dash_options && (jQuery(".header-dashboard").removeClass("header_subscribe"), jQuery(".header-dashboard").attr("href", "/dashboard"));
    var article_id = jQuery(".scrolltrace").attr("article-post-id"),
        tn_sfg_local = localStorage.getItem("tn_sfg_local");
    null != tn_sfg_local && null != tn_sfg_local && "" != tn_sfg_local && (tn_sfg_local = JSON.parse(tn_sfg_local)).includes(parseInt(article_id)) ? (jQuery(".tn-sfg-add-to-list").addClass("selected"), jQuery(".tn-sfg-add-to-list").removeClass("hide")) : jQuery(".tn-sfg-add-to-list").removeClass("hide")
}
else{
	$("#login_status").html('<a href="'+global_vars.login_url+'" class="login">'+global_vars.login_text+'</a>')
}

function tnUserPassword(e) {
    var r = $(e).parents("#tn-dashboard").find('input[name="tn-old-password"]').val(),
        a = $(e).parents("#tn-dashboard").find('input[name="tn-password"]').val(),
        s = $(e).parents("#tn-dashboard").find('input[name="tn-cnf-password"]').val(),
        t = tnUserInfo();
    0 != t ? a == s ? $.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: {
            action: "sfg_dash_password_reset_action",
            email: t.email,
            password: a,
            old_password: r
        },
        dataType: "json",
        success: function(r) {
            "success" == r.status ? $(e).next("span").html('<p class="successmsg">Password changed successful.</p>') : $(e).next("span").html('<p class="errormsg">' + r.msg + "</p>")
        }
    }) : $(e).next("span").html('<p class="errormsg">New password and Retype password do not match.</p>') : $(e).next("span").html('<p class="errormsg">Something went wrong. Please logout and login again.</p>')
}

function tnUserInfo() {
    var e = getCookie("SESSuserinfo");
    return null != e && null != (e = Base64.decode(e)) && "" != e && null != e && JSON.parse(e)
}

function tnSailthruList(e) {
    var r = $(e).find(".tn-newsletter-inner"),
        a = tnUserInfo(),
        s = $(".tn-loader");
    s.show(), 0 != a ? $.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: {
            action: "sfg_dash_sailthru",
            email: a.email
        },
        dataType: "json",
        success: function(e) {
            if ("success" == e.status && "" != e.data && null != e.data) {
                var a = parseInt(Object.keys(e.data).length);
                if (a > 0)
                    for (i = 0; i < a; i++) {
                        var t = e.data[i];
                        t = t.replace(/[^a-zA-Z0-9-_ ]/g, ""), $("#" + t).length > 0 && $("#" + t).prop("checked", !0)
                    }
            }
            s.hide(), r.removeClass("hidden")
        }
    }) : ($(e).find(".tn-user-reading-list").html("<p>Something went wrong. Please logout and login again.</p>"), s.hide())
}

function tnReadingList(e, r) {
    $(e).find(".tn-user-reading-list").html("");
    var a = tnUserInfo(),
        s = $(".tn-loader");
    window.scrollTo(0, 0), s.show(), 0 != a ? $.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: {
            action: "sfg_dash_reading_list_action",
            user_id: a.user_id,
            page: r
        },
        dataType: "json",
        success: function(r) {
            "success" == r.status ? "" != r.data && null != r.data ? $(e).find(".tn-user-reading-list").html(r.data) : $(e).find(".tn-user-reading-list").html("<p>Nothing in your reading list</p>") : $(e).find(".tn-user-reading-list").html("<p>" + r.msg + "</p>"), s.hide()
        }
    }) : ($(e).find(".tn-user-reading-list").html("<p>Something went wrong. Please logout and login again.</p>"), s.hide())
}

function tnPremiumList(e) {
    $(e).find(".tn-premium-list").html("");
    var r = tnUserInfo(),
        a = $(".tn-loader");
    a.show(), 0 != r ? $.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: {
            action: "sfg_dash_premium_list_action"
        },
        dataType: "json",
        success: function(r) {
            "success" == r.status ? "" != r.data && null != r.data ? $(e).find(".tn-premium-list").html(r.data) : $(e).find(".tn-premium-list").html("<p>No premium content found.</p>") : $(e).find(".tn-premium-list").html("<p>" + r.msg + "</p>"), a.hide()
        }
    }) : ($(e).find(".tn-premium-list").html("<p>Something went wrong. Please logout and login again.</p>"), a.hide())
}

function tnDonationHistory(e) {
    $(e).find(".tn-donation-text").html("");
    var r = tnUserInfo(),
        a = $(".tn-loader");
    a.show(), 0 != r ? $.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: {
            action: "sfg_donation_history_action",
            email: r.email
        },
        dataType: "json",
        success: function(r) {
            "success" == r.status ? "" != r.data && null != r.data ? $(e).find(".tn-donation-text").html(r.data) : $(e).find(".tn-donation-text").html("<p>No donation history found.</p>") : $(e).find(".tn-donation-text").html("<p>" + r.msg + "</p>"), a.hide()
        }
    }) : ($(e).find(".tn-donation-text").html("<p>Something went wrong. Please logout and login again.</p>"), a.hide())
}

function tnAddToReadingList(e, r) {
    var a = tnUserInfo(),
        s = $(e);
    0 != a ? $.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: {
            action: "sfg_add_reading_list_action",
            user_id: a.user_id,
            article_id: r
        },
        dataType: "json",
        success: function(e) {
            if ("success" == e.status) {
                var a = localStorage.getItem("tn_sfg_local");
                if (null != a && null != a && "" != a)(a = JSON.parse(a)).includes(r) || a.push(r);
                else if (null != e.list && null != e.list && "" != e.list) {
                    var t = JSON.parse(e.list);
                    a = [], t.forEach(function(e, r) {
                        a.push(parseInt(e))
                    })
                } else(a = []).push(r);
                localStorage.setItem("tn_sfg_local", JSON.stringify(a)), alert("Article added to your reading list."), s.addClass("selected")
            } else alert(e.msg)
        }
    }) : alert("Something went wrong. Please logout and login again.")
}

function tnNationRegistration(e) {
    var r = $(e);
    return r.find("img.loaderImg").show(), $.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: r.serialize(),
        dataType: "json",
        success: function(e) {
            "success" == e.status ? r.find(".wdform_row_msg").html('<p class="successmsg">' + e.msg + "</p>") : r.find(".wdform_row_msg").html('<p class="errormsg">' + e.msg + "</p>"), r.find("img.loaderImg").hide()
        }
    }), !1
}
document.addEventListener("DOMContentLoaded", function () {
    var check_user_info = getCookie('SESSuserinfo');

    if (check_user_info !== null) {
        check_user_info = Base64.decode(check_user_info);
        check_user_info = JSON.parse(check_user_info);
        var user_roles = check_user_info.roles;
       
        if (user_roles.includes('nation_user') && getCookie('SESSfree_user') !== null) {
            }
        else{
            var resetPasswordDiv = document.querySelector('.dashboard_reset-password');
            if (resetPasswordDiv) {
                resetPasswordDiv.style.display = 'none';
            }
        }
    }
});

function tnNationForgetPassword(e) {
    var r = $(e);
    return r.find("img.loaderImg").show(), $.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: r.serialize(),
        dataType: "json",
        success: function(e) {
            "success" == e.status ? r.find(".wdform_row_msg").html('<p class="successmsg">' + e.msg + "</p>") : r.find(".wdform_row_msg").html('<p class="errormsg">' + e.msg + "</p>"), r.find("img.loaderImg").hide()
        }
    }), !1
}

function tnRemoveReadingList(e) {
    var r = $(e);
    return $.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: r.serialize(),
        dataType: "json",
        success: function(e) {
            "success" == e.status ? tnReadingList("#tn-reading-list", 1) : r.find('button[type="submit"]').parent().after('<p class="errormsg">' + e.msg + "</p>"), r.find("img.loaderImg").hide()
        }
    }), !1
}

jQuery(function(e) {
    var r = tnUserInfo();
    if (0 != r && ((r.roles.includes("subscriber") || r.roles.includes("premium_subscriber")) && (jQuery(".subscribe .header_subscribe").attr("href", document.location.origin + "?sfglogin=1&nc=1"), e("#login_status .header-dashboard").html("My Account"), e(".tn-sub-only").removeClass("tn-sub-only")), r.roles.includes("nation_user") && null != getCookie("SESSexpireduser") && jQuery(".subscribe .header_subscribe").attr("href", document.location.origin + "?sfglogin=1&nc=1"), r.roles.includes("nation_user") && null != getCookie("SESSfree_user") && e("#login_status .header-dashboard").html("My Account"), null != getCookie("SESSsus_user") && (jQuery("#tn-pr-pass-due").append("<p>Your account is past due. Click <a  href='https://ssl.drgnetwork.com/ecom/NAT/app/live/subcustserv?pagemode=payment&org=NAT&publ=NA&customerno=" + r.user_login + "&postcode=" + r.zip + "&php=Y' target='_blank'>here</a> to pay your bill and regain access to the website.</p>"), jQuery("#tn-pr-pass-para").append("<p>Your account is past due. Click <a  href='https://ssl.drgnetwork.com/ecom/NAT/app/live/subcustserv?pagemode=payment&org=NAT&publ=NA&customerno=" + r.user_login + "&postcode=" + r.zip + "&php=Y' target='_blank'>here</a> to pay your bill and regain access to the website.</p>")), jQuery("#tn-pr-dash-survey").append('<p>Got 5 minutes? <a href="https://www.surveymonkey.com/r/MFZ7ZBZ" target="_blank" id="tn-pr-dash-survey-a">Let us know what you think about your Subscriber Benefits website.</a></p>')), e("#tn-user-dash").length > 0) {
        var a = e("#tn-user-dash");
        if (a.find(".tabs-content .content").hide(), a.find(".tabs li a").click(function(r) {
                var s = e(this).attr("href");
                if (new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&amp;a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(s)) r.preventDefault(), window.open(s);
                else {
                    if (a.find("ul li a").removeClass("active"), a.find(".tabs-content .content").removeClass("active"), e(this).addClass("active"), e(s).addClass("active"), "#tn-reading-list" == s && tnReadingList("#tn-reading-list", 1), "#tn-premium-nation" == s && tnPremiumList("#tn-premium-nation"), "#tn-donation" == s && tnDonationHistory("#tn-donation"), "#tn-newsletter" == s && tnSailthruList("#tn-newsletter"), "#tn-cust-service" == s) {
                        var t = e("#tn-user-dash-left-nav").height() - e(s).find("h2").height();
                        e(".tn-cust-service-level-1").css("height", t)
                    }
                    "#tn-upgrade-to-subscription" == s ? jQuery("#tn-pr-pass-due").hide() : jQuery("#tn-pr-pass-due").show()
                }
            }), 0 != r) {
            var s = a.find("li.active").children("a").attr("href");
            if (s.indexOf("tn-dashboard") > -1) {
                var t = "";
                null != r.first_name && (t += r.first_name), null != r.last_name && (t += " " + r.last_name), "" == t && null != r.user_login && (t = r.user_login), "" != r.expire_formated && null != r.expire_formated && (e("#tn-billing").removeClass("hide"), e(s).find(".tn-billing-exp").html("<span>" + r.expire_formated + "</span>"))
            }(r.roles.includes("subscriber") || r.roles.includes("premium_subscriber")) && e(".wp_dash_manage_service").removeClass("hide"), r.roles.includes("nation_user") && null != getCookie("SESSexpireduser") && e(".wp_dash_manage_service").removeClass("hide"), r.roles.includes("nation_user") && null == getCookie("SESSexpireduser") && e(".wp_dash_manage_service_non").removeClass("hide"), e(document).on("click", ".tn-read-list-check-all", function() {
                var r = e(".tn-read-list-check");
                1 == e(this).prop("checked") ? r.prop("checked", !0) : r.prop("checked", !1)
            })
        }
    }
}), $(document).on("click", ".logout_status", function() {
    event.preventDefault(), localStorage.removeItem("tn_sfg_local"), window.location = $(this).attr("href")
});