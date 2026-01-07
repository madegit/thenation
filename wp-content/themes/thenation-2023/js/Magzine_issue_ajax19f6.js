jQuery(function (e) {
  e('.selectoption_magzine').click(function (u) {
    var F = e(this).html(),
      a = ajax_object.ajax_url;
    jQuery.ajax({
      url: a,
      data: { action: 'publish_year_action', publishing_year: F },
      success: function (e) {
        jQuery('#magzine').html(e);
      },
      error: function (e) {
        console.log(e);
      },
    });
  });
}),
  jQuery(function (e) {
    e('.selectoption_magzine_mobile').change(function (u) {
      var F = e('#selectoption_magzine_mobile').val(),
        a = ajax_object.ajax_url;
      jQuery.ajax({
        url: a,
        data: { action: 'publish_year_action_mobile', publishing_year: F },
        success: function (e) {
          jQuery('#magzines_mob').html(e);
        },
        error: function (e) {
          console.log(e);
        },
      });
    });
  }),
  jQuery(function (e) {
    e('#newsletter_footer').click(function (u) {
      var F = e('#newsletter_email').val(),
        a = new RegExp(
          /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
        );
      if (
        (a.test(F) && ((rspaceEmailId = F.replace(/\s+/g, '')), (finalEmailId = rspaceEmailId.toLowerCase())),
        198960 == e('input[name=form_id]').val())
      ) {
        u.preventDefault();
        var t = e('#email').val();
        a.test(t) &&
          ((rspaceEmailId = t.replace(/\s+/g, '')),
          (finalEmailId = rspaceEmailId.toLowerCase()),
          e(this).closest('form').submit());
      }
      if ('' != F) {
        if ('' == jQuery('#footer-recaptcha-verify').val())
          return jQuery('#subscribe_newsletter').html('Please Validate Captcha.'), !1;
        var i = ajax_object.ajax_url;
        jQuery.ajax({
          url: i,
          data: { action: 'daily_newsletter', newsletter_email: F, captcha: jQuery('#footer-recaptcha-verify').val() },
          success: function (u) {
            jQuery('#subscribe_newsletter').html(u), e('#newsletter_email').val('');
          },
          error: function (e) {
            console.log(e);
          },
        });
      } else jQuery('#subscribe_newsletter').html('Please Enter Email');
    });
  }),
  jQuery(function (e) {
    e('#teaching_guide_newsletter').click(function (u) {
      var F = e('#teaching_guide_email').val(),
        a = e('#teaching_guide_newsletter_list').val();
      if ('' != F) {
        var t = ajax_object.ajax_url;
        jQuery.ajax({
          url: t,
          data: { action: 'teaching_guide_newsletter', teaching_guide_email: F, list_name: a },
          success: function (u) {
            jQuery('#subscribe_teaching_guide_newsletter').html(u), e('#teaching_guide_email').val('');
          },
          error: function (e) {
            console.log(e);
          },
        });
      } else jQuery('#subscribe_teaching_guide_newsletter').html("<p class='Message errormsg footer_email_error'>Please Enter Email</p>");
    });
  }),
  jQuery(function (e) {
    e('.teaching_guide_year').click(function (u) {
      var F = e(this).html(),
        a = ajax_object.ajax_url;
      jQuery.ajax({
        url: a,
        data: { action: 'publish_year_actionTeaching', publishing_year: F },
        success: function (e) {
          jQuery('#magzine').html(e);
        },
        error: function (e) {
          console.log(e);
        },
      });
    });
  }),
  jQuery(function (e) {
    e(document).on('click', '#ajax-submit', function(u) { submitSailthruForm(u) });
    e('#sailthrruForm').on('submit', function(u) { submitSailthruForm(u) });
    function submitSailthruForm(u) {
        u.preventDefault(), jQuery('#ajax-submit').parent().find('p').remove();
        var F,
          a = '',
          t = new RegExp(
            /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
          );
        if (
          (e(u.target)
            .closest('form')
            .find("input[name^='sft_variables']")
            .each(function () {
              'email' == jQuery(this).attr('id') && (a = jQuery(this).val());
            }),
          (F = e(u.target).closest('form').serialize()),
          '' != a)
        )
          if (t.test(a)) {
            if (
              jQuery(u.target).closest('form').find('#recaptcha-sailthru').length > 0 &&
              '' == jQuery('#recaptcha-sailthru-verify').val()
            )
              return (
                jQuery('.check_email_light').remove(),
                jQuery('#ajax-submit').after('<p class="check_email_light">Please Validate Captcha.</p>'),
                jQuery('.form-submit').css('display', 'block'),
                !1
              );
            var i = ajax_object.ajax_url;
            jQuery.ajax({
              url: i,
              type: 'post',
              data: { action: 'lightbox_newsletter', newsletter_email: a, newsletter_form: F },
              success: function (u) {
                if (u.indexOf('</p>') > -1)
                  e('.errormsg ').remove(),
                    e('.sucess_newletter_article').remove(),
                    e('.check_email_light').remove(),
                    e('.form-submit').css('display', 'block'),
                    e('#ajax-submit').after(u),
                    e('#ajax-submit')
                      .closest('form')
                      .find("input[name^='sft_variables']")
                      .each(function () {
                        jQuery(this).val('');
                      });
                else {
                  let e = JSON.parse(u);
                  void 0 !== e.redirect_uri && null != e.redirect_uri && (window.location.href = e.redirect_uri);
                }
              },
              error: function (e) {
                console.log(e);
              },
            });
          } else e('#ajax-submit').after('<p class="check_email_light">Please Enter Valid Email</p>'),
          e('.form-submit').css('display', 'block');
        else e('#ajax-submit').after('<p class="check_email_light">Please Enter Email</p>'),
        e('.form-submit').css('display', 'block');
      }
  });
