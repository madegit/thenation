function equalHeight() {
  var e = $('.issue-nav-wrap').outerHeight();
  $('.issue-nav-wrap').css({ height: e });
}
function mobileMenu() {
  $('.container').css({ left: '0' }),
    $('.nav-toggle').on('touchstart click', function (e) {
      e.preventDefault();
      var i = $('body'),
        s = ($('.article-page'), $('#mobile-menu')),
        n = $('.mobile-scroll');
      i.toggleClass('animating'),
        i.hasClass('menu-visible')
          ? (s.css({ left: '-260px', width: '260px' }), n.css({ width: '260px' }), i.removeClass('menu-visible'))
          : (i.addClass('menu-visible'),
            window.innerWidth < 640
              ? (s.css({ left: '0', width: '100%' }), n.css({ width: '100%', height: $(window).height() - 50 }))
              : s.css({ left: '0' }));
    }),
    $('.tn_event_hash_link a').on('touchstart click', function (e) {
      e.preventDefault(), $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 50 }, 'fast');
      var i = $('body'),
        s = ($('.article-page'), $('#mobile-menu'));
      $('.mobile-scroll'),
        i.removeClass('menu-visible'),
        i.toggleClass('animating'),
        s.css({ left: '-260px', width: '260px' });
    });
}
function mobileFooterNavCollapse() {
  enquire.register('screen and (max-width: 1024px)', {
    match: function () {
      $('footer .expander').on('click', function (e) {
        e.preventDefault(), $(this).children('a').toggleClass('active');
        var i,
          s = $(this).parent().children('div').height();
        $(this).children('a').hasClass('active')
          ? ((i = s + $(this).parent().height() + 20), $(this).parent().height(i))
          : $(this).parent().height(27);
      });
    },
    unmatch: function () {
      $('footer .block.nav').css({ height: '' }),
        $('footer .block.nav h2 a').on('mouseup', function (e) {
          return !1;
        });
    },
  });
}
function desktopDetectHeaderOffset() {
  if ($('.header-bar.main').length) {
    return $('.header-bar.main').offset().top + 130;
  } else {
    return 0;
  }
}
function mobileDetectHeaderOffset() {
  if ($('#mobile').length) {
    return $('#mobile').offset().top;
  } else {
    return 0;
  }
}
function desktopStickyNav(e) {
  $('body').hasClass('tn-block-editor') ||
    ($(window).scrollTop() > e
      ? ($('.header-bar.main, .header-bar.search').addClass('sticky'), $('.header-bar.utility').addClass('compensate'))
      : ($('.header-bar.main, .header-bar.search').removeClass('sticky'),
        $('.header-bar.utility').removeClass('compensate')));
}
function mobileStickyNav(e) {
  $(window).scrollTop() > e
    ? ($('#mobile').addClass('sticky'), $('.container').addClass('compensate'))
    : ($('#mobile').removeClass('sticky'), $('.container').removeClass('compensate'));
}
function desktopArticleNav() {
  $('#wrap').hasClass('article-wrap') && $('#desktop').headroom({ offset: 500, tolerance: { up: 25, down: 0 } });
}
function imageHover() {
  
  $('figure.wp-block-image > a').magnificPopup({
    type: 'image'
  });
 	
 }
function tweetText() {
  $('.article-body .article-body-inner')
    .children('p:first-of-type')
    .html(function (e, i) {
      var s;
      '0' == $(this).children('img').length &&
        ((s = $('.article-body .article-body-inner').children('p:first-of-type').html()),
        $('.article-body .article-body-inner')
          .children('p:first-of-type')
          .html(s.replace(/^(<.?>)?([A-Za-z0-9])/g, '$1<span class="dropcap">$2</span>')));
    }),
    $('.article-body .premium-body-inner')
      .children('p:first-of-type')
      .html(function (e, i) {
        var s;
        '0' == $(this).children('img').length &&
          ((s = $('.article-body .premium-body-inner').children('p:first-of-type').html()),
          $('.article-body .premium-body-inner')
            .children('p:first-of-type')
            .html(s.replace(/^(<.?>)?([A-Za-z0-9])/g, '$1<span class="dropcap">$2</span>')));
      });
}
function desktopSearchBarLogic() {
  $('.search-toggle a').on('click', function (e) {
    e.preventDefault(), $('.header-bar.search').stop().slideToggle(), $('.header-bar.search input').focus();
  }),
    $(document).bind('click', function (e) {
      var i = $(e.target);
      i.parents().hasClass('searchbardrop') ||
        i.parents().hasClass('search-toggle') ||
        ($('#search').is(':visible') && $('.header-bar.search').stop().slideToggle());
    });
}
function closeDropDowns() {
  $('.dropdown dt .selector').each(function () {
    $(this).parent().parent().children('dd').children('ul').is(':visible') &&
      ($(this).parent().parent().children('dd').children('ul').toggle(),
      $(this).parent().parent().toggleClass('focused'),
      $(this).parent().parent().children('dt').children('.selector').children('.caret').toggle(),
      $(this).parent().parent().children('dt').children('.selector').children('.caret-open').toggle());
  });
}
function dropdownstyled() {
  $('.dropdown dt .selector').click(function () {
    $(this).parent().parent().children('dd').children('ul').is(':visible')
      ? closeDropDowns()
      : (closeDropDowns(),
        $(this).parent().parent().children('dd').children('ul').toggle(),
        $(this).parent().parent().toggleClass('focused'),
        $(this).parent().parent().children('dt').children('.selector').children('.caret').toggle(),
        $(this).parent().parent().children('dt').children('.selector').children('.caret-open').toggle());
  }),
    $('.dropdown dd ul li .selectoption').click(function () {
      $(this).parent().parent().parent().parent().toggleClass('focused'),
        $(this).parent().parent().parent().parent().children('dt').children('.selector').children('.caret').toggle(),
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .children('dt')
          .children('.selector')
          .children('.caret-open')
          .toggle();
      var e = $(this)
        .html()
        .replace(/(<([^>]+)>)/gi, '');
      $(this).parent().parent().parent().parent().children('dt').children('.selector').children('span').html(e),
        $('.dropdown dd ul').hide(),
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .children('.mobiledropdown')
          .children('option')
          .each(function () {
            $(this).removeAttr('selected'),
              $(this).text() == e && $(this).prop('selected', !0),
              $(this).parent().blur();
          });
    }),
    $('.mobiledropdown').on('change', function () {
      var e = $(this).children('option:selected').text();
      $(this).parent().children('.dropdown').children('dt').children('.selector').children('span').html(e),
        $(this)
          .parent()
          .children('.dropdown')
          .children('dd')
          .children('ul')
          .children('li')
          .children('span')
          .children('a')
          .each(function () {
            $(this).html() == e && $(this)[0].click();
          });
    }),
    $(document).bind('click', function (e) {
      $(e.target).parents().hasClass('dropdown') ||
        $('.dropdown dd ul').hide(1, function () {
          $(this).parent().parent().removeClass('focused'),
            $(this).parent().parent().children('dt').children('.selector').children('.caret').show(),
            $(this).parent().parent().children('dt').children('.selector').children('.caret-open').hide();
        });
    });
}
function signuplightbox() {
  $('.lightbox-inner .closebutton').bind('click', function () {
    $('.lightbox-form').fadeOut();
  }),
    $('.listing__hero').scroll(function () {
      $(window).scrollTop($(window).scrollTop() + 1), $(window).scrollTop($(window).scrollTop() - 1);
    });
}
function passwordShowHide() {
  $('.showhide').click(function () {
    'password' == $(this).parent().children('.password_field').attr('type')
      ? ($(this).parent().children('.password_field').attr('type', 'text'), $(this).html('HIDE'))
      : ($(this).parent().children('.password_field').attr('type', 'password'), $(this).html('SHOW'));
  });
}
function lightboxFormValidation() {
  var e = $.now();
  $('#lightboxform').submit(function () {
    return !($.now() - e < 2e3) && !$('#nextfield2').is(':checked') && void 0;
  }),
    $('#lightboxform').validate({
      debug: !0,
      rules: {
        first_name: 'required',
        last_name: { required: !0, minlength: 2 },
        e_mail: { required: !0, email: !0 },
        textarea1: 'required',
        checkbox4: 'required',
        selector: 'required',
        search_date: 'required',
        password_field: { required: !0, minlength: 6 },
      },
      messages: {
        first_name: {
          required:
            'This is a specific, friendly error message regarding this error. Sometimes the message will run to multiple lines. This error message pushes down the rest of the form. Right now your first name is missing, just a heads up',
        },
        last_name: {
          required:
            'This is a specific, friendly error message regarding this error. Sometimes the message will run to multiple lines. This error message pushes down the rest of the form. Right now your last name is missing, just a heads up',
          minlength: $.validator.format('Hey you. At least {0} characters required!'),
        },
        e_mail: { email: "That's not a real email. You know that's not a real email. Why do you do this to us." },
        textarea1: {
          required:
            'This is a specific, friendly error message regarding this error. Sometimes the message will run to multiple lines. This error message pushes down the rest of the form. Right now your textarea is missing, just a heads up',
        },
        checkbox4: {
          required:
            'This is a specific, friendly error message regarding this error. Sometimes the message will run to multiple lines. This error message pushes down the rest of the form. Right now your checkbox is missing, just a heads up',
        },
        selector: {
          required:
            'This is a specific, friendly error message regarding this error. Sometimes the message will run to multiple lines. This error message pushes down the rest of the form. Right now your radio selector is missing, just a heads up',
        },
        search_date: {
          required:
            'This is a specific, friendly error message regarding this error. Sometimes the message will run to multiple lines. This error message pushes down the rest of the form. Right now your dropdown selector is missing, just a heads up',
        },
      },
      errorElement: 'span',
      errorPlacement: function (e, i) {
        !i.hasClass('mobiledropdown') && (i.hasClass('check_input') || i.hasClass('radio_input'))
          ? e.appendTo(i.parent().parent().parent().children('.form-field').children('p.errormsg'))
          : e.appendTo(i.parent().children('p.errormsg'));
      },
      invalidHandler: function (e, i) {
        setTimeout(function () {
          $('input').blur();
        }, 10),
          setTimeout(function () {
            $('input.error:first').focus();
          }, 11);
      },
    }),
    $('#lightboxform input').on('change', function () {
      $(this).valid();
    }),
    $('#lightboxform input, #lightboxform textarea, #lightboxform select').on('blur', function () {
      $(this).valid();
    });
}
function mostPopularHover() {
  $(document).on('mouseenter', '.most-popular .popular-article a', function () {
    $(this).parent().prev().addClass('hover');
  }),
    $(document).on('mouseleave', '.most-popular .popular-article a', function () {
      $(this).parent().prev().removeClass('hover');
    });
}
function tweetFollow() {
  $('.contributorTweet .has_tweet_check').click(function () {
    var e = $(this).children('.twitterId').html();
    window.open('https://twitter.com/intent/follow?screen_name=' + e, 'width=550px,height=420');
  });
}
function socialShare() {
  $(document).on('click', '.social-share', function () {
    var e, i, s, n;
    $(this).hasClass('social-article')
      ? ((n = (e = $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .children('.container')
          .children('.article-wrap')
          .children('.currentScr')
          .children('#url-title')
          .children('.article-header')
          .children('.article-header-content')
          .children('.article_title')
          .html()).replace(/<a(.*?)a>/, '')),
        void 0 === e &&
          (n = (e = $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .children('.container')
            .children('.article-wrap')
            .children('.currentScr')
            .children('#url-title')
            .children('.article-header')
            .children('.article-header-content')
            .children('.title')
            .html()).replace(/<a(.*?)a>/, '')),
        $(this).hasClass('fb') &&
          window.open('http://www.facebook.com/sharer.php?u=' + window.location.href, 'width=550px,height=420'),
        $(this).hasClass('tw') &&
          window.open(
            'https://twitter.com/intent/tweet?text=' + n + '%20via%20%40thenation&url=' + encodeURI(document.URL)
          ),
        $(this).hasClass('msg') &&
          window.open('fb-messenger://share?link=' + encodeURIComponent(document.URL) + '&app_id=192399944158735'),
        $(this).hasClass('wa') && window.open('whatsapp://send?text=' + n + '%0A' + encodeURIComponent(document.URL)),
        $(this).hasClass('sms') &&
          isMobile.iOS() &&
          window.open('sms:&body=' + n + '%0A' + encodeURIComponent(document.URL)),
        $(this).hasClass('sms') &&
          !isMobile.iOS() &&
          window.open('sms:?body=' + n + '%0A' + encodeURIComponent(document.URL)),
        $(this).hasClass('email') &&
          (document.location.href = 'mailto:?subject=' + n + '&body=' + encodeURI(document.URL)))
      : $(this).parent().parent().hasClass('twitter-quote')
      ? ((i = $(this)
          .parent()
          .html()
          .replace(/<a(.*?)a>/, '')),
        window.open(
          'https://twitter.com/intent/tweet?text=' + i + '%20via%20%40thenation&url=' + encodeURI(document.URL)
        ))
      : $(this).parent().parent().parent().hasClass('share-icons')
      ? ('undefined' ==
          (s =
            0 == $('.currentScr').length
              ? $(this).attr('data-article-title')
              : $('.currentScr').attr('articlelisttitle')) && (s = 'The Nation'),
        (n = encodeURIComponent(s)),
        $(this).hasClass('fb') &&
          window.open('http://www.facebook.com/sharer.php?u=' + window.location.href, 'width=550px,height=420'),
        $(this).hasClass('tw') &&
          window.open(
            'https://twitter.com/intent/tweet?text=' + n + '%20via%20%40thenation&url=' + encodeURI(document.URL)
          ),
        $(this).hasClass('msg') &&
          window.open('fb-messenger://share?link=' + encodeURIComponent(document.URL) + '&app_id=192399944158735'),
        $(this).hasClass('wa') && window.open('whatsapp://send?text=' + n + '%0A' + encodeURIComponent(document.URL)),
        $(this).hasClass('sms') &&
          isMobile.iOS() &&
          window.open('sms:&body=' + n + '%0A' + encodeURIComponent(document.URL)),
        $(this).hasClass('sms') &&
          !isMobile.iOS() &&
          window.open('sms:?body=' + n + '%0A' + encodeURIComponent(document.URL)),
        $(this).hasClass('email') &&
          (document.location.href = 'mailto:?subject=' + n + '&body=' + encodeURI(document.URL)),
        $(this).hasClass('print') && window.print())
      : $(this).parents().hasClass('new_admin_taxonomy_layout_ul')
      ? ((s = null != $(this).attr('data-article-title') ? $(this).attr('data-article-title') : 'The Nation'),
        (art_url = null != $(this).attr('data-article-url') ? $(this).attr('data-article-url') : document.URL),
        (n = encodeURIComponent(s)),
        $(this).hasClass('fb') &&
          window.open('http://www.facebook.com/sharer.php?u=' + encodeURI(art_url), 'width=550px,height=420'),
        $(this).hasClass('tw') &&
          window.open('https://twitter.com/intent/tweet?text=' + n + '%20via%20%40thenation&url=' + encodeURI(art_url)),
        $(this).hasClass('email') && (document.location.href = 'mailto:?subject=' + n + '&body=' + encodeURI(art_url)))
      : (void 0 ===
          (s = $(this).parent().parent().parent().hasClass('footer-module')
            ? $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .children('.article-header')
                .children('.article-header-content')
                .children('h1.article_title')
                .html()
            : $(this).parent().parent().parent().children('h1.article_title').html()) &&
          (s = $(this).parent().parent().parent().hasClass('footer-module')
            ? $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .children('.article-header')
                .children('.article-header-content')
                .children('h1.title')
                .html()
            : $(this).parent().parent().parent().children('h1.title').html()),
        (n = encodeURIComponent(s)),
        $(this).hasClass('fb') &&
          window.open('http://www.facebook.com/sharer.php?u=' + window.location.href, 'width=550px,height=420'),
        $(this).hasClass('tw') &&
          window.open(
            'https://twitter.com/intent/tweet?text=' + n + '%20via%20%40thenation&url=' + encodeURI(document.URL)
          ),
        $(this).hasClass('msg') &&
          window.open('fb-messenger://share?link=' + encodeURIComponent(document.URL) + '&app_id=192399944158735'),
        $(this).hasClass('wa') && window.open('whatsapp://send?text=' + n + '%0A' + encodeURIComponent(document.URL)),
        $(this).hasClass('sms') &&
          isMobile.iOS() &&
          window.open('sms:&body=' + n + '%0A' + encodeURIComponent(document.URL)),
        $(this).hasClass('sms') &&
          !isMobile.iOS() &&
          window.open('sms:?body=' + n + '%0A' + encodeURIComponent(document.URL)),
        $(this).hasClass('email') &&
          (document.location.href = 'mailto:?subject=' + n + '&body=' + encodeURI(document.URL)),
        $(this).hasClass('print') && window.print());
  });
}
function desktopFooterNav() {
  enquire.register(
    'screen and (min-width: 1025px)',
    {
      match: function () {
        $('footer .expander a').off();
      },
    },
    !0
  );
}
function fancySelects() {
  $('select').select2();
}
function articleGallery() {
  $('.gallery').magnificPopup({ type: 'image', gallery: { enabled: !0 } });
}
function recircCarousel() {
  var e = $('#wrap > .scrolltrace').first().attr('article-post-id');
  $('.postid-' + e + ' .recirc-carousel').slick({ slide: '.article-list', asNavFor: '.postid-' + e + ' .tag-browser' }),
    $('.postid-' + e + ' .tag-browser').slick({
      slide: 'li',
      asNavFor: '.postid-' + e + ' .recirc-carousel',
      focusOnSelect: !0,
      variableWidth: !0,
      arrows: !1,
    }),
    $('.tag-browser').on('click', function (e) {
      e.preventDefault();
    }),
    $('.premium-sidebar-carousel').slick({ slide: 'li', adaptiveHeight: !0, infinite: !0 }),
    $('.magazine-carousel').slick({ slide: 'li', adaptiveHeight: !0 }),
    $('.donation-carousel').slick({
      slide: 'li',
      fade: !0,
      speed: 4e3,
      autoplay: !0,
      autoplaySpeed: 4e3,
      adaptiveHeight: !0,
    }),
    $('.travel-home-carousel').slick({
      slide: 'li',
      fade: !0,
      speed: 500,
      autoplay: !0,
      autoplaySpeed: 1500,
      adaptiveHeight: !0,
    }),
    $('.internship-carousel').slick({
      slide: 'li',
      fade: !0,
      speed: 500,
      autoplay: 0,
      autoplaySpeed: 1500,
      adaptiveHeight: !0,
    }),
    $('.travel-recirc-carousel').slick({ slide: '.article-list', speed: 4e3, autoplay: !0, autoplaySpeed: 4e3 }),
    $('.donation-recirc-carousel').slick({ slide: '.article-list', speed: 4e3, autoplay: !0, autoplaySpeed: 4e3 }),
    $('.landing .recirc-carousel').slick({ slide: '.article-list', asNavFor: '.tag-browser' }),
    $('.landing .tag-browser').slick({
      slide: 'li',
      asNavFor: '.recirc-carousel',
      focusOnSelect: !0,
      variableWidth: !0,
      arrows: !1,
      infinite: !0,
    });
  var i,
    s = navigator.userAgent.toLowerCase();
  $('.article-page').length &&
    ((i = $('.article-list.slick-slide').width()),
    $('.ie9').length && (i = $('.recirc-carousel.slick-initialized.slick-slider').width()),
    $('.slick-list.draggable').css({ width: i }),
    /android|webos|iphone|ipad|ipod|blackberry/i.test(s) ||
      ($('.article-list.slick-slide').children('li').css({ width: i }), $('.slick-list').css({ width: i })));
}
function ajaxCarousel(e) {
  $('.postid-' + e + ' .recirc-carousel').slick({ slide: '.article-list', asNavFor: '.postid-' + e + ' .tag-browser' }),
    $('.postid-' + e + ' .tag-browser').slick({
      slide: 'li',
      asNavFor: '.postid-' + e + ' .recirc-carousel',
      focusOnSelect: !0,
      variableWidth: !0,
      arrows: !1,
    }),
    $('.postid-' + e + ' .tag-browser').on('click', function (e) {
      e.preventDefault();
    });
}
function ajaxGallery(e) {
  $('.postid-' + e + ' .gallery').magnificPopup({ type: 'image', gallery: { enabled: !0 } });
}
function titleCut() {
  var e, i;
  0 < $('.article-meta').children('h2').length &&
    74 < (i = $('.article-meta').children('h2').html()).length &&
    ((e = i.substring(0, 74)), (e += '...'), $('.article-meta').children('h2').html(e));
}
function slp() {
  (2 < $('.siderail__item').length ||
    (1 < $('.siderail__item').length && !$('.siderail__item:first').hasClass('primary'))) &&
    $('.siderail__item.ad:first').css({ 'margin-bottom': '800px' });
}
function nationVoices() {
  $('.nation-voices').children('.row').children('.story').children('.row').children('.info').css({ height: '' }),
    $('.nation-voices').each(function () {
      var e = 0,
        i = 0,
        s = $(this).children('.row').children('.story').children('.row').children('.info');
      s.each(function () {
        (i = $(this).height()) > e && (e = i);
      }),
        s.css({ height: e + 'px' });
    });
}
function debounce(e, i, s) {
  var n;
  return function () {
    var o = this,
      r = arguments,
      a = s && !n;
    clearTimeout(n),
      (n = setTimeout(function () {
        (n = null), s || e.apply(o, r);
      }, i)),
      a && e.apply(o, r);
  };
}
function adRefresh() {
  for (ad in adArray) window.googletag && googletag.apiReady && googletag.pubads().refresh(adArray[ad]);
  adArray = [];
}
function calculateHeights(e) {
  var i,
    s =
      e.find('.article-body-inner').height(),
    n = 100 / e.find('aside.right').length;
    const viewportWidth = $(window).width();

  if (viewportWidth < 1056) return;
  e.find('.aside-wrap:not(.destinations-sidebar)').css({ position: 'absolute', height: s + 'px', top: e.find('.article-header').height() + 'px' }),
    e.find('.ad-wrap').css({ height: n + '%' }),
    0 < e.find('.article-fullscreen').length &&
      ((i = e.find('.tnpaywallcontent.article-body').eq(0).position().top), e.find('.aside-wrap').css({ top: i }));
}
function unhideAds() {
  $('aside.right').removeClass('hide');
}
function adClasses(e) {
  var i,
    s,
    n = e.find('.aside-wrap').height(),
    o = e.children('.aside-wrap').children('.ad-wrap'),
    r = n / o.length,
    a = Math.floor(($(window).scrollTop() - e.find('.article-header').offset().top + 68) / r),
    l = o.eq(a),
    c = l.find('aside.right');
  0 <= a ? (i = o.eq(a - 1).find('aside.right')) : -1 === a && (i = o.eq(0).find('aside.right')),
    a < o.length && (s = o.eq(a + 1).find('aside.right')),
    0 <= a &&
      a < o.length &&
      ($(window).scrollTop() >= l.offset().top - 68 &&
      $(window).scrollTop() < l.offset().top + l.height() - l.find('aside.right').height() - 108 &&
      (0 == $('.scrolltrace.currentScr .expand-reduce').length ||
        $('.scrolltrace.currentScr .expand-reduce').hasClass('expand-close') ||
        ($('.scrolltrace.currentScr .expand-reduce').hasClass('tn-first-expand') &&
          !$('.scrolltrace.currentScr .expand-reduce').hasClass('expand-full'))) &&
      0 != $('.scrolltrace.currentScr').length &&
      c.parents('.scrolltrace').hasClass('currentScr')
        ? (c.hasClass('sticky') ||
            ($('aside.right.sticky').removeClass('sticky'),
            c.addClass('sticky'),
            0 < a &&
            !i.hasClass('stopped') &&
            (0 == $('.scrolltrace.currentScr .expand-reduce').length ||
              $('.scrolltrace.currentScr .expand-reduce').hasClass('expand-close') ||
              ($('.scrolltrace.currentScr .expand-reduce').hasClass('tn-first-expand') &&
                !$('.scrolltrace.currentScr .expand-reduce').hasClass('expand-full'))) &&
            0 != $('.scrolltrace.currentScr').length &&
            c.parents('.scrolltrace').hasClass('currentScr')
              ? i.addClass('stopped')
              : s.hasClass('sticky') && s.removeClass('sticky')),
          c.hasClass('stopped') && c.removeClass('stopped'))
        : $(window).scrollTop() >= l.offset().top + l.height() - l.find('aside.right').height() - 108
        ? (c.hasClass('stopped') || ($('aside.right.stopped').removeClass('stopped'), c.addClass('stopped')),
          c.hasClass('sticky') && c.removeClass('sticky'),
          0 < a && !i.hasClass('stopped') && i.addClass('stopped'),
          s.hasClass('sticky') && s.removeClass('sticky'))
        : (c.hasClass('stopped') && c.removeClass('stopped'), c.hasClass('sticky') && c.removeClass('sticky'))),
    -1 === a && (i.removeClass('sticky'), i.removeClass('stopped'), s.removeClass('sticky'), s.removeClass('stopped'));
}
function fixedAds(e) {
  var i, s, n, o, r, a;
  $('body').hasClass('tn-block-editor') ||
    (1056 <= $(window).width()
      ? ((i = e.find('.article-body')).find('aside.right').css({ display: 'block' }),
        0 < i.find('aside.right').length &&
          ((s = i.siblings('.aside-wrap')),
          e.find('aside.right').detach().prependTo(s),
          e.find('aside.right').wrap('<div class="ad-wrap"></div>')),
        calculateHeights(e),
        e.find('.aside-wrap').height(),
        (n = e.children('.aside-wrap').children('.ad-wrap')).length,
        0 < e.find('.article-fullscreen').length &&
          ((a = e.find('.tnpaywallcontent.article-body').eq(0).position().top + 30),
          e.find('.aside-wrap').css({ top: a })),
        (o = $('body')),
        !(r = $('html')).hasClass('touch') &&
          o.hasClass('body-side-rail') &&
          (window.addEventListener('resize', function () {
            debounce(calculateHeights(e), 200), e.find('.aside-wrap').height(), n.length;
            var i = e.find('.tnpaywallcontent.article-body').eq(0).position().top + 30;
            //e.find('.aside-wrap').css({ top: i }); 
            // debounce(adClasses(e), 200);
          })),
          // $(document).on('scroll', function () {
          //   debounce(adClasses(e), 200);
          // })
        r.hasClass('touch') &&
          o.hasClass('body-side-rail') &&
          (window.addEventListener(
            'orientationchange',
            function () {
              calculateHeights(e);
            },
            !1
          ),
          0 < e.find('.article-fullscreen').length) &&
          ((a = e.find('.article-header .article-info').eq(0).position().top), e.find('.aside-wrap').css({ top: a })))
      : 1056 <= $(window).width() && 0 < e.find('.article-interactive').length
      ? (e.find('.article-body').find('aside.right').show(),
        e.find('.article-body').find('aside.right').eq(0).css({ top: '20px' }),
        e.find('.aside-wrap').addClass('hidden'))
      : (e.find('.article-body').find('aside.right:not(.hidden-on-phone)').css({ display: 'block' }),
        (refreshTime = !0)));
}
function shareFacebook(e) {
  window.open('http://www.facebook.com/sharer.php?u=' + e, 'width=550px, height=420');
}
function shareTwitter(e, i) {
  window.open('https://twitter.com/intent/tweet?text=' + i + '%20via%20%40thenation&url=' + encodeURI(e));
}
function newSocial(e) {
  var i = $('body').find('.currentScr .share__short').text(),
    s = ((i = $.trim(i)), $('body').find('.currentScr h1.title').text()),
    n = ((s = $.trim(s)), $(e).hasClass('fb') ? 'fb' : 'tw');
  0 === i.length && (i = document.URL), 'fb' == n && shareFacebook(i), 'tw' == n && shareTwitter(i, s);
}
!(function (e, i) {
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? i(e, !0)
        : function (e) {
            if (!e.document) throw Error('jQuery requires a window with a document');
            return i(e);
          })
    : i(e);
})('undefined' != typeof window ? window : this, function (t, e) {
  function i(e) {
    var i = e.length,
      s = Y.type(e);
    return (
      'function' !== s &&
      !Y.isWindow(e) &&
      (!(1 !== e.nodeType || !i) || 'array' === s || 0 === i || ('number' == typeof i && 0 < i && i - 1 in e))
    );
  }
  function n(e, i, s) {
    if (Y.isFunction(i))
      return Y.grep(e, function (e, n) {
        return !!i.call(e, n, e) !== s;
      });
    if (i.nodeType)
      return Y.grep(e, function (e) {
        return (e === i) !== s;
      });
    if ('string' == typeof i) {
      if (J.test(i)) return Y.filter(i, e, s);
      i = Y.filter(i, e);
    }
    return Y.grep(e, function (e) {
      return 0 <= z.call(i, e) !== s;
    });
  }
  function s(e, i) {
    for (; (e = e[i]) && 1 !== e.nodeType; );
    return e;
  }
  function o() {
    U.removeEventListener('DOMContentLoaded', o, !1), t.removeEventListener('load', o, !1), Y.ready();
  }
  function a() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = Y.expando + Math.random());
  }
  function r(e, i, s) {
    var n;
    if (void 0 === s && 1 === e.nodeType) {
      if (((n = 'data-' + i.replace(ht, '-$1').toLowerCase()), 'string' == typeof (s = e.getAttribute(n)))) {
        try {
          s =
            'true' === s ||
            ('false' !== s && ('null' === s ? null : +s + '' === s ? +s : dt.test(s) ? Y.parseJSON(s) : s));
        } catch (o) {}
        ct.set(e, i, s);
      } else s = void 0;
    }
    return s;
  }
  function l() {
    return !0;
  }
  function c() {
    return !1;
  }
  function d() {
    try {
      return U.activeElement;
    } catch (e) {}
  }
  function h(e, i) {
    return Y.nodeName(e, 'table') && Y.nodeName(11 !== i.nodeType ? i : i.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody'))
      : e;
  }
  function u(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function p(e) {
    var i = Et.exec(e.type);
    return i ? (e.type = i[1]) : e.removeAttribute('type'), e;
  }
  function f(e, i) {
    for (var s = 0, n = e.length; s < n; s++) lt.set(e[s], 'globalEval', !i || lt.get(i[s], 'globalEval'));
  }
  function g(e, i) {
    var s, n, o, r, a, l, c, h;
    if (1 === i.nodeType) {
      if (lt.hasData(e) && ((r = lt.access(e)), (a = lt.set(i, r)), (h = r.events)))
        for (o in (delete a.handle, (a.events = {}), h))
          for (s = 0, n = h[o].length; s < n; s++) Y.event.add(i, o, h[o][s]);
      ct.hasData(e) && ((l = ct.access(e)), (c = Y.extend({}, l)), ct.set(i, c));
    }
  }
  function m(e, i) {
    var s = e.getElementsByTagName
      ? e.getElementsByTagName(i || '*')
      : e.querySelectorAll
      ? e.querySelectorAll(i || '*')
      : [];
    return void 0 === i || (i && Y.nodeName(e, i)) ? Y.merge([e], s) : s;
  }
  function v(e, i) {
    var s,
      n = Y(i.createElement(e)).appendTo(i.body),
      o = t.getDefaultComputedStyle && (s = t.getDefaultComputedStyle(n[0])) ? s.display : Y.css(n[0], 'display');
    return n.detach(), o;
  }
  function y(e) {
    var i = U,
      s = Mt[e];
    return (
      s ||
        (('none' !== (s = v(e, i)) && s) ||
          ((i = (jt = (jt || Y("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement))[0]
            .contentDocument).write(),
          i.close(),
          (s = v(e, i)),
          jt.detach()),
        (Mt[e] = s)),
      s
    );
  }
  function b(e, i, s) {
    var n,
      o,
      r,
      a,
      l = e.style;
    return (
      (s = s || Nt(e)) && (a = s.getPropertyValue(i) || s[i]),
      s &&
        ('' !== a || Y.contains(e.ownerDocument, e) || (a = Y.style(e, i)),
        zt.test(a) &&
          qt.test(i) &&
          ((n = l.width),
          (o = l.minWidth),
          (r = l.maxWidth),
          (l.minWidth = l.maxWidth = l.width = a),
          (a = s.width),
          (l.width = n),
          (l.minWidth = o),
          (l.maxWidth = r))),
      void 0 !== a ? a + '' : a
    );
  }
  function w(e, i) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = i).apply(this, arguments);
      },
    };
  }
  function _(e, i) {
    if (i in e) return i;
    for (var s = i[0].toUpperCase() + i.slice(1), n = i, o = Xt.length; o--; ) if ((i = Xt[o] + s) in e) return i;
    return n;
  }
  function x(e, i, s) {
    var n = Bt.exec(i);
    return n ? Math.max(0, n[1] - (s || 0)) + (n[2] || 'px') : i;
  }
  function C(e, i, s, n, o) {
    for (var r = s === (n ? 'border' : 'content') ? 4 : 'width' === i ? 1 : 0, a = 0; r < 4; r += 2)
      'margin' === s && (a += Y.css(e, s + gt[r], !0, o)),
        n
          ? ('content' === s && (a -= Y.css(e, 'padding' + gt[r], !0, o)),
            'margin' !== s && (a -= Y.css(e, 'border' + gt[r] + 'Width', !0, o)))
          : ((a += Y.css(e, 'padding' + gt[r], !0, o)),
            'padding' !== s && (a += Y.css(e, 'border' + gt[r] + 'Width', !0, o)));
    return a;
  }
  function k(e, i, s) {
    var n = !0,
      o = 'width' === i ? e.offsetWidth : e.offsetHeight,
      r = Nt(e),
      a = 'border-box' === Y.css(e, 'boxSizing', !1, r);
    if (o <= 0 || null == o) {
      if ((((o = b(e, i, r)) < 0 || null == o) && (o = e.style[i]), zt.test(o))) return o;
      (n = a && (B.boxSizingReliable() || o === e.style[i])), (o = parseFloat(o) || 0);
    }
    return o + C(e, i, s || (a ? 'border' : 'content'), n, r) + 'px';
  }
  function S(e, i) {
    for (var s, n, o, r = [], a = 0, l = e.length; a < l; a++)
      (n = e[a]).style &&
        ((r[a] = lt.get(n, 'olddisplay')),
        (s = n.style.display),
        i
          ? (r[a] || 'none' !== s || (n.style.display = ''),
            '' === n.style.display && ut(n) && (r[a] = lt.access(n, 'olddisplay', y(n.nodeName))))
          : ((o = ut(n)), ('none' === s && o) || lt.set(n, 'olddisplay', o ? s : Y.css(n, 'display'))));
    for (a = 0; a < l; a++)
      (n = e[a]).style &&
        ((i && 'none' !== n.style.display && '' !== n.style.display) || (n.style.display = i ? r[a] || '' : 'none'));
    return e;
  }
  function T(e, i, s, n, o) {
    return new T.prototype.init(e, i, s, n, o);
  }
  function $() {
    return (
      setTimeout(function () {
        Zt = void 0;
      }),
      (Zt = Y.now())
    );
  }
  function F(e, i) {
    var s,
      n = 0,
      o = { height: e };
    for (i = i ? 1 : 0; n < 4; n += 2 - i) o['margin' + (s = gt[n])] = o['padding' + s] = e;
    return i && (o.opacity = o.width = e), o;
  }
  function E(e, i, s) {
    for (var n, o = (se[i] || []).concat(se['*']), r = 0, a = o.length; r < a; r++)
      if ((n = o[r].call(s, i, e))) return n;
  }
  function A(e, i, s) {
    var n,
      o,
      r = 0,
      a = ne.length,
      l = Y.Deferred().always(function () {
        delete c.elem;
      }),
      c = function () {
        if (o) return !1;
        for (
          var i = Zt || $(),
            s = Math.max(0, h.startTime + h.duration - i),
            n = 1 - (s / h.duration || 0),
            r = 0,
            a = h.tweens.length;
          r < a;
          r++
        )
          h.tweens[r].run(n);
        return l.notifyWith(e, [h, n, s]), n < 1 && a ? s : (l.resolveWith(e, [h]), !1);
      },
      h = l.promise({
        elem: e,
        props: Y.extend({}, i),
        opts: Y.extend(!0, { specialEasing: {} }, s),
        originalProperties: i,
        originalOptions: s,
        startTime: Zt || $(),
        duration: s.duration,
        tweens: [],
        createTween: function (i, s) {
          var n = Y.Tween(e, h.opts, i, s, h.opts.specialEasing[i] || h.opts.easing);
          return h.tweens.push(n), n;
        },
        stop: function (i) {
          var s = 0,
            n = i ? h.tweens.length : 0;
          if (o) return this;
          for (o = !0; s < n; s++) h.tweens[s].run(1);
          return i ? l.resolveWith(e, [h, i]) : l.rejectWith(e, [h, i]), this;
        },
      }),
      d = h.props;
    for (
      (function (e, i) {
        var s, n, o, r, a;
        for (s in e)
          if (
            ((o = i[(n = Y.camelCase(s))]),
            (r = e[s]),
            Y.isArray(r) && ((o = r[1]), (r = e[s] = r[0])),
            s !== n && ((e[n] = r), delete e[s]),
            (a = Y.cssHooks[n]) && ('expand' in a))
          )
            for (s in ((r = a.expand(r)), delete e[n], r)) (s in e) || ((e[s] = r[s]), (i[s] = o));
          else i[n] = o;
      })(d, h.opts.specialEasing);
      r < a;
      r++
    )
      if ((n = ne[r].call(h, e, d, h.opts))) return n;
    return (
      Y.map(d, E, h),
      Y.isFunction(h.opts.start) && h.opts.start.call(e, h),
      Y.fx.timer(Y.extend(c, { elem: e, anim: h, queue: h.opts.queue })),
      h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    );
  }
  function D(e) {
    return function (i, s) {
      'string' != typeof i && ((s = i), (i = '*'));
      var n,
        o = 0,
        r = i.toLowerCase().match(ot) || [];
      if (Y.isFunction(s))
        for (; (n = r[o++]); )
          '+' === n[0] ? (e[(n = n.slice(1) || '*')] = e[n] || []).unshift(s) : (e[n] = e[n] || []).push(s);
    };
  }
  function j(e, i, s, n) {
    function o(l) {
      var c;
      return (
        (r[l] = !0),
        Y.each(e[l] || [], function (e, l) {
          var h = l(i, s, n);
          return 'string' != typeof h || a || r[h] ? (a ? !(c = h) : void 0) : (i.dataTypes.unshift(h), o(h), !1);
        }),
        c
      );
    }
    var r = {},
      a = e === _e;
    return o(i.dataTypes[0]) || (!r['*'] && o('*'));
  }
  function O(e, i) {
    var s,
      n,
      o = Y.ajaxSettings.flatOptions || {};
    for (s in i) void 0 !== i[s] && ((o[s] ? e : (n = n || {}))[s] = i[s]);
    return n && Y.extend(!0, e, n), e;
  }
  function H(e) {
    return Y.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  function P(e, i) {
    return i.toUpperCase();
  }
  var I = [],
    L = I.slice,
    M = I.concat,
    q = I.push,
    z = I.indexOf,
    N = {},
    R = N.toString,
    W = N.hasOwnProperty,
    B = {},
    U = t.document,
    Y = function (e, i) {
      return new Y.fn.init(e, i);
    },
    V = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    X = /^-ms-/,
    Z = /-([\da-z])/gi;
  (Y.fn = Y.prototype =
    {
      jquery: '3.6.0',
      constructor: Y,
      selector: '',
      length: 0,
      toArray: function () {
        return L.call(this);
      },
      get: function (e) {
        return null != e ? (e < 0 ? this[e + this.length] : this[e]) : L.call(this);
      },
      pushStack: function (e) {
        var i = Y.merge(this.constructor(), e);
        return (i.prevObject = this), (i.context = this.context), i;
      },
      each: function (e, i) {
        return Y.each(this, e, i);
      },
      map: function (e) {
        return this.pushStack(
          Y.map(this, function (i, s) {
            return e.call(i, s, i);
          })
        );
      },
      slice: function () {
        return this.pushStack(L.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var i = this.length,
          s = +e + (e < 0 ? i : 0);
        return this.pushStack(0 <= s && s < i ? [this[s]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: q,
      sort: I.sort,
      splice: I.splice,
    }),
    (Y.extend = Y.fn.extend =
      function () {
        var e,
          i,
          s,
          n,
          o,
          r,
          a = arguments[0] || {},
          l = 1,
          c = arguments.length,
          h = !1;
        for (
          'boolean' == typeof a && ((h = a), (a = arguments[l] || {}), l++),
            'object' == typeof a || Y.isFunction(a) || (a = {}),
            l === c && ((a = this), l--);
          l < c;
          l++
        )
          if (null != (e = arguments[l]))
            for (i in e)
              (s = a[i]),
                a !== (n = e[i]) &&
                  (h && n && (Y.isPlainObject(n) || (o = Y.isArray(n)))
                    ? ((r = o ? ((o = !1), s && Y.isArray(s) ? s : []) : s && Y.isPlainObject(s) ? s : {}),
                      (a[i] = Y.extend(h, r, n)))
                    : void 0 !== n && (a[i] = n));
        return a;
      }),
    Y.extend({
      expando: 'jQuery' + ('2.1.1' + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return 'function' === Y.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        return !Y.isArray(e) && 0 <= e - parseFloat(e);
      },
      isPlainObject: function (e) {
        return !(
          'object' !== Y.type(e) ||
          e.nodeType ||
          Y.isWindow(e) ||
          (e.constructor && !W.call(e.constructor.prototype, 'isPrototypeOf'))
        );
      },
      isEmptyObject: function (e) {
        var i;
        for (i in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
          ? N[R.call(e)] || 'object'
          : typeof e;
      },
      globalEval: function (t) {
        var e,
          i = eval;
        (t = Y.trim(t)) &&
          (1 === t.indexOf('use strict')
            ? (((e = U.createElement('script')).text = t), U.head.appendChild(e).parentNode.removeChild(e))
            : i(t));
      },
      camelCase: function (e) {
        return e.replace(X, 'ms-').replace(Z, P);
      },
      nodeName: function (e, i) {
        return e.nodeName && e.nodeName.toLowerCase() === i.toLowerCase();
      },
      each: function (e, s, n) {
        var o = 0,
          r = e.length,
          a = i(e);
        if (n) {
          if (a) for (; o < r && !1 !== s.apply(e[o], n); o++);
          else for (o in e) if (!1 === s.apply(e[o], n)) break;
        } else if (a) for (; o < r && !1 !== s.call(e[o], o, e[o]); o++);
        else for (o in e) if (!1 === s.call(e[o], o, e[o])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(V, '');
      },
      makeArray: function (e, s) {
        var n = s || [];
        return null != e && (i(Object(e)) ? Y.merge(n, 'string' == typeof e ? [e] : e) : q.call(n, e)), n;
      },
      inArray: function (e, i, s) {
        return null == i ? -1 : z.call(i, e, s);
      },
      merge: function (e, i) {
        for (var s = +i.length, n = 0, o = e.length; n < s; n++) e[o++] = i[n];
        return (e.length = o), e;
      },
      grep: function (e, i, s) {
        for (var n = [], o = 0, r = e.length, a = !s; o < r; o++) !i(e[o], o) != a && n.push(e[o]);
        return n;
      },
      map: function (e, s, n) {
        var o,
          r = 0,
          a = e.length,
          l = [];
        if (i(e)) for (; r < a; r++) null != (o = s(e[r], r, n)) && l.push(o);
        else for (r in e) null != (o = s(e[r], r, n)) && l.push(o);
        return M.apply([], l);
      },
      guid: 1,
      proxy: function (e, i) {
        var s, n, o;
        return (
          'string' == typeof i && ((s = e[i]), (i = e), (e = s)),
          Y.isFunction(e)
            ? ((n = L.call(arguments, 2)),
              ((o = function () {
                return e.apply(i || this, n.concat(L.call(arguments)));
              }).guid = e.guid =
                e.guid || Y.guid++),
              o)
            : void 0
        );
      },
      now: Date.now,
      support: B,
    }),
    Y.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, i) {
      N['[object ' + i + ']'] = i.toLowerCase();
    });
  var Q = (function (e) {
    function i(e, i, s, n) {
      var o, r, a, l, h, u, p, f, g, m;
      if (((i ? i.ownerDocument || i : q) !== F && E(i), (s = s || []), !e || 'string' != typeof e)) return s;
      if (1 !== (l = (i = i || F).nodeType) && 9 !== l) return [];
      if (D && !n) {
        if ((o = tf.exec(e))) {
          if ((a = o[1])) {
            if (9 === l) {
              if (!(r = i.getElementById(a)) || !r.parentNode) return s;
              if (r.id === a) return s.push(r), s;
            } else if (i.ownerDocument && (r = i.ownerDocument.getElementById(a)) && L(i, r) && r.id === a)
              return s.push(r), s;
          } else {
            if (o[2]) return Z.apply(s, i.getElementsByTagName(e)), s;
            if ((a = o[3]) && v.getElementsByClassName && i.getElementsByClassName)
              return Z.apply(s, i.getElementsByClassName(a)), s;
          }
        }
        if (v.qsa && (!H || !H.test(e))) {
          if (((f = p = j), (g = i), (m = 9 === l && e), 1 === l && 'object' !== i.nodeName.toLowerCase())) {
            for (
              u = x(e),
                (p = i.getAttribute('id')) ? (f = p.replace(tm, '\\$&')) : i.setAttribute('id', f),
                f = "[id='" + f + "'] ",
                h = u.length;
              h--;

            )
              u[h] = f + d(u[h]);
            (g = (tg.test(e) && c(i.parentNode)) || i), (m = u.join(','));
          }
          if (m)
            try {
              return Z.apply(s, g.querySelectorAll(m)), s;
            } catch (b) {
            } finally {
              p || i.removeAttribute('id');
            }
        }
      }
      return k(e.replace(tn, '$1'), i, s, n);
    }
    function s() {
      var e = [];
      return function i(s, n) {
        return e.push(s + ' ') > b.cacheLength && delete i[e.shift()], (i[s + ' '] = n);
      };
    }
    function n(e) {
      return (e[j] = !0), e;
    }
    function o(e) {
      var i = F.createElement('div');
      try {
        return !!e(i);
      } catch (s) {
        return !1;
      } finally {
        i.parentNode && i.parentNode.removeChild(i), (i = null);
      }
    }
    function r(e, i) {
      for (var s = e.split('|'), n = e.length; n--; ) b.attrHandle[s[n]] = i;
    }
    function a(e, i) {
      var s = i && e,
        n =
          s &&
          1 === e.nodeType &&
          1 === i.nodeType &&
          (~i.sourceIndex || -2147483648) - (~e.sourceIndex || -2147483648);
      if (n) return n;
      if (s) {
        for (; (s = s.nextSibling); ) if (s === i) return -1;
      }
      return e ? 1 : -1;
    }
    function l(e) {
      return n(function (i) {
        return (
          (i = +i),
          n(function (s, n) {
            for (var o, r = e([], s.length, i), a = r.length; a--; ) s[(o = r[a])] && (s[o] = !(n[o] = s[o]));
          })
        );
      });
    }
    function c(e) {
      return e && typeof e.getElementsByTagName !== B && e;
    }
    function h() {}
    function d(e) {
      for (var i = 0, s = e.length, n = ''; i < s; i++) n += e[i].value;
      return n;
    }
    function u(e, i, s) {
      var n = i.dir,
        o = s && 'parentNode' === n,
        r = I++;
      return i.first
        ? function (i, s, r) {
            for (; (i = i[n]); ) if (1 === i.nodeType || o) return e(i, s, r);
          }
        : function (i, s, a) {
            var l,
              c,
              h = [z, r];
            if (a) {
              for (; (i = i[n]); ) if ((1 === i.nodeType || o) && e(i, s, a)) return !0;
            } else
              for (; (i = i[n]); )
                if (1 === i.nodeType || o) {
                  if ((l = (c = i[j] || (i[j] = {}))[n]) && l[0] === z && l[1] === r) return (h[2] = l[2]);
                  if (((c[n] = h)[2] = e(i, s, a))) return !0;
                }
          };
    }
    function p(e) {
      return 1 < e.length
        ? function (i, s, n) {
            for (var o = e.length; o--; ) if (!e[o](i, s, n)) return !1;
            return !0;
          }
        : e[0];
    }
    function f(e, i, s, n, o) {
      for (var r, a = [], l = 0, c = e.length, h = null != i; l < c; l++)
        (r = e[l]) && (!s || s(r, n, o)) && (a.push(r), h && i.push(l));
      return a;
    }
    function g(e, i, s) {
      var n = '0x' + i - 65536;
      return n != n || s
        ? i
        : n < 0
        ? String.fromCharCode(65536 + n)
        : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
    }
    var m,
      v,
      b,
      y,
      w,
      x,
      C,
      k,
      _,
      S,
      T,
      E,
      F,
      A,
      D,
      H,
      O,
      P,
      L,
      j = 'sizzle' + -new Date(),
      q = e.document,
      z = 0,
      I = 0,
      N = s(),
      R = s(),
      M = s(),
      W = function (e, i) {
        return e === i && (T = !0), 0;
      },
      B = 'undefined',
      U = {}.hasOwnProperty,
      Y = [],
      V = Y.pop,
      X = Y.push,
      Z = Y.push,
      K = Y.slice,
      G =
        Y.indexOf ||
        function (e) {
          for (var i = 0, s = this.length; i < s; i++) if (this[i] === e) return i;
          return -1;
        },
      Q =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      J = '[\\x20\\t\\r\\n\\f]',
      tt = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      te = tt.replace('w', 'w#'),
      ti =
        '\\[' +
        J +
        '*(' +
        tt +
        ')(?:' +
        J +
        '*([*^$|!~]?=)' +
        J +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        te +
        '))|)' +
        J +
        '*\\]',
      ts =
        ':(' +
        tt +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        ti +
        ')*)|.*)\\)|)',
      tn = RegExp('^' + J + '+|((?:^|[^\\\\])(?:\\\\.)*)' + J + '+$', 'g'),
      to = RegExp('^' + J + '*,' + J + '*'),
      tr = RegExp('^' + J + '*([>+~]|' + J + ')' + J + '*'),
      ta = RegExp('=' + J + '*([^\\]\'"]*?)' + J + '*\\]', 'g'),
      tl = RegExp(ts),
      tc = RegExp('^' + te + '$'),
      th = {
        ID: RegExp('^#(' + tt + ')'),
        CLASS: RegExp('^\\.(' + tt + ')'),
        TAG: RegExp('^(' + tt.replace('w', 'w*') + ')'),
        ATTR: RegExp('^' + ti),
        PSEUDO: RegExp('^' + ts),
        CHILD: RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            J +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            J +
            '*(?:([+-]|)' +
            J +
            '*(\\d+)|))' +
            J +
            '*\\)|)',
          'i'
        ),
        bool: RegExp('^(?:' + Q + ')$', 'i'),
        needsContext: RegExp(
          '^' +
            J +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            J +
            '*((?:-\\d)?\\d*)' +
            J +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      td = /^(?:input|select|textarea|button)$/i,
      tu = /^h\d$/i,
      tp = /^[^{]+\{\s*\[native \w/,
      tf = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      tg = /[+~]/,
      tm = /'|\\/g,
      tv = RegExp('\\\\([\\da-f]{1,6}' + J + '?|(' + J + ')|.)', 'ig');
    try {
      Z.apply((Y = K.call(q.childNodes)), q.childNodes), Y[q.childNodes.length].nodeType;
    } catch (t$) {
      Z = {
        apply: Y.length
          ? function (e, i) {
              X.apply(e, K.call(i));
            }
          : function (e, i) {
              for (var s = e.length, n = 0; (e[s++] = i[n++]); );
              e.length = s - 1;
            },
      };
    }
    for (m in ((v = i.support = {}),
    (w = i.isXML =
      function (e) {
        var i = e && (e.ownerDocument || e).documentElement;
        return !!i && 'HTML' !== i.nodeName;
      }),
    (E = i.setDocument =
      function (e) {
        var i,
          s = e ? e.ownerDocument || e : q,
          n = s.defaultView;
        return s !== F && 9 === s.nodeType && s.documentElement
          ? ((A = (F = s).documentElement),
            (D = !w(s)),
            n &&
              n !== n.top &&
              (n.addEventListener
                ? n.addEventListener(
                    'unload',
                    function () {
                      E();
                    },
                    !1
                  )
                : n.attachEvent &&
                  n.attachEvent('onunload', function () {
                    E();
                  })),
            (v.attributes = o(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (v.getElementsByTagName = o(function (e) {
              return e.appendChild(s.createComment('')), !e.getElementsByTagName('*').length;
            })),
            (v.getElementsByClassName =
              tp.test(s.getElementsByClassName) &&
              o(function (e) {
                return (
                  (e.innerHTML = "<div class='a'></div><div class='a i'></div>"),
                  (e.firstChild.className = 'i'),
                  2 === e.getElementsByClassName('i').length
                );
              })),
            (v.getById = o(function (e) {
              return (A.appendChild(e).id = j), !s.getElementsByName || !s.getElementsByName(j).length;
            })),
            v.getById
              ? ((b.find.ID = function (e, i) {
                  if (typeof i.getElementById !== B && D) {
                    var s = i.getElementById(e);
                    return s && s.parentNode ? [s] : [];
                  }
                }),
                (b.filter.ID = function (e) {
                  var i = e.replace(tv, g);
                  return function (e) {
                    return e.getAttribute('id') === i;
                  };
                }))
              : (delete b.find.ID,
                (b.filter.ID = function (e) {
                  var i = e.replace(tv, g);
                  return function (e) {
                    var s = typeof e.getAttributeNode !== B && e.getAttributeNode('id');
                    return s && s.value === i;
                  };
                })),
            (b.find.TAG = v.getElementsByTagName
              ? function (e, i) {
                  return typeof i.getElementsByTagName !== B ? i.getElementsByTagName(e) : void 0;
                }
              : function (e, i) {
                  var s,
                    n = [],
                    o = 0,
                    r = i.getElementsByTagName(e);
                  if ('*' !== e) return r;
                  for (; (s = r[o++]); ) 1 === s.nodeType && n.push(s);
                  return n;
                }),
            (b.find.CLASS =
              v.getElementsByClassName &&
              function (e, i) {
                return typeof i.getElementsByClassName !== B && D ? i.getElementsByClassName(e) : void 0;
              }),
            (O = []),
            (H = []),
            (v.qsa = tp.test(s.querySelectorAll)) &&
              (o(function (e) {
                (e.innerHTML = "<select msallowclip=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowclip^='']").length && H.push('[*^$]=' + J + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length || H.push('\\[' + J + '*(?:value|' + Q + ')'),
                  e.querySelectorAll(':checked').length || H.push(':checked');
              }),
              o(function (e) {
                var i = s.createElement('input');
                i.setAttribute('type', 'hidden'),
                  e.appendChild(i).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length && H.push('name' + J + '*[*^$|!~]?='),
                  e.querySelectorAll(':enabled').length || H.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  H.push(',.*:');
              })),
            (v.matchesSelector = tp.test(
              (P =
                A.matches ||
                A.webkitMatchesSelector ||
                A.mozMatchesSelector ||
                A.oMatchesSelector ||
                A.msMatchesSelector)
            )) &&
              o(function (e) {
                (v.disconnectedMatch = P.call(e, 'div')), P.call(e, "[s!='']:x"), O.push('!=', ts);
              }),
            (H = H.length && RegExp(H.join('|'))),
            (O = O.length && RegExp(O.join('|'))),
            (L =
              (i = tp.test(A.compareDocumentPosition)) || tp.test(A.contains)
                ? function (e, i) {
                    var s = 9 === e.nodeType ? e.documentElement : e,
                      n = i && i.parentNode;
                    return (
                      e === n ||
                      !(
                        !n ||
                        1 !== n.nodeType ||
                        !(s.contains ? s.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
                      )
                    );
                  }
                : function (e, i) {
                    if (i) {
                      for (; (i = i.parentNode); ) if (i === e) return !0;
                    }
                    return !1;
                  }),
            (W = i
              ? function (e, i) {
                  if (e === i) return (T = !0), 0;
                  var n = !e.compareDocumentPosition - !i.compareDocumentPosition;
                  return (
                    n ||
                    (1 & (n = (e.ownerDocument || e) === (i.ownerDocument || i) ? e.compareDocumentPosition(i) : 1) ||
                    (!v.sortDetached && i.compareDocumentPosition(e) === n)
                      ? e === s || (e.ownerDocument === q && L(q, e))
                        ? -1
                        : i === s || (i.ownerDocument === q && L(q, i))
                        ? 1
                        : S
                        ? G.call(S, e) - G.call(S, i)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, i) {
                  if (e === i) return (T = !0), 0;
                  var n,
                    o = 0,
                    r = e.parentNode,
                    l = i.parentNode,
                    c = [e],
                    h = [i];
                  if (!r || !l)
                    return e === s ? -1 : i === s ? 1 : r ? -1 : l ? 1 : S ? G.call(S, e) - G.call(S, i) : 0;
                  if (r === l) return a(e, i);
                  for (n = e; (n = n.parentNode); ) c.unshift(n);
                  for (n = i; (n = n.parentNode); ) h.unshift(n);
                  for (; c[o] === h[o]; ) o++;
                  return o ? a(c[o], h[o]) : c[o] === q ? -1 : h[o] === q ? 1 : 0;
                }),
            s)
          : F;
      }),
    (i.matches = function (e, s) {
      return i(e, null, null, s);
    }),
    (i.matchesSelector = function (e, s) {
      if (
        ((e.ownerDocument || e) !== F && E(e),
        (s = s.replace(ta, "='$1']")),
        v.matchesSelector && D && (!O || !O.test(s)) && (!H || !H.test(s)))
      )
        try {
          var n = P.call(e, s);
          if (n || v.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
        } catch (o) {}
      return 0 < i(s, F, null, [e]).length;
    }),
    (i.contains = function (e, i) {
      return (e.ownerDocument || e) !== F && E(e), L(e, i);
    }),
    (i.attr = function (e, i) {
      (e.ownerDocument || e) !== F && E(e);
      var s = b.attrHandle[i.toLowerCase()],
        n = s && U.call(b.attrHandle, i.toLowerCase()) ? s(e, i, !D) : void 0;
      return void 0 !== n
        ? n
        : v.attributes || !D
        ? e.getAttribute(i)
        : (n = e.getAttributeNode(i)) && n.specified
        ? n.value
        : null;
    }),
    (i.error = function (e) {
      throw Error('Syntax error, unrecognized expression: ' + e);
    }),
    (i.uniqueSort = function (e) {
      var i,
        s = [],
        n = 0,
        o = 0;
      if (((T = !v.detectDuplicates), (S = !v.sortStable && e.slice(0)), e.sort(W), T)) {
        for (; (i = e[o++]); ) i === e[o] && (n = s.push(o));
        for (; n--; ) e.splice(s[n], 1);
      }
      return (S = null), e;
    }),
    (y = i.getText =
      function (e) {
        var i,
          s = '',
          n = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) s += y(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (i = e[n++]); ) s += y(i);
        return s;
      }),
    ((b = i.selectors =
      {
        cacheLength: 50,
        createPseudo: n,
        match: th,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(tv, g)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(tv, g)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || i.error(e[0]),
                  (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && i.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var i,
              s = !e[6] && e[2];
            return th.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : s &&
                    tl.test(s) &&
                    (i = x(s, !0)) &&
                    (i = s.indexOf(')', s.length - i) - s.length) &&
                    ((e[0] = e[0].slice(0, i)), (e[2] = s.slice(0, i))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var i = e.replace(tv, g).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === i;
                };
          },
          CLASS: function (e) {
            var i = N[e + ' '];
            return (
              i ||
              ((i = RegExp('(^|' + J + ')' + e + '(' + J + '|$)')),
              N(e, function (e) {
                return i.test(
                  ('string' == typeof e.className && e.className) ||
                    (typeof e.getAttribute !== B && e.getAttribute('class')) ||
                    ''
                );
              }))
            );
          },
          ATTR: function (e, s, n) {
            return function (o) {
              var r = i.attr(o, e);
              return null == r
                ? '!=' === s
                : !s ||
                    ((r += ''),
                    '=' === s
                      ? r === n
                      : '!=' === s
                      ? r !== n
                      : '^=' === s
                      ? n && 0 === r.indexOf(n)
                      : '*=' === s
                      ? n && -1 < r.indexOf(n)
                      : '$=' === s
                      ? n && r.slice(-n.length) === n
                      : '~=' === s
                      ? -1 < (' ' + r + ' ').indexOf(n)
                      : '|=' === s && (r === n || r.slice(0, n.length + 1) === n + '-'));
            };
          },
          CHILD: function (e, i, s, n, o) {
            var r = 'nth' !== e.slice(0, 3),
              a = 'last' !== e.slice(-4),
              l = 'of-type' === i;
            return 1 === n && 0 === o
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (i, s, c) {
                  var h,
                    d,
                    u,
                    p,
                    f,
                    g,
                    m = r != a ? 'nextSibling' : 'previousSibling',
                    v = i.parentNode,
                    b = l && i.nodeName.toLowerCase(),
                    y = !c && !l;
                  if (v) {
                    if (r) {
                      for (; m; ) {
                        for (u = i; (u = u[m]); ) if (l ? u.nodeName.toLowerCase() === b : 1 === u.nodeType) return !1;
                        g = m = 'only' === e && !g && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((g = [a ? v.firstChild : v.lastChild]), a && y)) {
                      for (
                        f = (h = (d = v[j] || (v[j] = {}))[e] || [])[0] === z && h[1],
                          p = h[0] === z && h[2],
                          u = f && v.childNodes[f];
                        (u = (++f && u && u[m]) || (p = f = 0) || g.pop());

                      )
                        if (1 === u.nodeType && ++p && u === i) {
                          d[e] = [z, f, p];
                          break;
                        }
                    } else if (y && (h = (i[j] || (i[j] = {}))[e]) && h[0] === z) p = h[1];
                    else
                      for (
                        ;
                        (u = (++f && u && u[m]) || (p = f = 0) || g.pop()) &&
                        ((l ? u.nodeName.toLowerCase() !== b : 1 !== u.nodeType) ||
                          !++p ||
                          (y && ((u[j] || (u[j] = {}))[e] = [z, p]), u !== i));

                      );
                    return (p -= o) === n || (p % n == 0 && 0 <= p / n);
                  }
                };
          },
          PSEUDO: function (e, s) {
            var o,
              r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || i.error('unsupported pseudo: ' + e);
            return r[j]
              ? r(s)
              : 1 < r.length
              ? ((o = [e, e, '', s]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? n(function (e, i) {
                      for (var n, o = r(e, s), a = o.length; a--; ) e[(n = G.call(e, o[a]))] = !(i[n] = o[a]);
                    })
                  : function (e) {
                      return r(e, 0, o);
                    })
              : r;
          },
        },
        pseudos: {
          not: n(function (e) {
            var i = [],
              s = [],
              o = C(e.replace(tn, '$1'));
            return o[j]
              ? n(function (e, i, s, n) {
                  for (var r, a = o(e, null, n, []), l = e.length; l--; ) (r = a[l]) && (e[l] = !(i[l] = r));
                })
              : function (e, n, r) {
                  return (i[0] = e), o(i, null, r, s), !s.pop();
                };
          }),
          has: n(function (e) {
            return function (s) {
              return 0 < i(e, s).length;
            };
          }),
          contains: n(function (e) {
            return function (i) {
              return -1 < (i.textContent || i.innerText || y(i)).indexOf(e);
            };
          }),
          lang: n(function (e) {
            return (
              tc.test(e || '') || i.error('unsupported lang: ' + e),
              (e = e.replace(tv, g).toLowerCase()),
              function (i) {
                var s;
                do
                  if ((s = D ? i.lang : i.getAttribute('xml:lang') || i.getAttribute('lang')))
                    return (s = s.toLowerCase()) === e || 0 === s.indexOf(e + '-');
                while ((i = i.parentNode) && 1 === i.nodeType);
                return !1;
              }
            );
          }),
          target: function (i) {
            var s = e.location && e.location.hash;
            return s && s.slice(1) === i.id;
          },
          root: function (e) {
            return e === A;
          },
          focus: function (e) {
            return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var i = e.nodeName.toLowerCase();
            return ('input' === i && !!e.checked) || ('option' === i && !!e.selected);
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return tu.test(e.nodeName);
          },
          input: function (e) {
            return td.test(e.nodeName);
          },
          button: function (e) {
            var i = e.nodeName.toLowerCase();
            return ('input' === i && 'button' === e.type) || 'button' === i;
          },
          text: function (e) {
            var i;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (i = e.getAttribute('type')) || 'text' === i.toLowerCase())
            );
          },
          first: l(function () {
            return [0];
          }),
          last: l(function (e, i) {
            return [i - 1];
          }),
          eq: l(function (e, i, s) {
            return [s < 0 ? s + i : s];
          }),
          even: l(function (e, i) {
            for (var s = 0; s < i; s += 2) e.push(s);
            return e;
          }),
          odd: l(function (e, i) {
            for (var s = 1; s < i; s += 2) e.push(s);
            return e;
          }),
          lt: l(function (e, i, s) {
            for (var n = s < 0 ? s + i : s; 0 <= --n; ) e.push(n);
            return e;
          }),
          gt: l(function (e, i, s) {
            for (var n = s < 0 ? s + i : s; ++n < i; ) e.push(n);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[m] = (function (e) {
        return function (i) {
          return 'input' === i.nodeName.toLowerCase() && i.type === e;
        };
      })(m);
    for (m in { submit: !0, reset: !0 })
      b.pseudos[m] = (function (e) {
        return function (i) {
          var s = i.nodeName.toLowerCase();
          return ('input' === s || 'button' === s) && i.type === e;
        };
      })(m);
    return (
      (h.prototype = b.filters = b.pseudos),
      (b.setFilters = new h()),
      (x = i.tokenize =
        function (e, s) {
          var n,
            o,
            r,
            a,
            l,
            c,
            h,
            d = R[e + ' '];
          if (d) return s ? 0 : d.slice(0);
          for (l = e, c = [], h = b.preFilter; l; ) {
            for (a in ((!n || (o = to.exec(l))) && (o && (l = l.slice(o[0].length) || l), c.push((r = []))),
            (n = !1),
            (o = tr.exec(l)) &&
              ((n = o.shift()), r.push({ value: n, type: o[0].replace(tn, ' ') }), (l = l.slice(n.length))),
            b.filter))
              (o = th[a].exec(l)) &&
                (!h[a] || (o = h[a](o))) &&
                ((n = o.shift()), r.push({ value: n, type: a, matches: o }), (l = l.slice(n.length)));
            if (!n) break;
          }
          return s ? l.length : l ? i.error(e) : R(e, c).slice(0);
        }),
      (C = i.compile =
        function (e, s) {
          var o,
            r,
            a,
            l,
            c,
            h,
            g = [],
            m = [],
            v = M[e + ' '];
          if (!v) {
            for (o = (s = s || x(e)).length; o--; )
              (v = (function e(s) {
                for (
                  var o,
                    r,
                    a,
                    l = s.length,
                    c = b.relative[s[0].type],
                    h = c || b.relative[' '],
                    g = c ? 1 : 0,
                    m = u(
                      function (e) {
                        return e === o;
                      },
                      h,
                      !0
                    ),
                    v = u(
                      function (e) {
                        return -1 < G.call(o, e);
                      },
                      h,
                      !0
                    ),
                    y = [
                      function (e, i, s) {
                        return (!c && (s || i !== _)) || ((o = i).nodeType ? m : v)(e, i, s);
                      },
                    ];
                  g < l;
                  g++
                )
                  if ((r = b.relative[s[g].type])) y = [u(p(y), r)];
                  else {
                    if ((r = b.filter[s[g].type].apply(null, s[g].matches))[j]) {
                      for (a = ++g; a < l && !b.relative[s[a].type]; a++);
                      return (function e(s, o, r, a, l, c) {
                        return (
                          a && !a[j] && (a = e(a)),
                          l && !l[j] && (l = e(l, c)),
                          n(function (e, n, c, h) {
                            var d,
                              u,
                              p,
                              g = [],
                              m = [],
                              v = n.length,
                              b =
                                e ||
                                (function (e, s, n) {
                                  for (var o = 0, r = s.length; o < r; o++) i(e, s[o], n);
                                  return n;
                                })(o || '*', c.nodeType ? [c] : c, []),
                              y = s && (e || !o) ? f(b, g, s, c, h) : b,
                              w = r ? (l || (e ? s : v || a) ? [] : n) : y;
                            if ((r && r(y, w, c, h), a))
                              for (d = f(w, m), a(d, [], c, h), u = d.length; u--; )
                                (p = d[u]) && (w[m[u]] = !(y[m[u]] = p));
                            if (e) {
                              if (l || s) {
                                if (l) {
                                  for (d = [], u = w.length; u--; ) (p = w[u]) && d.push((y[u] = p));
                                  l(null, (w = []), d, h);
                                }
                                for (u = w.length; u--; )
                                  (p = w[u]) && -1 < (d = l ? G.call(e, p) : g[u]) && (e[d] = !(n[d] = p));
                              }
                            } else (w = f(w === n ? w.splice(v, w.length) : w)), l ? l(null, n, w, h) : Z.apply(n, w);
                          })
                        );
                      })(
                        1 < g && p(y),
                        1 < g &&
                          d(s.slice(0, g - 1).concat({ value: ' ' === s[g - 2].type ? '*' : '' })).replace(tn, '$1'),
                        r,
                        g < a && e(s.slice(g, a)),
                        a < l && e((s = s.slice(a))),
                        a < l && d(s)
                      );
                    }
                    y.push(r);
                  }
                return p(y);
              })(s[o]))[j]
                ? g.push(v)
                : m.push(v);
            (v = M(
              e,
              ((r = m),
              (l = 0 < (a = g).length),
              (c = 0 < r.length),
              (h = function (e, s, n, o, h) {
                var d,
                  u,
                  p,
                  g = 0,
                  m = '0',
                  v = e && [],
                  y = [],
                  w = _,
                  x = e || (c && b.find.TAG('*', h)),
                  C = (z += null == w ? 1 : Math.random() || 0.1),
                  k = x.length;
                for (h && (_ = s !== F && s); m !== k && null != (d = x[m]); m++) {
                  if (c && d) {
                    for (u = 0; (p = r[u++]); )
                      if (p(d, s, n)) {
                        o.push(d);
                        break;
                      }
                    h && (z = C);
                  }
                  l && ((d = !p && d) && g--, e && v.push(d));
                }
                if (((g += m), l && m !== g)) {
                  for (u = 0; (p = a[u++]); ) p(v, y, s, n);
                  if (e) {
                    if (0 < g) for (; m--; ) v[m] || y[m] || (y[m] = V.call(o));
                    y = f(y);
                  }
                  Z.apply(o, y), h && !e && 0 < y.length && 1 < g + a.length && i.uniqueSort(o);
                }
                return h && ((z = C), (_ = w)), v;
              }),
              l ? n(h) : h)
            )).selector = e;
          }
          return v;
        }),
      (k = i.select =
        function (e, i, s, n) {
          var o,
            r,
            a,
            l,
            h,
            u = 'function' == typeof e && e,
            p = !n && x((e = u.selector || e));
          if (((s = s || []), 1 === p.length)) {
            if (
              2 < (r = p[0] = p[0].slice(0)).length &&
              'ID' === (a = r[0]).type &&
              v.getById &&
              9 === i.nodeType &&
              D &&
              b.relative[r[1].type]
            ) {
              if (!(i = (b.find.ID(a.matches[0].replace(tv, g), i) || [])[0])) return s;
              u && (i = i.parentNode), (e = e.slice(r.shift().value.length));
            }
            for (o = th.needsContext.test(e) ? 0 : r.length; o-- && ((a = r[o]), !b.relative[(l = a.type)]); )
              if (
                (h = b.find[l]) &&
                (n = h(a.matches[0].replace(tv, g), (tg.test(r[0].type) && c(i.parentNode)) || i))
              ) {
                if ((r.splice(o, 1), !(e = n.length && d(r)))) return Z.apply(s, n), s;
                break;
              }
          }
          return (u || C(e, p))(n, i, !D, s, (tg.test(e) && c(i.parentNode)) || i), s;
        }),
      (v.sortStable = j.split('').sort(W).join('') === j),
      (v.detectDuplicates = !!T),
      E(),
      (v.sortDetached = o(function (e) {
        return 1 & e.compareDocumentPosition(F.createElement('div'));
      })),
      o(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
      }) ||
        r('type|href|height|width', function (e, i, s) {
          return s ? void 0 : e.getAttribute(i, 'type' === i.toLowerCase() ? 1 : 2);
        }),
      (v.attributes &&
        o(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        r('value', function (e, i, s) {
          return s || 'input' !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }),
      o(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        r(Q, function (e, i, s) {
          var n;
          return s
            ? void 0
            : !0 === e[i]
            ? i.toLowerCase()
            : (n = e.getAttributeNode(i)) && n.specified
            ? n.value
            : null;
        }),
      i
    );
  })(t);
  (Y.find = Q),
    (Y.expr = Q.selectors),
    (Y.expr[':'] = Y.expr.pseudos),
    (Y.unique = Q.uniqueSort),
    (Y.text = Q.getText),
    (Y.isXMLDoc = Q.isXML),
    (Y.contains = Q.contains);
  var K = Y.expr.match.needsContext,
    G = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    J = /^.[^:#\[\.,]*$/;
  (Y.filter = function (e, i, s) {
    var n = i[0];
    return (
      s && (e = ':not(' + e + ')'),
      1 === i.length && 1 === n.nodeType
        ? Y.find.matchesSelector(n, e)
          ? [n]
          : []
        : Y.find.matches(
            e,
            Y.grep(i, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    Y.fn.extend({
      find: function (e) {
        var i,
          s = this.length,
          n = [],
          o = this;
        if ('string' != typeof e)
          return this.pushStack(
            Y(e).filter(function () {
              for (i = 0; i < s; i++) if (Y.contains(o[i], this)) return !0;
            })
          );
        for (i = 0; i < s; i++) Y.find(e, o[i], n);
        return (
          ((n = this.pushStack(1 < s ? Y.unique(n) : n)).selector = this.selector ? this.selector + ' ' + e : e), n
        );
      },
      filter: function (e) {
        return this.pushStack(n(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(n(this, e || [], !0));
      },
      is: function (e) {
        return !!n(this, 'string' == typeof e && K.test(e) ? Y(e) : e || [], !1).length;
      },
    });
  var tt,
    et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((Y.fn.init = function (e, i) {
    var s, n;
    if (!e) return this;
    if ('string' != typeof e)
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : Y.isFunction(e)
        ? void 0 !== tt.ready
          ? tt.ready(e)
          : e(Y)
        : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), Y.makeArray(e, this));
    if (!(s = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [null, e, null] : et.exec(e)) || (!s[1] && i))
      return !i || i.jquery ? (i || tt).find(e) : this.constructor(i).find(e);
    if (s[1]) {
      if (
        ((i = i instanceof Y ? i[0] : i),
        Y.merge(this, Y.parseHTML(s[1], i && i.nodeType ? i.ownerDocument || i : U, !0)),
        G.test(s[1]) && Y.isPlainObject(i))
      )
        for (s in i) Y.isFunction(this[s]) ? this[s](i[s]) : this.attr(s, i[s]);
      return this;
    }
    return (
      (n = U.getElementById(s[2])) && n.parentNode && ((this.length = 1), (this[0] = n)),
      (this.context = U),
      (this.selector = e),
      this
    );
  }).prototype = Y.fn),
    (tt = Y(U));
  var it = /^(?:parents|prev(?:Until|All))/,
    nt = { children: !0, contents: !0, next: !0, prev: !0 };
  Y.extend({
    dir: function (e, i, s) {
      for (var n = [], o = void 0 !== s; (e = e[i]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && Y(e).is(s)) break;
          n.push(e);
        }
      return n;
    },
    sibling: function (e, i) {
      for (var s = []; e; e = e.nextSibling) 1 === e.nodeType && e !== i && s.push(e);
      return s;
    },
  }),
    Y.fn.extend({
      has: function (e) {
        var i = Y(e, this),
          s = i.length;
        return this.filter(function () {
          for (var e = 0; e < s; e++) if (Y.contains(this, i[e])) return !0;
        });
      },
      closest: function (e, i) {
        for (
          var s, n = 0, o = this.length, r = [], a = K.test(e) || 'string' != typeof e ? Y(e, i || this.context) : 0;
          n < o;
          n++
        )
          for (s = this[n]; s && s !== i; s = s.parentNode)
            if (s.nodeType < 11 && (a ? -1 < a.index(s) : 1 === s.nodeType && Y.find.matchesSelector(s, e))) {
              r.push(s);
              break;
            }
        return this.pushStack(1 < r.length ? Y.unique(r) : r);
      },
      index: function (e) {
        return e
          ? 'string' == typeof e
            ? z.call(Y(e), this[0])
            : z.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, i) {
        return this.pushStack(Y.unique(Y.merge(this.get(), Y(e, i))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
    }),
    Y.each(
      {
        parent: function (e) {
          var i = e.parentNode;
          return i && 11 !== i.nodeType ? i : null;
        },
        parents: function (e) {
          return Y.dir(e, 'parentNode');
        },
        parentsUntil: function (e, i, s) {
          return Y.dir(e, 'parentNode', s);
        },
        next: function (e) {
          return s(e, 'nextSibling');
        },
        prev: function (e) {
          return s(e, 'previousSibling');
        },
        nextAll: function (e) {
          return Y.dir(e, 'nextSibling');
        },
        prevAll: function (e) {
          return Y.dir(e, 'previousSibling');
        },
        nextUntil: function (e, i, s) {
          return Y.dir(e, 'nextSibling', s);
        },
        prevUntil: function (e, i, s) {
          return Y.dir(e, 'previousSibling', s);
        },
        siblings: function (e) {
          return Y.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Y.sibling(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || Y.merge([], e.childNodes);
        },
      },
      function (e, i) {
        Y.fn[e] = function (s, n) {
          var o = Y.map(this, i, s);
          return (
            'Until' !== e.slice(-5) && (n = s),
            n && 'string' == typeof n && (o = Y.filter(n, o)),
            1 < this.length && (nt[e] || Y.unique(o), it.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var st,
    ot = /\S+/g,
    at = {};
  (Y.Callbacks = function (e) {
    var i,
      s,
      n,
      o,
      r,
      a,
      l,
      c = [],
      h =
        !(e =
          'string' == typeof e
            ? at[e] ||
              ((l = at[e] = {}),
              Y.each(e.match(ot) || [], function (e, i) {
                l[i] = !0;
              }),
              l)
            : Y.extend({}, e)).once && [],
      d = function (l) {
        for (i = e.memory && l, s = !0, a = o || 0, o = 0, r = c.length, n = !0; c && a < r; a++)
          if (!1 === c[a].apply(l[0], l[1]) && e.stopOnFalse) {
            i = !1;
            break;
          }
        (n = !1), c && (h ? h.length && d(h.shift()) : i ? (c = []) : u.disable());
      },
      u = {
        add: function () {
          var s;
          return (
            c &&
              ((s = c.length),
              (function i(s) {
                Y.each(s, function (s, n) {
                  var o = Y.type(n);
                  'function' === o ? (e.unique && u.has(n)) || c.push(n) : n && n.length && 'string' !== o && i(n);
                });
              })(arguments),
              n ? (r = c.length) : i && ((o = s), d(i))),
            this
          );
        },
        remove: function () {
          return (
            c &&
              Y.each(arguments, function (e, i) {
                for (var s; -1 < (s = Y.inArray(i, c, s)); ) c.splice(s, 1), n && (s <= r && r--, s <= a && a--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < Y.inArray(e, c) : !(!c || !c.length);
        },
        empty: function () {
          return (c = []), (r = 0), this;
        },
        disable: function () {
          return (c = h = i = void 0), this;
        },
        disabled: function () {
          return !c;
        },
        lock: function () {
          return (h = void 0), i || u.disable(), this;
        },
        locked: function () {
          return !h;
        },
        fireWith: function (e, i) {
          return c && (!s || h) && ((i = [e, (i = i || []).slice ? i.slice() : i]), n ? h.push(i) : d(i)), this;
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!s;
        },
      };
    return u;
  }),
    Y.extend({
      Deferred: function (e) {
        var i = [
            ['resolve', 'done', Y.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', Y.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', Y.Callbacks('memory')],
          ],
          s = 'pending',
          n = {
            state: function () {
              return s;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return Y.Deferred(function (s) {
                Y.each(i, function (i, r) {
                  var a = Y.isFunction(e[i]) && e[i];
                  o[r[1]](function () {
                    var e = a && a.apply(this, arguments);
                    e && Y.isFunction(e.promise)
                      ? e.promise().done(s.resolve).fail(s.reject).progress(s.notify)
                      : s[r[0] + 'With'](this === n ? s.promise() : this, a ? [e] : arguments);
                  });
                }),
                  (e = null);
              }).promise();
            },
            promise: function (e) {
              return null != e ? Y.extend(e, n) : n;
            },
          },
          o = {};
        return (
          (n.pipe = n.then),
          Y.each(i, function (e, r) {
            var a = r[2],
              l = r[3];
            (n[r[1]] = a.add),
              l &&
                a.add(
                  function () {
                    s = l;
                  },
                  i[1 ^ e][2].disable,
                  i[2][2].lock
                ),
              (o[r[0]] = function () {
                return o[r[0] + 'With'](this === o ? n : this, arguments), this;
              }),
              (o[r[0] + 'With'] = a.fireWith);
          }),
          n.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (e) {
        function i(e, i, n) {
          return function (o) {
            (i[e] = this),
              (n[e] = 1 < arguments.length ? L.call(arguments) : o),
              n === s ? h.notifyWith(i, n) : --c || h.resolveWith(i, n);
          };
        }
        var s,
          n,
          o,
          r = 0,
          a = L.call(arguments),
          l = a.length,
          c = 1 !== l || (e && Y.isFunction(e.promise)) ? l : 0,
          h = 1 === c ? e : Y.Deferred();
        if (1 < l)
          for (s = Array(l), n = Array(l), o = Array(l); r < l; r++)
            a[r] && Y.isFunction(a[r].promise)
              ? a[r].promise().done(i(r, o, a)).fail(h.reject).progress(i(r, n, s))
              : --c;
        return c || h.resolveWith(o, a), h.promise();
      },
    }),
    (Y.fn.ready = function (e) {
      return Y.ready.promise().done(e), this;
    }),
    Y.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? Y.readyWait++ : Y.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --Y.readyWait : Y.isReady) ||
          ((Y.isReady = !0) !== e && 0 < --Y.readyWait) ||
          (st.resolveWith(U, [Y]), Y.fn.triggerHandler && (Y(U).triggerHandler('ready'), Y(U).off('ready')));
      },
    }),
    (Y.ready.promise = function (e) {
      return (
        st ||
          ((st = Y.Deferred()),
          'complete' === U.readyState
            ? setTimeout(Y.ready)
            : (U.addEventListener('DOMContentLoaded', o, !1), t.addEventListener('load', o, !1))),
        st.promise(e)
      );
    }),
    Y.ready.promise();
  var rt = (Y.access = function (e, i, s, n, o, r, a) {
    var l = 0,
      c = e.length,
      h = null == s;
    if ('object' === Y.type(s)) for (l in ((o = !0), s)) Y.access(e, i, l, s[l], !0, r, a);
    else if (
      void 0 !== n &&
      ((o = !0),
      Y.isFunction(n) || (a = !0),
      h &&
        (i = a
          ? (i.call(e, n), null)
          : ((h = i),
            function (e, i, s) {
              return h.call(Y(e), s);
            })),
      i)
    )
      for (; l < c; l++) i(e[l], s, a ? n : n.call(e[l], l, i(e[l], s)));
    return o ? e : h ? i.call(e) : c ? i(e[0], s) : r;
  });
  (Y.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }),
    (a.uid = 1),
    (a.accepts = Y.acceptData),
    (a.prototype = {
      key: function (e) {
        if (!a.accepts(e)) return 0;
        var i = {},
          s = e[this.expando];
        if (!s) {
          s = a.uid++;
          try {
            (i[this.expando] = { value: s }), Object.defineProperties(e, i);
          } catch (n) {
            (i[this.expando] = s), Y.extend(e, i);
          }
        }
        return this.cache[s] || (this.cache[s] = {}), s;
      },
      set: function (e, i, s) {
        var n,
          o = this.key(e),
          r = this.cache[o];
        if ('string' == typeof i) r[i] = s;
        else if (Y.isEmptyObject(r)) Y.extend(this.cache[o], i);
        else for (n in i) r[n] = i[n];
        return r;
      },
      get: function (e, i) {
        var s = this.cache[this.key(e)];
        return void 0 === i ? s : s[i];
      },
      access: function (e, i, s) {
        var n;
        return void 0 === i || (i && 'string' == typeof i && void 0 === s)
          ? void 0 !== (n = this.get(e, i))
            ? n
            : this.get(e, Y.camelCase(i))
          : (this.set(e, i, s), void 0 !== s ? s : i);
      },
      remove: function (e, i) {
        var s,
          n,
          o,
          r = this.key(e),
          a = this.cache[r];
        if (void 0 === i) this.cache[r] = {};
        else
          for (
            s = (n = Y.isArray(i)
              ? i.concat(i.map(Y.camelCase))
              : ((o = Y.camelCase(i)), (i in a) ? [i, o] : ((n = o) in a) ? [n] : n.match(ot) || [])).length;
            s--;

          )
            delete a[n[s]];
      },
      hasData: function (e) {
        return !Y.isEmptyObject(this.cache[e[this.expando]] || {});
      },
      discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]];
      },
    });
  var lt = new a(),
    ct = new a(),
    dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ht = /([A-Z])/g;
  function ut(e, i) {
    return (e = i || e), 'none' === Y.css(e, 'display') || !Y.contains(e.ownerDocument, e);
  }
  Y.extend({
    hasData: function (e) {
      return ct.hasData(e) || lt.hasData(e);
    },
    data: function (e, i, s) {
      return ct.access(e, i, s);
    },
    removeData: function (e, i) {
      ct.remove(e, i);
    },
    _data: function (e, i, s) {
      return lt.access(e, i, s);
    },
    _removeData: function (e, i) {
      lt.remove(e, i);
    },
  }),
    Y.fn.extend({
      data: function (e, i) {
        var s,
          n,
          o,
          a = this[0],
          l = a && a.attributes;
        if (void 0 !== e)
          return 'object' == typeof e
            ? this.each(function () {
                ct.set(this, e);
              })
            : rt(
                this,
                function (i) {
                  var s,
                    n = Y.camelCase(e);
                  if (a && void 0 === i) {
                    if (
                      void 0 !== (s = ct.get(a, e)) ||
                      void 0 !== (s = ct.get(a, n)) ||
                      void 0 !== (s = r(a, n, void 0))
                    )
                      return s;
                  } else
                    this.each(function () {
                      var s = ct.get(this, n);
                      ct.set(this, n, i), -1 !== e.indexOf('-') && void 0 !== s && ct.set(this, e, i);
                    });
                },
                null,
                i,
                1 < arguments.length,
                null,
                !0
              );
        if (this.length && ((o = ct.get(a)), 1 === a.nodeType && !lt.get(a, 'hasDataAttrs'))) {
          for (s = l.length; s--; )
            l[s] && 0 === (n = l[s].name).indexOf('data-') && r(a, (n = Y.camelCase(n.slice(5))), o[n]);
          lt.set(a, 'hasDataAttrs', !0);
        }
        return o;
      },
      removeData: function (e) {
        return this.each(function () {
          ct.remove(this, e);
        });
      },
    }),
    Y.extend({
      queue: function (e, i, s) {
        var n;
        return e
          ? ((i = (i || 'fx') + 'queue'),
            (n = lt.get(e, i)),
            s && (!n || Y.isArray(s) ? (n = lt.access(e, i, Y.makeArray(s))) : n.push(s)),
            n || [])
          : void 0;
      },
      dequeue: function (e, i) {
        i = i || 'fx';
        var s = Y.queue(e, i),
          n = s.length,
          o = s.shift(),
          r = Y._queueHooks(e, i);
        'inprogress' === o && ((o = s.shift()), n--),
          o &&
            ('fx' === i && s.unshift('inprogress'),
            delete r.stop,
            o.call(
              e,
              function () {
                Y.dequeue(e, i);
              },
              r
            )),
          !n && r && r.empty.fire();
      },
      _queueHooks: function (e, i) {
        var s = i + 'queueHooks';
        return (
          lt.get(e, s) ||
          lt.access(e, s, {
            empty: Y.Callbacks('once memory').add(function () {
              lt.remove(e, [i + 'queue', s]);
            }),
          })
        );
      },
    }),
    Y.fn.extend({
      queue: function (e, i) {
        var s = 2;
        return (
          'string' != typeof e && ((i = e), (e = 'fx'), s--),
          arguments.length < s
            ? Y.queue(this[0], e)
            : void 0 === i
            ? this
            : this.each(function () {
                var s = Y.queue(this, e, i);
                Y._queueHooks(this, e), 'fx' === e && 'inprogress' !== s[0] && Y.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          Y.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, i) {
        function s() {
          --o || r.resolveWith(a, [a]);
        }
        var n,
          o = 1,
          r = Y.Deferred(),
          a = this,
          l = this.length;
        for ('string' != typeof e && ((i = e), (e = void 0)), e = e || 'fx'; l--; )
          (n = lt.get(a[l], e + 'queueHooks')) && n.empty && (o++, n.empty.add(s));
        return s(), r.promise(i);
      },
    });
  var pt,
    ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    gt = ['Top', 'Right', 'Bottom', 'Left'],
    mt = /^(?:checkbox|radio)$/i,
    vt = U.createDocumentFragment().appendChild(U.createElement('div'));
  (pt = U.createElement('input')).setAttribute('type', 'radio'),
    pt.setAttribute('checked', 'checked'),
    pt.setAttribute('name', 't'),
    vt.appendChild(pt),
    (B.checkClone = vt.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (vt.innerHTML = '<textarea>x</textarea>'),
    (B.noCloneChecked = !!vt.cloneNode(!0).lastChild.defaultValue);
  var yt = 'undefined';
  B.focusinBubbles = 'onfocusin' in t;
  var bt = /^key/,
    wt = /^(?:mouse|pointer|contextmenu)|click/,
    _t = /^(?:focusinfocus|focusoutblur)$/,
    xt = /^([^.]*)(?:\.(.+)|)$/;
  (Y.event = {
    global: {},
    add: function (e, i, s, n, o) {
      var r,
        a,
        l,
        c,
        h,
        d,
        u,
        p,
        f,
        g,
        m,
        v = lt.get(e);
      if (v)
        for (
          s.handler && ((s = (r = s).handler), (o = r.selector)),
            s.guid || (s.guid = Y.guid++),
            (c = v.events) || (c = v.events = {}),
            (a = v.handle) ||
              (a = v.handle =
                function (i) {
                  return typeof Y != yt && Y.event.triggered !== i.type ? Y.event.dispatch.apply(e, arguments) : void 0;
                }),
            h = (i = (i || '').match(ot) || ['']).length;
          h--;

        )
          (f = m = (l = xt.exec(i[h]) || [])[1]),
            (g = (l[2] || '').split('.').sort()),
            f &&
              ((u = Y.event.special[f] || {}),
              (f = (o ? u.delegateType : u.bindType) || f),
              (u = Y.event.special[f] || {}),
              (d = Y.extend(
                {
                  type: f,
                  origType: m,
                  data: n,
                  handler: s,
                  guid: s.guid,
                  selector: o,
                  needsContext: o && Y.expr.match.needsContext.test(o),
                  namespace: g.join('.'),
                },
                r
              )),
              (p = c[f]) ||
                (((p = c[f] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(e, n, g, a)) || (e.addEventListener && e.addEventListener(f, a, !1))),
              u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = s.guid)),
              o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (Y.event.global[f] = !0));
    },
    remove: function (e, i, s, n, o) {
      var r,
        a,
        l,
        c,
        h,
        d,
        u,
        p,
        f,
        g,
        m,
        v = lt.hasData(e) && lt.get(e);
      if (v && (c = v.events)) {
        for (h = (i = (i || '').match(ot) || ['']).length; h--; )
          if (((f = m = (l = xt.exec(i[h]) || [])[1]), (g = (l[2] || '').split('.').sort()), f)) {
            for (
              u = Y.event.special[f] || {},
                p = c[(f = (n ? u.delegateType : u.bindType) || f)] || [],
                l = l[2] && RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                a = r = p.length;
              r--;

            )
              (d = p[r]),
                (!o && m !== d.origType) ||
                  (s && s.guid !== d.guid) ||
                  (l && !l.test(d.namespace)) ||
                  (n && n !== d.selector && ('**' !== n || !d.selector)) ||
                  (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
            a &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(e, g, v.handle)) || Y.removeEvent(e, f, v.handle), delete c[f]);
          } else for (f in c) Y.event.remove(e, f + i[h], s, n, !0);
        Y.isEmptyObject(c) && (delete v.handle, lt.remove(e, 'events'));
      }
    },
    trigger: function (e, i, s, n) {
      var o,
        r,
        a,
        l,
        c,
        h,
        d = [s || U],
        u = W.call(e, 'type') ? e.type : e,
        p = W.call(e, 'namespace') ? e.namespace.split('.') : [],
        f = (r = s = s || U);
      if (
        3 !== s.nodeType &&
        8 !== s.nodeType &&
        !_t.test(u + Y.event.triggered) &&
        (0 <= u.indexOf('.') && ((u = (p = u.split('.')).shift()), p.sort()),
        (l = 0 > u.indexOf(':') && 'on' + u),
        ((e = e[Y.expando] ? e : new Y.Event(u, 'object' == typeof e && e)).isTrigger = n ? 2 : 3),
        (e.namespace = p.join('.')),
        (e.namespace_re = e.namespace ? RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
        (e.result = void 0),
        e.target || (e.target = s),
        (i = null == i ? [e] : Y.makeArray(i, [e])),
        (h = Y.event.special[u] || {}),
        n || !h.trigger || !1 !== h.trigger.apply(s, i))
      ) {
        if (!n && !h.noBubble && !Y.isWindow(s)) {
          for (a = h.delegateType || u, _t.test(a + u) || (f = f.parentNode); f; f = f.parentNode) d.push(f), (r = f);
          r === (s.ownerDocument || U) && d.push(r.defaultView || r.parentWindow || t);
        }
        for (o = 0; (f = d[o++]) && !e.isPropagationStopped(); )
          (e.type = 1 < o ? a : h.bindType || u),
            (c = (lt.get(f, 'events') || {})[e.type] && lt.get(f, 'handle')) && c.apply(f, i),
            (c = l && f[l]) &&
              c.apply &&
              Y.acceptData(f) &&
              ((e.result = c.apply(f, i)), !1 === e.result && e.preventDefault());
        return (
          (e.type = u),
          n ||
            e.isDefaultPrevented() ||
            (h._default && !1 !== h._default.apply(d.pop(), i)) ||
            !Y.acceptData(s) ||
            (l &&
              Y.isFunction(s[u]) &&
              !Y.isWindow(s) &&
              ((r = s[l]) && (s[l] = null),
              s[(Y.event.triggered = u)](),
              (Y.event.triggered = void 0),
              r && (s[l] = r))),
          e.result
        );
      }
    },
    dispatch: function (e) {
      e = Y.event.fix(e);
      var i,
        s,
        n,
        o,
        r,
        a = [],
        l = L.call(arguments),
        c = (lt.get(this, 'events') || {})[e.type] || [],
        h = Y.event.special[e.type] || {};
      if ((((l[0] = e).delegateTarget = this), !h.preDispatch || !1 !== h.preDispatch.call(this, e))) {
        for (a = Y.event.handlers.call(this, e, c), i = 0; (o = a[i++]) && !e.isPropagationStopped(); )
          for (e.currentTarget = o.elem, s = 0; (r = o.handlers[s++]) && !e.isImmediatePropagationStopped(); )
            (e.namespace_re && !e.namespace_re.test(r.namespace)) ||
              ((e.handleObj = r),
              (e.data = r.data),
              void 0 !== (n = ((Y.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) &&
                !1 === (e.result = n) &&
                (e.preventDefault(), e.stopPropagation()));
        return h.postDispatch && h.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, i) {
      var s,
        n,
        o,
        r,
        a = [],
        l = i.delegateCount,
        c = e.target;
      if (l && c.nodeType && (!e.button || 'click' !== e.type)) {
        for (; c !== this; c = c.parentNode || this)
          if (!0 !== c.disabled || 'click' !== e.type) {
            for (n = [], s = 0; s < l; s++)
              void 0 === n[(o = (r = i[s]).selector + ' ')] &&
                (n[o] = r.needsContext ? 0 <= Y(o, this).index(c) : Y.find(o, this, null, [c]).length),
                n[o] && n.push(r);
            n.length && a.push({ elem: c, handlers: n });
          }
      }
      return l < i.length && a.push({ elem: this, handlers: i.slice(l) }), a;
    },
    props:
      'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' '
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, i) {
        return null == e.which && (e.which = null != i.charCode ? i.charCode : i.keyCode), e;
      },
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (e, i) {
        var s,
          n,
          o,
          r = i.button;
        return (
          null == e.pageX &&
            null != i.clientX &&
            ((n = (s = e.target.ownerDocument || U).documentElement),
            (o = s.body),
            (e.pageX =
              i.clientX +
              ((n && n.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((n && n.clientLeft) || (o && o.clientLeft) || 0)),
            (e.pageY =
              i.clientY +
              ((n && n.scrollTop) || (o && o.scrollTop) || 0) -
              ((n && n.clientTop) || (o && o.clientTop) || 0))),
          e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[Y.expando]) return e;
      var i,
        s,
        n,
        o = e.type,
        r = e,
        a = this.fixHooks[o];
      for (
        a || (this.fixHooks[o] = a = wt.test(o) ? this.mouseHooks : bt.test(o) ? this.keyHooks : {}),
          n = a.props ? this.props.concat(a.props) : this.props,
          e = new Y.Event(r),
          i = n.length;
        i--;

      )
        e[(s = n[i])] = r[s];
      return (
        e.target || (e.target = U),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        a.filter ? a.filter(e, r) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== d() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          return this === d() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          return 'checkbox' === this.type && this.click && Y.nodeName(this, 'input') ? (this.click(), !1) : void 0;
        },
        _default: function (e) {
          return Y.nodeName(e.target, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, i, s, n) {
      var o = Y.extend(new Y.Event(), s, { type: e, isSimulated: !0, originalEvent: {} });
      n ? Y.event.trigger(o, null, i) : Y.event.dispatch.call(i, o), o.isDefaultPrevented() && s.preventDefault();
    },
  }),
    (Y.removeEvent = function (e, i, s) {
      e.removeEventListener && e.removeEventListener(i, s, !1);
    }),
    (Y.Event = function (e, i) {
      return this instanceof Y.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? l : c))
            : (this.type = e),
          i && Y.extend(this, i),
          (this.timeStamp = (e && e.timeStamp) || Y.now()),
          void (this[Y.expando] = !0))
        : new Y.Event(e, i);
    }),
    (Y.Event.prototype = {
      isDefaultPrevented: c,
      isPropagationStopped: c,
      isImmediatePropagationStopped: c,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = l), e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = l), e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = l),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    Y.each(
      { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
      function (e, i) {
        Y.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var s,
              n = e.relatedTarget,
              o = e.handleObj;
            return (
              (n && (n === this || Y.contains(this, n))) ||
                ((e.type = o.origType), (s = o.handler.apply(this, arguments)), (e.type = i)),
              s
            );
          },
        };
      }
    ),
    B.focusinBubbles ||
      Y.each({ focus: 'focusin', blur: 'focusout' }, function (e, i) {
        function s(e) {
          Y.event.simulate(i, e.target, Y.event.fix(e), !0);
        }
        Y.event.special[i] = {
          setup: function () {
            var n = this.ownerDocument || this,
              o = lt.access(n, i);
            o || n.addEventListener(e, s, !0), lt.access(n, i, (o || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              o = lt.access(n, i) - 1;
            o ? lt.access(n, i, o) : (n.removeEventListener(e, s, !0), lt.remove(n, i));
          },
        };
      }),
    Y.fn.extend({
      on: function (e, i, s, n, o) {
        var r, a;
        if ('object' == typeof e) {
          for (a in ('string' != typeof i && ((s = s || i), (i = void 0)), e)) this.on(a, i, s, e[a], o);
          return this;
        }
        if (
          (null == s && null == n
            ? ((n = i), (s = i = void 0))
            : null == n && ('string' == typeof i ? ((n = s), (s = void 0)) : ((n = s), (s = i), (i = void 0))),
          !1 === n)
        )
          n = c;
        else if (!n) return this;
        return (
          1 === o &&
            ((r = n),
            ((n = function (e) {
              return Y().off(e), r.apply(this, arguments);
            }).guid = r.guid || (r.guid = Y.guid++))),
          this.each(function () {
            Y.event.add(this, e, n, s, i);
          })
        );
      },
      one: function (e, i, s, n) {
        return this.on(e, i, s, n, 1);
      },
      off: function (e, i, s) {
        var n, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (n = e.handleObj),
            Y(e.delegateTarget).off(n.namespace ? n.origType + '.' + n.namespace : n.origType, n.selector, n.handler),
            this
          );
        if ('object' != typeof e)
          return (
            (!1 !== i && 'function' != typeof i) || ((s = i), (i = void 0)),
            !1 === s && (s = c),
            this.each(function () {
              Y.event.remove(this, e, s, i);
            })
          );
        for (o in e) this.off(o, i, e[o]);
        return this;
      },
      trigger: function (e, i) {
        return this.each(function () {
          Y.event.trigger(e, i, this);
        });
      },
      triggerHandler: function (e, i) {
        var s = this[0];
        return s ? Y.event.trigger(e, i, s, !0) : void 0;
      },
    });
  var Ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    kt = /<([\w:]+)/,
    St = /<|&#?\w+;/,
    Tt = /<(?:script|style|link)/i,
    $t = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ft = /^$|\/(?:java|ecma)script/i,
    Et = /^true\/(.*)/,
    At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Dt = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  (Dt.optgroup = Dt.option),
    (Dt.tbody = Dt.tfoot = Dt.colgroup = Dt.caption = Dt.thead),
    (Dt.th = Dt.td),
    Y.extend({
      clone: function (e, i, s) {
        var n,
          o,
          r,
          a,
          l,
          c,
          h,
          d = e.cloneNode(!0),
          u = Y.contains(e.ownerDocument, e);
        if (!(B.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || Y.isXMLDoc(e)))
          for (a = m(d), n = 0, o = (r = m(e)).length; n < o; n++)
            (l = r[n]),
              'input' === (h = (c = a[n]).nodeName.toLowerCase()) && mt.test(l.type)
                ? (c.checked = l.checked)
                : ('input' !== h && 'textarea' !== h) || (c.defaultValue = l.defaultValue);
        if (i) {
          if (s) for (r = r || m(e), a = a || m(d), n = 0, o = r.length; n < o; n++) g(r[n], a[n]);
          else g(e, d);
        }
        return 0 < (a = m(d, 'script')).length && f(a, !u && m(e, 'script')), d;
      },
      buildFragment: function (e, i, s, n) {
        for (var o, r, a, l, c, h, d = i.createDocumentFragment(), u = [], p = 0, g = e.length; p < g; p++)
          if ((o = e[p]) || 0 === o) {
            if ('object' === Y.type(o)) Y.merge(u, o.nodeType ? [o] : o);
            else if (St.test(o)) {
              for (
                r = r || d.appendChild(i.createElement('div')),
                  l = Dt[(a = (kt.exec(o) || ['', ''])[1].toLowerCase())] || Dt._default,
                  r.innerHTML = l[1] + o.replace(Ct, '<$1></$2>') + l[2],
                  h = l[0];
                h--;

              )
                r = r.lastChild;
              Y.merge(u, r.childNodes), ((r = d.firstChild).textContent = '');
            } else u.push(i.createTextNode(o));
          }
        for (d.textContent = '', p = 0; (o = u[p++]); )
          if (
            (!n || -1 === Y.inArray(o, n)) &&
            ((c = Y.contains(o.ownerDocument, o)), (r = m(d.appendChild(o), 'script')), c && f(r), s)
          )
            for (h = 0; (o = r[h++]); ) Ft.test(o.type || '') && s.push(o);
        return d;
      },
      cleanData: function (e) {
        for (var i, s, n, o, r = Y.event.special, a = 0; void 0 !== (s = e[a]); a++) {
          if (Y.acceptData(s) && (o = s[lt.expando]) && (i = lt.cache[o])) {
            if (i.events) for (n in i.events) r[n] ? Y.event.remove(s, n) : Y.removeEvent(s, n, i.handle);
            lt.cache[o] && delete lt.cache[o];
          }
          delete ct.cache[s[ct.expando]];
        }
      },
    }),
    Y.fn.extend({
      text: function (e) {
        return rt(
          this,
          function (e) {
            return void 0 === e
              ? Y.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || h(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          var i;
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
            (i = h(this, e)).insertBefore(e, i.firstChild);
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, i) {
        for (var s, n = e ? Y.filter(e, this) : this, o = 0; null != (s = n[o]); o++)
          i || 1 !== s.nodeType || Y.cleanData(m(s)),
            s.parentNode && (i && Y.contains(s.ownerDocument, s) && f(m(s, 'script')), s.parentNode.removeChild(s));
        return this;
      },
      empty: function () {
        for (var e, i = 0; null != (e = this[i]); i++)
          1 === e.nodeType && (Y.cleanData(m(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, i) {
        return (
          (e = null != e && e),
          (i = null == i ? e : i),
          this.map(function () {
            return Y.clone(this, e, i);
          })
        );
      },
      html: function (e) {
        return rt(
          this,
          function (e) {
            var i = this[0] || {},
              s = 0,
              n = this.length;
            if (void 0 === e && 1 === i.nodeType) return i.innerHTML;
            if ('string' == typeof e && !Tt.test(e) && !Dt[(kt.exec(e) || ['', ''])[1].toLowerCase()]) {
              e = e.replace(Ct, '<$1></$2>');
              try {
                for (; s < n; s++) 1 === (i = this[s] || {}).nodeType && (Y.cleanData(m(i, !1)), (i.innerHTML = e));
                i = 0;
              } catch (o) {}
            }
            i && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = arguments[0];
        return (
          this.domManip(arguments, function (i) {
            (e = this.parentNode), Y.cleanData(m(this)), e && e.replaceChild(i, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, i) {
        e = M.apply([], e);
        var s,
          n,
          o,
          r,
          a,
          l,
          c = 0,
          h = this.length,
          d = this,
          f = h - 1,
          g = e[0],
          v = Y.isFunction(g);
        if (v || (1 < h && 'string' == typeof g && !B.checkClone && $t.test(g)))
          return this.each(function (s) {
            var n = d.eq(s);
            v && (e[0] = g.call(this, s, n.html())), n.domManip(e, i);
          });
        if (
          h &&
          ((n = (s = Y.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild),
          1 === s.childNodes.length && (s = n),
          n)
        ) {
          for (r = (o = Y.map(m(s, 'script'), u)).length; c < h; c++)
            (a = s), c !== f && ((a = Y.clone(a, !0, !0)), r && Y.merge(o, m(a, 'script'))), i.call(this[c], a, c);
          if (r)
            for (l = o[o.length - 1].ownerDocument, Y.map(o, p), c = 0; c < r; c++)
              (a = o[c]),
                Ft.test(a.type || '') &&
                  !lt.access(a, 'globalEval') &&
                  Y.contains(l, a) &&
                  (a.src ? Y._evalUrl && Y._evalUrl(a.src) : Y.globalEval(a.textContent.replace(At, '')));
        }
        return this;
      },
    }),
    Y.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, i) {
        Y.fn[e] = function (e) {
          for (var s, n = [], o = Y(e), r = o.length - 1, a = 0; a <= r; a++)
            (s = a === r ? this : this.clone(!0)), Y(o[a])[i](s), q.apply(n, s.get());
          return this.pushStack(n);
        };
      }
    );
  var jt,
    Ot,
    Ht,
    Pt,
    It,
    Lt,
    Mt = {},
    qt = /^margin/,
    zt = RegExp('^(' + ft + ')(?!px)[a-z%]+$', 'i'),
    Nt = function (e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null);
    };
  function Rt() {
    (Lt.style.cssText =
      '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'),
      (Lt.innerHTML = ''),
      Pt.appendChild(It);
    var e = t.getComputedStyle(Lt, null);
    (Ot = '1%' !== e.top), (Ht = '4px' === e.width), Pt.removeChild(It);
  }
  (Pt = U.documentElement),
    (It = U.createElement('div')),
    (Lt = U.createElement('div')).style &&
      ((Lt.style.backgroundClip = 'content-box'),
      (Lt.cloneNode(!0).style.backgroundClip = ''),
      (B.clearCloneStyle = 'content-box' === Lt.style.backgroundClip),
      (It.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute'),
      It.appendChild(Lt),
      t.getComputedStyle &&
        Y.extend(B, {
          pixelPosition: function () {
            return Rt(), Ot;
          },
          boxSizingReliable: function () {
            return null == Ht && Rt(), Ht;
          },
          reliableMarginRight: function () {
            var e,
              i = Lt.appendChild(U.createElement('div'));
            return (
              (i.style.cssText = Lt.style.cssText =
                '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
              (i.style.marginRight = i.style.width = '0'),
              (Lt.style.width = '1px'),
              Pt.appendChild(It),
              (e = !parseFloat(t.getComputedStyle(i, null).marginRight)),
              Pt.removeChild(It),
              e
            );
          },
        })),
    (Y.swap = function (e, i, s, n) {
      var o,
        r,
        a = {};
      for (r in i) (a[r] = e.style[r]), (e.style[r] = i[r]);
      for (r in ((o = s.apply(e, n || [])), i)) e.style[r] = a[r];
      return o;
    });
  var Wt = /^(none|table(?!-c[ea]).+)/,
    Bt = RegExp('^(' + ft + ')(.*)$', 'i'),
    Ut = RegExp('^([+-])=(' + ft + ')', 'i'),
    Yt = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Vt = { letterSpacing: '0', fontWeight: '400' },
    Xt = ['Webkit', 'O', 'Moz', 'ms'];
  Y.extend({
    cssHooks: {
      opacity: {
        get: function (e, i) {
          if (i) {
            var s = b(e, 'opacity');
            return '' === s ? '1' : s;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: 'cssFloat' },
    style: function (e, i, s, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          a,
          l = Y.camelCase(i),
          c = e.style;
        return (
          (i = Y.cssProps[l] || (Y.cssProps[l] = _(c, l))),
          (a = Y.cssHooks[i] || Y.cssHooks[l]),
          void 0 === s
            ? a && 'get' in a && void 0 !== (o = a.get(e, !1, n))
              ? o
              : c[i]
            : ('string' == (r = typeof s) &&
                (o = Ut.exec(s)) &&
                ((s = (o[1] + 1) * o[2] + parseFloat(Y.css(e, i))), (r = 'number')),
              void (
                null != s &&
                s == s &&
                ('number' !== r || Y.cssNumber[l] || (s += 'px'),
                B.clearCloneStyle || '' !== s || 0 !== i.indexOf('background') || (c[i] = 'inherit'),
                (a && 'set' in a && void 0 === (s = a.set(e, s, n))) || (c[i] = s))
              ))
        );
      }
    },
    css: function (e, i, s, n) {
      var o,
        r,
        a,
        l = Y.camelCase(i);
      return (
        (i = Y.cssProps[l] || (Y.cssProps[l] = _(e.style, l))),
        (a = Y.cssHooks[i] || Y.cssHooks[l]) && 'get' in a && (o = a.get(e, !0, s)),
        void 0 === o && (o = b(e, i, n)),
        'normal' === o && i in Vt && (o = Vt[i]),
        '' === s || s ? ((r = parseFloat(o)), !0 === s || Y.isNumeric(r) ? r || 0 : o) : o
      );
    },
  }),
    Y.each(['height', 'width'], function (e, i) {
      Y.cssHooks[i] = {
        get: function (e, s, n) {
          return s
            ? Wt.test(Y.css(e, 'display')) && 0 === e.offsetWidth
              ? Y.swap(e, Yt, function () {
                  return k(e, i, n);
                })
              : k(e, i, n)
            : void 0;
        },
        set: function (e, s, n) {
          var o = n && Nt(e);
          return x(0, s, n ? C(e, i, n, 'border-box' === Y.css(e, 'boxSizing', !1, o), o) : 0);
        },
      };
    }),
    (Y.cssHooks.marginRight = w(B.reliableMarginRight, function (e, i) {
      return i ? Y.swap(e, { display: 'inline-block' }, b, [e, 'marginRight']) : void 0;
    })),
    Y.each({ margin: '', padding: '', border: 'Width' }, function (e, i) {
      (Y.cssHooks[e + i] = {
        expand: function (s) {
          for (var n = 0, o = {}, r = 'string' == typeof s ? s.split(' ') : [s]; n < 4; n++)
            o[e + gt[n] + i] = r[n] || r[n - 2] || r[0];
          return o;
        },
      }),
        qt.test(e) || (Y.cssHooks[e + i].set = x);
    }),
    Y.fn.extend({
      css: function (e, i) {
        return rt(
          this,
          function (e, i, s) {
            var n,
              o,
              r = {},
              a = 0;
            if (Y.isArray(i)) {
              for (n = Nt(e), o = i.length; a < o; a++) r[i[a]] = Y.css(e, i[a], !1, n);
              return r;
            }
            return void 0 !== s ? Y.style(e, i, s) : Y.css(e, i);
          },
          e,
          i,
          1 < arguments.length
        );
      },
      show: function () {
        return S(this, !0);
      },
      hide: function () {
        return S(this);
      },
      toggle: function (e) {
        return 'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              ut(this) ? Y(this).show() : Y(this).hide();
            });
      },
    }),
    (((Y.Tween = T).prototype = {
      constructor: T,
      init: function (e, i, s, n, o, r) {
        (this.elem = e),
          (this.prop = s),
          (this.easing = o || 'swing'),
          (this.options = i),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = r || (Y.cssNumber[s] ? '' : 'px'));
      },
      cur: function () {
        var e = T.propHooks[this.prop];
        return e && e.get ? e.get(this) : T.propHooks._default.get(this);
      },
      run: function (e) {
        var i,
          s = T.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = i = Y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
            : (this.pos = i = e),
          (this.now = (this.end - this.start) * i + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          s && s.set ? s.set(this) : T.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = T.prototype),
    ((T.propHooks = {
      _default: {
        get: function (e) {
          var i;
          return null == e.elem[e.prop] || (e.elem.style && null != e.elem.style[e.prop])
            ? (i = Y.css(e.elem, e.prop, '')) && 'auto' !== i
              ? i
              : 0
            : e.elem[e.prop];
        },
        set: function (e) {
          Y.fx.step[e.prop]
            ? Y.fx.step[e.prop](e)
            : e.elem.style && (null != e.elem.style[Y.cssProps[e.prop]] || Y.cssHooks[e.prop])
            ? Y.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }).scrollTop = T.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (Y.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (Y.fx = T.prototype.init),
    (Y.fx.step = {});
  var Zt,
    Qt,
    Kt,
    Gt,
    Jt,
    te = /^(?:toggle|show|hide)$/,
    ee = RegExp('^(?:([+-])=|)(' + ft + ')([a-z%]*)$', 'i'),
    ie = /queueHooks$/,
    ne = [
      function (e, i, s) {
        var n,
          o,
          r,
          a,
          l,
          c,
          h,
          d = this,
          u = {},
          p = e.style,
          f = e.nodeType && ut(e),
          g = lt.get(e, 'fxshow');
        for (n in (s.queue ||
          (null == (l = Y._queueHooks(e, 'fx')).unqueued &&
            ((l.unqueued = 0),
            (c = l.empty.fire),
            (l.empty.fire = function () {
              l.unqueued || c();
            })),
          l.unqueued++,
          d.always(function () {
            d.always(function () {
              l.unqueued--, Y.queue(e, 'fx').length || l.empty.fire();
            });
          })),
        1 === e.nodeType &&
          ('height' in i || 'width' in i) &&
          ((s.overflow = [p.overflow, p.overflowX, p.overflowY]),
          'inline' === ('none' === (h = Y.css(e, 'display')) ? lt.get(e, 'olddisplay') || y(e.nodeName) : h) &&
            'none' === Y.css(e, 'float') &&
            (p.display = 'inline-block')),
        s.overflow &&
          ((p.overflow = 'hidden'),
          d.always(function () {
            (p.overflow = s.overflow[0]), (p.overflowX = s.overflow[1]), (p.overflowY = s.overflow[2]);
          })),
        i))
          if (((o = i[n]), te.exec(o))) {
            if ((delete i[n], (r = r || 'toggle' === o), o === (f ? 'hide' : 'show'))) {
              if ('show' !== o || !g || void 0 === g[n]) continue;
              f = !0;
            }
            u[n] = (g && g[n]) || Y.style(e, n);
          } else h = void 0;
        if (Y.isEmptyObject(u)) 'inline' === ('none' === h ? y(e.nodeName) : h) && (p.display = h);
        else
          for (n in (g ? 'hidden' in g && (f = g.hidden) : (g = lt.access(e, 'fxshow', {})),
          r && (g.hidden = !f),
          f
            ? Y(e).show()
            : d.done(function () {
                Y(e).hide();
              }),
          d.done(function () {
            var i;
            for (i in (lt.remove(e, 'fxshow'), u)) Y.style(e, i, u[i]);
          }),
          u))
            (a = E(f ? g[n] : 0, n, d)),
              n in g ||
                ((g[n] = a.start), f && ((a.end = a.start), (a.start = 'width' === n || 'height' === n ? 1 : 0)));
      },
    ],
    se = {
      '*': [
        function (e, i) {
          var s = this.createTween(e, i),
            n = s.cur(),
            o = ee.exec(i),
            r = (o && o[3]) || (Y.cssNumber[e] ? '' : 'px'),
            a = (Y.cssNumber[e] || ('px' !== r && +n)) && ee.exec(Y.css(s.elem, e)),
            l = 1,
            c = 20;
          if (a && a[3] !== r)
            for (
              r = r || a[3], o = o || [], a = +n || 1;
              (a /= l = l || '.5'), Y.style(s.elem, e, a + r), l !== (l = s.cur() / n) && 1 !== l && --c;

            );
          return o && ((a = s.start = +a || +n || 0), (s.unit = r), (s.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2])), s;
        },
      ],
    };
  (Y.Animation = Y.extend(A, {
    tweener: function (e, i) {
      for (var s, n = 0, o = (e = Y.isFunction(e) ? ((i = e), ['*']) : e.split(' ')).length; n < o; n++)
        (se[(s = e[n])] = se[s] || []), se[s].unshift(i);
    },
    prefilter: function (e, i) {
      i ? ne.unshift(e) : ne.push(e);
    },
  })),
    (Y.speed = function (e, i, s) {
      var n =
        e && 'object' == typeof e
          ? Y.extend({}, e)
          : {
              complete: s || (!s && i) || (Y.isFunction(e) && e),
              duration: e,
              easing: (s && i) || (i && !Y.isFunction(i) && i),
            };
      return (
        (n.duration = Y.fx.off
          ? 0
          : 'number' == typeof n.duration
          ? n.duration
          : n.duration in Y.fx.speeds
          ? Y.fx.speeds[n.duration]
          : Y.fx.speeds._default),
        (null != n.queue && !0 !== n.queue) || (n.queue = 'fx'),
        (n.old = n.complete),
        (n.complete = function () {
          Y.isFunction(n.old) && n.old.call(this), n.queue && Y.dequeue(this, n.queue);
        }),
        n
      );
    }),
    Y.fn.extend({
      fadeTo: function (e, i, s, n) {
        return this.filter(ut).css('opacity', 0).show().end().animate({ opacity: i }, e, s, n);
      },
      animate: function (e, i, s, n) {
        function o() {
          var i = A(this, Y.extend({}, e), a);
          (r || lt.get(this, 'finish')) && i.stop(!0);
        }
        var r = Y.isEmptyObject(e),
          a = Y.speed(i, s, n);
        return (o.finish = o), r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o);
      },
      stop: function (e, i, s) {
        function n(e) {
          var i = e.stop;
          delete e.stop, i(s);
        }
        return (
          'string' != typeof e && ((s = i), (i = e), (e = void 0)),
          i && !1 !== e && this.queue(e || 'fx', []),
          this.each(function () {
            var i = !0,
              o = null != e && e + 'queueHooks',
              r = Y.timers,
              a = lt.get(this);
            if (o) a[o] && a[o].stop && n(a[o]);
            else for (o in a) a[o] && a[o].stop && ie.test(o) && n(a[o]);
            for (o = r.length; o--; )
              r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(s), (i = !1), r.splice(o, 1));
            (!i && s) || Y.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var i,
              s = lt.get(this),
              n = s[e + 'queue'],
              o = s[e + 'queueHooks'],
              r = Y.timers,
              a = n ? n.length : 0;
            for (s.finish = !0, Y.queue(this, e, []), o && o.stop && o.stop.call(this, !0), i = r.length; i--; )
              r[i].elem === this && r[i].queue === e && (r[i].anim.stop(!0), r.splice(i, 1));
            for (i = 0; i < a; i++) n[i] && n[i].finish && n[i].finish.call(this);
            delete s.finish;
          })
        );
      },
    }),
    Y.each(['toggle', 'show', 'hide'], function (e, i) {
      var s = Y.fn[i];
      Y.fn[i] = function (e, n, o) {
        return null == e || 'boolean' == typeof e ? s.apply(this, arguments) : this.animate(F(i, !0), e, n, o);
      };
    }),
    Y.each(
      {
        slideDown: F('show'),
        slideUp: F('hide'),
        slideToggle: F('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, i) {
        Y.fn[e] = function (e, s, n) {
          return this.animate(i, e, s, n);
        };
      }
    ),
    (Y.timers = []),
    (Y.fx.tick = function () {
      var e,
        i = 0,
        s = Y.timers;
      for (Zt = Y.now(); i < s.length; i++) (e = s[i])() || s[i] !== e || s.splice(i--, 1);
      s.length || Y.fx.stop(), (Zt = void 0);
    }),
    (Y.fx.timer = function (e) {
      Y.timers.push(e), e() ? Y.fx.start() : Y.timers.pop();
    }),
    (Y.fx.interval = 13),
    (Y.fx.start = function () {
      Qt = Qt || setInterval(Y.fx.tick, Y.fx.interval);
    }),
    (Y.fx.stop = function () {
      clearInterval(Qt), (Qt = null);
    }),
    (Y.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (Y.fn.delay = function (e, i) {
      return (
        (e = (Y.fx && Y.fx.speeds[e]) || e),
        (i = i || 'fx'),
        this.queue(i, function (i, s) {
          var n = setTimeout(i, e);
          s.stop = function () {
            clearTimeout(n);
          };
        })
      );
    }),
    (Kt = U.createElement('input')),
    (Jt = (Gt = U.createElement('select')).appendChild(U.createElement('option'))),
    (Kt.type = 'checkbox'),
    (B.checkOn = '' !== Kt.value),
    (B.optSelected = Jt.selected),
    (Gt.disabled = !0),
    (B.optDisabled = !Jt.disabled),
    ((Kt = U.createElement('input')).value = 't'),
    (Kt.type = 'radio'),
    (B.radioValue = 't' === Kt.value);
  var oe,
    ae = Y.expr.attrHandle;
  Y.fn.extend({
    attr: function (e, i) {
      return rt(this, Y.attr, e, i, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        Y.removeAttr(this, e);
      });
    },
  }),
    Y.extend({
      attr: function (e, i, s) {
        var n,
          o,
          r = e.nodeType;
        if (e && 3 !== r && 8 !== r && 2 !== r)
          return typeof e.getAttribute == yt
            ? Y.prop(e, i, s)
            : ((1 === r && Y.isXMLDoc(e)) ||
                ((i = i.toLowerCase()), (n = Y.attrHooks[i] || (Y.expr.match.bool.test(i) ? oe : void 0))),
              void 0 === s
                ? (n && 'get' in n && null !== (o = n.get(e, i))) || null != (o = Y.find.attr(e, i))
                  ? o
                  : void 0
                : null !== s
                ? n && 'set' in n && void 0 !== (o = n.set(e, s, i))
                  ? o
                  : (e.setAttribute(i, s + ''), s)
                : void Y.removeAttr(e, i));
      },
      removeAttr: function (e, i) {
        var s,
          n,
          o = 0,
          r = i && i.match(ot);
        if (r && 1 === e.nodeType)
          for (; (s = r[o++]); )
            (n = Y.propFix[s] || s), Y.expr.match.bool.test(s) && (e[n] = !1), e.removeAttribute(s);
      },
      attrHooks: {
        type: {
          set: function (e, i) {
            if (!B.radioValue && 'radio' === i && Y.nodeName(e, 'input')) {
              var s = e.value;
              return e.setAttribute('type', i), s && (e.value = s), i;
            }
          },
        },
      },
    }),
    (oe = {
      set: function (e, i, s) {
        return !1 === i ? Y.removeAttr(e, s) : e.setAttribute(s, s), s;
      },
    }),
    Y.each(Y.expr.match.bool.source.match(/\w+/g), function (e, i) {
      var s = ae[i] || Y.find.attr;
      ae[i] = function (e, i, n) {
        var o, r;
        return n || ((r = ae[i]), (ae[i] = o), (o = null != s(e, i, n) ? i.toLowerCase() : null), (ae[i] = r)), o;
      };
    });
  var re = /^(?:input|select|textarea|button)$/i;
  Y.fn.extend({
    prop: function (e, i) {
      return rt(this, Y.prop, e, i, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[Y.propFix[e] || e];
      });
    },
  }),
    Y.extend({
      propFix: { for: 'htmlFor', class: 'className' },
      prop: function (e, i, s) {
        var n,
          o,
          r = e.nodeType;
        if (e && 3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && Y.isXMLDoc(e)) || ((i = Y.propFix[i] || i), (o = Y.propHooks[i])),
            void 0 !== s
              ? o && 'set' in o && void 0 !== (n = o.set(e, s, i))
                ? n
                : (e[i] = s)
              : o && 'get' in o && null !== (n = o.get(e, i))
              ? n
              : e[i]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            return e.hasAttribute('tabindex') || re.test(e.nodeName) || e.href ? e.tabIndex : -1;
          },
        },
      },
    }),
    B.optSelected ||
      (Y.propHooks.selected = {
        get: function (e) {
          var i = e.parentNode;
          return i && i.parentNode && i.parentNode.selectedIndex, null;
        },
      }),
    Y.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        Y.propFix[this.toLowerCase()] = this;
      }
    );
  var le = /[\t\r\n\f]/g;
  Y.fn.extend({
    addClass: function (e) {
      var i,
        s,
        n,
        o,
        r,
        a,
        l = 0,
        c = this.length;
      if (Y.isFunction(e))
        return this.each(function (i) {
          Y(this).addClass(e.call(this, i, this.className));
        });
      if ('string' == typeof e && e) {
        for (i = (e || '').match(ot) || []; l < c; l++)
          if ((n = 1 === (s = this[l]).nodeType && (s.className ? (' ' + s.className + ' ').replace(le, ' ') : ' '))) {
            for (r = 0; (o = i[r++]); ) 0 > n.indexOf(' ' + o + ' ') && (n += o + ' ');
            (a = Y.trim(n)), s.className !== a && (s.className = a);
          }
      }
      return this;
    },
    removeClass: function (e) {
      var i,
        s,
        n,
        o,
        r,
        a,
        l = 0 === arguments.length || ('string' == typeof e && e),
        c = 0,
        h = this.length;
      if (Y.isFunction(e))
        return this.each(function (i) {
          Y(this).removeClass(e.call(this, i, this.className));
        });
      if (l) {
        for (i = (e || '').match(ot) || []; c < h; c++)
          if ((n = 1 === (s = this[c]).nodeType && (s.className ? (' ' + s.className + ' ').replace(le, ' ') : ''))) {
            for (r = 0; (o = i[r++]); ) for (; 0 <= n.indexOf(' ' + o + ' '); ) n = n.replace(' ' + o + ' ', ' ');
            (a = e ? Y.trim(n) : ''), s.className !== a && (s.className = a);
          }
      }
      return this;
    },
    toggleClass: function (e, i) {
      var s = typeof e;
      return 'boolean' == typeof i && 'string' == s
        ? i
          ? this.addClass(e)
          : this.removeClass(e)
        : Y.isFunction(e)
        ? this.each(function (s) {
            Y(this).toggleClass(e.call(this, s, this.className, i), i);
          })
        : this.each(function () {
            if ('string' == s)
              for (var i, n = 0, o = Y(this), r = e.match(ot) || []; (i = r[n++]); )
                o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
            else
              (s != yt && 'boolean' != s) ||
                (this.className && lt.set(this, '__className__', this.className),
                (this.className = (!this.className && !1 !== e && lt.get(this, '__className__')) || ''));
          });
    },
    hasClass: function (e) {
      for (var i = ' ' + e + ' ', s = 0, n = this.length; s < n; s++)
        if (1 === this[s].nodeType && 0 <= (' ' + this[s].className + ' ').replace(le, ' ').indexOf(i)) return !0;
      return !1;
    },
  });
  var ce = /\r/g;
  Y.fn.extend({
    val: function (e) {
      var i,
        s,
        n,
        o = this[0];
      return arguments.length
        ? ((n = Y.isFunction(e)),
          this.each(function (s) {
            var o;
            1 === this.nodeType &&
              (null == (o = n ? e.call(this, s, Y(this).val()) : e)
                ? (o = '')
                : 'number' == typeof o
                ? (o += '')
                : Y.isArray(o) &&
                  (o = Y.map(o, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((i = Y.valHooks[this.type] || Y.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in i &&
                void 0 !== i.set(this, o, 'value')) ||
                (this.value = o));
          }))
        : o
        ? (i = Y.valHooks[o.type] || Y.valHooks[o.nodeName.toLowerCase()]) &&
          'get' in i &&
          void 0 !== (s = i.get(o, 'value'))
          ? s
          : 'string' == typeof (s = o.value)
          ? s.replace(ce, '')
          : null == s
          ? ''
          : s
        : void 0;
    },
  }),
    Y.extend({
      valHooks: {
        option: {
          get: function (e) {
            var i = Y.find.attr(e, 'value');
            return null != i ? i : Y.trim(Y.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var i,
                s,
                n = e.options,
                o = e.selectedIndex,
                r = 'select-one' === e.type || o < 0,
                a = r ? null : [],
                l = r ? o + 1 : n.length,
                c = o < 0 ? l : r ? o : 0;
              c < l;
              c++
            )
              if (
                ((s = n[c]).selected || c === o) &&
                (B.optDisabled ? !s.disabled : null === s.getAttribute('disabled')) &&
                (!s.parentNode.disabled || !Y.nodeName(s.parentNode, 'optgroup'))
              ) {
                if (((i = Y(s).val()), r)) return i;
                a.push(i);
              }
            return a;
          },
          set: function (e, i) {
            for (var s, n, o = e.options, r = Y.makeArray(i), a = o.length; a--; )
              ((n = o[a]).selected = 0 <= Y.inArray(n.value, r)) && (s = !0);
            return s || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    Y.each(['radio', 'checkbox'], function () {
      (Y.valHooks[this] = {
        set: function (e, i) {
          return Y.isArray(i) ? (e.checked = 0 <= Y.inArray(Y(e).val(), i)) : void 0;
        },
      }),
        B.checkOn ||
          (Y.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    Y.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (e, i) {
        Y.fn[i] = function (e, s) {
          return 0 < arguments.length ? this.on(i, null, e, s) : this.trigger(i);
        };
      }
    ),
    Y.fn.extend({
      hover: function (e, i) {
        return this.mouseenter(e).mouseleave(i || e);
      },
      bind: function (e, i, s) {
        return this.on(e, null, i, s);
      },
      unbind: function (e, i) {
        return this.off(e, null, i);
      },
      delegate: function (e, i, s, n) {
        return this.on(i, e, s, n);
      },
      undelegate: function (e, i, s) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(i, e || '**', s);
      },
    });
  var de = Y.now(),
    he = /\?/;
  (Y.parseJSON = function (e) {
    return JSON.parse(e + '');
  }),
    (Y.parseXML = function (e) {
      var i;
      if (!e || 'string' != typeof e) return null;
      try {
        i = new DOMParser().parseFromString(e, 'text/xml');
      } catch (s) {
        i = void 0;
      }
      return (i && !i.getElementsByTagName('parsererror').length) || Y.error('Invalid XML: ' + e), i;
    });
  var ue,
    pe,
    fe = /#.*$/,
    ge = /([?&])_=[^&]*/,
    me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ve = /^(?:GET|HEAD)$/,
    ye = /^\/\//,
    be = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    we = {},
    _e = {},
    xe = '*/'.concat('*');
  try {
    pe = location.href;
  } catch (t) {
    ((pe = U.createElement('a')).href = ''), (pe = pe.href);
  }
  (ue = be.exec(pe.toLowerCase()) || []),
    Y.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: pe,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ue[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': xe,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': Y.parseJSON, 'text xml': Y.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, i) {
        return i ? O(O(e, Y.ajaxSettings), i) : O(Y.ajaxSettings, e);
      },
      ajaxPrefilter: D(we),
      ajaxTransport: D(_e),
      ajax: function (e, i) {
        function s(e, i, s, a) {
          var c,
            d,
            b,
            y,
            x,
            k = i;
          2 !== w &&
            ((w = 2),
            l && clearTimeout(l),
            (n = void 0),
            (r = a || ''),
            (C.readyState = 0 < e ? 4 : 0),
            (c = (200 <= e && e < 300) || 304 === e),
            s &&
              (y = (function (e, i, s) {
                for (var n, o, r, a, l = e.contents, c = e.dataTypes; '*' === c[0]; )
                  c.shift(), void 0 === n && (n = e.mimeType || i.getResponseHeader('Content-Type'));
                if (n) {
                  for (o in l)
                    if (l[o] && l[o].test(n)) {
                      c.unshift(o);
                      break;
                    }
                }
                if (c[0] in s) r = c[0];
                else {
                  for (o in s) {
                    if (!c[0] || e.converters[o + ' ' + c[0]]) {
                      r = o;
                      break;
                    }
                    a = a || o;
                  }
                  r = r || a;
                }
                return r ? (r !== c[0] && c.unshift(r), s[r]) : void 0;
              })(u, C, s)),
            (y = (function (e, i, s, n) {
              var o,
                r,
                a,
                l,
                c,
                h = {},
                d = e.dataTypes.slice();
              if (d[1]) for (a in e.converters) h[a.toLowerCase()] = e.converters[a];
              for (r = d.shift(); r; )
                if (
                  (e.responseFields[r] && (s[e.responseFields[r]] = i),
                  !c && n && e.dataFilter && (i = e.dataFilter(i, e.dataType)),
                  (c = r),
                  (r = d.shift()))
                ) {
                  if ('*' === r) r = c;
                  else if ('*' !== c && c !== r) {
                    if (!(a = h[c + ' ' + r] || h['* ' + r])) {
                      for (o in h)
                        if ((l = o.split(' '))[1] === r && (a = h[c + ' ' + l[0]] || h['* ' + l[0]])) {
                          !0 === a ? (a = h[o]) : !0 !== h[o] && ((r = l[0]), d.unshift(l[1]));
                          break;
                        }
                    }
                    if (!0 !== a) {
                      if (a && e.throws) i = a(i);
                      else
                        try {
                          i = a(i);
                        } catch (u) {
                          return { state: 'parsererror', error: a ? u : 'No conversion from ' + c + ' to ' + r };
                        }
                    }
                  }
                }
              return { state: 'success', data: i };
            })(u, y, C, c)),
            c
              ? (u.ifModified &&
                  ((x = C.getResponseHeader('Last-Modified')) && (Y.lastModified[o] = x),
                  (x = C.getResponseHeader('etag')) && (Y.etag[o] = x)),
                204 === e || 'HEAD' === u.type
                  ? (k = 'nocontent')
                  : 304 === e
                  ? (k = 'notmodified')
                  : ((k = y.state), (d = y.data), (c = !(b = y.error))))
              : ((b = k), (!e && k) || ((k = 'error'), e < 0 && (e = 0))),
            (C.status = e),
            (C.statusText = (i || k) + ''),
            c ? g.resolveWith(p, [d, k, C]) : g.rejectWith(p, [C, k, b]),
            C.statusCode(v),
            (v = void 0),
            h && f.trigger(c ? 'ajaxSuccess' : 'ajaxError', [C, u, c ? d : b]),
            m.fireWith(p, [C, k]),
            h && (f.trigger('ajaxComplete', [C, u]), --Y.active || Y.event.trigger('ajaxStop')));
        }
        'object' == typeof e && ((i = e), (e = void 0)), (i = i || {});
        var n,
          o,
          r,
          a,
          l,
          c,
          h,
          d,
          u = Y.ajaxSetup({}, i),
          p = u.context || u,
          f = u.context && (p.nodeType || p.jquery) ? Y(p) : Y.event,
          g = Y.Deferred(),
          m = Y.Callbacks('once memory'),
          v = u.statusCode || {},
          b = {},
          y = {},
          w = 0,
          x = 'canceled',
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var i;
              if (2 === w) {
                if (!a) for (a = {}; (i = me.exec(r)); ) a[i[1].toLowerCase()] = i[2];
                i = a[e.toLowerCase()];
              }
              return null == i ? null : i;
            },
            getAllResponseHeaders: function () {
              return 2 === w ? r : null;
            },
            setRequestHeader: function (e, i) {
              var s = e.toLowerCase();
              return w || (b[(e = y[s] = y[s] || e)] = i), this;
            },
            overrideMimeType: function (e) {
              return w || (u.mimeType = e), this;
            },
            statusCode: function (e) {
              var i;
              if (e) {
                if (w < 2) for (i in e) v[i] = [v[i], e[i]];
                else C.always(e[C.status]);
              }
              return this;
            },
            abort: function (e) {
              var i = e || x;
              return n && n.abort(i), s(0, i), this;
            },
          };
        if (
          ((g.promise(C).complete = m.add),
          (C.success = C.done),
          (C.error = C.fail),
          (u.url = ((e || u.url || pe) + '').replace(fe, '').replace(ye, ue[1] + '//')),
          (u.type = i.method || i.type || u.method || u.type),
          (u.dataTypes = Y.trim(u.dataType || '*')
            .toLowerCase()
            .match(ot) || ['']),
          null == u.crossDomain &&
            ((c = be.exec(u.url.toLowerCase())),
            (u.crossDomain = !(
              !c ||
              (c[1] === ue[1] &&
                c[2] === ue[2] &&
                (c[3] || ('http:' === c[1] ? '80' : '443')) === (ue[3] || ('http:' === ue[1] ? '80' : '443')))
            ))),
          u.data && u.processData && 'string' != typeof u.data && (u.data = Y.param(u.data, u.traditional)),
          j(we, u, i, C),
          2 === w)
        )
          return C;
        for (d in ((h = u.global) && 0 == Y.active++ && Y.event.trigger('ajaxStart'),
        (u.type = u.type.toUpperCase()),
        (u.hasContent = !ve.test(u.type)),
        (o = u.url),
        u.hasContent ||
          (u.data && ((o = u.url += (he.test(o) ? '&' : '?') + u.data), delete u.data),
          !1 === u.cache &&
            (u.url = ge.test(o) ? o.replace(ge, '$1_=' + de++) : o + (he.test(o) ? '&' : '?') + '_=' + de++)),
        u.ifModified &&
          (Y.lastModified[o] && C.setRequestHeader('If-Modified-Since', Y.lastModified[o]),
          Y.etag[o] && C.setRequestHeader('If-None-Match', Y.etag[o])),
        ((u.data && u.hasContent && !1 !== u.contentType) || i.contentType) &&
          C.setRequestHeader('Content-Type', u.contentType),
        C.setRequestHeader(
          'Accept',
          u.dataTypes[0] && u.accepts[u.dataTypes[0]]
            ? u.accepts[u.dataTypes[0]] + ('*' !== u.dataTypes[0] ? ', ' + xe + '; q=0.01' : '')
            : u.accepts['*']
        ),
        u.headers))
          C.setRequestHeader(d, u.headers[d]);
        if (u.beforeSend && (!1 === u.beforeSend.call(p, C, u) || 2 === w)) return C.abort();
        for (d in ((x = 'abort'), { success: 1, error: 1, complete: 1 })) C[d](u[d]);
        if ((n = j(_e, u, i, C))) {
          (C.readyState = 1),
            h && f.trigger('ajaxSend', [C, u]),
            u.async &&
              0 < u.timeout &&
              (l = setTimeout(function () {
                C.abort('timeout');
              }, u.timeout));
          try {
            (w = 1), n.send(b, s);
          } catch (k) {
            if (!(w < 2)) throw k;
            s(-1, k);
          }
        } else s(-1, 'No Transport');
        return C;
      },
      getJSON: function (e, i, s) {
        return Y.get(e, i, s, 'json');
      },
      getScript: function (e, i) {
        return Y.get(e, void 0, i, 'script');
      },
    }),
    Y.each(['get', 'post'], function (e, i) {
      Y[i] = function (e, s, n, o) {
        return (
          Y.isFunction(s) && ((o = o || n), (n = s), (s = void 0)),
          Y.ajax({ url: e, type: i, dataType: o, data: s, success: n })
        );
      };
    }),
    Y.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, i) {
      Y.fn[i] = function (e) {
        return this.on(i, e);
      };
    }),
    (Y._evalUrl = function (e) {
      return Y.ajax({ url: e, type: 'GET', dataType: 'script', async: !1, global: !1, throws: !0 });
    }),
    Y.fn.extend({
      wrapAll: function (e) {
        var i;
        return Y.isFunction(e)
          ? this.each(function (i) {
              Y(this).wrapAll(e.call(this, i));
            })
          : (this[0] &&
              ((i = Y(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && i.insertBefore(this[0]),
              i
                .map(function () {
                  for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (e) {
        return Y.isFunction(e)
          ? this.each(function (i) {
              Y(this).wrapInner(e.call(this, i));
            })
          : this.each(function () {
              var i = Y(this),
                s = i.contents();
              s.length ? s.wrapAll(e) : i.append(e);
            });
      },
      wrap: function (e) {
        var i = Y.isFunction(e);
        return this.each(function (s) {
          Y(this).wrapAll(i ? e.call(this, s) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            Y.nodeName(this, 'body') || Y(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (Y.expr.filters.hidden = function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }),
    (Y.expr.filters.visible = function (e) {
      return !Y.expr.filters.hidden(e);
    });
  var Ce = /%20/g,
    ke = /\[\]$/,
    Se = /\r?\n/g,
    Te = /^(?:submit|button|image|reset|file)$/i,
    $e = /^(?:input|select|textarea|keygen)/i;
  (Y.param = function (e, i) {
    function s(e, i) {
      (i = Y.isFunction(i) ? i() : null == i ? '' : i),
        (o[o.length] = encodeURIComponent(e) + '=' + encodeURIComponent(i));
    }
    var n,
      o = [];
    if (
      (void 0 === i && (i = Y.ajaxSettings && Y.ajaxSettings.traditional),
      Y.isArray(e) || (e.jquery && !Y.isPlainObject(e)))
    )
      Y.each(e, function () {
        s(this.name, this.value);
      });
    else
      for (n in e)
        !(function e(i, s, n, o) {
          var r;
          if (Y.isArray(s))
            Y.each(s, function (s, r) {
              n || ke.test(i) ? o(i, r) : e(i + '[' + ('object' == typeof r ? s : '') + ']', r, n, o);
            });
          else if (n || 'object' !== Y.type(s)) o(i, s);
          else for (r in s) e(i + '[' + r + ']', s[r], n, o);
        })(n, e[n], i, s);
    return o.join('&').replace(Ce, '+');
  }),
    Y.fn.extend({
      serialize: function () {
        return Y.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = Y.prop(this, 'elements');
          return e ? Y.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !Y(this).is(':disabled') &&
              $e.test(this.nodeName) &&
              !Te.test(e) &&
              (this.checked || !mt.test(e))
            );
          })
          .map(function (e, i) {
            var s = Y(this).val();
            return null == s
              ? null
              : Y.isArray(s)
              ? Y.map(s, function (e) {
                  return { name: i.name, value: e.replace(Se, '\r\n') };
                })
              : { name: i.name, value: s.replace(Se, '\r\n') };
          })
          .get();
      },
    }),
    (Y.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (e) {}
    });
  var Fe = 0,
    Ee = {},
    Ae = { 0: 200, 1223: 204 },
    De = Y.ajaxSettings.xhr();
  t.ActiveXObject &&
    Y(t).on('unload', function () {
      for (var e in Ee) Ee[e]();
    }),
    (B.cors = !!De && 'withCredentials' in De),
    (B.ajax = De = !!De),
    Y.ajaxTransport(function (e) {
      var i;
      return B.cors || (De && !e.crossDomain)
        ? {
            send: function (s, n) {
              var o,
                r = e.xhr(),
                a = ++Fe;
              if ((r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                for (o in e.xhrFields) r[o] = e.xhrFields[o];
              for (o in (e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
              e.crossDomain || s['X-Requested-With'] || (s['X-Requested-With'] = 'XMLHttpRequest'),
              s))
                r.setRequestHeader(o, s[o]);
              (i = function (e) {
                return function () {
                  i &&
                    (delete Ee[a],
                    (i = r.onload = r.onerror = null),
                    'abort' === e
                      ? r.abort()
                      : 'error' === e
                      ? n(r.status, r.statusText)
                      : n(
                          Ae[r.status] || r.status,
                          r.statusText,
                          'string' == typeof r.responseText ? { text: r.responseText } : void 0,
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = i()),
                (r.onerror = i('error')),
                (i = Ee[a] = i('abort'));
              try {
                r.send((e.hasContent && e.data) || null);
              } catch (l) {
                if (i) throw l;
              }
            },
            abort: function () {
              i && i();
            },
          }
        : void 0;
    }),
    Y.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        'text script': function (e) {
          return Y.globalEval(e), e;
        },
      },
    }),
    Y.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    Y.ajaxTransport('script', function (e) {
      var i, s;
      if (e.crossDomain)
        return {
          send: function (n, o) {
            (i = Y('<script>')
              .prop({ async: !0, charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (s = function (e) {
                  i.remove(), (s = null), e && o('error' === e.type ? 404 : 200, e.type);
                })
              )),
              U.head.appendChild(i[0]);
          },
          abort: function () {
            s && s();
          },
        };
    });
  var je = [],
    Oe = /(=)\?(?=&|$)|\?\?/;
  Y.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = je.pop() || Y.expando + '_' + de++;
      return (this[e] = !0), e;
    },
  }),
    Y.ajaxPrefilter('json jsonp', function (e, i, s) {
      var n,
        o,
        r,
        a =
          !1 !== e.jsonp &&
          (Oe.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              !(e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              Oe.test(e.data) &&
              'data');
      return a || 'jsonp' === e.dataTypes[0]
        ? ((n = e.jsonpCallback = Y.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Oe, '$1' + n))
            : !1 !== e.jsonp && (e.url += (he.test(e.url) ? '&' : '?') + e.jsonp + '=' + n),
          (e.converters['script json'] = function () {
            return r || Y.error(n + ' was not called'), r[0];
          }),
          (e.dataTypes[0] = 'json'),
          (o = t[n]),
          (t[n] = function () {
            r = arguments;
          }),
          s.always(function () {
            (t[n] = o),
              e[n] && ((e.jsonpCallback = i.jsonpCallback), je.push(n)),
              r && Y.isFunction(o) && o(r[0]),
              (r = o = void 0);
          }),
          'script')
        : void 0;
    }),
    (Y.parseHTML = function (e, i, s) {
      if (!e || 'string' != typeof e) return null;
      'boolean' == typeof i && ((s = i), (i = !1)), (i = i || U);
      var n = G.exec(e),
        o = !s && [];
      return n
        ? [i.createElement(n[1])]
        : ((n = Y.buildFragment([e], i, o)), o && o.length && Y(o).remove(), Y.merge([], n.childNodes));
    });
  var He = Y.fn.load;
  (Y.fn.load = function (e, i, s) {
    if ('string' != typeof e && He) return He.apply(this, arguments);
    var n,
      o,
      r,
      a = this,
      l = e.indexOf(' ');
    return (
      0 <= l && ((n = Y.trim(e.slice(l))), (e = e.slice(0, l))),
      Y.isFunction(i) ? ((s = i), (i = void 0)) : i && 'object' == typeof i && (o = 'POST'),
      0 < a.length &&
        Y.ajax({ url: e, type: o, dataType: 'html', data: i })
          .done(function (e) {
            (r = arguments), a.html(n ? Y('<div>').append(Y.parseHTML(e)).find(n) : e);
          })
          .complete(
            s &&
              function (e, i) {
                a.each(s, r || [e.responseText, i, e]);
              }
          ),
      this
    );
  }),
    (Y.expr.filters.animated = function (e) {
      return Y.grep(Y.timers, function (i) {
        return e === i.elem;
      }).length;
    });
  var Pe = t.document.documentElement;
  (Y.offset = {
    setOffset: function (e, i, s) {
      var n,
        o,
        r,
        a,
        l,
        c,
        h = Y.css(e, 'position'),
        d = Y(e),
        u = {};
      'static' === h && (e.style.position = 'relative'),
        (l = d.offset()),
        (r = Y.css(e, 'top')),
        (c = Y.css(e, 'left')),
        (o =
          ('absolute' === h || 'fixed' === h) && -1 < (r + c).indexOf('auto')
            ? ((a = (n = d.position()).top), n.left)
            : ((a = parseFloat(r) || 0), parseFloat(c) || 0)),
        Y.isFunction(i) && (i = i.call(e, s, l)),
        null != i.top && (u.top = i.top - l.top + a),
        null != i.left && (u.left = i.left - l.left + o),
        'using' in i ? i.using.call(e, u) : d.css(u);
    },
  }),
    Y.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (i) {
                Y.offset.setOffset(this, e, i);
              });
        var i,
          s,
          n = this[0],
          o = { top: 0, left: 0 },
          r = n && n.ownerDocument;
        return r
          ? ((i = r.documentElement),
            Y.contains(i, n)
              ? (typeof n.getBoundingClientRect != yt && (o = n.getBoundingClientRect()),
                (s = H(r)),
                { top: o.top + s.pageYOffset - i.clientTop, left: o.left + s.pageXOffset - i.clientLeft })
              : o)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            i,
            s = this[0],
            n = { top: 0, left: 0 };
          return (
            'fixed' === Y.css(s, 'position')
              ? (i = s.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (i = this.offset()),
                Y.nodeName(e[0], 'html') || (n = e.offset()),
                (n.top += Y.css(e[0], 'borderTopWidth', !0)),
                (n.left += Y.css(e[0], 'borderLeftWidth', !0))),
            { top: i.top - n.top - Y.css(s, 'marginTop', !0), left: i.left - n.left - Y.css(s, 'marginLeft', !0) }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent || Pe; e && !Y.nodeName(e, 'html') && 'static' === Y.css(e, 'position'); )
            e = e.offsetParent;
          return e || Pe;
        });
      },
    }),
    Y.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, i) {
      var s = 'pageYOffset' === i;
      Y.fn[e] = function (n) {
        return rt(
          this,
          function (e, n, o) {
            var r = H(e);
            return void 0 === o
              ? r
                ? r[i]
                : e[n]
              : void (r ? r.scrollTo(s ? t.pageXOffset : o, s ? o : t.pageYOffset) : (e[n] = o));
          },
          e,
          n,
          arguments.length,
          null
        );
      };
    }),
    Y.each(['top', 'left'], function (e, i) {
      Y.cssHooks[i] = w(B.pixelPosition, function (e, s) {
        return s ? ((s = b(e, i)), zt.test(s) ? Y(e).position()[i] + 'px' : s) : void 0;
      });
    }),
    Y.each({ Height: 'height', Width: 'width' }, function (e, i) {
      Y.each({ padding: 'inner' + e, content: i, '': 'outer' + e }, function (s, n) {
        Y.fn[n] = function (n, o) {
          var r = arguments.length && (s || 'boolean' != typeof n),
            a = s || (!0 === n || !0 === o ? 'margin' : 'border');
          return rt(
            this,
            function (i, s, n) {
              var o;
              return Y.isWindow(i)
                ? i.document.documentElement['client' + e]
                : 9 === i.nodeType
                ? ((o = i.documentElement),
                  Math.max(
                    i.body['scroll' + e],
                    o['scroll' + e],
                    i.body['offset' + e],
                    o['offset' + e],
                    o['client' + e]
                  ))
                : void 0 === n
                ? Y.css(i, s, a)
                : Y.style(i, s, n, a);
            },
            i,
            r ? n : void 0,
            r,
            null
          );
        };
      });
    }),
    (Y.fn.size = function () {
      return this.length;
    }),
    (Y.fn.andSelf = Y.fn.addBack),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return Y;
      });
  var Ie = t.jQuery,
    Le = t.$;
  return (
    (Y.noConflict = function (e) {
      return t.$ === Y && (t.$ = Le), e && t.jQuery === Y && (t.jQuery = Ie), Y;
    }),
    typeof e == yt && (t.jQuery = t.$ = Y),
    Y
  );
}),
  (function (e, i, s, n) {
    'use strict';
    var o, r, a, l, c, h;
    function d(i, n) {
      if ('string' != typeof i) return e(i, n);
      if (n) {
        var o;
        if (n.jquery) {
          if (!(o = n[0])) return n;
        } else o = n;
        return e(o.querySelectorAll(i));
      }
      return e(s.querySelectorAll(i));
    }
    function u(e) {
      var i = [];
      return e || i.push('data'), 0 < this.namespace.length && i.push(this.namespace), i.push(this.name), i.join('-');
    }
    function p(e) {
      for (var i = e.split('-'), s = i.length, n = []; s--; )
        0 === s && 0 < this.namespace.length ? n.push(this.namespace, i[s]) : n.push(i[s]);
      return n.reverse().join('-');
    }
    function f(i, s) {
      var n = this,
        o = !d(this).data(this.attr_name(!0));
      return (
        d(this.scope).is('[' + this.attr_name() + ']')
          ? (d(this.scope).data(
              this.attr_name(!0) + '-init',
              e.extend({}, this.settings, s || i, this.data_options(d(this.scope)))
            ),
            o && this.events(this.scope))
          : d('[' + this.attr_name() + ']', this.scope).each(function () {
              var o = !d(this).data(n.attr_name(!0) + '-init');
              d(this).data(n.attr_name(!0) + '-init', e.extend({}, n.settings, s || i, n.data_options(d(this)))),
                o && n.events(this);
            }),
        'string' == typeof i ? this[i].call(this, s) : void 0
      );
    }
    (function (i) {
      for (var s = i.length, n = e('head'); s--; )
        0 === n.has('.' + i[s]).length && n.append('<meta class="' + i[s] + '" />');
    })([
      'foundation-mq-small',
      'foundation-mq-medium',
      'foundation-mq-large',
      'foundation-mq-xlarge',
      'foundation-mq-xxlarge',
      'foundation-data-attribute-namespace',
    ]),
      e(function () {
        'undefined' != typeof FastClick && void 0 !== s.body && FastClick.attach(s.body);
      }),
      (i.matchMedia =
        i.matchMedia ||
        ((l = (a = (o = s).documentElement).firstElementChild || a.firstChild),
        (c = o.createElement('body')),
        ((h = o.createElement('div')).id = 'mq-test-1'),
        (h.style.cssText = 'position:absolute;top:-100em'),
        (c.style.background = 'none'),
        c.appendChild(h),
        function (e) {
          return (
            (h.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>'),
            a.insertBefore(c, l),
            (r = 42 === h.offsetWidth),
            a.removeChild(c),
            { matches: r, media: e }
          );
        })),
      (function () {
        for (
          var e,
            s = 0,
            n = ['webkit', 'moz'],
            o = i.requestAnimationFrame,
            r = i.cancelAnimationFrame,
            a = void 0 !== jQuery.fx;
          s < n.length && !o;
          s++
        )
          (o = i[n[s] + 'RequestAnimationFrame']),
            (r = r || i[n[s] + 'CancelAnimationFrame'] || i[n[s] + 'CancelRequestAnimationFrame']);
        o
          ? ((i.requestAnimationFrame = o),
            (i.cancelAnimationFrame = r),
            a &&
              ((jQuery.fx.timer = function (i) {
                i() &&
                  jQuery.timers.push(i) &&
                  !e &&
                  ((e = !0),
                  (function i() {
                    e && (o(i), a && jQuery.fx.tick());
                  })());
              }),
              (jQuery.fx.stop = function () {
                e = !1;
              })))
          : ((i.requestAnimationFrame = function (e) {
              var n = new Date().getTime(),
                o = Math.max(0, 16 - (n - s)),
                r = i.setTimeout(function () {
                  e(n + o);
                }, o);
              return (s = n + o), r;
            }),
            (i.cancelAnimationFrame = function (e) {
              clearTimeout(e);
            }));
      })(jQuery),
      (i.Foundation = {
        name: 'Foundation',
        version: '5.4.7',
        media_queries: {
          small: d('.foundation-mq-small')
            .css('font-family')
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
          medium: d('.foundation-mq-medium')
            .css('font-family')
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
          large: d('.foundation-mq-large')
            .css('font-family')
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
          xlarge: d('.foundation-mq-xlarge')
            .css('font-family')
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
          xxlarge: d('.foundation-mq-xxlarge')
            .css('font-family')
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
        },
        stylesheet: e('<style></style>').appendTo('head')[0].sheet,
        global: { namespace: n },
        init: function (e, s, n, o, r) {
          var a = [];
          if (
            ((this.rtl = /rtl/i.test(d('html').attr('dir'))),
            (this.scope = e || this.scope),
            this.set_namespace(),
            s && 'string' == typeof s && !/reflow/i.test(s))
          )
            this.libs.hasOwnProperty(s) && a.push(this.init_lib(s, [e, n, o, r]));
          else for (var l in this.libs) a.push(this.init_lib(l, s));
          return (
            d(i).load(function () {
              d(i)
                .trigger('resize.fndtn.clearing')
                .trigger('resize.fndtn.dropdown')
                .trigger('resize.fndtn.equalizer')
                .trigger('resize.fndtn.interchange')
                .trigger('resize.fndtn.joyride')
                .trigger('resize.fndtn.magellan')
                .trigger('resize.fndtn.topbar')
                .trigger('resize.fndtn.slider');
            }),
            e
          );
        },
        init_lib: function (i, s) {
          return this.libs.hasOwnProperty(i)
            ? (this.patch(this.libs[i]),
              s && s.hasOwnProperty(i)
                ? (void 0 !== this.libs[i].settings
                    ? e.extend(!0, this.libs[i].settings, s[i])
                    : void 0 !== this.libs[i].defaults && e.extend(!0, this.libs[i].defaults, s[i]),
                  this.libs[i].init.apply(this.libs[i], [this.scope, s[i]]))
                : ((s = s instanceof Array ? s : Array(s)), this.libs[i].init.apply(this.libs[i], s)))
            : function () {};
        },
        patch: function (e) {
          (e.scope = this.scope),
            (e.namespace = this.global.namespace),
            (e.rtl = this.rtl),
            (e.data_options = this.utils.data_options),
            (e.attr_name = u),
            (e.add_namespace = p),
            (e.bindings = f),
            (e.S = this.utils.S);
        },
        inherit: function (e, i) {
          for (var s = i.split(' '), n = s.length; n--; )
            this.utils.hasOwnProperty(s[n]) && (e[s[n]] = this.utils[s[n]]);
        },
        set_namespace: function () {
          var i =
            this.global.namespace === n
              ? e('.foundation-data-attribute-namespace').css('font-family')
              : this.global.namespace;
          this.global.namespace = i === n || /false/i.test(i) ? '' : i;
        },
        libs: {},
        utils: {
          S: d,
          throttle: function (e, i) {
            var s = null;
            return function () {
              var n = this,
                o = arguments;
              null == s &&
                (s = setTimeout(function () {
                  e.apply(n, o), (s = null);
                }, i));
            };
          },
          debounce: function (e, i, s) {
            var n, o;
            return function () {
              var r = this,
                a = arguments,
                l = s && !n;
              return (
                clearTimeout(n),
                (n = setTimeout(function () {
                  (n = null), s || (o = e.apply(r, a));
                }, i)),
                l && (o = e.apply(r, a)),
                o
              );
            };
          },
          data_options: function (i, s) {
            function n(i) {
              return 'string' == typeof i ? e.trim(i) : i;
            }
            s = s || 'options';
            var o,
              r,
              a,
              l,
              c,
              h = {},
              d = ((l = Foundation.global.namespace), i.data(0 < l.length ? l + '-' + s : s));
            if ('object' == typeof d) return d;
            for (o = (a = (d || ':').split(';')).length; o--; )
              (r = [(r = a[o].split(':'))[0], r.slice(1).join(':')]),
                /true/i.test(r[1]) && (r[1] = !0),
                /false/i.test(r[1]) && (r[1] = !1),
                isNaN(+(c = r[1])) ||
                  null === c ||
                  '' === c ||
                  !1 === c ||
                  !0 === c ||
                  (r[1] = -1 === r[1].indexOf('.') ? parseInt(r[1], 10) : parseFloat(r[1])),
                2 === r.length && 0 < r[0].length && (h[n(r[0])] = n(r[1]));
            return h;
          },
          register_media: function (i, s) {
            var o;
            Foundation.media_queries[i] === n &&
              (e('head').append('<meta class="' + s + '"/>'),
              (Foundation.media_queries[i] =
                (('string' == typeof (o = e('.' + s).css('font-family')) || o instanceof String) &&
                  (o = o.replace(/^['\\\/"]+|(;\s?})+|['\\\/"]+$/g, '')),
                o)));
          },
          add_custom_rule: function (e, i) {
            i === n && Foundation.stylesheet
              ? Foundation.stylesheet.insertRule(e, Foundation.stylesheet.cssRules.length)
              : Foundation.media_queries[i] !== n &&
                Foundation.stylesheet.insertRule('@media ' + Foundation.media_queries[i] + '{ ' + e + ' }');
          },
          image_loaded: function (e, i) {
            var s = this,
              n = e.length;
            0 === n && i(e),
              e.each(function () {
                var o;
                function r() {
                  o[0], 0 == --n && i(e);
                }
                !(o = s.S(this)).attr('src') || o[0].complete || 4 === o[0].readyState
                  ? r()
                  : function () {
                      var e, i;
                      this.one('load', r),
                        /MSIE (\d+\.\d+);/.test(navigator.userAgent) &&
                          ((i = (e = this.attr('src')).match(/\?/) ? '&' : '?'),
                          (i += 'random=' + new Date().getTime()),
                          this.attr('src', e + i));
                    }.call(o);
              });
          },
          random_str: function () {
            return (
              this.fidx || (this.fidx = 0),
              (this.prefix = this.prefix || [this.name || 'F', (+new Date()).toString(36)].join('-')),
              this.prefix + (this.fidx++).toString(36)
            );
          },
        },
      }),
      (e.fn.foundation = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
          return Foundation.init.apply(Foundation, [this].concat(e)), this;
        });
      });
  })(jQuery, window, window.document),
  (function (e, i) {
    'use strict';
    Foundation.libs.abide = {
      name: 'abide',
      version: '5.4.7',
      settings: {
        live_validate: !0,
        focus_on_invalid: !0,
        error_labels: !0,
        error_class: 'error',
        timeout: 1e3,
        patterns: {
          alpha: /^[a-zA-Z]+$/,
          alpha_numeric: /^[a-zA-Z0-9]+$/,
          integer: /^[-+]?\d+$/,
          number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
          card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
          cvv: /^([0-9]){3,4}$/,
          email:
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
          url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
          domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
          datetime:
            /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
          date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
          time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
          dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
          month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
          day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
          color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        },
        validators: {
          equalTo: function (e) {
            return i.getElementById(e.getAttribute(this.add_namespace('data-equalto'))).value === e.value;
          },
        },
      },
      timer: null,
      init: function (e, i, s) {
        this.bindings(i, s);
      },
      events: function (i) {
        var s = this,
          n = s.S(i).attr('novalidate', 'novalidate'),
          o = n.data(this.attr_name(!0) + '-init') || {};
        (this.invalid_attr = this.add_namespace('data-invalid')),
          n
            .off('.abide')
            .on('submit.fndtn.abide validate.fndtn.abide', function (e) {
              var i = /ajax/i.test(s.S(this).attr(s.attr_name()));
              return s.validate(s.S(this).find('input, textarea, select').get(), e, i);
            })
            .on('reset', function () {
              return s.reset(e(this));
            })
            .find('input, textarea, select')
            .off('.abide')
            .on('blur.fndtn.abide change.fndtn.abide', function (e) {
              s.validate([this], e);
            })
            .on('keydown.fndtn.abide', function (e) {
              !0 === o.live_validate &&
                (clearTimeout(s.timer),
                (s.timer = setTimeout(
                  function () {
                    s.validate([this], e);
                  }.bind(this),
                  o.timeout
                )));
            });
      },
      reset: function (i) {
        i.removeAttr(this.invalid_attr),
          e(this.invalid_attr, i).removeAttr(this.invalid_attr),
          e('.' + this.settings.error_class, i)
            .not('small')
            .removeClass(this.settings.error_class);
      },
      validate: function (e, i, s) {
        for (
          var n = this.parse_patterns(e),
            o = n.length,
            r = this.S(e[0]).closest('form'),
            a = /submit/.test(i.type),
            l = 0;
          l < o;
          l++
        )
          if (!n[l] && (a || s))
            return (
              this.settings.focus_on_invalid && e[l].focus(),
              r.trigger('invalid'),
              this.S(e[l]).closest('form').attr(this.invalid_attr, ''),
              !1
            );
        return (a || s) && r.trigger('valid'), r.removeAttr(this.invalid_attr), !s;
      },
      parse_patterns: function (e) {
        for (var i = e.length, s = []; i--; ) s.push(this.pattern(e[i]));
        return this.check_validation_and_apply_styles(s);
      },
      pattern: function (e) {
        var i = e.getAttribute('type'),
          s = 'string' == typeof e.getAttribute('required'),
          n = e.getAttribute('pattern') || '';
        return this.settings.patterns.hasOwnProperty(n) && 0 < n.length
          ? [e, this.settings.patterns[n], s]
          : 0 < n.length
          ? [e, RegExp(n), s]
          : this.settings.patterns.hasOwnProperty(i)
          ? [e, this.settings.patterns[i], s]
          : [e, (n = /.*/), s];
      },
      check_validation_and_apply_styles: function (i) {
        var s = i.length,
          n = [];
        for (
          this.S(i[0][0])
            .closest('[data-' + this.attr_name(!0) + ']')
            .data(this.attr_name(!0) + '-init');
          s--;

        ) {
          var o,
            r,
            a,
            l,
            c = i[s][0],
            h = i[s][2],
            d = c.value.trim(),
            u = this.S(c).parent(),
            p = c.getAttribute(this.add_namespace('data-abide-validator')),
            f = 'radio' === c.type,
            g = 'checkbox' === c.type,
            m = this.S('label[for="' + c.getAttribute('id') + '"]'),
            v = !h || 0 < c.value.length,
            b = [];
          c.getAttribute(this.add_namespace('data-equalto')) && (p = 'equalTo'),
            (o = u.is('label') ? u.parent() : u),
            p && ((r = this.settings.validators[p].apply(this, [c, h, o])), b.push(r)),
            f && h
              ? b.push(this.valid_radio(c, h))
              : g && h
              ? b.push(this.valid_checkbox(c, h))
              : (b.push(!!((i[s][1].test(d) && v) || (!h && c.value.length < 1) || e(c).attr('disabled'))),
                (b = [
                  b.every(function (e) {
                    return e;
                  }),
                ])[0]
                  ? (this.S(c).removeAttr(this.invalid_attr),
                    c.setAttribute('aria-invalid', 'false'),
                    c.removeAttribute('aria-describedby'),
                    o.removeClass(this.settings.error_class),
                    0 < m.length &&
                      this.settings.error_labels &&
                      m.removeClass(this.settings.error_class).removeAttr('role'),
                    e(c).triggerHandler('valid'))
                  : (this.S(c).attr(this.invalid_attr, ''),
                    c.setAttribute('aria-invalid', 'true'),
                    0 <
                      (l =
                        0 <
                        (a = o.find('small.' + this.settings.error_class, 'span.' + this.settings.error_class)).length
                          ? a[0].id
                          : '').length && c.setAttribute('aria-describedby', l),
                    o.addClass(this.settings.error_class),
                    0 < m.length &&
                      this.settings.error_labels &&
                      m.addClass(this.settings.error_class).attr('role', 'alert'),
                    e(c).triggerHandler('invalid'))),
            n.push(b[0]);
        }
        return [
          n.every(function (e) {
            return e;
          }),
        ];
      },
      valid_checkbox: function (e, i) {
        var s = (e = this.S(e)).is(':checked') || !i;
        return (
          s
            ? e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class)
            : e.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class),
          s
        );
      },
      valid_radio: function (e) {
        for (
          var i = e.getAttribute('name'),
            s = this.S(e)
              .closest('[data-' + this.attr_name(!0) + ']')
              .find("[name='" + i + "']"),
            n = s.length,
            o = !1,
            r = 0;
          r < n;
          r++
        )
          s[r].checked && (o = !0);
        for (r = 0; r < n; r++)
          o
            ? this.S(s[r]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class)
            : this.S(s[r]).attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
        return o;
      },
      valid_equal: function (e, s, n) {
        var o = i.getElementById(e.getAttribute(this.add_namespace('data-equalto'))).value === e.value;
        return (
          o
            ? (this.S(e).removeAttr(this.invalid_attr),
              n.removeClass(this.settings.error_class),
              0 < label.length && settings.error_labels && label.removeClass(this.settings.error_class))
            : (this.S(e).attr(this.invalid_attr, ''),
              n.addClass(this.settings.error_class),
              0 < label.length && settings.error_labels && label.addClass(this.settings.error_class)),
          o
        );
      },
      valid_oneof: function (e, i, s, n) {
        e = this.S(e);
        var o,
          r = this.S('[' + this.add_namespace('data-oneof') + ']'),
          a = 0 < r.filter(':checked').length;
        return (
          a
            ? e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class)
            : e.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class),
          n ||
            ((o = this),
            r.each(function () {
              o.valid_oneof.call(o, this, null, null, !0);
            })),
          a
        );
      },
    };
  })(jQuery, (window, window.document)),
  (function (e) {
    'use strict';
    Foundation.libs.accordion = {
      name: 'accordion',
      version: '5.4.7',
      settings: {
        content_class: 'content',
        active_class: 'active',
        multi_expand: !1,
        toggleable: !0,
        callback: function () {},
      },
      init: function (e, i, s) {
        this.bindings(i, s);
      },
      events: function () {
        var i = this,
          s = this.S;
        s(this.scope)
          .off('.fndtn.accordion')
          .on('click.fndtn.accordion', '[' + this.attr_name() + '] > dd > a', function (n) {
            var o = s(this).closest('[' + i.attr_name() + ']'),
              r = i.attr_name() + '=' + o.attr(i.attr_name()),
              a = o.data(i.attr_name(!0) + '-init'),
              l = s('#' + this.href.split('#')[1]),
              c = e('> dd', o),
              h = c.children('.' + a.content_class),
              d = h.filter('.' + a.active_class);
            return (
              n.preventDefault(),
              o.attr(i.attr_name()) &&
                ((h = h.add('[' + r + '] dd > .' + a.content_class)), (c = c.add('[' + r + '] dd'))),
              a.toggleable && l.is(d)
                ? (l.parent('dd').toggleClass(a.active_class, !1), l.toggleClass(a.active_class, !1))
                : (a.multi_expand || (h.removeClass(a.active_class), c.removeClass(a.active_class)),
                  l.addClass(a.active_class).parent().addClass(a.active_class)),
              a.callback(l),
              l.triggerHandler('toggled', [o]),
              void o.triggerHandler('toggled', [l])
            );
          });
      },
      off: function () {},
      reflow: function () {},
    };
  })(jQuery, (window, window.document)),
  (t = jQuery),
  window,
  window.document,
  (Foundation.libs.alert = {
    name: 'alert',
    version: '5.4.7',
    settings: { callback: function () {} },
    init: function (e, i, s) {
      this.bindings(i, s);
    },
    events: function () {
      var e = this,
        i = this.S;
      t(this.scope)
        .off('.alert')
        .on('click.fndtn.alert', '[' + this.attr_name() + '] .close', function (s) {
          var n = i(this).closest('[' + e.attr_name() + ']'),
            o = n.data(e.attr_name(!0) + '-init') || e.settings;
          s.preventDefault(),
            Modernizr.csstransitions
              ? (n.addClass('alert-close'),
                n.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                  i(this).trigger('close').trigger('close.fndtn.alert').remove(), o.callback();
                }))
              : n.fadeOut(300, function () {
                  i(this).trigger('close').trigger('close.fndtn.alert').remove(), o.callback();
                });
        });
    },
    reflow: function () {},
  }),
  (function (e, i, s) {
    'use strict';
    Foundation.libs.clearing = {
      name: 'clearing',
      version: '5.4.7',
      settings: {
        templates: {
          viewing:
            '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>',
        },
        close_selectors: '.clearing-close, div.clearing-blackout',
        open_selectors: '',
        skip_selector: '',
        touch_label: '',
        init: !1,
        locked: !1,
      },
      init: function (e, i, s) {
        var n = this;
        Foundation.inherit(this, 'throttle image_loaded'),
          this.bindings(i, s),
          n.S(this.scope).is('[' + this.attr_name() + ']')
            ? this.assemble(n.S('li', this.scope))
            : n.S('[' + this.attr_name() + ']', this.scope).each(function () {
                n.assemble(n.S('li', this));
              });
      },
      events: function (n) {
        var o = this,
          r = o.S,
          a = e('.scroll-container');
        0 < a.length && (this.scope = a),
          r(this.scope)
            .off('.clearing')
            .on(
              'click.fndtn.clearing',
              'ul[' + this.attr_name() + '] li ' + this.settings.open_selectors,
              function (e, i, s) {
                (i = i || r(this)), (s = s || i);
                var n = i.next('li'),
                  a = i.closest('[' + o.attr_name() + ']').data(o.attr_name(!0) + '-init'),
                  l = r(e.target);
                e.preventDefault(),
                  a || (o.init(), (a = i.closest('[' + o.attr_name() + ']').data(o.attr_name(!0) + '-init'))),
                  s.hasClass('visible') && i[0] === s[0] && 0 < n.length && o.is_open(i) && (l = r('img', (s = n))),
                  o.open(l, i, s),
                  o.update_paddles(s);
              }
            )
            .on('click.fndtn.clearing', '.clearing-main-next', function (e) {
              o.nav(e, 'next');
            })
            .on('click.fndtn.clearing', '.clearing-main-prev', function (e) {
              o.nav(e, 'prev');
            })
            .on('click.fndtn.clearing', this.settings.close_selectors, function (e) {
              Foundation.libs.clearing.close(e, this);
            }),
          e(s).on('keydown.fndtn.clearing', function (e) {
            o.keydown(e);
          }),
          r(i)
            .off('.clearing')
            .on('resize.fndtn.clearing', function () {
              o.resize();
            }),
          this.swipe_events(n);
      },
      swipe_events: function () {
        var e = this,
          i = e.S;
        i(this.scope)
          .on('touchstart.fndtn.clearing', '.visible-img', function (e) {
            e.touches || (e = e.originalEvent);
            var s = {
              start_page_x: e.touches[0].pageX,
              start_page_y: e.touches[0].pageY,
              start_time: new Date().getTime(),
              delta_x: 0,
              is_scrolling: void 0,
            };
            i(this).data('swipe-transition', s), e.stopPropagation();
          })
          .on('touchmove.fndtn.clearing', '.visible-img', function (s) {
            var n, o;
            s.touches || (s = s.originalEvent),
              1 < s.touches.length ||
                (s.scale && 1 !== s.scale) ||
                (void 0 === (n = i(this).data('swipe-transition')) && (n = {}),
                (n.delta_x = s.touches[0].pageX - n.start_page_x),
                Foundation.rtl && (n.delta_x = -n.delta_x),
                void 0 === n.is_scrolling &&
                  (n.is_scrolling = !!(
                    n.is_scrolling || Math.abs(n.delta_x) < Math.abs(s.touches[0].pageY - n.start_page_y)
                  )),
                n.is_scrolling ||
                  n.active ||
                  (s.preventDefault(), (o = n.delta_x < 0 ? 'next' : 'prev'), (n.active = !0), e.nav(s, o)));
          })
          .on('touchend.fndtn.clearing', '.visible-img', function (e) {
            i(this).data('swipe-transition', {}), e.stopPropagation();
          });
      },
      assemble: function (i) {
        var s,
          n,
          o,
          r,
          a,
          l,
          c = i.parent();
        c.parent().hasClass('carousel') ||
          (c.after('<div id="foundationClearingHolder"></div>'),
          (n = ''),
          null != (s = c.detach())[0] &&
            ((n = s[0].outerHTML),
            (o = this.S('#foundationClearingHolder')),
            (r = '<div class="carousel">' + n + '</div>'),
            (a =
              '<div class="clearing-assembled"><div>' +
              c.data(this.attr_name(!0) + '-init').templates.viewing +
              r +
              '</div></div>'),
            (l = this.settings.touch_label),
            Modernizr.touch && (a = e(a).find('.clearing-touch-label').html(l).end()),
            o.after(a).remove()));
      },
      open: function (i, n, o) {
        var r = this,
          a = e(s.body),
          l = o.closest('.clearing-assembled'),
          c = r.S('div', l).first(),
          h = r.S('.visible-img', c),
          d = r.S('img', h).not(i),
          u = r.S('.clearing-touch-label', c),
          p = !1;
        e('body').on('touchmove', function (e) {
          e.preventDefault();
        }),
          d.error(function () {
            p = !0;
          }),
          this.locked() ||
            (h.trigger('open.fndtn.clearing'),
            d.attr('src', this.load(i)).css('visibility', 'hidden'),
            function i() {
              setTimeout(
                function () {
                  this.image_loaded(
                    d,
                    function () {
                      1 !== d.outerWidth() || p
                        ? function (i) {
                            e(i).css('visibility', 'visible'),
                              a.css('overflow', 'hidden'),
                              l.addClass('clearing-blackout'),
                              c.addClass('clearing-container'),
                              h.show(),
                              this.fix_height(o)
                                .caption(r.S('.clearing-caption', h), r.S('img', o))
                                .center_and_label(i, u)
                                .shift(n, o, function () {
                                  o.closest('li').siblings().removeClass('visible'),
                                    o.closest('li').addClass('visible');
                                }),
                              h.trigger('opened.fndtn.clearing');
                          }.call(this, d)
                        : i.call(this);
                    }.bind(this)
                  );
                }.bind(this),
                100
              );
            }.call(this));
      },
      close: function (i, n) {
        i.preventDefault();
        var o,
          r,
          a,
          l = ((a = e(n)), /blackout/.test(a.selector) ? a : a.closest('.clearing-blackout')),
          c = e(s.body);
        return (
          n === i.target &&
            l &&
            (c.css('overflow', ''),
            (o = e('div', l).first()),
            (r = e('.visible-img', o)).trigger('close.fndtn.clearing'),
            (this.settings.prev_index = 0),
            e('ul[' + this.attr_name() + ']', l)
              .attr('style', '')
              .closest('.clearing-blackout')
              .removeClass('clearing-blackout'),
            o.removeClass('clearing-container'),
            r.hide(),
            r.trigger('closed.fndtn.clearing')),
          e('body').off('touchmove'),
          !1
        );
      },
      is_open: function (e) {
        return 0 < e.parent().prop('style').length;
      },
      keydown: function (i) {
        var s = e('.clearing-blackout ul[' + this.attr_name() + ']'),
          n = this.rtl ? 37 : 39,
          o = this.rtl ? 39 : 37;
        i.which === n && this.go(s, 'next'),
          i.which === o && this.go(s, 'prev'),
          27 === i.which && this.S('a.clearing-close').trigger('click').trigger('click.fndtn.clearing');
      },
      nav: function (i, s) {
        var n = e('ul[' + this.attr_name() + ']', '.clearing-blackout');
        i.preventDefault(), this.go(n, s);
      },
      resize: function () {
        var i = e('img', '.clearing-blackout .visible-img'),
          s = e('.clearing-touch-label', '.clearing-blackout');
        i.length && (this.center_and_label(i, s), i.trigger('resized.fndtn.clearing'));
      },
      fix_height: function (e) {
        var i = e.parent().children(),
          s = this;
        return (
          i
            .each(function () {
              var e = s.S(this),
                i = e.find('img');
              e.height() > i.outerHeight() && e.addClass('fix-height');
            })
            .closest('ul')
            .width(100 * i.length + '%'),
          this
        );
      },
      update_paddles: function (e) {
        var i = (e = e.closest('li')).closest('.carousel').siblings('.visible-img');
        0 < e.next().length
          ? this.S('.clearing-main-next', i).removeClass('disabled')
          : this.S('.clearing-main-next', i).addClass('disabled'),
          0 < e.prev().length
            ? this.S('.clearing-main-prev', i).removeClass('disabled')
            : this.S('.clearing-main-prev', i).addClass('disabled');
      },
      center_and_label: function (e, i) {
        return (
          this.rtl
            ? (e.css({ marginRight: -e.outerWidth() / 2, marginTop: -e.outerHeight() / 2, left: 'auto', right: '50%' }),
              0 < i.length &&
                i.css({
                  marginRight: -i.outerWidth() / 2,
                  marginTop: -e.outerHeight() / 2 - i.outerHeight() - 10,
                  left: 'auto',
                  right: '50%',
                }))
            : (e.css({ marginLeft: -e.outerWidth() / 2, marginTop: -e.outerHeight() / 2 }),
              0 < i.length &&
                i.css({ marginLeft: -i.outerWidth() / 2, marginTop: -e.outerHeight() / 2 - i.outerHeight() - 10 })),
          this
        );
      },
      load: function (e) {
        var i = 'A' === e[0].nodeName ? e.attr('href') : e.parent().attr('href');
        return this.preload(e), i || e.attr('src');
      },
      preload: function (e) {
        this.img(e.closest('li').next()).img(e.closest('li').prev());
      },
      img: function (e) {
        var i, s;
        return (
          e.length &&
            ((i = new Image()),
            (s = this.S('a', e)),
            (i.src = s.length ? s.attr('href') : this.S('img', e).attr('src'))),
          this
        );
      },
      caption: function (e, i) {
        var s = i.attr('data-caption');
        return s ? e.html(s).show() : e.text('').hide(), this;
      },
      go: function (e, i) {
        var s = this.S('.visible', e),
          n = s[i]();
        this.settings.skip_selector && 0 != n.find(this.settings.skip_selector).length && (n = n[i]()),
          n.length &&
            this.S('img', n)
              .trigger('click', [s, n])
              .trigger('click.fndtn.clearing', [s, n])
              .trigger('change.fndtn.clearing');
      },
      shift: function (e, i, s) {
        var n,
          o = i.parent(),
          r = this.settings.prev_index || i.index(),
          a = this.direction(o, e, i),
          l = this.rtl ? 'right' : 'left',
          c = parseInt(o.css('left'), 10),
          h = i.outerWidth(),
          d = {};
        i.index() === r || /skip/.test(a)
          ? /skip/.test(a) &&
            ((n = i.index() - this.settings.up_count),
            this.lock(),
            (d[l] = 0 < n ? -n * h : 0),
            o.animate(d, 300, this.unlock()))
          : /left/.test(a)
          ? (this.lock(), (d[l] = c + h), o.animate(d, 300, this.unlock()))
          : /right/.test(a) && (this.lock(), (d[l] = c - h), o.animate(d, 300, this.unlock())),
          s();
      },
      direction: function (e, i, s) {
        var n,
          o = this.S('li', e),
          r = o.outerWidth() + o.outerWidth() / 4,
          a = Math.floor(this.S('.clearing-container').outerWidth() / r) - 1,
          l = o.index(s);
        return (
          (this.settings.up_count = a),
          (n = this.adjacent(this.settings.prev_index, l)
            ? a < l && l > this.settings.prev_index
              ? 'right'
              : a - 1 < l && l <= this.settings.prev_index && 'left'
            : 'skip'),
          (this.settings.prev_index = l),
          n
        );
      },
      adjacent: function (e, i) {
        for (var s = i + 1; i - 1 <= s; s--) if (s === e) return !0;
        return !1;
      },
      lock: function () {
        this.settings.locked = !0;
      },
      unlock: function () {
        this.settings.locked = !1;
      },
      locked: function () {
        return this.settings.locked;
      },
      off: function () {
        this.S(this.scope).off('.fndtn.clearing'), this.S(i).off('.fndtn.clearing');
      },
      reflow: function () {
        this.init();
      },
    };
  })(jQuery, window, window.document),
  (function (e, i) {
    'use strict';
    Foundation.libs.dropdown = {
      name: 'dropdown',
      version: '5.4.7',
      settings: {
        active_class: 'open',
        disabled_class: 'disabled',
        mega_class: 'mega',
        align: 'bottom',
        is_hover: !1,
        opened: function () {},
        closed: function () {},
      },
      init: function (e, i, s) {
        Foundation.inherit(this, 'throttle'), this.bindings(i, s);
      },
      events: function () {
        var s = this,
          n = s.S;
        n(this.scope)
          .off('.dropdown')
          .on('click.fndtn.dropdown', '[' + this.attr_name() + ']', function (i) {
            ((n(this).data(s.attr_name(!0) + '-init') || s.settings).is_hover && !Modernizr.touch) ||
              (i.preventDefault(), s.toggle(e(this)));
          })
          .on(
            'mouseenter.fndtn.dropdown',
            '[' + this.attr_name() + '], [' + this.attr_name() + '-content]',
            function (e) {
              var i,
                o,
                r = n(this);
              clearTimeout(s.timeout);
              var a =
                (o = r.data(s.data_attr())
                  ? ((i = n('#' + r.data(s.data_attr()))), r)
                  : ((i = r), n('[' + s.attr_name() + "='" + i.attr('id') + "']"))).data(s.attr_name(!0) + '-init') ||
                s.settings;
              n(e.target).data(s.data_attr()) && a.is_hover && s.closeall.call(s),
                a.is_hover && s.open.apply(s, [i, o]);
            }
          )
          .on(
            'mouseleave.fndtn.dropdown',
            '[' + this.attr_name() + '], [' + this.attr_name() + '-content]',
            function () {
              var e = n(this);
              s.timeout = setTimeout(
                function () {
                  e.data(s.data_attr())
                    ? (e.data(s.data_attr(!0) + '-init') || s.settings).is_hover &&
                      s.close.call(s, n('#' + e.data(s.data_attr())))
                    : (
                        n('[' + s.attr_name() + '="' + n(this).attr('id') + '"]').data(s.attr_name(!0) + '-init') ||
                        s.settings
                      ).is_hover && s.close.call(s, e);
                }.bind(this),
                150
              );
            }
          )
          .on('click.fndtn.dropdown', function (i) {
            var o = n(i.target).closest('[' + s.attr_name() + '-content]');
            return 0 < n(i.target).closest('[' + s.attr_name() + ']').length
              ? void 0
              : !n(i.target).data('revealId') &&
                0 < o.length &&
                (n(i.target).is('[' + s.attr_name() + '-content]') || e.contains(o.first()[0], i.target))
              ? void i.stopPropagation()
              : void s.close.call(s, n('[' + s.attr_name() + '-content]'));
          })
          .on('opened.fndtn.dropdown', '[' + s.attr_name() + '-content]', function () {
            s.settings.opened.call(this);
          })
          .on('closed.fndtn.dropdown', '[' + s.attr_name() + '-content]', function () {
            s.settings.closed.call(this);
          }),
          n(i)
            .off('.dropdown')
            .on(
              'resize.fndtn.dropdown',
              s.throttle(function () {
                s.resize.call(s);
              }, 50)
            ),
          this.resize();
      },
      close: function (i) {
        var s = this;
        i.each(function () {
          (e('[' + s.attr_name() + '=' + i[0].id + ']') || e('aria-controls=' + i[0].id + ']')).attr(
            'aria-expanded',
            'false'
          ),
            s.S(this).hasClass(s.settings.active_class) &&
              (s
                .S(this)
                .css(Foundation.rtl ? 'right' : 'left', '-99999px')
                .attr('aria-hidden', 'true')
                .removeClass(s.settings.active_class)
                .prev('[' + s.attr_name() + ']')
                .removeClass(s.settings.active_class)
                .removeData('target'),
              s.S(this).trigger('closed').trigger('closed.fndtn.dropdown', [i]));
        });
      },
      closeall: function () {
        var i = this;
        e.each(i.S('[' + this.attr_name() + '-content]'), function () {
          i.close.call(i, i.S(this));
        });
      },
      open: function (e, i) {
        this.css(e.addClass(this.settings.active_class), i),
          e.prev('[' + this.attr_name() + ']').addClass(this.settings.active_class),
          e.data('target', i.get(0)).trigger('opened').trigger('opened.fndtn.dropdown', [e, i]),
          e.attr('aria-hidden', 'false'),
          i.attr('aria-expanded', 'true'),
          e.focus();
      },
      data_attr: function () {
        return 0 < this.namespace.length ? this.namespace + '-' + this.name : this.name;
      },
      toggle: function (e) {
        var i;
        e.hasClass(this.settings.disabled_class) ||
          (0 !== (i = this.S('#' + e.data(this.data_attr()))).length &&
            (this.close.call(this, this.S('[' + this.attr_name() + '-content]').not(i)),
            i.hasClass(this.settings.active_class)
              ? (this.close.call(this, i), i.data('target') !== e.get(0) && this.open.call(this, i, e))
              : this.open.call(this, i, e)));
      },
      resize: function () {
        var e = this.S('[' + this.attr_name() + '-content].open'),
          i = this.S('[' + this.attr_name() + "='" + e.attr('id') + "']");
        e.length && i.length && this.css(e, i);
      },
      css: function (e, i) {
        var s,
          n = Math.max((i.width() - e.width()) / 2, 8),
          o = i.data(this.attr_name(!0) + '-init') || this.settings;
        return (
          this.clear_idx(),
          this.small()
            ? ((s = this.dirs.bottom.call(e, i, o)),
              e
                .attr('style', '')
                .removeClass('drop-left drop-right drop-top')
                .css({ position: 'absolute', width: '95%', 'max-width': 'none', top: s.top }),
              e.css(Foundation.rtl ? 'right' : 'left', n))
            : this.style(e, i, o),
          e
        );
      },
      style: function (i, s, n) {
        var o = e.extend({ position: 'absolute' }, this.dirs[n.align].call(i, s, n));
        i.attr('style', '').css(o);
      },
      dirs: {
        _base: function (e) {
          var i = this.offsetParent().offset(),
            s = e.offset();
          return (s.top -= i.top), (s.left -= i.left), s;
        },
        top: function (e, i) {
          var s = Foundation.libs.dropdown,
            n = s.dirs._base.call(this, e);
          return (
            this.addClass('drop-top'),
            (e.outerWidth() < this.outerWidth() || s.small() || this.hasClass(i.mega_menu)) &&
              s.adjust_pip(this, e, i, n),
            Foundation.rtl
              ? { left: n.left - this.outerWidth() + e.outerWidth(), top: n.top - this.outerHeight() }
              : { left: n.left, top: n.top - this.outerHeight() }
          );
        },
        bottom: function (e, i) {
          var s = Foundation.libs.dropdown,
            n = s.dirs._base.call(this, e);
          return (
            (e.outerWidth() < this.outerWidth() || s.small() || this.hasClass(i.mega_menu)) &&
              s.adjust_pip(this, e, i, n),
            s.rtl
              ? { left: n.left - this.outerWidth() + e.outerWidth(), top: n.top + e.outerHeight() }
              : { left: n.left, top: n.top + e.outerHeight() }
          );
        },
        left: function (e) {
          var i = Foundation.libs.dropdown.dirs._base.call(this, e);
          return this.addClass('drop-left'), { left: i.left - this.outerWidth(), top: i.top };
        },
        right: function (e) {
          var i = Foundation.libs.dropdown.dirs._base.call(this, e);
          return this.addClass('drop-right'), { left: i.left + e.outerWidth(), top: i.top };
        },
      },
      adjust_pip: function (e, i, s, n) {
        var o = Foundation.stylesheet,
          r = 8;
        e.hasClass(s.mega_class) ? (r = n.left + i.outerWidth() / 2 - 8) : this.small() && (r += n.left - 8),
          (this.rule_idx = o.cssRules.length);
        var a = '.f-dropdown.open:before',
          l = '.f-dropdown.open:after',
          c = 'left: ' + r + 'px;',
          h = 'left: ' + (r - 1) + 'px;';
        o.insertRule
          ? (o.insertRule([a, '{', c, '}'].join(' '), this.rule_idx),
            o.insertRule([l, '{', h, '}'].join(' '), this.rule_idx + 1))
          : (o.addRule(a, c, this.rule_idx), o.addRule(l, h, this.rule_idx + 1));
      },
      clear_idx: function () {
        var e = Foundation.stylesheet;
        void 0 !== this.rule_idx && (e.deleteRule(this.rule_idx), e.deleteRule(this.rule_idx), delete this.rule_idx);
      },
      small: function () {
        return (
          matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        );
      },
      off: function () {
        this.S(this.scope).off('.fndtn.dropdown'),
          this.S('html, body').off('.fndtn.dropdown'),
          this.S(i).off('.fndtn.dropdown'),
          this.S('[data-dropdown-content]').off('.fndtn.dropdown');
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (e, i) {
    'use strict';
    Foundation.libs.equalizer = {
      name: 'equalizer',
      version: '5.4.7',
      settings: { use_tallest: !0, before_height_change: e.noop, after_height_change: e.noop, equalize_on_stack: !1 },
      init: function (e, i, s) {
        Foundation.inherit(this, 'image_loaded'), this.bindings(i, s), this.reflow();
      },
      events: function () {
        this.S(i)
          .off('.equalizer')
          .on(
            'resize.fndtn.equalizer',
            function () {
              this.reflow();
            }.bind(this)
          );
      },
      equalize: function (i) {
        var s,
          n,
          o,
          r,
          a = !1,
          l = i.find('[' + this.attr_name() + '-watch]:visible'),
          c = i.data(this.attr_name(!0) + '-init');
        0 !== l.length &&
          ((s = l.first().offset().top),
          c.before_height_change(),
          i.trigger('before-height-change').trigger('before-height-change.fndth.equalizer'),
          l.height('inherit'),
          l.each(function () {
            e(this).offset().top !== s && (a = !0);
          }),
          (!1 === c.equalize_on_stack && a) ||
            ((n = l
              .map(function () {
                return e(this).outerHeight(!1);
              })
              .get()),
            c.use_tallest
              ? ((o = Math.max.apply(null, n)), l.css('height', o))
              : ((r = Math.min.apply(null, n)), l.css('height', r)),
            c.after_height_change(),
            i.trigger('after-height-change').trigger('after-height-change.fndtn.equalizer')));
      },
      reflow: function () {
        var i = this;
        this.S('[' + this.attr_name() + ']', this.scope).each(function () {
          var s = e(this);
          i.image_loaded(i.S('img', this), function () {
            i.equalize(s);
          });
        });
      },
    };
  })(jQuery, window, window.document),
  (function (e, i) {
    'use strict';
    Foundation.libs.interchange = {
      name: 'interchange',
      version: '5.4.7',
      cache: {},
      images_loaded: !1,
      nodes_loaded: !1,
      settings: {
        load_attr: 'interchange',
        named_queries: {
          default: 'only screen',
          small: Foundation.media_queries.small,
          medium: Foundation.media_queries.medium,
          large: Foundation.media_queries.large,
          xlarge: Foundation.media_queries.xlarge,
          xxlarge: Foundation.media_queries.xxlarge,
          landscape: 'only screen and (orientation: landscape)',
          portrait: 'only screen and (orientation: portrait)',
          retina:
            'only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)',
        },
        directives: {
          replace: function (i, s, n) {
            if (/IMG/.test(i[0].nodeName)) {
              var o = i[0].src;
              if (RegExp(s, 'i').test(o)) return;
              return (i[0].src = s), n(i[0].src);
            }
            var r = this;
            return i.data(this.data_attr + '-last-path') != s
              ? /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(s)
                ? (e(i).css('background-image', 'url(' + s + ')'), i.data('interchange-last-path', s), n(s))
                : e.get(s, function (e) {
                    i.html(e), i.data(r.data_attr + '-last-path', s), n();
                  })
              : void 0;
          },
        },
      },
      init: function (i, s, n) {
        Foundation.inherit(this, 'throttle random_str'),
          (this.data_attr = this.set_data_attr()),
          e.extend(!0, this.settings, s, n),
          this.bindings(s, n),
          this.load('images'),
          this.load('nodes');
      },
      get_media_hash: function () {
        var e = '';
        for (var i in this.settings.named_queries) e += matchMedia(this.settings.named_queries[i]).matches.toString();
        return e;
      },
      events: function () {
        var s,
          n = this;
        return (
          e(i)
            .off('.interchange')
            .on(
              'resize.fndtn.interchange',
              n.throttle(function () {
                var e = n.get_media_hash();
                e !== s && n.resize(), (s = e);
              }, 50)
            ),
          this
        );
      },
      resize: function () {
        var i,
          s = this.cache;
        if (this.images_loaded && this.nodes_loaded)
          for (var n in s)
            !s.hasOwnProperty(n) ||
              ((i = this.results(n, s[n])) &&
                this.settings.directives[i.scenario[1]].call(this, i.el, i.scenario[0], function () {
                  var e = arguments[0] instanceof Array ? arguments[0] : Array.prototype.slice.call(arguments, 0);
                  i.el.trigger(i.scenario[1], e);
                }));
        else setTimeout(e.proxy(this.resize, this), 50);
      },
      results: function (e, i) {
        var s = i.length;
        if (0 < s)
          for (var n = this.S('[' + this.add_namespace('data-uuid') + '="' + e + '"]'); s--; ) {
            var o = i[s][2];
            if (matchMedia(this.settings.named_queries.hasOwnProperty(o) ? this.settings.named_queries[o] : o).matches)
              return { el: n, scenario: i[s] };
          }
        return !1;
      },
      load: function (e, i) {
        return (void 0 === this['cached_' + e] || i) && this['update_' + e](), this['cached_' + e];
      },
      update_images: function () {
        var e = this.S('img[' + this.data_attr + ']'),
          i = e.length,
          s = i,
          n = 0,
          o = this.data_attr;
        for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === i; s--; )
          n++,
            e[s] && 0 < (e[s].getAttribute(o) || '').length && this.cached_images.push(e[s]),
            n === i && ((this.images_loaded = !0), this.enhance('images'));
        return this;
      },
      update_nodes: function () {
        var e = this.S('[' + this.data_attr + ']').not('img'),
          i = e.length,
          s = i,
          n = 0,
          o = this.data_attr;
        for (this.cached_nodes = [], this.nodes_loaded = 0 === i; s--; )
          n++,
            0 < (e[s].getAttribute(o) || '').length && this.cached_nodes.push(e[s]),
            n === i && ((this.nodes_loaded = !0), this.enhance('nodes'));
        return this;
      },
      enhance: function (s) {
        for (var n = this['cached_' + s].length; n--; ) this.object(e(this['cached_' + s][n]));
        return e(i).trigger('resize').trigger('resize.fndtn.interchange');
      },
      convert_directive: function (e) {
        var i = this.trim(e);
        return 0 < i.length ? i : 'replace';
      },
      parse_scenario: function (e) {
        var i,
          s = e[0].match(/(.+),\s*(\w+)\s*$/),
          n = e[1],
          o = s ? ((i = s[1]), s[2]) : ((i = e[0].split(/,\s*$/)[0]), '');
        return [this.trim(i), this.convert_directive(o), this.trim(n)];
      },
      object: function (e) {
        var i = this.parse_data_attr(e),
          s = [],
          n = i.length;
        if (0 < n)
          for (; n--; ) {
            var o,
              r = i[n].split(/\((.*?)(\))$/);
            1 < r.length && ((o = this.parse_scenario(r)), s.push(o));
          }
        return this.store(e, s);
      },
      store: function (e, i) {
        var s = this.random_str(),
          n = e.data(this.add_namespace('uuid', !0));
        return this.cache[n] ? this.cache[n] : (e.attr(this.add_namespace('data-uuid'), s), (this.cache[s] = i));
      },
      trim: function (i) {
        return 'string' == typeof i ? e.trim(i) : i;
      },
      set_data_attr: function (e) {
        return e
          ? 0 < this.namespace.length
            ? this.namespace + '-' + this.settings.load_attr
            : this.settings.load_attr
          : 0 < this.namespace.length
          ? 'data-' + this.namespace + '-' + this.settings.load_attr
          : 'data-' + this.settings.load_attr;
      },
      parse_data_attr: function (e) {
        for (var i = e.attr(this.attr_name()).split(/\[(.*?)\]/), s = i.length, n = []; s--; )
          4 < i[s].replace(/[\W\d]+/, '').length && n.push(i[s]);
        return n;
      },
      reflow: function () {
        this.load('images', !0), this.load('nodes', !0);
      },
    };
  })(jQuery, window, window.document),
  (function (e, i, s) {
    'use strict';
    Foundation.libs.joyride = {
      name: 'joyride',
      version: '5.4.7',
      defaults: {
        expose: !1,
        modal: !0,
        keyboard: !0,
        tip_location: 'bottom',
        nub_position: 'auto',
        scroll_speed: 1500,
        scroll_animation: 'linear',
        timer: 0,
        start_timer_on_click: !0,
        start_offset: 0,
        next_button: !0,
        prev_button: !0,
        tip_animation: 'fade',
        pause_after: [],
        exposed: [],
        tip_animation_fade_speed: 300,
        cookie_monster: !1,
        cookie_name: 'joyride',
        cookie_domain: !1,
        cookie_expires: 365,
        tip_container: 'body',
        abort_on_close: !0,
        tip_location_patterns: {
          top: ['bottom'],
          bottom: [],
          left: ['right', 'top', 'bottom'],
          right: ['left', 'top', 'bottom'],
        },
        post_ride_callback: function () {},
        post_step_callback: function () {},
        pre_step_callback: function () {},
        pre_ride_callback: function () {},
        post_expose_callback: function () {},
        template: {
          link: '<a href="#close" class="joyride-close-tip">&times;</a>',
          timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
          tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
          wrapper: '<div class="joyride-content-wrapper"></div>',
          button: '<a href="#" class="small button joyride-next-tip"></a>',
          prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
          modal: '<div class="joyride-modal-bg"></div>',
          expose: '<div class="joyride-expose-wrapper"></div>',
          expose_cover: '<div class="joyride-expose-cover"></div>',
        },
        expose_add_class: '',
      },
      init: function (i, s, n) {
        Foundation.inherit(this, 'throttle random_str'),
          (this.settings = this.settings || e.extend({}, this.defaults, n || s)),
          this.bindings(s, n);
      },
      go_next: function () {
        this.settings.$li.next().length < 1
          ? this.end()
          : 0 < this.settings.timer
          ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer())
          : (this.hide(), this.show());
      },
      go_prev: function () {
        this.settings.$li.prev().length < 1 ||
          (0 < this.settings.timer
            ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer())
            : (this.hide(), this.show(null, !0)));
      },
      events: function () {
        var s = this;
        e(this.scope)
          .off('.joyride')
          .on(
            'click.fndtn.joyride',
            '.joyride-next-tip, .joyride-modal-bg',
            function (e) {
              e.preventDefault(), this.go_next();
            }.bind(this)
          )
          .on(
            'click.fndtn.joyride',
            '.joyride-prev-tip',
            function (e) {
              e.preventDefault(), this.go_prev();
            }.bind(this)
          )
          .on(
            'click.fndtn.joyride',
            '.joyride-close-tip',
            function (e) {
              e.preventDefault(), this.end(this.settings.abort_on_close);
            }.bind(this)
          )
          .on(
            'keyup.fndtn.joyride',
            function (e) {
              if (this.settings.keyboard && this.settings.riding)
                switch (e.which) {
                  case 39:
                    e.preventDefault(), this.go_next();
                    break;
                  case 37:
                    e.preventDefault(), this.go_prev();
                    break;
                  case 27:
                    e.preventDefault(), this.end(this.settings.abort_on_close);
                }
            }.bind(this)
          ),
          e(i)
            .off('.joyride')
            .on(
              'resize.fndtn.joyride',
              s.throttle(function () {
                0 < e('[' + s.attr_name() + ']').length &&
                  s.settings.$next_tip &&
                  s.settings.riding &&
                  (0 < s.settings.exposed.length &&
                    e(s.settings.exposed).each(function () {
                      var i = e(this);
                      s.un_expose(i), s.expose(i);
                    }),
                  s.is_phone() ? s.pos_phone() : s.pos_default(!1));
              }, 100)
            );
      },
      start: function () {
        var i = this,
          s = e('[' + this.attr_name() + ']', this.scope),
          n = ['timer', 'scrollSpeed', 'startOffset', 'tipAnimationFadeSpeed', 'cookieExpires'],
          o = n.length;
        0 < !s.length ||
          (this.settings.init || this.events(),
          (this.settings = s.data(this.attr_name(!0) + '-init')),
          (this.settings.$content_el = s),
          (this.settings.$body = e(this.settings.tip_container)),
          (this.settings.body_offset = e(this.settings.tip_container).position()),
          (this.settings.$tip_content = this.settings.$content_el.find('> li')),
          (this.settings.paused = !1),
          (this.settings.attempts = 0),
          (this.settings.riding = !0),
          'function' != typeof e.cookie && (this.settings.cookie_monster = !1),
          (this.settings.cookie_monster && (!this.settings.cookie_monster || e.cookie(this.settings.cookie_name))) ||
            (this.settings.$tip_content.each(function (s) {
              var r = e(this);
              this.settings = e.extend({}, i.defaults, i.data_options(r));
              for (var a = o; a--; ) i.settings[n[a]] = parseInt(i.settings[n[a]], 10);
              i.create({ $li: r, index: s });
            }),
            !this.settings.start_timer_on_click && 0 < this.settings.timer
              ? (this.show('init'), this.startTimer())
              : this.show('init')));
      },
      resume: function () {
        this.set_li(), this.show();
      },
      tip_template: function (i) {
        var s, n;
        return (
          (i.tip_class = i.tip_class || ''),
          (s = e(this.settings.template.tip).addClass(i.tip_class)),
          (n =
            e.trim(e(i.li).html()) +
            this.prev_button_text(i.prev_button_text, i.index) +
            this.button_text(i.button_text) +
            this.settings.template.link +
            this.timer_instance(i.index)),
          s.append(e(this.settings.template.wrapper)),
          s.first().attr(this.add_namespace('data-index'), i.index),
          e('.joyride-content-wrapper', s).append(n),
          s[0]
        );
      },
      timer_instance: function (i) {
        return (0 === i && this.settings.start_timer_on_click && 0 < this.settings.timer) || 0 === this.settings.timer
          ? ''
          : e(this.settings.template.timer)[0].outerHTML;
      },
      button_text: function (i) {
        return this.settings.tip_settings.next_button
          ? ((i = e.trim(i) || 'Next'), e(this.settings.template.button).append(i)[0].outerHTML)
          : '';
      },
      prev_button_text: function (i, s) {
        return this.settings.tip_settings.prev_button
          ? ((i = e.trim(i) || 'Previous'),
            0 == s
              ? e(this.settings.template.prev_button).append(i).addClass('disabled')[0].outerHTML
              : e(this.settings.template.prev_button).append(i)[0].outerHTML)
          : '';
      },
      create: function (i) {
        this.settings.tip_settings = e.extend({}, this.settings, this.data_options(i.$li));
        var s = i.$li.attr(this.add_namespace('data-button')) || i.$li.attr(this.add_namespace('data-text')),
          n = i.$li.attr(this.add_namespace('data-button-prev')) || i.$li.attr(this.add_namespace('data-prev-text')),
          o = i.$li.attr('class'),
          r = e(this.tip_template({ tip_class: o, index: i.index, button_text: s, prev_button_text: n, li: i.$li }));
        e(this.settings.tip_container).append(r);
      },
      show: function (i, s) {
        var n = null;
        void 0 === this.settings.$li || -1 === e.inArray(this.settings.$li.index(), this.settings.pause_after)
          ? (this.settings.paused ? (this.settings.paused = !1) : this.set_li(i, s),
            (this.settings.attempts = 0),
            this.settings.$li.length && 0 < this.settings.$target.length
              ? (i &&
                  (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip),
                  this.settings.modal && this.show_modal()),
                this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip),
                this.settings.modal && this.settings.expose && this.expose(),
                (this.settings.tip_settings = e.extend({}, this.settings, this.data_options(this.settings.$li))),
                (this.settings.timer = parseInt(this.settings.timer, 10)),
                (this.settings.tip_settings.tip_location_pattern =
                  this.settings.tip_location_patterns[this.settings.tip_settings.tip_location]),
                /body/i.test(this.settings.$target.selector) || this.scroll_to(),
                this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0),
                (n = this.settings.$next_tip.find('.joyride-timer-indicator')),
                /pop/i.test(this.settings.tip_animation)
                  ? (n.width(0),
                    0 < this.settings.timer
                      ? (this.settings.$next_tip.show(),
                        setTimeout(
                          function () {
                            n.animate({ width: n.parent().width() }, this.settings.timer, 'linear');
                          }.bind(this),
                          this.settings.tip_animation_fade_speed
                        ))
                      : this.settings.$next_tip.show())
                  : /fade/i.test(this.settings.tip_animation) &&
                    (n.width(0),
                    0 < this.settings.timer
                      ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),
                        setTimeout(
                          function () {
                            n.animate({ width: n.parent().width() }, this.settings.timer, 'linear');
                          }.bind(this),
                          this.settings.tip_animation_fade_speed
                        ))
                      : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),
                (this.settings.$current_tip = this.settings.$next_tip))
              : this.settings.$li && this.settings.$target.length < 1
              ? this.show(i, s)
              : this.end())
          : (this.settings.paused = !0);
      },
      is_phone: function () {
        return (
          matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        );
      },
      hide: function () {
        this.settings.modal && this.settings.expose && this.un_expose(),
          this.settings.modal || e('.joyride-modal-bg').hide(),
          this.settings.$current_tip.css('visibility', 'hidden'),
          setTimeout(
            e.proxy(function () {
              this.hide(), this.css('visibility', 'visible');
            }, this.settings.$current_tip),
            0
          ),
          this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip);
      },
      set_li: function (e, i) {
        e
          ? ((this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset)),
            this.set_next_tip(),
            (this.settings.$current_tip = this.settings.$next_tip))
          : ((this.settings.$li = i ? this.settings.$li.prev() : this.settings.$li.next()), this.set_next_tip()),
          this.set_target();
      },
      set_next_tip: function () {
        (this.settings.$next_tip = e('.joyride-tip-guide').eq(this.settings.$li.index())),
          this.settings.$next_tip.data('closed', '');
      },
      set_target: function () {
        var i = this.settings.$li.attr(this.add_namespace('data-class')),
          n = this.settings.$li.attr(this.add_namespace('data-id'));
        this.settings.$target = n ? e(s.getElementById(n)) : i ? e('.' + i).first() : e('body');
      },
      scroll_to: function () {
        var s,
          n = e(i).height() / 2;
        0 != (s = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight())) &&
          e('html, body').stop().animate({ scrollTop: s }, this.settings.scroll_speed, 'swing');
      },
      paused: function () {
        return -1 === e.inArray(this.settings.$li.index() + 1, this.settings.pause_after);
      },
      restart: function () {
        this.hide(), (this.settings.$li = void 0), this.show('init');
      },
      pos_default: function (e) {
        var i,
          s,
          n = this.settings.$next_tip.find('.joyride-nub'),
          o = Math.ceil(n.outerWidth() / 2),
          r = Math.ceil(n.outerHeight() / 2),
          a = e || !1;
        a && (this.settings.$next_tip.css('visibility', 'hidden'), this.settings.$next_tip.show()),
          /body/i.test(this.settings.$target.selector)
            ? this.settings.$li.length && this.pos_modal(n)
            : ((i = this.settings.tip_settings.tipAdjustmentY
                ? parseInt(this.settings.tip_settings.tipAdjustmentY)
                : 0),
              (s = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0),
              this.bottom()
                ? (this.settings.$next_tip.css(
                    this.rtl
                      ? {
                          top: this.settings.$target.offset().top + r + this.settings.$target.outerHeight() + i,
                          left:
                            this.settings.$target.offset().left +
                            this.settings.$target.outerWidth() -
                            this.settings.$next_tip.outerWidth() +
                            s,
                        }
                      : {
                          top: this.settings.$target.offset().top + r + this.settings.$target.outerHeight() + i,
                          left: this.settings.$target.offset().left + s,
                        }
                  ),
                  this.nub_position(n, this.settings.tip_settings.nub_position, 'top'))
                : this.top()
                ? (this.settings.$next_tip.css(
                    this.rtl
                      ? {
                          top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - r + i,
                          left:
                            this.settings.$target.offset().left +
                            this.settings.$target.outerWidth() -
                            this.settings.$next_tip.outerWidth(),
                        }
                      : {
                          top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - r + i,
                          left: this.settings.$target.offset().left + s,
                        }
                  ),
                  this.nub_position(n, this.settings.tip_settings.nub_position, 'bottom'))
                : this.right()
                ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + i,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + o + s,
                  }),
                  this.nub_position(n, this.settings.tip_settings.nub_position, 'left'))
                : this.left() &&
                  (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + i,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - o + s,
                  }),
                  this.nub_position(n, this.settings.tip_settings.nub_position, 'right')),
              !this.visible(this.corners(this.settings.$next_tip)) &&
                this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length &&
                (n.removeClass('bottom').removeClass('top').removeClass('right').removeClass('left'),
                (this.settings.tip_settings.tip_location =
                  this.settings.tip_settings.tip_location_pattern[this.settings.attempts]),
                this.settings.attempts++,
                this.pos_default())),
          a && (this.settings.$next_tip.hide(), this.settings.$next_tip.css('visibility', 'visible'));
      },
      pos_phone: function (i) {
        var s = this.settings.$next_tip.outerHeight(),
          n = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
          o = e('.joyride-nub', this.settings.$next_tip),
          r = Math.ceil(o.outerHeight() / 2),
          a = i || !1;
        o.removeClass('bottom').removeClass('top').removeClass('right').removeClass('left'),
          a && (this.settings.$next_tip.css('visibility', 'hidden'), this.settings.$next_tip.show()),
          /body/i.test(this.settings.$target.selector)
            ? this.settings.$li.length && this.pos_modal(o)
            : this.top()
            ? (this.settings.$next_tip.offset({ top: this.settings.$target.offset().top - s - r }),
              o.addClass('bottom'))
            : (this.settings.$next_tip.offset({ top: this.settings.$target.offset().top + n + r }), o.addClass('top')),
          a && (this.settings.$next_tip.hide(), this.settings.$next_tip.css('visibility', 'visible'));
      },
      pos_modal: function (e) {
        this.center(), e.hide(), this.show_modal();
      },
      show_modal: function () {
        var i;
        this.settings.$next_tip.data('closed') ||
          ((i = e('.joyride-modal-bg')).length < 1 && e('body').append(this.settings.template.modal).show(),
          /pop/i.test(this.settings.tip_animation) ? i.show() : i.fadeIn(this.settings.tip_animation_fade_speed));
      },
      expose: function () {
        var s,
          n,
          o,
          r,
          a,
          l = 'expose-' + this.random_str(6);
        if (0 < arguments.length && arguments[0] instanceof e) o = arguments[0];
        else {
          if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
          o = this.settings.$target;
        }
        return o.length < 1
          ? (i.console && console.error('element not valid', o), !1)
          : ((s = e(this.settings.template.expose)),
            this.settings.$body.append(s),
            s.css({ top: o.offset().top, left: o.offset().left, width: o.outerWidth(!0), height: o.outerHeight(!0) }),
            (n = e(this.settings.template.expose_cover)),
            (r = { zIndex: o.css('z-index'), position: o.css('position') }),
            (a = null == o.attr('class') ? '' : o.attr('class')),
            o.css('z-index', parseInt(s.css('z-index')) + 1),
            'static' == r.position && o.css('position', 'relative'),
            o.data('expose-css', r),
            o.data('orig-class', a),
            o.attr('class', a + ' ' + this.settings.expose_add_class),
            n.css({ top: o.offset().top, left: o.offset().left, width: o.outerWidth(!0), height: o.outerHeight(!0) }),
            this.settings.modal && this.show_modal(),
            this.settings.$body.append(n),
            s.addClass(l),
            n.addClass(l),
            o.data('expose', l),
            this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, o),
            void this.add_exposed(o));
      },
      un_expose: function () {
        var s,
          n,
          o,
          r,
          a,
          l = !1;
        if (0 < arguments.length && arguments[0] instanceof e) n = arguments[0];
        else {
          if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
          n = this.settings.$target;
        }
        return n.length < 1
          ? (i.console && console.error('element not valid', n), !1)
          : ((o = e('.' + (s = n.data('expose')))),
            1 < arguments.length && (l = arguments[1]),
            !0 === l ? e('.joyride-expose-wrapper,.joyride-expose-cover').remove() : o.remove(),
            'auto' == (r = n.data('expose-css')).zIndex ? n.css('z-index', '') : n.css('z-index', r.zIndex),
            r.position != n.css('position') &&
              ('static' == r.position ? n.css('position', '') : n.css('position', r.position)),
            (a = n.data('orig-class')),
            n.attr('class', a),
            n.removeData('orig-classes'),
            n.removeData('expose'),
            n.removeData('expose-z-index'),
            void this.remove_exposed(n));
      },
      add_exposed: function (i) {
        (this.settings.exposed = this.settings.exposed || []),
          i instanceof e || 'object' == typeof i
            ? this.settings.exposed.push(i[0])
            : 'string' == typeof i && this.settings.exposed.push(i);
      },
      remove_exposed: function (i) {
        var s, n;
        for (
          i instanceof e ? (s = i[0]) : 'string' == typeof i && (s = i),
            this.settings.exposed = this.settings.exposed || [],
            n = this.settings.exposed.length;
          n--;

        )
          if (this.settings.exposed[n] == s) return void this.settings.exposed.splice(n, 1);
      },
      center: function () {
        var s = e(i);
        return (
          this.settings.$next_tip.css({
            top: (s.height() - this.settings.$next_tip.outerHeight()) / 2 + s.scrollTop(),
            left: (s.width() - this.settings.$next_tip.outerWidth()) / 2 + s.scrollLeft(),
          }),
          !0
        );
      },
      bottom: function () {
        return /bottom/i.test(this.settings.tip_settings.tip_location);
      },
      top: function () {
        return /top/i.test(this.settings.tip_settings.tip_location);
      },
      right: function () {
        return /right/i.test(this.settings.tip_settings.tip_location);
      },
      left: function () {
        return /left/i.test(this.settings.tip_settings.tip_location);
      },
      corners: function (s) {
        var n = e(i),
          o = n.height() / 2,
          r = Math.ceil(this.settings.$target.offset().top - o + this.settings.$next_tip.outerHeight()),
          a = n.width() + n.scrollLeft(),
          l = n.height() + r,
          c = n.height() + n.scrollTop(),
          h = n.scrollTop();
        return (
          r < h && (h = r < 0 ? 0 : r),
          c < l && (c = l),
          [
            s.offset().top < h,
            a < s.offset().left + s.outerWidth(),
            c < s.offset().top + s.outerHeight(),
            n.scrollLeft() > s.offset().left,
          ]
        );
      },
      visible: function (e) {
        for (var i = e.length; i--; ) if (e[i]) return !1;
        return !0;
      },
      nub_position: function (e, i, s) {
        e.addClass('auto' === i ? s : i);
      },
      startTimer: function () {
        this.settings.$li.length
          ? (this.settings.automate = setTimeout(
              function () {
                this.hide(), this.show(), this.startTimer();
              }.bind(this),
              this.settings.timer
            ))
          : clearTimeout(this.settings.automate);
      },
      end: function (i) {
        this.settings.cookie_monster &&
          e.cookie(this.settings.cookie_name, 'ridden', {
            expires: this.settings.cookie_expires,
            domain: this.settings.cookie_domain,
          }),
          0 < this.settings.timer && clearTimeout(this.settings.automate),
          this.settings.modal && this.settings.expose && this.un_expose(),
          e(this.scope).off('keyup.joyride'),
          this.settings.$next_tip.data('closed', !0),
          (this.settings.riding = !1),
          e('.joyride-modal-bg').hide(),
          this.settings.$current_tip.hide(),
          (void 0 !== i && !1 !== i) ||
            (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip),
            this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)),
          e('.joyride-tip-guide').remove();
      },
      off: function () {
        e(this.scope).off('.joyride'),
          e(i).off('.joyride'),
          e('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride'),
          e('.joyride-tip-guide, .joyride-modal-bg').remove(),
          clearTimeout(this.settings.automate),
          (this.settings = {});
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (e, i) {
    'use strict';
    Foundation.libs['magellan-expedition'] = {
      name: 'magellan-expedition',
      version: '5.4.7',
      settings: { active_class: 'active', threshold: 0, destination_threshold: 20, throttle_delay: 30, fixed_top: 0 },
      init: function (e, i, s) {
        Foundation.inherit(this, 'throttle'), this.bindings(i, s);
      },
      events: function () {
        var s = this,
          n = s.S,
          o = s.settings;
        s.set_expedition_position(),
          n(s.scope)
            .off('.magellan')
            .on(
              'click.fndtn.magellan',
              '[' + s.add_namespace('data-magellan-arrival') + '] a[href^="#"]',
              function (i) {
                i.preventDefault();
                var n = e(this).closest('[' + s.attr_name() + ']'),
                  o = n.data('magellan-expedition-init'),
                  r = this.hash.split('#').join(''),
                  a = e("a[name='" + r + "']");
                0 === a.length && (a = e('#' + r));
                var l = a.offset().top - o.destination_threshold + 1;
                (l -= n.outerHeight()),
                  e('html, body')
                    .stop()
                    .animate({ scrollTop: l }, 700, 'swing', function () {
                      history.pushState ? history.pushState(null, null, '#' + r) : (location.hash = '#' + r);
                    });
              }
            )
            .on('scroll.fndtn.magellan', s.throttle(this.check_for_arrivals.bind(this), o.throttle_delay)),
          e(i).on('resize.fndtn.magellan', s.throttle(this.set_expedition_position.bind(this), o.throttle_delay));
      },
      check_for_arrivals: function () {
        this.update_arrivals(), this.update_expedition_positions();
      },
      set_expedition_position: function () {
        var i = this;
        e('[' + this.attr_name() + '=fixed]', i.scope).each(function () {
          var s,
            n,
            o = e(this),
            r = o.data('magellan-expedition-init'),
            a = o.attr('styles');
          o.attr('style', ''),
            (s = o.offset().top + r.threshold),
            (n = parseInt(o.data('magellan-fixed-top'))),
            isNaN(n) || (i.settings.fixed_top = n),
            o.data(i.data_attr('magellan-top-offset'), s),
            o.attr('style', a);
        });
      },
      update_expedition_positions: function () {
        var s = this,
          n = e(i).scrollTop();
        e('[' + this.attr_name() + '=fixed]', s.scope).each(function () {
          var i,
            o = e(this),
            r = o.data('magellan-expedition-init'),
            a = o.attr('style'),
            l = o.data('magellan-top-offset');
          n + s.settings.fixed_top >= l
            ? (0 === (i = o.prev('[' + s.add_namespace('data-magellan-expedition-clone') + ']')).length &&
                ((i = o.clone()).removeAttr(s.attr_name()),
                i.attr(s.add_namespace('data-magellan-expedition-clone'), ''),
                o.before(i)),
              o.css({ position: 'fixed', top: r.fixed_top }).addClass('fixed'))
            : (o.prev('[' + s.add_namespace('data-magellan-expedition-clone') + ']').remove(),
              o.attr('style', a).css('position', '').css('top', '').removeClass('fixed'));
        });
      },
      update_arrivals: function () {
        var s = this,
          n = e(i).scrollTop();
        e('[' + this.attr_name() + ']', s.scope).each(function () {
          var i = e(this),
            o = i.data(s.attr_name(!0) + '-init'),
            r = s.offsets(i, n),
            a = i.find('[' + s.add_namespace('data-magellan-arrival') + ']'),
            l = !1;
          r.each(function (e, n) {
            if (n.viewport_offset >= n.top_offset)
              return (
                i
                  .find('[' + s.add_namespace('data-magellan-arrival') + ']')
                  .not(n.arrival)
                  .removeClass(o.active_class),
                n.arrival.addClass(o.active_class),
                (l = !0)
              );
          }),
            l || a.removeClass(o.active_class);
        });
      },
      offsets: function (i, s) {
        var n = this,
          o = i.data(n.attr_name(!0) + '-init'),
          r = s;
        return i
          .find('[' + n.add_namespace('data-magellan-arrival') + ']')
          .map(function () {
            var s = e(this).data(n.data_attr('magellan-arrival')),
              a = e('[' + n.add_namespace('data-magellan-destination') + '=' + s + ']');
            if (0 < a.length) {
              var l = Math.floor(a.offset().top - o.destination_threshold - i.outerHeight());
              return { destination: a, arrival: e(this), top_offset: l, viewport_offset: r };
            }
          })
          .sort(function (e, i) {
            return e.top_offset < i.top_offset ? -1 : e.top_offset > i.top_offset ? 1 : 0;
          });
      },
      data_attr: function (e) {
        return 0 < this.namespace.length ? this.namespace + '-' + e : e;
      },
      off: function () {
        this.S(this.scope).off('.magellan'), this.S(i).off('.magellan');
      },
      reflow: function () {
        e('[' + this.add_namespace('data-magellan-expedition-clone') + ']', this.scope).remove();
      },
    };
  })(jQuery, window, window.document),
  (function (e) {
    'use strict';
    Foundation.libs.offcanvas = {
      name: 'offcanvas',
      version: '5.4.7',
      settings: { open_method: 'move', close_on_click: !1 },
      init: function (e, i, s) {
        this.bindings(i, s);
      },
      events: function () {
        var i = this,
          s = i.S,
          n = '',
          o = '',
          r = '';
        'move' === this.settings.open_method
          ? ((n = 'move-'), (o = 'right'), (r = 'left'))
          : 'overlap_single' === this.settings.open_method
          ? ((n = 'offcanvas-overlap-'), (o = 'right'), (r = 'left'))
          : 'overlap' === this.settings.open_method && (n = 'offcanvas-overlap'),
          s(this.scope)
            .off('.offcanvas')
            .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (r) {
              i.click_toggle_class(r, n + o),
                'overlap' !== i.settings.open_method && s('.left-submenu').removeClass(n + o),
                e('.left-off-canvas-toggle').attr('aria-expanded', 'true');
            })
            .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (r) {
              var a = i.get_settings(r),
                l = s(this).parent();
              !a.close_on_click || l.hasClass('has-submenu') || l.hasClass('back')
                ? s(this).parent().hasClass('has-submenu')
                  ? (r.preventDefault(),
                    s(this)
                      .siblings('.left-submenu')
                      .toggleClass(n + o))
                  : l.hasClass('back') && (r.preventDefault(), l.parent().removeClass(n + o))
                : (i.hide.call(i, n + o, i.get_wrapper(r)), l.parent().removeClass(n + o)),
                e('.left-off-canvas-toggle').attr('aria-expanded', 'true');
            })
            .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (o) {
              i.click_toggle_class(o, n + r),
                'overlap' !== i.settings.open_method && s('.right-submenu').removeClass(n + r),
                e('.right-off-canvas-toggle').attr('aria-expanded', 'true');
            })
            .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (o) {
              var a = i.get_settings(o),
                l = s(this).parent();
              !a.close_on_click || l.hasClass('has-submenu') || l.hasClass('back')
                ? s(this).parent().hasClass('has-submenu')
                  ? (o.preventDefault(),
                    s(this)
                      .siblings('.right-submenu')
                      .toggleClass(n + r))
                  : l.hasClass('back') && (o.preventDefault(), l.parent().removeClass(n + r))
                : (i.hide.call(i, n + r, i.get_wrapper(o)), l.parent().removeClass(n + r)),
                e('.right-off-canvas-toggle').attr('aria-expanded', 'true');
            })
            .on('click.fndtn.offcanvas', '.exit-off-canvas', function (a) {
              i.click_remove_class(a, n + r),
                s('.right-submenu').removeClass(n + r),
                o && (i.click_remove_class(a, n + o), s('.left-submenu').removeClass(n + r)),
                e('.right-off-canvas-toggle').attr('aria-expanded', 'true');
            })
            .on('click.fndtn.offcanvas', '.exit-off-canvas', function (s) {
              i.click_remove_class(s, n + r),
                e('.left-off-canvas-toggle').attr('aria-expanded', 'false'),
                o && (i.click_remove_class(s, n + o), e('.right-off-canvas-toggle').attr('aria-expanded', 'false'));
            });
      },
      toggle: function (e, i) {
        (i = i || this.get_wrapper()).is('.' + e) ? this.hide(e, i) : this.show(e, i);
      },
      show: function (e, i) {
        (i = i || this.get_wrapper()).trigger('open').trigger('open.fndtn.offcanvas'), i.addClass(e);
      },
      hide: function (e, i) {
        (i = i || this.get_wrapper()).trigger('close').trigger('close.fndtn.offcanvas'), i.removeClass(e);
      },
      click_toggle_class: function (e, i) {
        e.preventDefault();
        var s = this.get_wrapper(e);
        this.toggle(i, s);
      },
      click_remove_class: function (e, i) {
        e.preventDefault();
        var s = this.get_wrapper(e);
        this.hide(i, s);
      },
      get_settings: function (e) {
        return (
          this.S(e.target)
            .closest('[' + this.attr_name() + ']')
            .data(this.attr_name(!0) + '-init') || this.settings
        );
      },
      get_wrapper: function (e) {
        var i = this.S(e ? e.target : this.scope).closest('.off-canvas-wrap');
        return 0 === i.length && (i = this.S('.off-canvas-wrap')), i;
      },
      reflow: function () {},
    };
  })(jQuery, (window, window.document)),
  (function (e, i, s) {
    'use strict';
    function n() {}
    function o(e, i, s) {
      var n,
        o,
        r = this,
        a = i.timer_speed,
        l = e.find('.' + i.timer_progress_class),
        c = -1;
      (this.update_progress = function (e) {
        var i = l.clone();
        i.attr('style', ''), i.css('width', e + '%'), l.replaceWith(i), (l = i);
      }),
        (this.restart = function () {
          clearTimeout(o), e.addClass(i.timer_paused_class), (c = -1), r.update_progress(0);
        }),
        (this.start = function () {
          return (
            !e.hasClass(i.timer_paused_class) ||
            ((c = -1 === c ? a : c),
            e.removeClass(i.timer_paused_class),
            (n = new Date().getTime()),
            l.animate({ width: '100%' }, c, 'linear'),
            (o = setTimeout(function () {
              r.restart(), s();
            }, c)),
            void e.trigger('timer-started.fndtn.orbit'))
          );
        }),
        (this.stop = function () {
          if (e.hasClass(i.timer_paused_class)) return !0;
          clearTimeout(o), e.addClass(i.timer_paused_class);
          var s = new Date().getTime(),
            l = 100 - ((c -= s - n) / a) * 100;
          r.update_progress(l), e.trigger('timer-stopped.fndtn.orbit');
        });
    }
    function r(i) {
      var s = i.animation_speed,
        n = 1 === e('html[dir=rtl]').length ? 'marginRight' : 'marginLeft',
        o = {};
      (o[n] = '0%'),
        (this.next = function (e, i, r) {
          e.animate({ marginLeft: '-100%' }, s),
            i.animate(o, s, function () {
              e.css(n, '100%'), r();
            });
        }),
        (this.prev = function (e, i, r) {
          e.animate({ marginLeft: '100%' }, s),
            i.css(n, '-100%'),
            i.animate(o, s, function () {
              e.css(n, '100%'), r();
            });
        });
    }
    function a(i) {
      var s = i.animation_speed;
      e('html[dir=rtl]').length,
        (this.next = function (e, i, n) {
          i.css({ margin: '0%', opacity: '0.01' }),
            i.animate({ opacity: '1' }, s, 'linear', function () {
              e.css('margin', '100%'), n();
            });
        }),
        (this.prev = function (e, i, n) {
          i.css({ margin: '0%', opacity: '0.01' }),
            i.animate({ opacity: '1' }, s, 'linear', function () {
              e.css('margin', '100%'), n();
            });
        });
    }
    (Foundation.libs = Foundation.libs || {}),
      (Foundation.libs.orbit = {
        name: 'orbit',
        version: '5.4.7',
        settings: {
          animation: 'slide',
          timer_speed: 1e4,
          pause_on_hover: !0,
          resume_on_mouseout: !1,
          next_on_click: !0,
          animation_speed: 500,
          stack_on_small: !1,
          navigation_arrows: !0,
          slide_number: !0,
          slide_number_text: 'of',
          container_class: 'orbit-container',
          stack_on_small_class: 'orbit-stack-on-small',
          next_class: 'orbit-next',
          prev_class: 'orbit-prev',
          timer_container_class: 'orbit-timer',
          timer_paused_class: 'paused',
          timer_progress_class: 'orbit-progress',
          slides_container_class: 'orbit-slides-container',
          preloader_class: 'preloader',
          slide_selector: '*',
          bullets_container_class: 'orbit-bullets',
          bullets_active_class: 'active',
          slide_number_class: 'orbit-slide-number',
          caption_class: 'orbit-caption',
          active_slide_class: 'active',
          orbit_transition_class: 'orbit-transitioning',
          bullets: !0,
          circular: !0,
          timer: !0,
          variable_height: !1,
          swipe: !0,
          before_slide_change: n,
          after_slide_change: n,
        },
        init: function (e, i, s) {
          this.bindings(i, s);
        },
        events: function (n) {
          var l = new (function (n, l) {
            if (n.hasClass(l.slides_container_class)) return this;
            var c,
              h,
              d,
              u,
              p,
              f,
              g = this,
              m = n,
              v = 0;
            (g.slides = function () {
              return m.children(l.slide_selector);
            }),
              g.slides().first().addClass(l.active_slide_class),
              (g.update_slide_number = function (i) {
                l.slide_number &&
                  (h.find('span:first').text(parseInt(i) + 1), h.find('span:last').text(g.slides().length)),
                  l.bullets &&
                    (d.children().removeClass(l.bullets_active_class),
                    e(d.children().get(i)).addClass(l.bullets_active_class));
              }),
              (g.update_active_link = function (i) {
                var s = e('[data-orbit-link="' + g.slides().eq(i).attr('data-orbit-slide') + '"]');
                s.siblings().removeClass(l.bullets_active_class), s.addClass(l.bullets_active_class);
              }),
              (g.build_markup = function () {
                m.wrap('<div class="' + l.container_class + '"></div>'),
                  (c = m.parent()),
                  m.addClass(l.slides_container_class),
                  l.stack_on_small && c.addClass(l.stack_on_small_class),
                  l.navigation_arrows &&
                    (c.append(e('<a href="#"><span></span></a>').addClass(l.prev_class)),
                    c.append(e('<a href="#"><span></span></a>').addClass(l.next_class))),
                  l.timer &&
                    ((u = e('<div>').addClass(l.timer_container_class)).append('<span>'),
                    u.append(e('<div>').addClass(l.timer_progress_class)),
                    u.addClass(l.timer_paused_class),
                    c.append(u)),
                  l.slide_number &&
                    ((h = e('<div>').addClass(l.slide_number_class)).append(
                      '<span></span> ' + l.slide_number_text + ' <span></span>'
                    ),
                    c.append(h)),
                  l.bullets &&
                    ((d = e('<ol>').addClass(l.bullets_container_class)),
                    c.append(d),
                    d.wrap('<div class="orbit-bullets-container"></div>'),
                    g.slides().each(function (i) {
                      var s = e('<li>').attr('data-orbit-slide', i).on('click', g.link_bullet);
                      d.append(s);
                    }));
              }),
              (g._goto = function (i, s) {
                if (i === v) return !1;
                'object' == typeof f && f.restart();
                var n = g.slides(),
                  o = i < v ? 'prev' : 'next';
                if (i >= n.length) {
                  if (!l.circular) return !1;
                  i = 0;
                } else if (i < 0) {
                  if (!l.circular) return !1;
                  i = n.length - 1;
                }
                var r = e(n.get(v)),
                  a = e(n.get(i));
                function c() {
                  function e() {
                    (v = i),
                      !0 === s && (f = g.create_timer()).start(),
                      g.update_slide_number(v),
                      m.trigger('after-slide-change.fndtn.orbit', [{ slide_number: v, total_slides: n.length }]),
                      l.after_slide_change(v, n.length);
                  }
                  m.height() != a.height() && l.variable_height
                    ? m.animate({ height: a.height() }, 250, 'linear', e)
                    : e();
                }
                if (
                  (r.css('zIndex', 2),
                  r.removeClass(l.active_slide_class),
                  a.css('zIndex', 4).addClass(l.active_slide_class),
                  m.trigger('before-slide-change.fndtn.orbit'),
                  l.before_slide_change(),
                  g.update_active_link(i),
                  1 === n.length)
                )
                  return c(), !1;
                function h() {
                  'next' == o && p.next(r, a, c), 'prev' == o && p.prev(r, a, c);
                }
                a.height() > m.height() && l.variable_height
                  ? m.animate({ height: a.height() }, 250, 'linear', h)
                  : h();
              }),
              (g.next = function (e) {
                e.stopImmediatePropagation(), e.preventDefault(), g._goto(v + 1);
              }),
              (g.prev = function (e) {
                e.stopImmediatePropagation(), e.preventDefault(), g._goto(v - 1);
              }),
              (g.link_custom = function (i) {
                i.preventDefault();
                var s,
                  n = e(this).attr('data-orbit-link');
                'string' != typeof n ||
                  '' == (n = e.trim(n)) ||
                  (-1 != (s = c.find('[data-orbit-slide=' + n + ']')).index() && g._goto(s.index()));
              }),
              (g.link_bullet = function () {
                var i,
                  s = e(this).attr('data-orbit-slide');
                'string' == typeof s &&
                  '' != (s = e.trim(s)) &&
                  (isNaN(parseInt(s))
                    ? -1 != (i = c.find('[data-orbit-slide=' + s + ']')).index() && g._goto(i.index() + 1)
                    : g._goto(parseInt(s)));
              }),
              (g.timer_callback = function () {
                g._goto(v + 1, !0);
              }),
              (g.compute_dimensions = function () {
                var i = e(g.slides().get(v)).height();
                l.variable_height ||
                  g.slides().each(function () {
                    e(this).height() > i && (i = e(this).height());
                  }),
                  m.height(i);
              }),
              (g.create_timer = function () {
                return new o(c.find('.' + l.timer_container_class), l, g.timer_callback);
              }),
              (g.stop_timer = function () {
                'object' == typeof f && f.stop();
              }),
              (g.toggle_timer = function () {
                c.find('.' + l.timer_container_class).hasClass(l.timer_paused_class)
                  ? (void 0 === f && (f = g.create_timer()), f.start())
                  : 'object' == typeof f && f.stop();
              }),
              (g.init = function () {
                g.build_markup(),
                  l.timer &&
                    ((f = g.create_timer()), Foundation.utils.image_loaded(this.slides().children('img'), f.start)),
                  (p = new a(l)),
                  'slide' === l.animation && (p = new r(l)),
                  c.on('click', '.' + l.next_class, g.next),
                  c.on('click', '.' + l.prev_class, g.prev),
                  l.next_on_click &&
                    c.on('click', '.' + l.slides_container_class + ' [data-orbit-slide]', g.link_bullet),
                  c.on('click', g.toggle_timer),
                  l.swipe &&
                    c
                      .on('touchstart.fndtn.orbit', function (e) {
                        e.touches || (e = e.originalEvent);
                        var i = {
                          start_page_x: e.touches[0].pageX,
                          start_page_y: e.touches[0].pageY,
                          start_time: new Date().getTime(),
                          delta_x: 0,
                          is_scrolling: void 0,
                        };
                        c.data('swipe-transition', i), e.stopPropagation();
                      })
                      .on('touchmove.fndtn.orbit', function (e) {
                        var i, s;
                        e.touches || (e = e.originalEvent),
                          1 < e.touches.length ||
                            (e.scale && 1 !== e.scale) ||
                            (void 0 === (i = c.data('swipe-transition')) && (i = {}),
                            (i.delta_x = e.touches[0].pageX - i.start_page_x),
                            void 0 === i.is_scrolling &&
                              (i.is_scrolling = !!(
                                i.is_scrolling || Math.abs(i.delta_x) < Math.abs(e.touches[0].pageY - i.start_page_y)
                              )),
                            i.is_scrolling ||
                              i.active ||
                              (e.preventDefault(), (s = i.delta_x < 0 ? v + 1 : v - 1), (i.active = !0), g._goto(s)));
                      })
                      .on('touchend.fndtn.orbit', function (e) {
                        c.data('swipe-transition', {}), e.stopPropagation();
                      }),
                  c
                    .on('mouseenter.fndtn.orbit', function () {
                      l.timer && l.pause_on_hover && g.stop_timer();
                    })
                    .on('mouseleave.fndtn.orbit', function () {
                      l.timer && l.resume_on_mouseout && f.start();
                    }),
                  e(s).on('click', '[data-orbit-link]', g.link_custom),
                  e(i).on('load resize', g.compute_dimensions),
                  Foundation.utils.image_loaded(this.slides().children('img'), g.compute_dimensions),
                  Foundation.utils.image_loaded(this.slides().children('img'), function () {
                    c.prev('.' + l.preloader_class).css('display', 'none'),
                      g.update_slide_number(0),
                      g.update_active_link(0),
                      m.trigger('ready.fndtn.orbit');
                  });
              }),
              g.init();
          })(this.S(n), this.S(n).data('orbit-init'));
          this.S(n).data(this.name + '-instance', l);
        },
        reflow: function () {
          var e = this;
          e.S(e.scope).is('[data-orbit]')
            ? e
                .S(e.scope)
                .data(e.name + '-instance')
                .compute_dimensions()
            : e.S('[data-orbit]', e.scope).each(function (i, s) {
                var n = e.S(s);
                e.data_options(n), n.data(e.name + '-instance').compute_dimensions();
              });
        },
      });
  })(jQuery, window, window.document),
  (function (e, i, s) {
    'use strict';
    function n(e) {
      var i = /fade/i.test(e),
        s = /pop/i.test(e);
      return { animate: i || s, pop: s, fade: i };
    }
    Foundation.libs.reveal = {
      name: 'reveal',
      version: '5.4.7',
      locked: !1,
      settings: {
        animation: 'fadeAndPop',
        animation_speed: 250,
        close_on_background_click: !0,
        close_on_esc: !0,
        dismiss_modal_class: 'close-reveal-modal',
        bg_class: 'reveal-modal-bg',
        root_element: 'body',
        open: function () {},
        opened: function () {},
        close: function () {},
        closed: function () {},
        bg: e('.reveal-modal-bg'),
        css: {
          open: { opacity: 0, visibility: 'visible', display: 'block' },
          close: { opacity: 1, visibility: 'hidden', display: 'none' },
        },
      },
      init: function (i, s, n) {
        e.extend(!0, this.settings, s, n), this.bindings(s, n);
      },
      events: function () {
        var e = this,
          i = e.S;
        return (
          i(this.scope)
            .off('.reveal')
            .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']:not([disabled])', function (s) {
              var n, o, r;
              s.preventDefault(),
                e.locked ||
                  ((o = (n = i(this)).data(e.data_attr('reveal-ajax'))),
                  (e.locked = !0),
                  void 0 === o
                    ? e.open.call(e, n)
                    : ((r = !0 === o ? n.attr('href') : o), e.open.call(e, n, { url: r })));
            }),
          i(s).on('click.fndtn.reveal', this.close_targets(), function (s) {
            if ((s.preventDefault(), !e.locked)) {
              var n = i('[' + e.attr_name() + '].open').data(e.attr_name(!0) + '-init') || e.settings,
                o = i(s.target)[0] === i('.' + n.bg_class)[0];
              if (o) {
                if (!n.close_on_background_click) return;
                s.stopPropagation();
              }
              (e.locked = !0),
                e.close.call(e, o ? i('[' + e.attr_name() + '].open') : i(this).closest('[' + e.attr_name() + ']'));
            }
          }),
          0 < i('[' + e.attr_name() + ']', this.scope).length
            ? i(this.scope)
                .on('open.fndtn.reveal', this.settings.open)
                .on('opened.fndtn.reveal', this.settings.opened)
                .on('opened.fndtn.reveal', this.open_video)
                .on('close.fndtn.reveal', this.settings.close)
                .on('closed.fndtn.reveal', this.settings.closed)
                .on('closed.fndtn.reveal', this.close_video)
            : i(this.scope)
                .on('open.fndtn.reveal', '[' + e.attr_name() + ']', this.settings.open)
                .on('opened.fndtn.reveal', '[' + e.attr_name() + ']', this.settings.opened)
                .on('opened.fndtn.reveal', '[' + e.attr_name() + ']', this.open_video)
                .on('close.fndtn.reveal', '[' + e.attr_name() + ']', this.settings.close)
                .on('closed.fndtn.reveal', '[' + e.attr_name() + ']', this.settings.closed)
                .on('closed.fndtn.reveal', '[' + e.attr_name() + ']', this.close_video),
          !0
        );
      },
      key_up_on: function () {
        var e = this;
        return (
          e
            .S('body')
            .off('keyup.fndtn.reveal')
            .on('keyup.fndtn.reveal', function (i) {
              var s = e.S('[' + e.attr_name() + '].open'),
                n = s.data(e.attr_name(!0) + '-init') || e.settings;
              n && 27 === i.which && n.close_on_esc && !e.locked && e.close.call(e, s);
            }),
          !0
        );
      },
      key_up_off: function () {
        return this.S('body').off('keyup.fndtn.reveal'), !0;
      },
      open: function (s, n) {
        var o,
          r = this;
        s
          ? void 0 !== s.selector
            ? (o = r.S('#' + s.data(r.data_attr('reveal-id'))).first())
            : ((o = r.S(this.scope)), (n = s))
          : (o = r.S(this.scope));
        var a,
          l,
          c = (c = o.data(r.attr_name(!0) + '-init')) || this.settings;
        if (o.hasClass('open') && s.attr('data-reveal-id') == o.attr('id')) return r.close(o);
        o.hasClass('open') ||
          ((a = r.S('[' + r.attr_name() + '].open')),
          void 0 === o.data('css-top') &&
            o.data('css-top', parseInt(o.css('top'), 10)).data('offset', this.cache_offset(o)),
          this.key_up_on(o),
          o.trigger('open').trigger('open.fndtn.reveal'),
          a.length < 1 && this.toggle_bg(o, !0),
          'string' == typeof n && (n = { url: n }),
          void 0 !== n && n.url
            ? ((l = void 0 !== n.success ? n.success : null),
              e.extend(n, {
                success: function (i, s, n) {
                  e.isFunction(l) && l(i, s, n),
                    o.html(i),
                    r.S(o).foundation('section', 'reflow'),
                    r.S(o).children().foundation(),
                    0 < a.length && r.hide(a, c.css.close),
                    r.show(o, c.css.open);
                },
              }),
              e.ajax(n))
            : (0 < a.length && this.hide(a, c.css.close), this.show(o, c.css.open))),
          r.S(i).trigger('resize');
      },
      close: function (e) {
        e = e && e.length ? e : this.S(this.scope);
        var i = this.S('[' + this.attr_name() + '].open'),
          s = e.data(this.attr_name(!0) + '-init') || this.settings;
        0 < i.length &&
          ((this.locked = !0),
          this.key_up_off(e),
          e.trigger('close').trigger('close.fndtn.reveal'),
          this.toggle_bg(e, !1),
          this.hide(i, s.css.close, s));
      },
      close_targets: function () {
        var e = '.' + this.settings.dismiss_modal_class;
        return this.settings.close_on_background_click ? e + ', .' + this.settings.bg_class : e;
      },
      toggle_bg: function (i, s) {
        0 === this.S('.' + this.settings.bg_class).length &&
          (this.settings.bg = e('<div />', { class: this.settings.bg_class }).appendTo('body').hide());
        var n = 0 < this.settings.bg.filter(':visible').length;
        s != n && ((null == s ? n : !s) ? this.hide(this.settings.bg) : this.show(this.settings.bg));
      },
      show: function (s, o) {
        if (o) {
          var r,
            a = (h = s.data(this.attr_name(!0) + '-init') || this.settings).root_element;
          0 === s.parent(a).length &&
            ((r = s.wrap('<div style="display: none;" />').parent()),
            s.on('closed.fndtn.reveal.wrapped', function () {
              s.detach().appendTo(r), s.unwrap().unbind('closed.fndtn.reveal.wrapped');
            }),
            s.detach().appendTo(a));
          var l = n(h.animation);
          if ((l.animate || (this.locked = !1), l.pop))
            return (
              (o.top = e(i).scrollTop() - s.data('offset') + 'px'),
              (c = { top: e(i).scrollTop() + s.data('css-top') + 'px', opacity: 1 }),
              setTimeout(
                function () {
                  return s
                    .css(o)
                    .animate(
                      c,
                      h.animation_speed,
                      'linear',
                      function () {
                        (this.locked = !1), s.trigger('opened').trigger('opened.fndtn.reveal');
                      }.bind(this)
                    )
                    .addClass('open');
                }.bind(this),
                h.animation_speed / 2
              )
            );
          if (l.fade) {
            o.top = e(i).scrollTop() + s.data('css-top') + 'px';
            var c = { opacity: 1 };
            return setTimeout(
              function () {
                return s
                  .css(o)
                  .animate(
                    c,
                    h.animation_speed,
                    'linear',
                    function () {
                      (this.locked = !1), s.trigger('opened').trigger('opened.fndtn.reveal');
                    }.bind(this)
                  )
                  .addClass('open');
              }.bind(this),
              h.animation_speed / 2
            );
          }
          return s.css(o).show().css({ opacity: 1 }).addClass('open').trigger('opened').trigger('opened.fndtn.reveal');
        }
        var h = this.settings;
        return n(h.animation).fade ? s.fadeIn(h.animation_speed / 2) : ((this.locked = !1), s.show());
      },
      hide: function (s, o) {
        if (o) {
          var r = s.data(this.attr_name(!0) + '-init'),
            a = n((r = r || this.settings).animation);
          if ((a.animate || (this.locked = !1), a.pop))
            return (
              (l = { top: -e(i).scrollTop() - s.data('offset') + 'px', opacity: 0 }),
              setTimeout(
                function () {
                  return s
                    .animate(
                      l,
                      r.animation_speed,
                      'linear',
                      function () {
                        (this.locked = !1), s.css(o).trigger('closed').trigger('closed.fndtn.reveal');
                      }.bind(this)
                    )
                    .removeClass('open');
                }.bind(this),
                r.animation_speed / 2
              )
            );
          if (a.fade) {
            var l = { opacity: 0 };
            return setTimeout(
              function () {
                return s
                  .animate(
                    l,
                    r.animation_speed,
                    'linear',
                    function () {
                      (this.locked = !1), s.css(o).trigger('closed').trigger('closed.fndtn.reveal');
                    }.bind(this)
                  )
                  .removeClass('open');
              }.bind(this),
              r.animation_speed / 2
            );
          }
          return s.hide().css(o).removeClass('open').trigger('closed').trigger('closed.fndtn.reveal');
        }
        return n((r = this.settings).animation).fade ? s.fadeOut(r.animation_speed / 2) : s.hide();
      },
      close_video: function (i) {
        var s = e('.flex-video', i.target),
          n = e('iframe', s);
        0 < n.length && (n.attr('data-src', n[0].src), n.attr('src', n.attr('src')), s.hide());
      },
      open_video: function (i) {
        var s,
          n = e('.flex-video', i.target),
          o = n.find('iframe');
        0 < o.length &&
          ('string' == typeof o.attr('data-src')
            ? (o[0].src = o.attr('data-src'))
            : ((s = o[0].src), (o[0].src = void 0), (o[0].src = s)),
          n.show());
      },
      data_attr: function (e) {
        return 0 < this.namespace.length ? this.namespace + '-' + e : e;
      },
      cache_offset: function (e) {
        var i = e.show().height() + parseInt(e.css('top'), 10);
        return e.hide(), i;
      },
      off: function () {
        e(this.scope).off('.fndtn.reveal');
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (e, i) {
    'use strict';
    Foundation.libs.slider = {
      name: 'slider',
      version: '5.4.7',
      settings: {
        start: 0,
        end: 100,
        step: 1,
        initial: null,
        display_selector: '',
        vertical: !1,
        on_change: function () {},
      },
      cache: {},
      init: function (e, i, s) {
        Foundation.inherit(this, 'throttle'), this.bindings(i, s), this.reflow();
      },
      events: function () {
        var s = this;
        e(this.scope)
          .off('.slider')
          .on(
            'mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider',
            '[' + s.attr_name() + ']:not(.disabled, [disabled]) .range-slider-handle',
            function (i) {
              s.cache.active || (i.preventDefault(), s.set_active_slider(e(i.target)));
            }
          )
          .on('mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider', function (n) {
            var o;
            s.cache.active &&
              (n.preventDefault(),
              e.data(s.cache.active[0], 'settings').vertical
                ? ((o = 0),
                  n.pageY || (o = i.scrollY),
                  s.calculate_position(
                    s.cache.active,
                    (n.pageY || n.originalEvent.clientY || n.originalEvent.touches[0].clientY || n.currentPoint.y) + o
                  ))
                : s.calculate_position(
                    s.cache.active,
                    n.pageX || n.originalEvent.clientX || n.originalEvent.touches[0].clientX || n.currentPoint.x
                  ));
          })
          .on('mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider', function () {
            s.remove_active_slider();
          })
          .on('change.fndtn.slider', function () {
            s.settings.on_change();
          }),
          s.S(i).on(
            'resize.fndtn.slider',
            s.throttle(function () {
              s.reflow();
            }, 300)
          );
      },
      set_active_slider: function (e) {
        this.cache.active = e;
      },
      remove_active_slider: function () {
        this.cache.active = null;
      },
      calculate_position: function (i, s) {
        var n = this,
          o = e.data(i[0], 'settings'),
          r = (e.data(i[0], 'handle_l'), e.data(i[0], 'handle_o'), e.data(i[0], 'bar_l')),
          a = e.data(i[0], 'bar_o');
        requestAnimationFrame(function () {
          var e = Foundation.rtl && !o.vertical ? n.limit_to((a + r - s) / r, 0, 1) : n.limit_to((s - a) / r, 0, 1),
            l = ((e = o.vertical ? 1 - e : e), n.normalized_value(e, o.start, o.end, o.step));
          n.set_ui(i, l);
        });
      },
      set_ui: function (i, s) {
        var n = e.data(i[0], 'settings'),
          o = e.data(i[0], 'handle_l'),
          r = e.data(i[0], 'bar_l'),
          a = this.normalized_percentage(s, n.start, n.end),
          l = a * (r - o) - 1,
          c = 100 * a;
        Foundation.rtl && !n.vertical && (l = -l),
          (l = n.vertical ? -l + r - o + 1 : l),
          this.set_translate(i, l, n.vertical),
          n.vertical
            ? i.siblings('.range-slider-active-segment').css('height', c + '%')
            : i.siblings('.range-slider-active-segment').css('width', c + '%'),
          i.parent().attr(this.attr_name(), s).trigger('change').trigger('change.fndtn.slider'),
          i.parent().children('input[type=hidden]').val(s),
          i[0].hasAttribute('aria-valuemin') || i.attr({ 'aria-valuemin': n.start, 'aria-valuemax': n.end }),
          i.attr('aria-valuenow', s),
          '' != n.display_selector &&
            e(n.display_selector).each(function () {
              this.hasOwnProperty('value') ? e(this).val(s) : e(this).text(s);
            });
      },
      normalized_percentage: function (e, i, s) {
        return Math.min(1, (e - i) / (s - i));
      },
      normalized_value: function (e, i, s, n) {
        var o = e * (s - i);
        return ((o - (o % n)) / n) * n + (0.5 * n <= o % n ? n : 0) + i;
      },
      set_translate: function (i, s, n) {
        n
          ? e(i)
              .css('-webkit-transform', 'translateY(' + s + 'px)')
              .css('-moz-transform', 'translateY(' + s + 'px)')
              .css('-ms-transform', 'translateY(' + s + 'px)')
              .css('-o-transform', 'translateY(' + s + 'px)')
              .css('transform', 'translateY(' + s + 'px)')
          : e(i)
              .css('-webkit-transform', 'translateX(' + s + 'px)')
              .css('-moz-transform', 'translateX(' + s + 'px)')
              .css('-ms-transform', 'translateX(' + s + 'px)')
              .css('-o-transform', 'translateX(' + s + 'px)')
              .css('transform', 'translateX(' + s + 'px)');
      },
      limit_to: function (e, i, s) {
        return Math.min(Math.max(e, i), s);
      },
      initialize_settings: function (i) {
        var s = e.extend({}, this.settings, this.data_options(e(i).parent()));
        s.vertical
          ? (e.data(i, 'bar_o', e(i).parent().offset().top),
            e.data(i, 'bar_l', e(i).parent().outerHeight()),
            e.data(i, 'handle_o', e(i).offset().top),
            e.data(i, 'handle_l', e(i).outerHeight()))
          : (e.data(i, 'bar_o', e(i).parent().offset().left),
            e.data(i, 'bar_l', e(i).parent().outerWidth()),
            e.data(i, 'handle_o', e(i).offset().left),
            e.data(i, 'handle_l', e(i).outerWidth())),
          e.data(i, 'bar', e(i).parent()),
          e.data(i, 'settings', s);
      },
      set_initial_position: function (i) {
        var s = e.data(i.children('.range-slider-handle')[0], 'settings'),
          n = s.initial ? s.initial : Math.floor((0.5 * (s.end - s.start)) / s.step) * s.step + s.start,
          o = i.children('.range-slider-handle');
        this.set_ui(o, n);
      },
      set_value: function (i) {
        var s = this;
        e('[' + s.attr_name() + ']', this.scope).each(function () {
          e(this).attr(s.attr_name(), i);
        }),
          e(this.scope).attr(s.attr_name()) && e(this.scope).attr(s.attr_name(), i),
          s.reflow();
      },
      reflow: function () {
        var i = this;
        i.S('[' + this.attr_name() + ']').each(function () {
          var s = e(this).children('.range-slider-handle')[0],
            n = e(this).attr(i.attr_name());
          i.initialize_settings(s), n ? i.set_ui(e(s), parseFloat(n)) : i.set_initial_position(e(this));
        });
      },
    };
  })(jQuery, window, window.document),
  (function (e, i, s, n) {
    'use strict';
    Foundation.libs.tab = {
      name: 'tab',
      version: '5.4.7',
      settings: {
        active_class: 'active',
        callback: function () {},
        deep_linking: !1,
        scroll_to_content: !0,
        is_hover: !1,
      },
      default_tab_hashes: [],
      init: function (e, i, s) {
        var n = this,
          o = this.S;
        this.bindings(i, s),
          this.handle_location_hash_change(),
          o('[' + this.attr_name() + '] > .active > a', this.scope).each(function () {
            n.default_tab_hashes.push(this.hash);
          });
      },
      events: function () {
        function e(e) {
          (n(this)
            .closest('[' + s.attr_name() + ']')
            .data(s.attr_name(!0) + '-init').is_hover &&
            !Modernizr.touch) ||
            (e.preventDefault(), e.stopPropagation(), s.toggle_active_tab(n(this).parent()));
        }
        var s = this,
          n = this.S;
        n(this.scope)
          .off('.tab')
          .on('focus.fndtn.tab', '[' + this.attr_name() + '] > * > a', e)
          .on('click.fndtn.tab', '[' + this.attr_name() + '] > * > a', e)
          .on('mouseenter.fndtn.tab', '[' + this.attr_name() + '] > * > a', function () {
            n(this)
              .closest('[' + s.attr_name() + ']')
              .data(s.attr_name(!0) + '-init').is_hover && s.toggle_active_tab(n(this).parent());
          }),
          n(i).on('hashchange.fndtn.tab', function (e) {
            e.preventDefault(), s.handle_location_hash_change();
          });
      },
      handle_location_hash_change: function () {
        var i = this,
          s = this.S;
        s('[' + this.attr_name() + ']', this.scope).each(function () {
          var o,
            r = s(this).data(i.attr_name(!0) + '-init');
          if (r.deep_linking) {
            if ('' != (o = r.scroll_to_content ? i.scope.location.hash : i.scope.location.hash.replace('fndtn-', ''))) {
              var a,
                l = s(o);
              l.hasClass('content') && l.parent().hasClass('tabs-content')
                ? i.toggle_active_tab(e('[' + i.attr_name() + '] > * > a[href=' + o + ']').parent())
                : (a = l.closest('.content').attr('id')) != n &&
                  i.toggle_active_tab(e('[' + i.attr_name() + '] > * > a[href=#' + a + ']').parent(), o);
            } else
              for (var c = 0; c < i.default_tab_hashes.length; c++)
                i.toggle_active_tab(
                  e('[' + i.attr_name() + '] > * > a[href=' + i.default_tab_hashes[c] + ']').parent()
                );
          }
        });
      },
      toggle_active_tab: function (o, r) {
        var a = this.S,
          l = o.closest('[' + this.attr_name() + ']'),
          c = o.find('a'),
          h = '#' + o.children('a').first().attr('href').split('#')[1],
          d = a(h),
          u = o.siblings(),
          p = l.data(this.attr_name(!0) + '-init');
        a(this).data(this.data_attr('tab-content')) &&
          (d = a((h = '#' + a(this).data(this.data_attr('tab-content')).split('#')[1]))),
          p.deep_linking &&
            (p.scroll_to_content
              ? ((i.location.hash = r || h),
                r == n || r == h ? o.parent()[0].scrollIntoView() : a(h)[0].scrollIntoView())
              : (i.location.hash = r != n ? 'fndtn-' + r.replace('#', '') : 'fndtn-' + h.replace('#', ''))),
          o.addClass(p.active_class).triggerHandler('opened'),
          c.attr({ 'aria-selected': 'true', tabindex: 0 }),
          u.removeClass(p.active_class),
          u.find('a').attr({ 'aria-selected': 'false', tabindex: -1 }),
          d.siblings().removeClass(p.active_class).attr({ 'aria-hidden': 'true', tabindex: -1 }),
          d.addClass(p.active_class).attr('aria-hidden', 'false').removeAttr('tabindex'),
          p.callback(o),
          d.triggerHandler('toggled', [o]),
          l.triggerHandler('toggled', [d]),
          c.off('keydown').on('keydown', function (i) {
            var n,
              o = e(this),
              r = e(this).parents('li').prev().children('[role="tab"]'),
              a = e(this).parents('li').next().children('[role="tab"]');
            switch (i.keyCode) {
              case 37:
                n = r;
                break;
              case 39:
                n = a;
                break;
              default:
                n = !1;
            }
            n.length &&
              (o.attr({ tabindex: '-1', 'aria-selected': null }),
              n.attr({ tabindex: '0', 'aria-selected': !0 }).focus()),
              e('[role="tabpanel"]').attr('aria-hidden', 'true'),
              e('#' + e(s.activeElement).attr('href').substring(1)).attr('aria-hidden', null);
          });
      },
      data_attr: function (e) {
        return 0 < this.namespace.length ? this.namespace + '-' + e : e;
      },
      off: function () {},
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (e, i) {
    'use strict';
    Foundation.libs.tooltip = {
      name: 'tooltip',
      version: '5.4.7',
      settings: {
        additional_inheritable_classes: [],
        tooltip_class: '.tooltip',
        append_to: 'body',
        touch_close_text: 'Tap To Close',
        disable_for_touch: !1,
        hover_delay: 200,
        show_on: 'all',
        tip_template: function (e, i) {
          return (
            '<span data-selector="' +
            e +
            '" id="' +
            e +
            '" class="' +
            Foundation.libs.tooltip.settings.tooltip_class.substring(1) +
            '" role="tooltip">' +
            i +
            '<span class="nub"></span></span>'
          );
        },
      },
      cache: {},
      init: function (e, i, s) {
        Foundation.inherit(this, 'random_str'), this.bindings(i, s);
      },
      should_show: function (i) {
        var s = e.extend({}, this.settings, this.data_options(i));
        return (
          'all' === s.show_on ||
          !(!this.small() || 'small' !== s.show_on) ||
          !(!this.medium() || 'medium' !== s.show_on) ||
          !(!this.large() || 'large' !== s.show_on)
        );
      },
      medium: function () {
        return matchMedia(Foundation.media_queries.medium).matches;
      },
      large: function () {
        return matchMedia(Foundation.media_queries.large).matches;
      },
      events: function (i) {
        var s = this,
          n = s.S;
        s.create(this.S(i)),
          e(this.scope)
            .off('.tooltip')
            .on(
              'mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',
              '[' + this.attr_name() + ']',
              function (i) {
                var o = n(this),
                  r = e.extend({}, s.settings, s.data_options(o));
                if (
                  (Modernizr.touch && /touchstart|MSPointerDown/i.test(i.type) && n(i.target).is('a')) ||
                  (/mouse/i.test(i.type) && s.ie_touch(i))
                )
                  return !1;
                if (o.hasClass('open'))
                  Modernizr.touch && /touchstart|MSPointerDown/i.test(i.type) && i.preventDefault(), s.hide(o);
                else {
                  if (r.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(i.type)) return;
                  !r.disable_for_touch &&
                    Modernizr.touch &&
                    /touchstart|MSPointerDown/i.test(i.type) &&
                    (i.preventDefault(), n(r.tooltip_class + '.open').hide()),
                    /enter|over/i.test(i.type)
                      ? (this.timer = setTimeout(
                          function () {
                            s.showTip(o);
                          }.bind(this),
                          s.settings.hover_delay
                        ))
                      : 'mouseout' === i.type || 'mouseleave' === i.type
                      ? (clearTimeout(this.timer), s.hide(o))
                      : s.showTip(o);
                }
              }
            )
            .on(
              'mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',
              '[' + this.attr_name() + '].open',
              function (i) {
                return (
                  (!/mouse/i.test(i.type) || !s.ie_touch(i)) &&
                  void (
                    ('touch' == e(this).data('tooltip-open-event-type') && 'mouseleave' == i.type) ||
                    ('mouse' == e(this).data('tooltip-open-event-type') && /MSPointerDown|touchstart/i.test(i.type)
                      ? s.convert_to_touch(e(this))
                      : s.hide(e(this)))
                  )
                );
              }
            )
            .on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function () {
              s.hide(n(this));
            });
      },
      ie_touch: function () {
        return !1;
      },
      showTip: function (e) {
        var i = this.getTip(e);
        return this.should_show(e, i) ? this.show(e) : void 0;
      },
      getTip: function (i) {
        var s = this.selector(i),
          n = e.extend({}, this.settings, this.data_options(i)),
          o = null;
        return s && (o = this.S('span[data-selector="' + s + '"]' + n.tooltip_class)), 'object' == typeof o && o;
      },
      selector: function (e) {
        var i = e.attr('id'),
          s = e.attr(this.attr_name()) || e.attr('data-selector');
        return (
          ((i && i.length < 1) || !i) &&
            'string' != typeof s &&
            ((s = this.random_str(6)), e.attr('data-selector', s).attr('aria-describedby', s)),
          i && 0 < i.length ? i : s
        );
      },
      create: function (s) {
        var n = this,
          o = e.extend({}, this.settings, this.data_options(s)),
          r = this.settings.tip_template;
        'string' == typeof o.tip_template && i.hasOwnProperty(o.tip_template) && (r = i[o.tip_template]);
        var a = e(r(this.selector(s), e('<div></div>').html(s.attr('title')).html())),
          l = this.inheritable_classes(s);
        a.addClass(l).appendTo(o.append_to),
          Modernizr.touch &&
            (a.append('<span class="tap-to-close">' + o.touch_close_text + '</span>'),
            a.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function () {
              n.hide(s);
            })),
          s.removeAttr('title').attr('title', '');
      },
      reposition: function (i, s, n) {
        var o, r, a, l, c;
        s.css('visibility', 'hidden').show(),
          (o = i.data('width')),
          (a = (r = s.children('.nub')).outerHeight()),
          r.outerHeight(),
          s.css(this.small() ? { width: '100%' } : { width: o || 'auto' }),
          (l = function (e, i, s, n, o) {
            return e.css({ top: i || 'auto', bottom: n || 'auto', left: o || 'auto', right: s || 'auto' }).end();
          })(s, i.offset().top + i.outerHeight() + 10, 'auto', 'auto', i.offset().left),
          this.small()
            ? (l(s, i.offset().top + i.outerHeight() + 10, 'auto', 'auto', 12.5, e(this.scope).width()),
              s.addClass('tip-override'),
              l(r, -a, 'auto', 'auto', i.offset().left))
            : ((c = i.offset().left),
              Foundation.rtl && (r.addClass('rtl'), (c = i.offset().left + i.outerWidth() - s.outerWidth())),
              l(s, i.offset().top + i.outerHeight() + 10, 'auto', 'auto', c),
              s.removeClass('tip-override'),
              n && -1 < n.indexOf('tip-top')
                ? (Foundation.rtl && r.addClass('rtl'),
                  l(s, i.offset().top - s.outerHeight(), 'auto', 'auto', c).removeClass('tip-override'))
                : n && -1 < n.indexOf('tip-left')
                ? (l(
                    s,
                    i.offset().top + i.outerHeight() / 2 - s.outerHeight() / 2,
                    'auto',
                    'auto',
                    i.offset().left - s.outerWidth() - a
                  ).removeClass('tip-override'),
                  r.removeClass('rtl'))
                : n &&
                  -1 < n.indexOf('tip-right') &&
                  (l(
                    s,
                    i.offset().top + i.outerHeight() / 2 - s.outerHeight() / 2,
                    'auto',
                    'auto',
                    i.offset().left + i.outerWidth() + a
                  ).removeClass('tip-override'),
                  r.removeClass('rtl'))),
          s.css('visibility', 'visible').hide();
      },
      small: function () {
        return (
          matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        );
      },
      inheritable_classes: function (i) {
        var s = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'radius', 'round'].concat(
            e.extend({}, this.settings, this.data_options(i)).additional_inheritable_classes
          ),
          n = i.attr('class'),
          o = n
            ? e
                .map(n.split(' '), function (i) {
                  return -1 !== e.inArray(i, s) ? i : void 0;
                })
                .join(' ')
            : '';
        return e.trim(o);
      },
      convert_to_touch: function (i) {
        var s = this,
          n = s.getTip(i),
          o = e.extend({}, s.settings, s.data_options(i));
        0 === n.find('.tap-to-close').length &&
          (n.append('<span class="tap-to-close">' + o.touch_close_text + '</span>'),
          n.on(
            'click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose',
            function () {
              s.hide(i);
            }
          )),
          i.data('tooltip-open-event-type', 'touch');
      },
      show: function (e) {
        var i = this.getTip(e);
        'touch' == e.data('tooltip-open-event-type') && this.convert_to_touch(e),
          this.reposition(e, i, e.attr('class')),
          e.addClass('open'),
          i.fadeIn(150);
      },
      hide: function (e) {
        var i = this.getTip(e);
        i.fadeOut(150, function () {
          i.find('.tap-to-close').remove(),
            i.off('click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose'),
            e.removeClass('open');
        });
      },
      off: function () {
        var i = this;
        this.S(this.scope).off('.fndtn.tooltip'),
          this.S(this.settings.tooltip_class)
            .each(function (s) {
              e('[' + i.attr_name() + ']')
                .eq(s)
                .attr('title', e(this).text());
            })
            .remove();
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (e, i, s) {
    'use strict';
    Foundation.libs.topbar = {
      name: 'topbar',
      version: '5.4.7',
      settings: {
        index: 0,
        sticky_class: 'sticky',
        custom_back_text: !0,
        back_text: 'Back',
        mobile_show_parent_link: !0,
        is_hover: !0,
        scrolltop: !0,
        sticky_on: 'all',
      },
      init: function (i, s, n) {
        Foundation.inherit(this, 'add_custom_rule register_media throttle');
        var o = this;
        o.register_media('topbar', 'foundation-mq-topbar'),
          this.bindings(s, n),
          o.S('[' + this.attr_name() + ']', this.scope).each(function () {
            var i = e(this),
              s = i.data(o.attr_name(!0) + '-init');
            o.S('section, .top-bar-section', this), i.data('index', 0);
            var n = i.parent();
            n.hasClass('fixed') || o.is_sticky(i, n, s)
              ? ((o.settings.sticky_class = s.sticky_class),
                (o.settings.sticky_topbar = i).data('height', n.outerHeight()),
                i.data('stickyoffset', n.offset().top))
              : i.data('height', i.outerHeight()),
              s.assembled || o.assemble(i),
              s.is_hover
                ? o.S('.has-dropdown', i).addClass('not-click')
                : o.S('.has-dropdown', i).removeClass('not-click'),
              o.add_custom_rule('.f-topbar-fixed { padding-top: ' + i.data('height') + 'px }'),
              n.hasClass('fixed') && o.S('body').addClass('f-topbar-fixed');
          });
      },
      is_sticky: function (e, i, s) {
        var n = i.hasClass(s.sticky_class);
        return (
          !(!n || 'all' !== s.sticky_on) ||
          (n && this.small() && 'small' === s.sticky_on
            ? matchMedia(Foundation.media_queries.small).matches &&
              !matchMedia(Foundation.media_queries.medium).matches &&
              !matchMedia(Foundation.media_queries.large).matches
            : n && this.medium() && 'medium' === s.sticky_on
            ? matchMedia(Foundation.media_queries.small).matches &&
              matchMedia(Foundation.media_queries.medium).matches &&
              !matchMedia(Foundation.media_queries.large).matches
            : !(!n || !this.large() || 'large' !== s.sticky_on) &&
              matchMedia(Foundation.media_queries.small).matches &&
              matchMedia(Foundation.media_queries.medium).matches &&
              matchMedia(Foundation.media_queries.large).matches)
        );
      },
      toggle: function (s) {
        var n,
          o = (n = s ? this.S(s).closest('[' + this.attr_name() + ']') : this.S('[' + this.attr_name() + ']')).data(
            this.attr_name(!0) + '-init'
          ),
          r = this.S('section, .top-bar-section', n);
        this.breakpoint() &&
          (this.rtl
            ? (r.css({ right: '0%' }), e('>.name', r).css({ right: '100%' }))
            : (r.css({ left: '0%' }), e('>.name', r).css({ left: '100%' })),
          this.S('li.moved', r).removeClass('moved'),
          n.data('index', 0),
          n.toggleClass('expanded').css('height', '')),
          o.scrolltop
            ? n.hasClass('expanded')
              ? n.parent().hasClass('fixed') &&
                (o.scrolltop
                  ? (n.parent().removeClass('fixed'),
                    n.addClass('fixed'),
                    this.S('body').removeClass('f-topbar-fixed'),
                    i.scrollTo(0, 0))
                  : n.parent().removeClass('expanded'))
              : n.hasClass('fixed') &&
                (n.parent().addClass('fixed'), n.removeClass('fixed'), this.S('body').addClass('f-topbar-fixed'))
            : (this.is_sticky(n, n.parent(), o) && n.parent().addClass('fixed'),
              n.parent().hasClass('fixed') &&
                (n.hasClass('expanded')
                  ? (n.addClass('fixed'), n.parent().addClass('expanded'), this.S('body').addClass('f-topbar-fixed'))
                  : (n.removeClass('fixed'), n.parent().removeClass('expanded'), this.update_sticky_positioning())));
      },
      timer: null,
      events: function () {
        var s = this,
          n = this.S;
        n(this.scope)
          .off('.topbar')
          .on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function (e) {
            e.preventDefault(), s.toggle(this);
          })
          .on(
            'click.fndtn.topbar',
            '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]',
            function () {
              var i = e(this).closest('li');
              !s.breakpoint() || i.hasClass('back') || i.hasClass('has-dropdown') || s.toggle();
            }
          )
          .on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function (i) {
            var o = n(this),
              r = n(i.target),
              a = o.closest('[' + s.attr_name() + ']').data(s.attr_name(!0) + '-init');
            return r.data('revealId')
              ? void s.toggle()
              : void (
                  s.breakpoint() ||
                  (a.is_hover && !Modernizr.touch) ||
                  (i.stopImmediatePropagation(),
                  o.hasClass('hover')
                    ? (o.removeClass('hover').find('li').removeClass('hover'),
                      o.parents('li.hover').removeClass('hover'))
                    : (o.addClass('hover'),
                      e(o).siblings().removeClass('hover'),
                      'A' === r[0].nodeName && r.parent().hasClass('has-dropdown') && i.preventDefault()))
                );
          })
          .on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function (e) {
            var i, o, r, a;
            s.breakpoint() &&
              (e.preventDefault(),
              (r = (o = (i = n(this)).closest('[' + s.attr_name() + ']')).find('section, .top-bar-section')),
              i.next('.dropdown').outerHeight(),
              (a = i.closest('li')),
              o.data('index', o.data('index') + 1),
              a.addClass('moved'),
              s.rtl
                ? (r.css({ right: -100 * o.data('index') + '%' }),
                  r.find('>.name').css({ right: 100 * o.data('index') + '%' }))
                : (r.css({ left: -100 * o.data('index') + '%' }),
                  r.find('>.name').css({ left: 100 * o.data('index') + '%' })),
              o.css('height', i.siblings('ul').outerHeight(!0) + o.data('height')));
          }),
          n(i)
            .off('.topbar')
            .on(
              'resize.fndtn.topbar',
              s.throttle(function () {
                s.resize.call(s);
              }, 50)
            )
            .trigger('resize')
            .trigger('resize.fndtn.topbar')
            .load(function () {
              n(this).trigger('resize.fndtn.topbar');
            }),
          n('body')
            .off('.topbar')
            .on('click.fndtn.topbar', function (e) {
              0 < n(e.target).closest('li').closest('li.hover').length ||
                n('[' + s.attr_name() + '] li.hover').removeClass('hover');
            }),
          n(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function (e) {
            e.preventDefault();
            var i = n(this),
              o = i.closest('[' + s.attr_name() + ']'),
              r = o.find('section, .top-bar-section'),
              a = (o.data(s.attr_name(!0) + '-init'), i.closest('li.moved')),
              l = a.parent();
            o.data('index', o.data('index') - 1),
              s.rtl
                ? (r.css({ right: -100 * o.data('index') + '%' }),
                  r.find('>.name').css({ right: 100 * o.data('index') + '%' }))
                : (r.css({ left: -100 * o.data('index') + '%' }),
                  r.find('>.name').css({ left: 100 * o.data('index') + '%' })),
              0 === o.data('index') ? o.css('height', '') : o.css('height', l.outerHeight(!0) + o.data('height')),
              setTimeout(function () {
                a.removeClass('moved');
              }, 300);
          }),
          n(this.scope)
            .find('.dropdown a')
            .focus(function () {
              e(this).parents('.has-dropdown').addClass('hover');
            })
            .blur(function () {
              e(this).parents('.has-dropdown').removeClass('hover');
            });
      },
      resize: function () {
        var e = this;
        e.S('[' + this.attr_name() + ']').each(function () {
          var i,
            n,
            o = e.S(this),
            r = o.data(e.attr_name(!0) + '-init'),
            a = o.parent('.' + e.settings.sticky_class);
          e.breakpoint() ||
            ((n = o.hasClass('expanded')),
            o.css('height', '').removeClass('expanded').find('li').removeClass('hover'),
            n && e.toggle(o)),
            e.is_sticky(o, a, r) &&
              (a.hasClass('fixed')
                ? (a.removeClass('fixed'),
                  (i = a.offset().top),
                  e.S(s.body).hasClass('f-topbar-fixed') && (i -= o.data('height')),
                  o.data('stickyoffset', i),
                  a.addClass('fixed'))
                : ((i = a.offset().top), o.data('stickyoffset', i)));
        });
      },
      breakpoint: function () {
        return !matchMedia(Foundation.media_queries.topbar).matches;
      },
      small: function () {
        return matchMedia(Foundation.media_queries.small).matches;
      },
      medium: function () {
        return matchMedia(Foundation.media_queries.medium).matches;
      },
      large: function () {
        return matchMedia(Foundation.media_queries.large).matches;
      },
      assemble: function (i) {
        var s = this,
          n = i.data(this.attr_name(!0) + '-init'),
          o = s.S('section, .top-bar-section', i);
        o.detach(),
          s.S('.has-dropdown>a', o).each(function () {
            var i,
              o = s.S(this),
              r = o.siblings('.dropdown'),
              a = o.attr('href');
            r.find('.title.back').length ||
              ((i = e(
                1 == n.mobile_show_parent_link && a
                  ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' +
                      a +
                      '">' +
                      o.html() +
                      '</a></li>'
                  : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'
              )),
              e('h5>a', i).html(1 == n.custom_back_text ? n.back_text : '&laquo; ' + o.html()),
              r.prepend(i));
          }),
          o.appendTo(i),
          this.sticky(),
          this.assembled(i);
      },
      assembled: function (i) {
        i.data(this.attr_name(!0), e.extend({}, i.data(this.attr_name(!0)), { assembled: !0 }));
      },
      height: function (i) {
        var s = 0,
          n = this;
        return (
          e('> li', i).each(function () {
            s += n.S(this).outerHeight(!0);
          }),
          s
        );
      },
      sticky: function () {
        var e = this;
        this.S(i).on('scroll', function () {
          e.update_sticky_positioning();
        });
      },
      update_sticky_positioning: function () {
        var e,
          s = '.' + this.settings.sticky_class,
          n = this.S(i);
        this.settings.sticky_topbar &&
          this.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings) &&
          ((e = this.settings.sticky_topbar.data('stickyoffset')),
          this.S(s).hasClass('expanded') ||
            (n.scrollTop() > e
              ? this.S(s).hasClass('fixed') || (this.S(s).addClass('fixed'), this.S('body').addClass('f-topbar-fixed'))
              : n.scrollTop() <= e &&
                this.S(s).hasClass('fixed') &&
                (this.S(s).removeClass('fixed'), this.S('body').removeClass('f-topbar-fixed'))));
      },
      off: function () {
        this.S(this.scope).off('.fndtn.topbar'), this.S(i).off('.fndtn.topbar');
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (e) {
    'use strict';
    e.fn.bigSlide = function (i) {
      var s = e.extend(
          { menu: '#menu', push: '.push', side: 'left', menuWidth: '15.625em', speed: '300', activeBtn: 'menu-open' },
          i
        ),
        n = this,
        o = e(s.menu),
        r = e(s.push),
        a = s.menuWidth,
        l = {
          position: 'fixed',
          top: '0',
          bottom: '0',
          'settings.side': '-' + s.menuWidth,
          width: s.menuWidth,
          height: '100%',
        },
        c = {
          '-webkit-transition': s.side + ' ' + s.speed + 'ms ease',
          '-moz-transition': s.side + ' ' + s.speed + 'ms ease',
          '-ms-transition': s.side + ' ' + s.speed + 'ms ease',
          '-o-transition': s.side + ' ' + s.speed + 'ms ease',
          transition: s.side + ' ' + s.speed + 'ms ease',
        };
      return (
        o.css(l),
        r.css(s.side, '0'),
        o.css(c),
        r.css(c),
        (o._state = 'closed'),
        (o.open = function () {
          (o._state = 'open'), o.css(s.side, '0'), r.css(s.side, a), n.addClass(s.activeBtn);
        }),
        (o.close = function () {
          (o._state = 'closed'), o.css(s.side, '-' + a), r.css(s.side, '0'), n.removeClass(s.activeBtn);
        }),
        e(document).on('click.bigSlide', function (i) {
          e(i.target).parents('#mobile').length || 'open' !== o._state || (o.close(), n.removeClass(s.activeBtn));
        }),
        n.on('click.bigSlide', function (e) {
          e.preventDefault(), e.stopImmediatePropagation(), 'closed' === o._state ? o.open() : o.close();
        }),
        o
      );
    };
  })(jQuery),
  (function (e) {
    e &&
      ((e.fn.headroom = function (i) {
        return this.each(function () {
          var s = e(this),
            n = s.data('headroom'),
            o = 'object' == typeof i && i;
          (o = e.extend(!0, {}, Headroom.options, o)),
            n || ((n = new Headroom(this, o)).init(), s.data('headroom', n)),
            'string' == typeof i && n[i]();
        });
      }),
      e('[data-headroom]').each(function () {
        var i = e(this);
        i.headroom(i.data());
      }));
  })(window.Zepto || window.jQuery),
  (function (e, i) {
    'use strict';
    function s(e) {
      (this.callback = e), (this.ticking = !1);
    }
    function n(i, o) {
      var r;
      (o = (function i(s) {
        if (arguments.length <= 0) throw Error('Missing arguments in extend function');
        for (var n, o, r = s || {}, a = 1; a < arguments.length; a++) {
          var l = arguments[a] || {};
          for (n in l)
            r[n] =
              'object' != typeof r[n] || ((o = r[n]) && void 0 !== e && (o === e || o.nodeType))
                ? r[n] || l[n]
                : i(r[n], l[n]);
        }
        return r;
      })(o, n.options)),
        (this.lastKnownScrollY = 0),
        (this.elem = i),
        (this.debouncer = new s(this.update.bind(this))),
        (this.tolerance = (r = o.tolerance) === Object(r) ? r : { down: r, up: r }),
        (this.classes = o.classes),
        (this.offset = o.offset),
        (this.scroller = o.scroller),
        (this.initialised = !1),
        (this.onPin = o.onPin),
        (this.onUnpin = o.onUnpin),
        (this.onTop = o.onTop),
        (this.onNotTop = o.onNotTop);
    }
    var o = {
      bind: !!function () {}.bind,
      classList: 'classList' in i.documentElement,
      rAF: !!(e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame),
    };
    (e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame),
      (s.prototype = {
        constructor: s,
        update: function () {
          this.callback && this.callback(), (this.ticking = !1);
        },
        requestTick: function () {
          this.ticking ||
            (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))),
            (this.ticking = !0));
        },
        handleEvent: function () {
          this.requestTick();
        },
      }),
      (n.prototype = {
        constructor: n,
        init: function () {
          return n.cutsTheMustard
            ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this)
            : void 0;
        },
        destroy: function () {
          var e = this.classes;
          (this.initialised = !1),
            this.elem.classList.remove(e.unpinned, e.pinned, e.top, e.initial),
            this.scroller.removeEventListener('scroll', this.debouncer, !1);
        },
        attachEvent: function () {
          this.initialised ||
            ((this.lastKnownScrollY = this.getScrollY()),
            (this.initialised = !0),
            this.scroller.addEventListener('scroll', this.debouncer, !1),
            this.debouncer.handleEvent());
        },
        unpin: function () {
          var e = this.elem.classList,
            i = this.classes;
          (!e.contains(i.pinned) && e.contains(i.unpinned)) ||
            (e.add(i.unpinned), e.remove(i.pinned), this.onUnpin && this.onUnpin.call(this));
        },
        pin: function () {
          var e = this.elem.classList,
            i = this.classes;
          e.contains(i.unpinned) && (e.remove(i.unpinned), e.add(i.pinned), this.onPin && this.onPin.call(this));
        },
        top: function () {
          var e = this.elem.classList,
            i = this.classes;
          e.contains(i.top) || (e.add(i.top), e.remove(i.notTop), this.onTop && this.onTop.call(this));
        },
        notTop: function () {
          var e = this.elem.classList,
            i = this.classes;
          e.contains(i.notTop) || (e.add(i.notTop), e.remove(i.top), this.onNotTop && this.onNotTop.call(this));
        },
        getScrollY: function () {
          return void 0 !== this.scroller.pageYOffset
            ? this.scroller.pageYOffset
            : void 0 !== this.scroller.scrollTop
            ? this.scroller.scrollTop
            : (i.documentElement || i.body.parentNode || i.body).scrollTop;
        },
        getViewportHeight: function () {
          return e.innerHeight || i.documentElement.clientHeight || i.body.clientHeight;
        },
        getDocumentHeight: function () {
          var e = i.body,
            s = i.documentElement;
          return Math.max(
            e.scrollHeight,
            s.scrollHeight,
            e.offsetHeight,
            s.offsetHeight,
            e.clientHeight,
            s.clientHeight
          );
        },
        getElementHeight: function (e) {
          return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
        },
        getScrollerHeight: function () {
          return this.scroller === e || this.scroller === i.body
            ? this.getDocumentHeight()
            : this.getElementHeight(this.scroller);
        },
        isOutOfBounds: function (e) {
          var i = e + this.getViewportHeight() > this.getScrollerHeight();
          return e < 0 || i;
        },
        toleranceExceeded: function (e, i) {
          return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[i];
        },
        shouldUnpin: function (e, i) {
          var s = e > this.lastKnownScrollY,
            n = e >= this.offset;
          return s && n && i;
        },
        shouldPin: function (e, i) {
          var s = e < this.lastKnownScrollY,
            n = e <= this.offset;
          return (s && i) || n;
        },
        update: function () {
          var e = this.getScrollY(),
            i = e > this.lastKnownScrollY ? 'down' : 'up',
            s = this.toleranceExceeded(e, i);
          this.isOutOfBounds(e) ||
            (e <= this.offset ? this.top() : this.notTop(),
            this.shouldUnpin(e, s) ? this.unpin() : this.shouldPin(e, s) && this.pin(),
            (this.lastKnownScrollY = e));
        },
      }),
      (n.options = {
        tolerance: { up: 0, down: 0 },
        offset: 0,
        scroller: e,
        classes: {
          pinned: 'headroom--pinned',
          unpinned: 'headroom--unpinned',
          top: 'headroom--top',
          notTop: 'headroom--not-top',
          initial: 'headroom',
        },
      }),
      (n.cutsTheMustard = o.rAF && o.bind && o.classList),
      (e.Headroom = n);
  })(window, document),
  (function (e) {
    function i() {}
    function s(e, i) {
      l.ev.on('mfp' + e + y, i);
    }
    function n(i, s, n, o) {
      var r = document.createElement('div');
      return (
        (r.className = 'mfp-' + i),
        n && (r.innerHTML = n),
        o ? s && s.appendChild(r) : ((r = e(r)), s && r.appendTo(s)),
        r
      );
    }
    function o(i, s) {
      l.ev.triggerHandler('mfp' + i, s),
        l.st.callbacks &&
          ((i = i.charAt(0).toLowerCase() + i.slice(1)),
          l.st.callbacks[i] && l.st.callbacks[i].apply(l, e.isArray(s) ? s : [s]));
    }
    function r(i) {
      return (
        (i === f && l.currTemplate.closeBtn) ||
          ((l.currTemplate.closeBtn = e(l.st.closeMarkup.replace('%title%', l.st.tClose))), (f = i)),
        l.currTemplate.closeBtn
      );
    }
    function a() {
      e.magnificPopup.instance || ((l = new i()).init(), (e.magnificPopup.instance = l));
    }
    var l,
      c,
      h,
      d,
      u,
      p,
      f,
      g = 'Close',
      m = 'BeforeClose',
      v = 'MarkupParse',
      b = 'Open',
      y = '.mfp',
      w = 'mfp-ready',
      x = 'mfp-removing',
      C = 'mfp-prevent-close',
      k = !!window.jQuery,
      _ = e(window);
    function S() {
      F && (E.after(F.addClass(T)).detach(), (F = null));
    }
    (i.prototype = {
      constructor: i,
      init: function () {
        var i = navigator.appVersion;
        (l.isIE7 = -1 !== i.indexOf('MSIE 7.')),
          (l.isIE8 = -1 !== i.indexOf('MSIE 8.')),
          (l.isLowIE = l.isIE7 || l.isIE8),
          (l.isAndroid = /android/gi.test(i)),
          (l.isIOS = /iphone|ipad|ipod/gi.test(i)),
          (l.supportsTransition = (function () {
            var e = document.createElement('p').style,
              i = ['ms', 'O', 'Moz', 'Webkit'];
            if (void 0 !== e.transition) return !0;
            for (; i.length; ) if (i.pop() + 'Transition' in e) return !0;
            return !1;
          })()),
          (l.probablyMobile =
            l.isAndroid ||
            l.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
          (h = e(document.body)),
          (d = e(document)),
          (l.popupsCache = {});
      },
      open: function (i) {
        if (!1 === i.isObj) {
          (l.items = i.items.toArray()), (l.index = 0);
          for (var a, c = i.items, h = 0; c.length > h; h++)
            if (((a = c[h]).parsed && (a = a.el[0]), a === i.el[0])) {
              l.index = h;
              break;
            }
        } else (l.items = e.isArray(i.items) ? i.items : [i.items]), (l.index = i.index || 0);
        if (!l.isOpen) {
          (l.types = []),
            (p = ''),
            (l.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : d),
            i.key
              ? (l.popupsCache[i.key] || (l.popupsCache[i.key] = {}), (l.currTemplate = l.popupsCache[i.key]))
              : (l.currTemplate = {}),
            (l.st = e.extend(!0, {}, e.magnificPopup.defaults, i)),
            (l.fixedContentPos = 'auto' === l.st.fixedContentPos ? !l.probablyMobile : l.st.fixedContentPos),
            l.st.modal &&
              ((l.st.closeOnContentClick = !1),
              (l.st.closeOnBgClick = !1),
              (l.st.showCloseBtn = !1),
              (l.st.enableEscapeKey = !1)),
            l.bgOverlay ||
              ((l.bgOverlay = n('bg').on('click' + y, function () {
                l.close();
              })),
              (l.wrap = n('wrap')
                .attr('tabindex', -1)
                .on('click' + y, function (e) {
                  l._checkIfClose(e.target) && l.close();
                })),
              (l.container = n('container', l.wrap))),
            (l.contentContainer = n('content')),
            l.st.preloader && (l.preloader = n('preloader', l.container, l.st.tLoading));
          var u = e.magnificPopup.modules;
          for (h = 0; u.length > h; h++) {
            var f = (f = u[h]).charAt(0).toUpperCase() + f.slice(1);
            l['init' + f].call(l);
          }
          o('BeforeOpen'),
            l.st.showCloseBtn &&
              (l.st.closeBtnInside
                ? (s(v, function (e, i, s, n) {
                    s.close_replaceWith = r(n.type);
                  }),
                  (p += ' mfp-close-btn-in'))
                : l.wrap.append(r())),
            l.st.alignTop && (p += ' mfp-align-top'),
            l.fixedContentPos
              ? l.wrap.css({ overflow: l.st.overflowY, overflowX: 'hidden', overflowY: l.st.overflowY })
              : l.wrap.css({ top: _.scrollTop(), position: 'absolute' }),
            (!1 !== l.st.fixedBgPos && ('auto' !== l.st.fixedBgPos || l.fixedContentPos)) ||
              l.bgOverlay.css({ height: d.height(), position: 'absolute' }),
            l.st.enableEscapeKey &&
              d.on('keyup' + y, function (e) {
                27 === e.keyCode && l.close();
              }),
            _.on('resize' + y, function () {
              l.updateSize();
            }),
            l.st.closeOnContentClick || (p += ' mfp-auto-cursor'),
            p && l.wrap.addClass(p);
          var g,
            m = (l.wH = _.height()),
            x = {};
          l.fixedContentPos && l._hasScrollBar(m) && (g = l._getScrollbarSize()) && (x.marginRight = g),
            l.fixedContentPos && (l.isIE7 ? e('body, html').css('overflow', 'hidden') : (x.overflow = 'hidden'));
          var C = l.st.mainClass;
          return (
            l.isIE7 && (C += ' mfp-ie7'),
            C && l._addClassToMFP(C),
            l.updateItemHTML(),
            o('BuildControls'),
            e('html').css(x),
            l.bgOverlay.add(l.wrap).prependTo(document.body),
            (l._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              l.content ? (l._addClassToMFP(w), l._setFocus()) : l.bgOverlay.addClass(w),
                d.on('focusin' + y, l._onFocusIn);
            }, 16),
            (l.isOpen = !0),
            l.updateSize(m),
            o(b),
            i
          );
        }
        l.updateItemHTML();
      },
      close: function () {
        l.isOpen &&
          (o(m),
          (l.isOpen = !1),
          l.st.removalDelay && !l.isLowIE && l.supportsTransition
            ? (l._addClassToMFP(x),
              setTimeout(function () {
                l._close();
              }, l.st.removalDelay))
            : l._close());
      },
      _close: function () {
        o(g);
        var i,
          s = x + ' ' + w + ' ';
        l.bgOverlay.detach(),
          l.wrap.detach(),
          l.container.empty(),
          l.st.mainClass && (s += l.st.mainClass + ' '),
          l._removeClassFromMFP(s),
          l.fixedContentPos &&
            ((i = { marginRight: '' }),
            l.isIE7 ? e('body, html').css('overflow', '') : (i.overflow = ''),
            e('html').css(i)),
          d.off('keyup.mfp focusin' + y),
          l.ev.off(y),
          l.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
          l.bgOverlay.attr('class', 'mfp-bg'),
          l.container.attr('class', 'mfp-container'),
          !l.st.showCloseBtn ||
            (l.st.closeBtnInside && !0 !== l.currTemplate[l.currItem.type]) ||
            (l.currTemplate.closeBtn && l.currTemplate.closeBtn.detach()),
          l._lastFocusedEl && e(l._lastFocusedEl).focus(),
          (l.currItem = null),
          (l.content = null),
          (l.currTemplate = null),
          (l.prevHeight = 0),
          o('AfterClose');
      },
      updateSize: function (e) {
        var i, s;
        l.isIOS
          ? ((i = document.documentElement.clientWidth / window.innerWidth),
            (s = window.innerHeight * i),
            l.wrap.css('height', s),
            (l.wH = s))
          : (l.wH = e || _.height()),
          l.fixedContentPos || l.wrap.css('height', l.wH),
          o('Resize');
      },
      updateItemHTML: function () {
        var i = l.items[l.index];
        l.contentContainer.detach(), l.content && l.content.detach(), i.parsed || (i = l.parseEl(l.index));
        var s,
          n = i.type;
        o('BeforeChange', [l.currItem ? l.currItem.type : '', n]),
          (l.currItem = i),
          l.currTemplate[n] ||
            (o('FirstMarkupParse', (s = !!l.st[n] && l.st[n].markup)), (l.currTemplate[n] = !s || e(s))),
          u && u !== i.type && l.container.removeClass('mfp-' + u + '-holder');
        var r = l['get' + n.charAt(0).toUpperCase() + n.slice(1)](i, l.currTemplate[n]);
        l.appendContent(r, n),
          (i.preloaded = !0),
          o('Change', i),
          (u = i.type),
          l.container.prepend(l.contentContainer),
          o('AfterChange');
      },
      appendContent: function (e, i) {
        (l.content = e)
          ? l.st.showCloseBtn && l.st.closeBtnInside && !0 === l.currTemplate[i]
            ? l.content.find('.mfp-close').length || l.content.append(r())
            : (l.content = e)
          : (l.content = ''),
          o('BeforeAppend'),
          l.container.addClass('mfp-' + i + '-holder'),
          l.contentContainer.append(l.content);
      },
      parseEl: function (i) {
        var s = l.items[i],
          n = s.type;
        if ((s = s.tagName ? { el: e(s) } : { data: s, src: s.src }).el) {
          for (var r = l.types, a = 0; r.length > a; a++)
            if (s.el.hasClass('mfp-' + r[a])) {
              n = r[a];
              break;
            }
          (s.src = s.el.attr('data-mfp-src')), s.src || (s.src = s.el.attr('href'));
        }
        return (
          (s.type = n || l.st.type || 'inline'),
          (s.index = i),
          (s.parsed = !0),
          o('ElementParse', (l.items[i] = s)),
          l.items[i]
        );
      },
      addGroup: function (e, i) {
        function s(s) {
          (s.mfpEl = this), l._openClick(s, e, i);
        }
        var n = 'click.magnificPopup';
        ((i = i || {}).mainEl = e),
          i.items
            ? ((i.isObj = !0), e.off(n).on(n, s))
            : ((i.isObj = !1), i.delegate ? e.off(n).on(n, i.delegate, s) : (i.items = e).off(n).on(n, s));
      },
      _openClick: function (i, s, n) {
        if (
          (void 0 !== n.midClick ? n.midClick : e.magnificPopup.defaults.midClick) ||
          (2 !== i.which && !i.ctrlKey && !i.metaKey)
        ) {
          var o = void 0 !== n.disableOn ? n.disableOn : e.magnificPopup.defaults.disableOn;
          if (o) {
            if (e.isFunction(o)) {
              if (!o.call(l)) return !0;
            } else if (o > _.width()) return !0;
          }
          i.type && (i.preventDefault(), l.isOpen && i.stopPropagation()),
            (n.el = e(i.mfpEl)),
            n.delegate && (n.items = s.find(n.delegate)),
            l.open(n);
        }
      },
      updateStatus: function (e, i) {
        var s;
        l.preloader &&
          (c !== e && l.container.removeClass('mfp-s-' + c),
          i || 'loading' !== e || (i = l.st.tLoading),
          o('UpdateStatus', (s = { status: e, text: i })),
          (e = s.status),
          (i = s.text),
          l.preloader.html(i),
          l.preloader.find('a').on('click', function (e) {
            e.stopImmediatePropagation();
          }),
          l.container.addClass('mfp-s-' + e),
          (c = e));
      },
      _checkIfClose: function (i) {
        if (!e(i).hasClass(C)) {
          var s = l.st.closeOnContentClick,
            n = l.st.closeOnBgClick;
          if ((s && n) || !l.content || e(i).hasClass('mfp-close') || (l.preloader && i === l.preloader[0])) return !0;
          if (i === l.content[0] || e.contains(l.content[0], i)) {
            if (s) return !0;
          } else if (n && e.contains(document, i)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (e) {
        l.bgOverlay.addClass(e), l.wrap.addClass(e);
      },
      _removeClassFromMFP: function (e) {
        this.bgOverlay.removeClass(e), l.wrap.removeClass(e);
      },
      _hasScrollBar: function (e) {
        return (l.isIE7 ? d.height() : document.body.scrollHeight) > (e || _.height());
      },
      _setFocus: function () {
        (l.st.focus ? l.content.find(l.st.focus).eq(0) : l.wrap).focus();
      },
      _onFocusIn: function (i) {
        return i.target === l.wrap[0] || e.contains(l.wrap[0], i.target) ? void 0 : (l._setFocus(), !1);
      },
      _parseMarkup: function (i, s, n) {
        var r;
        n.data && (s = e.extend(n.data, s)),
          o(v, [i, s, n]),
          e.each(s, function (e, s) {
            var n, o;
            return (
              void 0 === s ||
              !1 === s ||
              void (1 < (r = e.split('_')).length
                ? 0 < (n = i.find(y + '-' + r[0])).length &&
                  ('replaceWith' === (o = r[1])
                    ? n[0] !== s[0] && n.replaceWith(s)
                    : 'img' === o
                    ? n.is('img')
                      ? n.attr('src', s)
                      : n.replaceWith('<img src="' + s + '" class="' + n.attr('class') + '" alt="" />')
                    : n.attr(r[1], s))
                : i.find(y + '-' + e).html(s))
            );
          });
      },
      _getScrollbarSize: function () {
        var e;
        return (
          void 0 === l.scrollbarSize &&
            (((e = document.createElement('div')).id = 'mfp-sbm'),
            (e.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
            document.body.appendChild(e),
            (l.scrollbarSize = e.offsetWidth - e.clientWidth),
            document.body.removeChild(e)),
          l.scrollbarSize
        );
      },
    }),
      (e.magnificPopup = {
        instance: null,
        proto: i.prototype,
        modules: [],
        open: function (i, s) {
          return a(), ((i = i ? e.extend(!0, {}, i) : {}).isObj = !0), (i.index = s || 0), this.instance.open(i);
        },
        close: function () {
          return e.magnificPopup.instance && e.magnificPopup.instance.close();
        },
        registerModule: function (i, s) {
          s.options && (e.magnificPopup.defaults[i] = s.options), e.extend(this.proto, s.proto), this.modules.push(i);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: '',
          preloader: !0,
          focus: '',
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          fixedContentPos: 'auto',
          fixedBgPos: 'auto',
          overflowY: 'auto',
          closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
          tClose: 'Close (Esc)',
          tLoading: 'Loading...',
        },
      }),
      (e.fn.magnificPopup = function (i) {
        a();
        var s,
          n,
          o,
          r = e(this);
        return (
          'string' == typeof i
            ? 'open' === i
              ? ((s = k ? r.data('magnificPopup') : r[0].magnificPopup),
                (n = parseInt(arguments[1], 10) || 0),
                (o = s.items ? s.items[n] : ((o = r), s.delegate && (o = o.find(s.delegate)), o.eq(n))),
                l._openClick({ mfpEl: o }, r, s))
              : l.isOpen && l[i].apply(l, Array.prototype.slice.call(arguments, 1))
            : ((i = e.extend(!0, {}, i)), k ? r.data('magnificPopup', i) : (r[0].magnificPopup = i), l.addGroup(r, i)),
          r
        );
      });
    var T,
      E,
      F,
      A = 'inline';
    function D() {
      O && h.removeClass(O);
    }
    function H() {
      D(), l.req && l.req.abort();
    }
    e.magnificPopup.registerModule(A, {
      options: { hiddenClass: 'hide', markup: '', tNotFound: 'Content not found' },
      proto: {
        initInline: function () {
          l.types.push(A),
            s(g + '.' + A, function () {
              S();
            });
        },
        getInline: function (i, s) {
          if ((S(), i.src)) {
            var o,
              r = l.st.inline,
              a = e(i.src);
            return (
              a.length
                ? ((o = a[0].parentNode) &&
                    o.tagName &&
                    (E || ((E = n((T = r.hiddenClass))), (T = 'mfp-' + T)), (F = a.after(E).detach().removeClass(T))),
                  l.updateStatus('ready'))
                : (l.updateStatus('error', r.tNotFound), (a = e('<div>'))),
              (i.inlineElement = a)
            );
          }
          return l.updateStatus('ready'), l._parseMarkup(s, {}, i), s;
        },
      },
    });
    var O,
      P,
      L,
      j = 'ajax';
    function q(e) {
      var i;
      !l.currTemplate[z] ||
        ((i = l.currTemplate[z].find('iframe')).length &&
          (e || (i[0].src = '//about:blank'), l.isIE8 && i.css('display', e ? 'block' : 'none')));
    }
    e.magnificPopup.registerModule(j, {
      options: {
        settings: null,
        cursor: 'mfp-ajax-cur',
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          l.types.push(j), (O = l.st.ajax.cursor), s(g + '.' + j, H), s('BeforeChange.' + j, H);
        },
        getAjax: function (i) {
          O && h.addClass(O), l.updateStatus('loading');
          var s = e.extend(
            {
              url: i.src,
              success: function (s, n, r) {
                var a = { data: s, xhr: r };
                o('ParseAjax', a),
                  l.appendContent(e(a.data), j),
                  (i.finished = !0),
                  D(),
                  l._setFocus(),
                  setTimeout(function () {
                    l.wrap.addClass(w);
                  }, 16),
                  l.updateStatus('ready'),
                  o('AjaxContentAdded');
              },
              error: function () {
                D(), (i.finished = i.loadError = !0), l.updateStatus('error', l.st.ajax.tError.replace('%url%', i.src));
              },
            },
            l.st.ajax.settings
          );
          return (l.req = e.ajax(s)), '';
        },
      },
    }),
      e.magnificPopup.registerModule('image', {
        options: {
          markup:
            '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
          cursor: 'mfp-zoom-out-cur',
          titleSrc: 'title',
          verticalFit: !0,
          tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
          initImage: function () {
            var e = l.st.image,
              i = '.image';
            l.types.push('image'),
              s(b + i, function () {
                'image' === l.currItem.type && e.cursor && h.addClass(e.cursor);
              }),
              s(g + i, function () {
                e.cursor && h.removeClass(e.cursor), _.off('resize' + y);
              }),
              s('Resize' + i, l.resizeImage),
              l.isLowIE && s('AfterChange', l.resizeImage);
          },
          resizeImage: function () {
            var e,
              i = l.currItem;
            i &&
              i.img &&
              l.st.image.verticalFit &&
              ((e = 0),
              l.isLowIE && (e = parseInt(i.img.css('padding-top'), 10) + parseInt(i.img.css('padding-bottom'), 10)),
              i.img.css('max-height', l.wH - e));
          },
          _onImageHasSize: function (e) {
            e.img &&
              ((e.hasSize = !0),
              P && clearInterval(P),
              (e.isCheckingImgSize = !1),
              o('ImageHasSize', e),
              e.imgHidden && (l.content && l.content.removeClass('mfp-loading'), (e.imgHidden = !1)));
          },
          findImageSize: function (e) {
            var i = 0,
              s = e.img[0],
              n = function (o) {
                P && clearInterval(P),
                  (P = setInterval(function () {
                    return 0 < s.naturalWidth
                      ? void l._onImageHasSize(e)
                      : (200 < i && clearInterval(P), void (3 == ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500)));
                  }, o));
              };
            n(1);
          },
          getImage: function (i, s) {
            var n,
              r = 0,
              a = function () {
                i &&
                  (i.img[0].complete
                    ? (i.img.off('.mfploader'),
                      i === l.currItem && (l._onImageHasSize(i), l.updateStatus('ready')),
                      (i.hasSize = !0),
                      (i.loaded = !0),
                      o('ImageLoadComplete'))
                    : ++r < 200
                    ? setTimeout(a, 100)
                    : c());
              },
              c = function () {
                i &&
                  (i.img.off('.mfploader'),
                  i === l.currItem && (l._onImageHasSize(i), l.updateStatus('error', h.tError.replace('%url%', i.src))),
                  (i.hasSize = !0),
                  (i.loaded = !0),
                  (i.loadError = !0));
              },
              h = l.st.image,
              d = s.find('.mfp-img');
            return (
              d.length &&
                (((n = document.createElement('img')).className = 'mfp-img'),
                (i.img = e(n).on('load.mfploader', a).on('error.mfploader', c)),
                (n.src = i.src),
                d.is('img') && (i.img = i.img.clone()),
                0 < i.img[0].naturalWidth && (i.hasSize = !0)),
              l._parseMarkup(
                s,
                {
                  title: (function (i) {
                    if (i.data && void 0 !== i.data.title) return i.data.title;
                    var s = l.st.image.titleSrc;
                    if (s) {
                      if (e.isFunction(s)) return s.call(l, i);
                      if (i.el) return i.el.attr(s) || '';
                    }
                    return '';
                  })(i),
                  img_replaceWith: i.img,
                },
                i
              ),
              l.resizeImage(),
              i.hasSize
                ? (P && clearInterval(P),
                  i.loadError
                    ? (s.addClass('mfp-loading'), l.updateStatus('error', h.tError.replace('%url%', i.src)))
                    : (s.removeClass('mfp-loading'), l.updateStatus('ready')))
                : (l.updateStatus('loading'),
                  (i.loading = !0),
                  i.hasSize || ((i.imgHidden = !0), s.addClass('mfp-loading'), l.findImageSize(i))),
              s
            );
          },
        },
      }),
      e.magnificPopup.registerModule('zoom', {
        options: {
          enabled: !1,
          easing: 'ease-in-out',
          duration: 300,
          opener: function (e) {
            return e.is('img') ? e : e.find('img');
          },
        },
        proto: {
          initZoom: function () {
            var e,
              i,
              n,
              r,
              a = l.st.zoom,
              c = '.zoom';
            function h(e) {
              var i = e.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                s = 'all ' + a.duration / 1e3 + 's ' + a.easing,
                n = { position: 'fixed', zIndex: 9999, left: 0, top: 0, '-webkit-backface-visibility': 'hidden' },
                o = 'transition';
              return (n['-webkit-' + o] = n['-moz-' + o] = n['-o-' + o] = n[o] = s), i.css(n), i;
            }
            function d() {
              l.content.css('visibility', 'visible');
            }
            a.enabled &&
              l.supportsTransition &&
              ((r = a.duration),
              s('BuildControls' + c, function () {
                if (l._allowZoom()) {
                  if ((clearTimeout(i), l.content.css('visibility', 'hidden'), !(e = l._getItemToZoom())))
                    return void d();
                  (n = h(e)).css(l._getOffset()),
                    l.wrap.append(n),
                    (i = setTimeout(function () {
                      n.css(l._getOffset(!0)),
                        (i = setTimeout(function () {
                          d(),
                            setTimeout(function () {
                              n.remove(), (e = n = null), o('ZoomAnimationEnded');
                            }, 16);
                        }, r));
                    }, 16));
                }
              }),
              s(m + c, function () {
                if (l._allowZoom()) {
                  if ((clearTimeout(i), (l.st.removalDelay = r), !e)) {
                    if (!(e = l._getItemToZoom())) return;
                    n = h(e);
                  }
                  n.css(l._getOffset(!0)),
                    l.wrap.append(n),
                    l.content.css('visibility', 'hidden'),
                    setTimeout(function () {
                      n.css(l._getOffset());
                    }, 16);
                }
              }),
              s(g + c, function () {
                l._allowZoom() && (d(), n && n.remove(), (e = null));
              }));
          },
          _allowZoom: function () {
            return 'image' === l.currItem.type;
          },
          _getItemToZoom: function () {
            return !!l.currItem.hasSize && l.currItem.img;
          },
          _getOffset: function (i) {
            var s,
              n = (s = i ? l.currItem.img : l.st.zoom.opener(l.currItem.el || l.currItem)).offset(),
              o = parseInt(s.css('padding-top'), 10),
              r = parseInt(s.css('padding-bottom'), 10);
            n.top -= e(window).scrollTop() - o;
            var a = { width: s.width(), height: (k ? s.innerHeight() : s[0].offsetHeight) - r - o };
            return (
              void 0 === L && (L = void 0 !== document.createElement('p').style.MozTransform),
              L
                ? (a['-moz-transform'] = a.transform = 'translate(' + n.left + 'px,' + n.top + 'px)')
                : ((a.left = n.left), (a.top = n.top)),
              a
            );
          },
        },
      });
    var z = 'iframe';
    function I(e) {
      var i = l.items.length;
      return i - 1 < e ? e - i : e < 0 ? i + e : e;
    }
    function N(e, i, s) {
      return e.replace(/%curr%/gi, i + 1).replace(/%total%/gi, s);
    }
    e.magnificPopup.registerModule(z, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: 'iframe_src',
        patterns: {
          youtube: { index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' },
          vimeo: { index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1' },
          gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
        },
      },
      proto: {
        initIframe: function () {
          l.types.push(z),
            s('BeforeChange', function (e, i, s) {
              i !== s && (i === z ? q() : s === z && q(!0));
            }),
            s(g + '.' + z, function () {
              q();
            });
        },
        getIframe: function (i, s) {
          var n = i.src,
            o = l.st.iframe;
          e.each(o.patterns, function () {
            return -1 < n.indexOf(this.index)
              ? (this.id &&
                  (n =
                    'string' == typeof this.id
                      ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length)
                      : this.id.call(this, n)),
                (n = this.src.replace('%id%', n)),
                !1)
              : void 0;
          });
          var r = {};
          return o.srcAction && (r[o.srcAction] = n), l._parseMarkup(s, r, i), l.updateStatus('ready'), s;
        },
      },
    }),
      e.magnificPopup.registerModule('gallery', {
        options: {
          enabled: !1,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: 'Previous (Left arrow key)',
          tNext: 'Next (Right arrow key)',
          tCounter: '%curr% of %total%',
        },
        proto: {
          initGallery: function () {
            var i = l.st.gallery,
              o = '.mfp-gallery',
              r = Boolean(e.fn.mfpFastClick);
            return (
              (l.direction = !0),
              !(!i || !i.enabled) &&
                ((p += ' mfp-gallery'),
                s(b + o, function () {
                  i.navigateByImgClick &&
                    l.wrap.on('click' + o, '.mfp-img', function () {
                      return 1 < l.items.length ? (l.next(), !1) : void 0;
                    }),
                    d.on('keydown' + o, function (e) {
                      37 === e.keyCode ? l.prev() : 39 === e.keyCode && l.next();
                    });
                }),
                s('UpdateStatus' + o, function (e, i) {
                  i.text && (i.text = N(i.text, l.currItem.index, l.items.length));
                }),
                s(v + o, function (e, s, n, o) {
                  var r = l.items.length;
                  n.counter = 1 < r ? N(i.tCounter, o.index, r) : '';
                }),
                s('BuildControls' + o, function () {
                  var s, o, a, c;
                  1 < l.items.length &&
                    i.arrows &&
                    !l.arrowLeft &&
                    ((s = i.arrowMarkup),
                    (o = l.arrowLeft = e(s.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, 'left')).addClass(C)),
                    (a = l.arrowRight = e(s.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, 'right')).addClass(C)),
                    o[(c = r ? 'mfpFastClick' : 'click')](function () {
                      l.prev();
                    }),
                    a[c](function () {
                      l.next();
                    }),
                    l.isIE7 && (n('b', o[0], !1, !0), n('a', o[0], !1, !0), n('b', a[0], !1, !0), n('a', a[0], !1, !0)),
                    l.container.append(o.add(a)));
                }),
                s('Change' + o, function () {
                  l._preloadTimeout && clearTimeout(l._preloadTimeout),
                    (l._preloadTimeout = setTimeout(function () {
                      l.preloadNearbyImages(), (l._preloadTimeout = null);
                    }, 16));
                }),
                void s(g + o, function () {
                  d.off(o),
                    l.wrap.off('click' + o),
                    l.arrowLeft && r && l.arrowLeft.add(l.arrowRight).destroyMfpFastClick(),
                    (l.arrowRight = l.arrowLeft = null);
                }))
            );
          },
          next: function () {
            (l.direction = !0), (l.index = I(l.index + 1)), l.updateItemHTML();
          },
          prev: function () {
            (l.direction = !1), (l.index = I(l.index - 1)), l.updateItemHTML();
          },
          goTo: function (e) {
            (l.direction = e >= l.index), (l.index = e), l.updateItemHTML();
          },
          preloadNearbyImages: function () {
            for (
              var e = l.st.gallery.preload,
                i = Math.min(e[0], l.items.length),
                s = Math.min(e[1], l.items.length),
                n = 1;
              (l.direction ? s : i) >= n;
              n++
            )
              l._preloadItem(l.index + n);
            for (n = 1; (l.direction ? i : s) >= n; n++) l._preloadItem(l.index - n);
          },
          _preloadItem: function (i) {
            var s;
            (i = I(i)),
              l.items[i].preloaded ||
                ((s = l.items[i]).parsed || (s = l.parseEl(i)),
                o('LazyLoad', s),
                'image' === s.type &&
                  (s.img = e('<img class="mfp-img" alt="" />')
                    .on('load.mfploader', function () {
                      s.hasSize = !0;
                    })
                    .on('error.mfploader', function () {
                      (s.hasSize = !0), (s.loadError = !0), o('LazyLoadError', s);
                    })
                    .attr('src', s.src)),
                (s.preloaded = !0));
          },
        },
      });
    var R,
      M,
      W,
      B = 'retina';
    e.magnificPopup.registerModule(B, {
      options: {
        replaceSrc: function (e) {
          return e.src.replace(/\.\w+$/, function (e) {
            return '@2x' + e;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          var e, i;
          1 < window.devicePixelRatio &&
            1 < (i = isNaN((i = (e = l.st.retina).ratio)) ? i() : i) &&
            (s('ImageHasSize.' + B, function (e, s) {
              s.img.css({ 'max-width': s.img[0].naturalWidth / i, width: '100%' });
            }),
            s('ElementParse.' + B, function (s, n) {
              n.src = e.replaceSrc(n, i);
            }));
        },
      },
    }),
      (R = 'ontouchstart' in window),
      (M = function () {
        _.off('touchmove' + W + ' touchend' + W);
      }),
      (W = '.mfpFastClick'),
      (e.fn.mfpFastClick = function (i) {
        return e(this).each(function () {
          var s,
            n,
            o,
            r,
            a,
            l,
            c,
            h = e(this);
          R &&
            h.on('touchstart' + W, function (e) {
              (a = !1),
                (c = 1),
                (o = (l = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0]).clientX),
                (r = l.clientY),
                _.on('touchmove' + W, function (e) {
                  (c = (l = e.originalEvent ? e.originalEvent.touches : e.touches).length),
                    (10 < Math.abs((l = l[0]).clientX - o) || 10 < Math.abs(l.clientY - r)) && ((a = !0), M());
                }).on('touchend' + W, function (e) {
                  M(),
                    a ||
                      1 < c ||
                      ((s = !0),
                      e.preventDefault(),
                      clearTimeout(n),
                      (n = setTimeout(function () {
                        s = !1;
                      }, 1e3)),
                      i());
                });
            }),
            h.on('click' + W, function () {
              s || i();
            });
        });
      }),
      (e.fn.destroyMfpFastClick = function () {
        e(this).off('touchstart' + W + ' click' + W), R && _.off('touchmove' + W + ' touchend' + W);
      }),
      a();
  })(window.jQuery || window.Zepto),
  (function (e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'undefined' != typeof exports
      ? (module.exports = e(require('jquery')))
      : e(jQuery);
  })(function (e) {
    'use strict';
    var i = window.Slick,
      s = 0;
    ((i = function (i, n) {
      var o,
        r,
        a = this;
      if (
        ((a.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(i),
          appendDots: e(i),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: '50px',
          cssEase: 'ease',
          customPaging: function (e, i) {
            return '<button type="button" data-role="none">' + (i + 1) + '</button>';
          },
          dots: !1,
          dotsClass: 'slick-dots',
          draggable: !0,
          easing: 'linear',
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: 'ondemand',
          onBeforeChange: null,
          onAfterChange: null,
          onInit: null,
          onReInit: null,
          onSetPosition: null,
          pauseOnHover: !0,
          pauseOnDotsHover: !1,
          respondTo: 'window',
          responsive: null,
          rtl: !1,
          slide: 'div',
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          variableWidth: !1,
          vertical: !1,
          waitForAnimate: !0,
        }),
        (a.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
        }),
        e.extend(a, a.initials),
        (a.activeBreakpoint = null),
        (a.animType = null),
        (a.animProp = null),
        (a.breakpoints = []),
        (a.breakpointSettings = []),
        (a.cssTransitions = !1),
        (a.paused = !1),
        (a.positionProp = null),
        (a.respondTo = null),
        (a.shouldClick = !0),
        (a.$slider = e(i)),
        (a.$slidesCache = null),
        (a.transformType = null),
        (a.transitionType = null),
        (a.windowWidth = 0),
        (a.windowTimer = null),
        (a.options = e.extend({}, a.defaults, n)),
        (a.currentSlide = a.options.initialSlide),
        (a.originalSettings = a.options),
        (o = a.options.responsive || null) && -1 < o.length)
      ) {
        for (r in ((a.respondTo = a.options.respondTo || 'window'), o))
          o.hasOwnProperty(r) &&
            (a.breakpoints.push(o[r].breakpoint), (a.breakpointSettings[o[r].breakpoint] = o[r].settings));
        a.breakpoints.sort(function (e, i) {
          return i - e;
        });
      }
      (a.autoPlay = e.proxy(a.autoPlay, a)),
        (a.autoPlayClear = e.proxy(a.autoPlayClear, a)),
        (a.changeSlide = e.proxy(a.changeSlide, a)),
        (a.clickHandler = e.proxy(a.clickHandler, a)),
        (a.selectHandler = e.proxy(a.selectHandler, a)),
        (a.setPosition = e.proxy(a.setPosition, a)),
        (a.swipeHandler = e.proxy(a.swipeHandler, a)),
        (a.dragHandler = e.proxy(a.dragHandler, a)),
        (a.keyHandler = e.proxy(a.keyHandler, a)),
        (a.autoPlayIterator = e.proxy(a.autoPlayIterator, a)),
        (a.instanceUid = s++),
        (a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        a.init(),
        a.checkResponsive();
    }).prototype.addSlide = function (i, s, n) {
      var o = this;
      if ('boolean' == typeof s) (n = s), (s = null);
      else if (s < 0 || s >= o.slideCount) return !1;
      o.unload(),
        'number' == typeof s
          ? 0 === s && 0 === o.$slides.length
            ? e(i).appendTo(o.$slideTrack)
            : n
            ? e(i).insertBefore(o.$slides.eq(s))
            : e(i).insertAfter(o.$slides.eq(s))
          : !0 === n
          ? e(i).prependTo(o.$slideTrack)
          : e(i).appendTo(o.$slideTrack),
        (o.$slides = o.$slideTrack.children(this.options.slide)),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function (i, s) {
          e(s).attr('index', i);
        }),
        (o.$slidesCache = o.$slides),
        o.reinit();
    }),
      (i.prototype.animateSlide = function (i, s) {
        var n,
          o = {},
          r = this;
        1 === r.options.slidesToShow &&
          !0 === r.options.adaptiveHeight &&
          !1 === r.options.vertical &&
          ((n = r.$slides.eq(r.currentSlide).outerHeight(!0)), r.$list.animate({ height: n }, r.options.speed)),
          !0 === r.options.rtl && !1 === r.options.vertical && (i = -i),
          !1 === r.transformsEnabled
            ? !1 === r.options.vertical
              ? r.$slideTrack.animate({ left: i }, r.options.speed, r.options.easing, s)
              : r.$slideTrack.animate({ top: i }, r.options.speed, r.options.easing, s)
            : !1 === r.cssTransitions
            ? e({ animStart: r.currentLeft }).animate(
                { animStart: i },
                {
                  duration: r.options.speed,
                  easing: r.options.easing,
                  step: function (e) {
                    !1 === r.options.vertical
                      ? (o[r.animType] = 'translate(' + e + 'px, 0px)')
                      : (o[r.animType] = 'translate(0px,' + e + 'px)'),
                      r.$slideTrack.css(o);
                  },
                  complete: function () {
                    s && s.call();
                  },
                }
              )
            : (r.applyTransition(),
              (o[r.animType] =
                !1 === r.options.vertical ? 'translate3d(' + i + 'px, 0px, 0px)' : 'translate3d(0px,' + i + 'px, 0px)'),
              r.$slideTrack.css(o),
              s &&
                setTimeout(function () {
                  r.disableTransition(), s.call();
                }, r.options.speed));
      }),
      (i.prototype.asNavFor = function (i) {
        var s = null != this.options.asNavFor ? e(this.options.asNavFor).getSlick() : null;
        null != s && s.slideHandler(i, !0);
      }),
      (i.prototype.applyTransition = function (e) {
        var i = this,
          s = {};
        (s[i.transitionType] =
          !1 === i.options.fade
            ? i.transformType + ' ' + i.options.speed + 'ms ' + i.options.cssEase
            : 'opacity ' + i.options.speed + 'ms ' + i.options.cssEase),
          !1 === i.options.fade ? i.$slideTrack.css(s) : i.$slides.eq(e).css(s);
      }),
      (i.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer),
          e.slideCount > e.options.slidesToShow &&
            !0 !== e.paused &&
            (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
      }),
      (i.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (i.prototype.autoPlayIterator = function () {
        var e = this;
        !1 === e.options.infinite
          ? 1 === e.direction
            ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0),
              e.slideHandler(e.currentSlide + e.options.slidesToScroll))
            : (0 == e.currentSlide - 1 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll))
          : e.slideHandler(e.currentSlide + e.options.slidesToScroll);
      }),
      (i.prototype.buildArrows = function () {
        var i = this;
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          ((i.$prevArrow = e(i.options.prevArrow)),
          (i.$nextArrow = e(i.options.nextArrow)),
          i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.appendTo(i.options.appendArrows),
          i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows),
          !0 !== i.options.infinite && i.$prevArrow.addClass('slick-disabled'));
      }),
      (i.prototype.buildDots = function () {
        var i,
          s,
          n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
          for (s = '<ul class="' + n.options.dotsClass + '">', i = 0; i <= n.getDotCount(); i += 1)
            s += '<li>' + n.options.customPaging.call(this, n, i) + '</li>';
          (s += '</ul>'),
            (n.$dots = e(s).appendTo(n.options.appendDots)),
            n.$dots.find('li').first().addClass('slick-active');
        }
      }),
      (i.prototype.buildOut = function () {
        var i = this;
        (i.$slides = i.$slider.children(i.options.slide + ':not(.slick-cloned)').addClass('slick-slide')),
          (i.slideCount = i.$slides.length),
          i.$slides.each(function (i, s) {
            e(s).attr('index', i);
          }),
          (i.$slidesCache = i.$slides),
          i.$slider.addClass('slick-slider'),
          (i.$slideTrack =
            0 === i.slideCount
              ? e('<div class="slick-track"/>').appendTo(i.$slider)
              : i.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          i.$slideTrack.css('opacity', 0),
          !0 === i.options.centerMode && (i.options.slidesToScroll = 1),
          e('img[data-lazy]', i.$slider).not('[src]').addClass('slick-loading'),
          i.setupInfinite(),
          i.buildArrows(),
          i.buildDots(),
          i.updateDots(),
          !0 === i.options.accessibility && i.$list.prop('tabIndex', 0),
          i.setSlideClasses('number' == typeof this.currentSlide ? this.currentSlide : 0),
          !0 === i.options.draggable && i.$list.addClass('draggable');
      }),
      (i.prototype.checkResponsive = function () {
        var i,
          s,
          n,
          o = this,
          r = o.$slider.width(),
          a = window.innerWidth || e(window).width();
        if (
          ('window' === o.respondTo
            ? (n = a)
            : 'slider' === o.respondTo
            ? (n = r)
            : 'min' === o.respondTo && (n = Math.min(a, r)),
          o.originalSettings.responsive &&
            -1 < o.originalSettings.responsive.length &&
            null !== o.originalSettings.responsive)
        ) {
          for (i in ((s = null), o.breakpoints))
            o.breakpoints.hasOwnProperty(i) && n < o.breakpoints[i] && (s = o.breakpoints[i]);
          null !== s
            ? (null !== o.activeBreakpoint && s === o.activeBreakpoint) ||
              ((o.activeBreakpoint = s),
              (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[s])),
              o.refresh())
            : null !== o.activeBreakpoint &&
              ((o.activeBreakpoint = null), (o.options = o.originalSettings), o.refresh());
        }
      }),
      (i.prototype.changeSlide = function (i, s) {
        var n, o, r;
        switch (
          (e(i.target).is('a') && i.preventDefault(),
          (n =
            0 != this.slideCount % this.options.slidesToScroll
              ? 0
              : (this.slideCount - this.currentSlide) % this.options.slidesToScroll),
          i.data.message)
        ) {
          case 'previous':
            (o = 0 == n ? this.options.slidesToScroll : this.options.slidesToShow - n),
              this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide - o, !1, s);
            break;
          case 'next':
            (o = 0 == n ? this.options.slidesToScroll : n),
              this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide + o, !1, s);
            break;
          case 'index':
            var a = 0 === i.data.index ? 0 : i.data.index || e(i.target).parent().index() * this.options.slidesToScroll,
              l = 0;
            if ((r = this.getNavigableIndexes())[a] && r[a] === a) {
              if (a > r[r.length - 1]) a = r[r.length - 1];
              else
                for (var c in r) {
                  if (a < r[c]) {
                    a = l;
                    break;
                  }
                  l = r[c];
                }
            }
            this.slideHandler(a, !1, s);
          default:
            return;
        }
      }),
      (i.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
      }),
      (i.prototype.destroy = function () {
        var i = this;
        i.autoPlayClear(),
          (i.touchObject = {}),
          e('.slick-cloned', i.$slider).remove(),
          i.$dots && i.$dots.remove(),
          i.$prevArrow && 'object' != typeof i.options.prevArrow && i.$prevArrow.remove(),
          i.$nextArrow && 'object' != typeof i.options.nextArrow && i.$nextArrow.remove(),
          i.$slides.parent().hasClass('slick-track') && i.$slides.unwrap().unwrap(),
          i.$slides
            .removeClass('slick-slide slick-active slick-center slick-visible')
            .removeAttr('index')
            .css({ position: '', left: '', top: '', zIndex: '', opacity: '', width: '' }),
          i.$slider.removeClass('slick-slider'),
          i.$slider.removeClass('slick-initialized'),
          i.$list.off('.slick'),
          e(window).off('.slick-' + i.instanceUid),
          e(document).off('.slick-' + i.instanceUid);
      }),
      (i.prototype.disableTransition = function (e) {
        var i = {};
        (i[this.transitionType] = ''), !1 === this.options.fade ? this.$slideTrack.css(i) : this.$slides.eq(e).css(i);
      }),
      (i.prototype.fadeSlide = function (e, i, s) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(i).css({ zIndex: 1e3 }),
            n.$slides.eq(i).animate({ opacity: 1 }, n.options.speed, n.options.easing, s),
            n.$slides.eq(e).animate({ opacity: 0 }, n.options.speed, n.options.easing))
          : (n.applyTransition(i),
            n.applyTransition(e),
            n.$slides.eq(i).css({ opacity: 1, zIndex: 1e3 }),
            n.$slides.eq(e).css({ opacity: 0 }),
            s &&
              setTimeout(function () {
                n.disableTransition(i), n.disableTransition(e), s.call();
              }, n.options.speed));
      }),
      (i.prototype.filterSlides = function (e) {
        null !== e &&
          (this.unload(),
          this.$slideTrack.children(this.options.slide).detach(),
          this.$slidesCache.filter(e).appendTo(this.$slideTrack),
          this.reinit());
      }),
      (i.prototype.getCurrent = function () {
        return this.currentSlide;
      }),
      (i.prototype.getDotCount = function () {
        var e = 0,
          i = 0,
          s = 0;
        if (!0 === this.options.infinite) s = Math.ceil(this.slideCount / this.options.slidesToScroll);
        else
          for (; e < this.slideCount; )
            ++s,
              (e = i + this.options.slidesToShow),
              (i +=
                this.options.slidesToScroll <= this.options.slidesToShow
                  ? this.options.slidesToScroll
                  : this.options.slidesToShow);
        return s - 1;
      }),
      (i.prototype.getLeft = function (e) {
        var i,
          s,
          n,
          o = this,
          r = 0;
        return (
          (o.slideOffset = 0),
          (s = o.$slides.first().outerHeight()),
          !0 === o.options.infinite
            ? (o.slideCount > o.options.slidesToShow &&
                ((o.slideOffset = -1 * o.slideWidth * o.options.slidesToShow), (r = -1 * s * o.options.slidesToShow)),
              0 != o.slideCount % o.options.slidesToScroll &&
                e + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (r =
                  e > o.slideCount
                    ? ((o.slideOffset = -1 * (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth),
                      -1 * (o.options.slidesToShow - (e - o.slideCount)) * s)
                    : ((o.slideOffset = ((-1 * o.slideCount) % o.options.slidesToScroll) * o.slideWidth),
                      ((-1 * o.slideCount) % o.options.slidesToScroll) * s)))
            : e + o.options.slidesToShow > o.slideCount &&
              ((o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth),
              (r = (e + o.options.slidesToShow - o.slideCount) * s)),
          o.slideCount <= o.options.slidesToShow && (r = o.slideOffset = 0),
          !0 === o.options.centerMode && !0 === o.options.infinite
            ? (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth)
            : !0 === o.options.centerMode &&
              ((o.slideOffset = 0), (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (i = !1 === o.options.vertical ? -1 * e * o.slideWidth + o.slideOffset : -1 * e * s + r),
          !0 === o.options.variableWidth &&
            ((i = (n =
              o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite
                ? o.$slideTrack.children('.slick-slide').eq(e)
                : o.$slideTrack.children('.slick-slide').eq(e + o.options.slidesToShow))[0]
              ? -1 * n[0].offsetLeft
              : 0),
            !0 === o.options.centerMode &&
              ((i = (n =
                !1 === o.options.infinite
                  ? o.$slideTrack.children('.slick-slide').eq(e)
                  : o.$slideTrack.children('.slick-slide').eq(e + o.options.slidesToShow + 1))[0]
                ? -1 * n[0].offsetLeft
                : 0),
              (i += (o.$list.width() - n.outerWidth()) / 2))),
          i
        );
      }),
      (i.prototype.getNavigableIndexes = function () {
        for (var e = 0, i = 0, s = []; e < this.slideCount; )
          s.push(e),
            (e = i + this.options.slidesToScroll),
            (i +=
              this.options.slidesToScroll <= this.options.slidesToShow
                ? this.options.slidesToScroll
                : this.options.slidesToShow);
        return s;
      }),
      (i.prototype.getSlideCount = function () {
        var i = this;
        if (!0 !== i.options.swipeToSlide) return i.options.slidesToScroll;
        var s = null;
        return (
          i.$slideTrack.find('.slick-slide').each(function (n, o) {
            return o.offsetLeft + e(o).outerWidth() / 2 > -1 * i.swipeLeft ? ((s = o), !1) : void 0;
          }),
          Math.abs(e(s).attr('index') - i.currentSlide)
        );
      }),
      (i.prototype.init = function () {
        e(this.$slider).hasClass('slick-initialized') ||
          (e(this.$slider).addClass('slick-initialized'),
          this.buildOut(),
          this.setProps(),
          this.startLoad(),
          this.loadSlider(),
          this.initializeEvents(),
          this.updateArrows(),
          this.updateDots()),
          null !== this.options.onInit && this.options.onInit.call(this, this);
      }),
      (i.prototype.initArrowEvents = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.on('click.slick', { message: 'previous' }, this.changeSlide),
          this.$nextArrow.on('click.slick', { message: 'next' }, this.changeSlide));
      }),
      (i.prototype.initDotEvents = function () {
        var i = this;
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          e('li', i.$dots).on('click.slick', { message: 'index' }, i.changeSlide),
          !0 === i.options.dots &&
            !0 === i.options.pauseOnDotsHover &&
            !0 === i.options.autoplay &&
            e('li', i.$dots)
              .on('mouseenter.slick', function () {
                (i.paused = !0), i.autoPlayClear();
              })
              .on('mouseleave.slick', function () {
                (i.paused = !1), i.autoPlay();
              });
      }),
      (i.prototype.initializeEvents = function () {
        var i = this;
        i.initArrowEvents(),
          i.initDotEvents(),
          i.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, i.swipeHandler),
          i.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, i.swipeHandler),
          i.$list.on('touchend.slick mouseup.slick', { action: 'end' }, i.swipeHandler),
          i.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, i.swipeHandler),
          i.$list.on('click.slick', i.clickHandler),
          !0 === i.options.pauseOnHover &&
            !0 === i.options.autoplay &&
            (i.$list.on('mouseenter.slick', function () {
              (i.paused = !0), i.autoPlayClear();
            }),
            i.$list.on('mouseleave.slick', function () {
              (i.paused = !1), i.autoPlay();
            })),
          !0 === i.options.accessibility && i.$list.on('keydown.slick', i.keyHandler),
          !0 === i.options.focusOnSelect && e(i.options.slide, i.$slideTrack).on('click.slick', i.selectHandler),
          e(window).on('orientationchange.slick.slick-' + i.instanceUid, function () {
            i.checkResponsive(), i.setPosition();
          }),
          e(window).on('resize.slick.slick-' + i.instanceUid, function () {
            e(window).width() !== i.windowWidth &&
              (clearTimeout(i.windowDelay),
              (i.windowDelay = window.setTimeout(function () {
                (i.windowWidth = e(window).width()), i.checkResponsive(), i.setPosition();
              }, 50)));
          }),
          e('*[draggable!=true]', i.$slideTrack).on('dragstart', function (e) {
            e.preventDefault();
          }),
          e(window).on('load.slick.slick-' + i.instanceUid, i.setPosition),
          e(document).on('ready.slick.slick-' + i.instanceUid, i.setPosition);
      }),
      (i.prototype.initUI = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.show(), this.$nextArrow.show()),
          !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show(),
          !0 === this.options.autoplay && this.autoPlay();
      }),
      (i.prototype.keyHandler = function (e) {
        37 === e.keyCode && !0 === this.options.accessibility
          ? this.changeSlide({ data: { message: 'previous' } })
          : 39 === e.keyCode && !0 === this.options.accessibility && this.changeSlide({ data: { message: 'next' } });
      }),
      (i.prototype.lazyLoad = function () {
        var i, s;
        function n(i) {
          e('img[data-lazy]', i).each(function () {
            var i = e(this),
              s = e(this).attr('data-lazy');
            i.load(function () {
              i.animate({ opacity: 1 }, 200);
            })
              .css({ opacity: 0 })
              .attr('src', s)
              .removeAttr('data-lazy')
              .removeClass('slick-loading');
          });
        }
        !0 === this.options.centerMode
          ? (s =
              !0 === this.options.infinite
                ? (i = this.currentSlide + (this.options.slidesToShow / 2 + 1)) + this.options.slidesToShow + 2
                : ((i = Math.max(0, this.currentSlide - (this.options.slidesToShow / 2 + 1))),
                  this.options.slidesToShow / 2 + 1 + 2 + this.currentSlide))
          : ((s =
              (i = this.options.infinite ? this.options.slidesToShow + this.currentSlide : this.currentSlide) +
              this.options.slidesToShow),
            !0 === this.options.fade && (0 < i && i--, s <= this.slideCount && s++)),
          n(this.$slider.find('.slick-slide').slice(i, s)),
          this.slideCount <= this.options.slidesToShow
            ? n(this.$slider.find('.slick-slide'))
            : this.currentSlide >= this.slideCount - this.options.slidesToShow
            ? n(this.$slider.find('.slick-cloned').slice(0, this.options.slidesToShow))
            : 0 === this.currentSlide && n(this.$slider.find('.slick-cloned').slice(-1 * this.options.slidesToShow));
      }),
      (i.prototype.loadSlider = function () {
        this.setPosition(),
          this.$slideTrack.css({ opacity: 1 }),
          this.$slider.removeClass('slick-loading'),
          this.initUI(),
          'progressive' === this.options.lazyLoad && this.progressiveLazyLoad();
      }),
      (i.prototype.postSlide = function (e) {
        var i = this;
        null !== i.options.onAfterChange && i.options.onAfterChange.call(this, i, e),
          (i.animating = !1),
          i.setPosition(),
          (i.swipeLeft = null),
          !0 === i.options.autoplay && !1 === i.paused && i.autoPlay();
      }),
      (i.prototype.progressiveLazyLoad = function () {
        var i,
          s = this;
        0 < e('img[data-lazy]', s.$slider).length &&
          (i = e('img[data-lazy]', s.$slider).first())
            .attr('src', i.attr('data-lazy'))
            .removeClass('slick-loading')
            .load(function () {
              i.removeAttr('data-lazy'), s.progressiveLazyLoad();
            })
            .error(function () {
              i.removeAttr('data-lazy'), s.progressiveLazyLoad();
            });
      }),
      (i.prototype.refresh = function () {
        var i = this.currentSlide;
        this.destroy(),
          e.extend(this, this.initials),
          this.init(),
          this.changeSlide({ data: { message: 'index', index: i } }, !0);
      }),
      (i.prototype.reinit = function () {
        var i = this;
        (i.$slides = i.$slideTrack.children(i.options.slide).addClass('slick-slide')),
          (i.slideCount = i.$slides.length),
          i.currentSlide >= i.slideCount &&
            0 !== i.currentSlide &&
            (i.currentSlide = i.currentSlide - i.options.slidesToScroll),
          i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
          i.setProps(),
          i.setupInfinite(),
          i.buildArrows(),
          i.updateArrows(),
          i.initArrowEvents(),
          i.buildDots(),
          i.updateDots(),
          i.initDotEvents(),
          !0 === i.options.focusOnSelect && e(i.options.slide, i.$slideTrack).on('click.slick', i.selectHandler),
          i.setSlideClasses(0),
          i.setPosition(),
          null !== i.options.onReInit && i.options.onReInit.call(this, i);
      }),
      (i.prototype.removeSlide = function (e, i, s) {
        var n = this;
        return (
          (e = 'boolean' == typeof e ? (!0 === (i = e) ? 0 : n.slideCount - 1) : !0 === i ? --e : e),
          !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) &&
            (n.unload(),
            !0 === s ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            (n.$slidesCache = n.$slides),
            void n.reinit())
        );
      }),
      (i.prototype.setCSS = function (e) {
        var i,
          s,
          n = this,
          o = {};
        !0 === n.options.rtl && (e = -e),
          (i = 'left' == n.positionProp ? e + 'px' : '0px'),
          (s = 'top' == n.positionProp ? e + 'px' : '0px'),
          (o[n.positionProp] = e),
          !1 === n.transformsEnabled ||
            (((o = {}), !1 === n.cssTransitions)
              ? (o[n.animType] = 'translate(' + i + ', ' + s + ')')
              : (o[n.animType] = 'translate3d(' + i + ', ' + s + ', 0px)')),
          n.$slideTrack.css(o);
      }),
      (i.prototype.setDimensions = function () {
        var i,
          s = this;
        !1 === s.options.vertical
          ? !0 === s.options.centerMode && s.$list.css({ padding: '0px ' + s.options.centerPadding })
          : (s.$list.height(s.$slides.first().outerHeight(!0) * s.options.slidesToShow),
            !0 === s.options.centerMode && s.$list.css({ padding: s.options.centerPadding + ' 0px' })),
          (s.listWidth = s.$list.width()),
          (s.listHeight = s.$list.height()),
          !1 === s.options.vertical && !1 === s.options.variableWidth
            ? ((s.slideWidth = Math.ceil(s.listWidth / s.options.slidesToShow)),
              s.$slideTrack.width(Math.ceil(s.slideWidth * s.$slideTrack.children('.slick-slide').length)))
            : !0 === s.options.variableWidth
            ? ((i = 0),
              (s.slideWidth = Math.ceil(s.listWidth / s.options.slidesToShow)),
              s.$slideTrack.children('.slick-slide').each(function () {
                i += Math.ceil(e(this).outerWidth(!0));
              }),
              s.$slideTrack.width(Math.ceil(i) + 1))
            : ((s.slideWidth = Math.ceil(s.listWidth)),
              s.$slideTrack.height(
                Math.ceil(s.$slides.first().outerHeight(!0) * s.$slideTrack.children('.slick-slide').length)
              ));
        var n = s.$slides.first().outerWidth(!0) - s.$slides.first().width();
        !1 === s.options.variableWidth && s.$slideTrack.children('.slick-slide').width(s.slideWidth - n);
      }),
      (i.prototype.setFade = function () {
        var i,
          s = this;
        s.$slides.each(function (n, o) {
          (i = -1 * s.slideWidth * n),
            !0 === s.options.rtl
              ? e(o).css({ position: 'relative', right: i, top: 0, zIndex: 800, opacity: 0 })
              : e(o).css({ position: 'relative', left: i, top: 0, zIndex: 800, opacity: 0 });
        }),
          s.$slides.eq(s.currentSlide).css({ zIndex: 900, opacity: 1 });
      }),
      (i.prototype.setHeight = function () {
        var e;
        1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical &&
          ((e = this.$slides.eq(this.currentSlide).outerHeight(!0)), this.$list.css('height', e));
      }),
      (i.prototype.setPosition = function () {
        this.setDimensions(),
          this.setHeight(),
          !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(),
          null !== this.options.onSetPosition && this.options.onSetPosition.call(this, this);
      }),
      (i.prototype.setProps = function () {
        var e = this,
          i = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? 'top' : 'left'),
          'top' === e.positionProp ? e.$slider.addClass('slick-vertical') : e.$slider.removeClass('slick-vertical'),
          (void 0 === i.WebkitTransition && void 0 === i.MozTransition && void 0 === i.msTransition) ||
            !0 !== e.options.useCSS ||
            (e.cssTransitions = !0),
          void 0 !== i.OTransform &&
            ((e.animType = 'OTransform'),
            (e.transformType = '-o-transform'),
            (e.transitionType = 'OTransition'),
            void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)),
          void 0 !== i.MozTransform &&
            ((e.animType = 'MozTransform'),
            (e.transformType = '-moz-transform'),
            (e.transitionType = 'MozTransition'),
            void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (e.animType = !1)),
          void 0 !== i.webkitTransform &&
            ((e.animType = 'webkitTransform'),
            (e.transformType = '-webkit-transform'),
            (e.transitionType = 'webkitTransition'),
            void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)),
          void 0 !== i.msTransform &&
            ((e.animType = 'msTransform'),
            (e.transformType = '-ms-transform'),
            (e.transitionType = 'msTransition'),
            void 0 === i.msTransform && (e.animType = !1)),
          void 0 !== i.transform &&
            !1 !== e.animType &&
            ((e.animType = 'transform'), (e.transformType = 'transform'), (e.transitionType = 'transition')),
          (e.transformsEnabled = null !== e.animType && !1 !== e.animType);
      }),
      (i.prototype.setSlideClasses = function (e) {
        var i, s, n, o;
        this.$slider.find('.slick-slide').removeClass('slick-active').removeClass('slick-center'),
          (s = this.$slider.find('.slick-slide')),
          !0 === this.options.centerMode
            ? ((i = Math.floor(this.options.slidesToShow / 2)),
              !0 === this.options.infinite &&
                (i <= e && e <= this.slideCount - 1 - i
                  ? this.$slides.slice(e - i, e + i + 1).addClass('slick-active')
                  : ((n = this.options.slidesToShow + e), s.slice(n - i + 1, n + i + 2).addClass('slick-active')),
                0 === e
                  ? s.eq(s.length - 1 - this.options.slidesToShow).addClass('slick-center')
                  : e === this.slideCount - 1 && s.eq(this.options.slidesToShow).addClass('slick-center')),
              this.$slides.eq(e).addClass('slick-center'))
            : 0 <= e && e <= this.slideCount - this.options.slidesToShow
            ? this.$slides.slice(e, e + this.options.slidesToShow).addClass('slick-active')
            : s.length <= this.options.slidesToShow
            ? s.addClass('slick-active')
            : ((o = this.slideCount % this.options.slidesToShow),
              (n = !0 === this.options.infinite ? this.options.slidesToShow + e : e),
              this.options.slidesToShow == this.options.slidesToScroll &&
              this.slideCount - e < this.options.slidesToShow
                ? s.slice(n - (this.options.slidesToShow - o), n + o).addClass('slick-active')
                : s.slice(n, n + this.options.slidesToShow).addClass('slick-active')),
          'ondemand' === this.options.lazyLoad && this.lazyLoad();
      }),
      (i.prototype.setupInfinite = function () {
        var i,
          s,
          n,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite && !1 === o.options.fade && ((s = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, i = o.slideCount;
            i > o.slideCount - n;
            --i
          )
            (s = i - 1),
              e(o.$slides[s])
                .clone(!0)
                .attr('id', '')
                .attr('index', s - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass('slick-cloned');
          for (i = 0; i < n; i += 1)
            (s = i),
              e(o.$slides[s])
                .clone(!0)
                .attr('id', '')
                .attr('index', s + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass('slick-cloned');
          o.$slideTrack
            .find('.slick-cloned')
            .find('[id]')
            .each(function () {
              e(this).attr('id', '');
            });
        }
      }),
      (i.prototype.selectHandler = function (i) {
        var s = (s = parseInt(e(i.target).parents('.slick-slide').attr('index'))) || 0;
        return this.slideCount <= this.options.slidesToShow
          ? (this.$slider.find('.slick-slide').removeClass('slick-active'),
            this.$slides.eq(s).addClass('slick-active'),
            !0 === this.options.centerMode &&
              (this.$slider.find('.slick-slide').removeClass('slick-center'),
              this.$slides.eq(s).addClass('slick-center')),
            void this.asNavFor(s))
          : void this.slideHandler(s);
      }),
      (i.prototype.slideHandler = function (e, i, s) {
        var n,
          o,
          r,
          a,
          l = null,
          c = this;
        return (
          (i = i || !1),
          (!0 === c.animating && !0 === c.options.waitForAnimate) ||
          (!0 === c.options.fade && c.currentSlide === e) ||
          c.slideCount <= c.options.slidesToShow
            ? void 0
            : (!1 === i && c.asNavFor(e),
              (n = e),
              (l = c.getLeft(n)),
              (a = c.getLeft(c.currentSlide)),
              (c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft),
              (!1 === c.options.infinite &&
                !1 === c.options.centerMode &&
                (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) ||
              (!1 === c.options.infinite &&
                !0 === c.options.centerMode &&
                (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                ? void (
                    !1 === c.options.fade &&
                    ((n = c.currentSlide),
                    !0 !== s
                      ? c.animateSlide(a, function () {
                          c.postSlide(n);
                        })
                      : c.postSlide(n))
                  )
                : (!0 === c.options.autoplay && clearInterval(c.autoPlayTimer),
                  (o =
                    n < 0
                      ? 0 != c.slideCount % c.options.slidesToScroll
                        ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                        : c.slideCount + n
                      : n >= c.slideCount
                      ? 0 != c.slideCount % c.options.slidesToScroll
                        ? 0
                        : n - c.slideCount
                      : n),
                  (c.animating = !0),
                  null !== c.options.onBeforeChange &&
                    e !== c.currentSlide &&
                    c.options.onBeforeChange.call(this, c, c.currentSlide, o),
                  (r = c.currentSlide),
                  (c.currentSlide = o),
                  c.setSlideClasses(c.currentSlide),
                  c.updateDots(),
                  c.updateArrows(),
                  !0 === c.options.fade
                    ? void (!0 !== s
                        ? c.fadeSlide(r, o, function () {
                            c.postSlide(o);
                          })
                        : c.postSlide(o))
                    : void (!0 !== s
                        ? c.animateSlide(l, function () {
                            c.postSlide(o);
                          })
                        : c.postSlide(o))))
        );
      }),
      (i.prototype.startLoad = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.hide(), this.$nextArrow.hide()),
          !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.hide(),
          this.$slider.addClass('slick-loading');
      }),
      (i.prototype.swipeDirection = function () {
        var e,
          i = this.touchObject.startX - this.touchObject.curX;
        return (
          (e = Math.round((180 * Math.atan2(this.touchObject.startY - this.touchObject.curY, i)) / Math.PI)) < 0 &&
            (e = 360 - Math.abs(e)),
          (e <= 45 && 0 <= e) || (e <= 360 && 315 <= e)
            ? !1 === this.options.rtl
              ? 'left'
              : 'right'
            : 135 <= e && e <= 225
            ? !1 === this.options.rtl
              ? 'right'
              : 'left'
            : 'vertical'
        );
      }),
      (i.prototype.swipeEnd = function () {
        var e = this;
        if (((e.dragging = !1), (e.shouldClick = !(10 < e.touchObject.swipeLength)), void 0 === e.touchObject.curX))
          return !1;
        if (e.touchObject.swipeLength >= e.touchObject.minSwipe)
          switch (e.swipeDirection()) {
            case 'left':
              e.slideHandler(e.currentSlide + e.getSlideCount()), (e.currentDirection = 0), (e.touchObject = {});
              break;
            case 'right':
              e.slideHandler(e.currentSlide - e.getSlideCount()), (e.currentDirection = 1), (e.touchObject = {});
          }
        else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), (e.touchObject = {}));
      }),
      (i.prototype.swipeHandler = function (e) {
        var i = this;
        if (
          !(
            !1 === i.options.swipe ||
            ('ontouchend' in document && !1 === i.options.swipe) ||
            (!1 === i.options.draggable && -1 !== e.type.indexOf('mouse'))
          )
        )
          switch (
            ((i.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
            (i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold),
            e.data.action)
          ) {
            case 'start':
              i.swipeStart(e);
              break;
            case 'move':
              i.swipeMove(e);
              break;
            case 'end':
              i.swipeEnd(e);
          }
      }),
      (i.prototype.swipeMove = function (e) {
        var i,
          s,
          n = this,
          o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return (
          !(!n.dragging || (o && 1 !== o.length)) &&
          ((i = n.getLeft(n.currentSlide)),
          (n.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX),
          (n.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY),
          (n.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(n.touchObject.curX - n.touchObject.startX, 2)))),
          'vertical' !== n.swipeDirection()
            ? (void 0 !== e.originalEvent && 4 < n.touchObject.swipeLength && e.preventDefault(),
              (s = (!1 === n.options.rtl ? 1 : -1) * (n.touchObject.curX > n.touchObject.startX ? 1 : -1)),
              (n.swipeLeft =
                !1 === n.options.vertical
                  ? i + n.touchObject.swipeLength * s
                  : i + n.touchObject.swipeLength * (n.$list.height() / n.listWidth) * s),
              !0 !== n.options.fade &&
                !1 !== n.options.touchMove &&
                (!0 === n.animating ? ((n.swipeLeft = null), !1) : void n.setCSS(n.swipeLeft)))
            : void 0)
        );
      }),
      (i.prototype.swipeStart = function (e) {
        var i,
          s = this;
        return 1 !== s.touchObject.fingerCount || s.slideCount <= s.options.slidesToShow
          ? ((s.touchObject = {}), !1)
          : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]),
            (s.touchObject.startX = s.touchObject.curX = void 0 !== i ? i.pageX : e.clientX),
            (s.touchObject.startY = s.touchObject.curY = void 0 !== i ? i.pageY : e.clientY),
            void (s.dragging = !0));
      }),
      (i.prototype.unfilterSlides = function () {
        null !== this.$slidesCache &&
          (this.unload(),
          this.$slideTrack.children(this.options.slide).detach(),
          this.$slidesCache.appendTo(this.$slideTrack),
          this.reinit());
      }),
      (i.prototype.unload = function () {
        e('.slick-cloned', this.$slider).remove(),
          this.$dots && this.$dots.remove(),
          this.$prevArrow && 'object' != typeof this.options.prevArrow && this.$prevArrow.remove(),
          this.$nextArrow && 'object' != typeof this.options.nextArrow && this.$nextArrow.remove(),
          this.$slides.removeClass('slick-slide slick-active slick-visible').css('width', '');
      }),
      (i.prototype.updateArrows = function () {
        var e = Math.floor(this.options.slidesToShow / 2);
        !0 === this.options.arrows &&
          !0 !== this.options.infinite &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.removeClass('slick-disabled'),
          this.$nextArrow.removeClass('slick-disabled'),
          0 === this.currentSlide
            ? (this.$prevArrow.addClass('slick-disabled'), this.$nextArrow.removeClass('slick-disabled'))
            : ((this.currentSlide >= this.slideCount - this.options.slidesToShow && !1 === this.options.centerMode) ||
                (this.currentSlide > this.slideCount - this.options.slidesToShow + e &&
                  !0 === this.options.centerMode)) &&
              (this.$nextArrow.addClass('slick-disabled'), this.$prevArrow.removeClass('slick-disabled')));
      }),
      (i.prototype.updateDots = function () {
        null !== this.$dots &&
          (this.$dots.find('li').removeClass('slick-active'),
          this.$dots
            .find('li')
            .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
            .addClass('slick-active'));
      }),
      (e.fn.slick = function (e) {
        return this.each(function (s, n) {
          n.slick = new i(n, e);
        });
      }),
      (e.fn.slickAdd = function (e, i, s) {
        return this.each(function (n, o) {
          o.slick.addSlide(e, i, s);
        });
      }),
      (e.fn.slickCurrentSlide = function () {
        return this.get(0).slick.getCurrent();
      }),
      (e.fn.slickFilter = function (e) {
        return this.each(function (i, s) {
          s.slick.filterSlides(e);
        });
      }),
      (e.fn.slickGoTo = function (e, i) {
        return this.each(function (s, n) {
          n.slick.changeSlide({ data: { message: 'index', index: parseInt(e) } }, i);
        });
      }),
      (e.fn.slickNext = function () {
        return this.each(function (e, i) {
          i.slick.changeSlide({ data: { message: 'next' } });
        });
      }),
      (e.fn.slickPause = function () {
        return this.each(function (e, i) {
          i.slick.autoPlayClear(), (i.slick.paused = !0);
        });
      }),
      (e.fn.slickPlay = function () {
        return this.each(function (e, i) {
          (i.slick.paused = !1), i.slick.autoPlay();
        });
      }),
      (e.fn.slickPrev = function () {
        return this.each(function (e, i) {
          i.slick.changeSlide({ data: { message: 'previous' } });
        });
      }),
      (e.fn.slickRemove = function (e, i) {
        return this.each(function (s, n) {
          n.slick.removeSlide(e, i);
        });
      }),
      (e.fn.slickRemoveAll = function () {
        return this.each(function (e, i) {
          i.slick.removeSlide(null, null, !0);
        });
      }),
      (e.fn.slickGetOption = function (e) {
        return this.get(0).slick.options[e];
      }),
      (e.fn.slickSetOption = function (e, i, s) {
        return this.each(function (n, o) {
          (o.slick.options[e] = i), !0 === s && (o.slick.unload(), o.slick.reinit());
        });
      }),
      (e.fn.slickUnfilter = function () {
        return this.each(function (e, i) {
          i.slick.unfilterSlides();
        });
      }),
      (e.fn.unslick = function () {
        return this.each(function (e, i) {
          i.slick && i.slick.destroy();
        });
      }),
      (e.fn.getSlick = function () {
        var e = null;
        return (
          this.each(function (i, s) {
            e = s.slick;
          }),
          e
        );
      });
  }),
  function () {
    function e(e, n) {
      var o,
        r,
        a,
        l,
        c,
        h = e(n),
        d = 0 <= i.call(n, 'ontouchstart'),
        u = { horizontal: {}, vertical: {} },
        p = {},
        f = 'waypoints-context-id',
        g = 'resize.waypoints',
        m = 'scroll.waypoints',
        v = (a = 1),
        b = 'waypoints-waypoint-ids',
        y = 'waypoint',
        w = 'waypoints';
      return (
        (C.prototype.doScroll = function () {
          var i = this,
            s = {
              horizontal: {
                newScroll: this.$element.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: 'right',
                backward: 'left',
              },
              vertical: {
                newScroll: this.$element.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: 'down',
                backward: 'up',
              },
            };
          return (
            !d || (s.vertical.oldScroll && s.vertical.newScroll) || e[w]('refresh'),
            e.each(s, function (s, n) {
              var o = [],
                r = n.newScroll > n.oldScroll,
                a = r ? n.forward : n.backward;
              return (
                e.each(i.waypoints[s], function (e, i) {
                  var s, r;
                  return (n.oldScroll < (s = i.offset) && s <= n.newScroll) ||
                    (n.newScroll < (r = i.offset) && r <= n.oldScroll)
                    ? o.push(i)
                    : void 0;
                }),
                o.sort(function (e, i) {
                  return e.offset - i.offset;
                }),
                r || o.reverse(),
                e.each(o, function (e, i) {
                  return i.options.continuous || e === o.length - 1 ? i.trigger([a]) : void 0;
                })
              );
            }),
            (this.oldScroll = { x: s.horizontal.newScroll, y: s.vertical.newScroll })
          );
        }),
        (C.prototype.refresh = function () {
          var i,
            s = this,
            n = e.isWindow(this.element),
            o = this.$element.offset();
          return (
            this.doScroll(),
            (i = {
              horizontal: {
                contextOffset: n ? 0 : o.left,
                contextScroll: n ? 0 : this.oldScroll.x,
                contextDimension: this.$element.width(),
                oldScroll: this.oldScroll.x,
                forward: 'right',
                backward: 'left',
                offsetProp: 'left',
              },
              vertical: {
                contextOffset: n ? 0 : o.top,
                contextScroll: n ? 0 : this.oldScroll.y,
                contextDimension: n ? e[w]('viewportHeight') : this.$element.height(),
                oldScroll: this.oldScroll.y,
                forward: 'down',
                backward: 'up',
                offsetProp: 'top',
              },
            }),
            e.each(i, function (i, n) {
              return e.each(s.waypoints[i], function (i, s) {
                var o,
                  r,
                  a = s.options.offset,
                  l = s.offset,
                  c = e.isWindow(s.element) ? 0 : s.$element.offset()[n.offsetProp];
                return (
                  e.isFunction(a)
                    ? (a = a.apply(s.element))
                    : 'string' == typeof a &&
                      ((a = parseFloat(a)),
                      -1 < s.options.offset.indexOf('%') && (a = Math.ceil((n.contextDimension * a) / 100))),
                  (s.offset = c - n.contextOffset + n.contextScroll - a),
                  (s.options.onlyOnScroll && null != l) || !s.enabled
                    ? void 0
                    : null !== l && l < (o = n.oldScroll) && o <= s.offset
                    ? s.trigger([n.backward])
                    : (null !== l && l > (r = n.oldScroll) && r >= s.offset) || (null === l && n.oldScroll >= s.offset)
                    ? s.trigger([n.forward])
                    : void 0
                );
              });
            })
          );
        }),
        (C.prototype.checkEmpty = function () {
          return e.isEmptyObject(this.waypoints.horizontal) && e.isEmptyObject(this.waypoints.vertical)
            ? (this.$element.unbind([g, m].join(' ')), delete p[this.id])
            : void 0;
        }),
        (o = C),
        (x.prototype.trigger = function (e) {
          return this.enabled
            ? (null != this.callback && this.callback.apply(this.element, e),
              this.options.triggerOnce ? this.destroy() : void 0)
            : void 0;
        }),
        (x.prototype.disable = function () {
          return (this.enabled = !1);
        }),
        (x.prototype.enable = function () {
          return this.context.refresh(), (this.enabled = !0);
        }),
        (x.prototype.destroy = function () {
          return (
            delete u[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
          );
        }),
        (x.getWaypointsByElement = function (i) {
          var s, n;
          return (n = i[b])
            ? ((s = e.extend({}, u.horizontal, u.vertical)),
              e.map(n, function (e) {
                return s[e];
              }))
            : [];
        }),
        (r = x),
        (c = {
          init: function (i, s) {
            return (
              null == (s = e.extend({}, e.fn[y].defaults, s)).handler && (s.handler = i),
              this.each(function () {
                var i,
                  n,
                  a = e(this),
                  l = null != (n = s.context) ? n : e.fn[y].defaults.context;
                return e.isWindow(l) || (l = a.closest(l)), (i = p[(l = e(l))[0][f]]) || (i = new o(l)), new r(a, i, s);
              }),
              e[w]('refresh'),
              this
            );
          },
          disable: function () {
            return c._invoke.call(this, 'disable');
          },
          enable: function () {
            return c._invoke.call(this, 'enable');
          },
          destroy: function () {
            return c._invoke.call(this, 'destroy');
          },
          prev: function (e, i) {
            return c._traverse.call(this, e, i, function (e, i, s) {
              return 0 < i ? e.push(s[i - 1]) : void 0;
            });
          },
          next: function (e, i) {
            return c._traverse.call(this, e, i, function (e, i, s) {
              return i < s.length - 1 ? e.push(s[i + 1]) : void 0;
            });
          },
          _traverse: function (i, s, o) {
            var r, a;
            return (
              null == i && (i = 'vertical'),
              null == s && (s = n),
              (a = l.aggregate(s)),
              (r = []),
              this.each(function () {
                return o(r, e.inArray(this, a[i]), a[i]);
              }),
              this.pushStack(r)
            );
          },
          _invoke: function (i) {
            return (
              this.each(function () {
                var s = r.getWaypointsByElement(this);
                return e.each(s, function (e, s) {
                  return s[i](), !0;
                });
              }),
              this
            );
          },
        }),
        (e.fn[y] = function () {
          var i = arguments[0],
            n = 2 <= arguments.length ? s.call(arguments, 1) : [];
          return c[i]
            ? c[i].apply(this, n)
            : e.isFunction(i)
            ? c.init.apply(this, arguments)
            : e.isPlainObject(i)
            ? c.init.apply(this, [null, i])
            : i
            ? e.error('The ' + i + ' method does not exist in jQuery Waypoints.')
            : e.error('jQuery Waypoints needs a callback function or handler option.');
        }),
        (e.fn[y].defaults = { context: n, continuous: !0, enabled: !0, horizontal: !1, offset: 0, triggerOnce: !1 }),
        (l = {
          refresh: function () {
            return e.each(p, function (e, i) {
              return i.refresh();
            });
          },
          viewportHeight: function () {
            var e;
            return null != (e = n.innerHeight) ? e : h.height();
          },
          aggregate: function (i) {
            var s,
              n,
              o = u;
            return (
              i && (o = null != (n = p[e(i)[0][f]]) ? n.waypoints : void 0),
              o
                ? ((s = { horizontal: [], vertical: [] }),
                  e.each(s, function (i, n) {
                    return (
                      e.each(o[i], function (e, i) {
                        return n.push(i);
                      }),
                      n.sort(function (e, i) {
                        return e.offset - i.offset;
                      }),
                      (s[i] = e.map(n, function (e) {
                        return e.element;
                      })),
                      (s[i] = e.unique(s[i]))
                    );
                  }),
                  s)
                : []
            );
          },
          above: function (e) {
            return (
              null == e && (e = n),
              l._filter(e, 'vertical', function (e, i) {
                return i.offset <= e.oldScroll.y;
              })
            );
          },
          below: function (e) {
            return (
              null == e && (e = n),
              l._filter(e, 'vertical', function (e, i) {
                return i.offset > e.oldScroll.y;
              })
            );
          },
          left: function (e) {
            return (
              null == e && (e = n),
              l._filter(e, 'horizontal', function (e, i) {
                return i.offset <= e.oldScroll.x;
              })
            );
          },
          right: function (e) {
            return (
              null == e && (e = n),
              l._filter(e, 'horizontal', function (e, i) {
                return i.offset > e.oldScroll.x;
              })
            );
          },
          enable: function () {
            return l._invoke('enable');
          },
          disable: function () {
            return l._invoke('disable');
          },
          destroy: function () {
            return l._invoke('destroy');
          },
          extendFn: function (e, i) {
            return (c[e] = i);
          },
          _invoke: function (i) {
            var s = e.extend({}, u.vertical, u.horizontal);
            return e.each(s, function (e, s) {
              return s[i](), !0;
            });
          },
          _filter: function (i, s, n) {
            var o, r;
            return (o = p[e(i)[0][f]])
              ? ((r = []),
                e.each(o.waypoints[s], function (e, i) {
                  return n(o, i) ? r.push(i) : void 0;
                }),
                r.sort(function (e, i) {
                  return e.offset - i.offset;
                }),
                e.map(r, function (e) {
                  return e.element;
                }))
              : [];
          },
        }),
        (e[w] = function () {
          var e = arguments[0],
            i = 2 <= arguments.length ? s.call(arguments, 1) : [];
          return l[e] ? l[e].apply(null, i) : l.aggregate.call(null, e);
        }),
        (e[w].settings = { resizeThrottle: 100, scrollThrottle: 30 }),
        h.on('load.waypoints', function () {
          return e[w]('refresh');
        })
      );
      function x(i, s, n) {
        var o, r;
        'bottom-in-view' === n.offset &&
          (n.offset = function () {
            var i = e[w]('viewportHeight');
            return e.isWindow(s.element) || (i = s.$element.height()), i - e(this).outerHeight();
          }),
          (this.$element = i),
          (this.element = i[0]),
          (this.axis = n.horizontal ? 'horizontal' : 'vertical'),
          (this.callback = n.handler),
          (this.context = s),
          (this.enabled = n.enabled),
          (this.id = 'waypoints' + v++),
          (this.offset = null),
          (this.options = n),
          (s.waypoints[this.axis][this.id] = this),
          (o = null != (r = (u[this.axis][this.id] = this).element[b]) ? r : []).push(this.id),
          (this.element[b] = o);
      }
      function C(i) {
        var s = this;
        (this.$element = i),
          (this.element = i[0]),
          (this.didResize = !1),
          (this.didScroll = !1),
          (this.id = 'context' + a++),
          (this.oldScroll = { x: i.scrollLeft(), y: i.scrollTop() }),
          (this.waypoints = { horizontal: {}, vertical: {} }),
          (this.element[f] = this.id),
          (p[this.id] = this),
          i.bind(m, function () {
            var i;
            return s.didScroll || d
              ? void 0
              : ((s.didScroll = !0),
                (i = function () {
                  return s.doScroll(), (s.didScroll = !1);
                }),
                n.setTimeout(i, e[w].settings.scrollThrottle));
          }),
          i.bind(g, function () {
            var i;
            return s.didResize
              ? void 0
              : ((s.didResize = !0),
                (i = function () {
                  return e[w]('refresh'), (s.didResize = !1);
                }),
                n.setTimeout(i, e[w].settings.resizeThrottle));
          });
      }
    }
    var i =
        [].indexOf ||
        function (e) {
          for (var i = 0, s = this.length; i < s; i++) if (i in this && this[i] === e) return i;
          return -1;
        },
      s = [].slice,
      n = window;
    'function' == typeof define && define.amd
      ? define('waypoints', ['jquery'], function (i) {
          return e(i, n);
        })
      : e(n.jQuery, n);
  }.call(this),
  (function (e) {
    void 0 === e.fn.each2 &&
      e.extend(e.fn, {
        each2: function (i) {
          for (
            var s = e([0]), n = -1, o = this.length;
            ++n < o && (s.context = s[0] = this[n]) && !1 !== i.call(s[0], n, s);

          );
          return this;
        },
      });
  })(jQuery),
  (function (e, i) {
    'use strict';
    var s, n, o, r, a, l, c, h, d, u, p;
    function f(i) {
      var s = e(document.createTextNode(''));
      i.before(s), s.before(i), s.remove();
    }
    function g(e) {
      return e.replace(/[^\u0000-\u007E]/g, function (e) {
        return l[e] || e;
      });
    }
    function m(e, i) {
      for (var s = 0, n = i.length; s < n; s += 1) if (v(e, i[s])) return s;
      return -1;
    }
    function v(e, s) {
      return (
        e === s ||
        (e !== i &&
          s !== i &&
          null !== e &&
          null !== s &&
          (e.constructor === String ? e + '' == s + '' : s.constructor === String && s + '' == e + ''))
      );
    }
    function b(e, i, s) {
      var n, o, r;
      if (null === e || e.length < 1) return [];
      for (o = 0, r = (n = e.split(i)).length; o < r; o += 1) n[o] = s(n[o]);
      return n;
    }
    function y(e) {
      return e.outerWidth(!1) - e.width();
    }
    function w(s) {
      var n = 'keyup-change-value';
      s.on('keydown', function () {
        e.data(s, n) === i && e.data(s, n, s.val());
      }),
        s.on('keyup', function () {
          var o = e.data(s, n);
          o !== i && s.val() !== o && (e.removeData(s, n), s.trigger('keyup-change'));
        });
    }
    function x(e, s, n) {
      var o;
      return (
        (n = n || i),
        function () {
          var i = arguments;
          window.clearTimeout(o),
            (o = window.setTimeout(function () {
              s.apply(n, i);
            }, e));
        }
      );
    }
    function C(e) {
      e.preventDefault(), e.stopPropagation();
    }
    function k(i, s, n) {
      var o,
        r,
        a = [];
      (o = e.trim(i.attr('class'))) &&
        e((o = '' + o).split(/\s+/)).each2(function () {
          0 === this.indexOf('select2-') && a.push(this);
        }),
        (o = e.trim(s.attr('class'))) &&
          e((o = '' + o).split(/\s+/)).each2(function () {
            0 !== this.indexOf('select2-') && (r = n(this)) && a.push(r);
          }),
        i.attr('class', a.join(' '));
    }
    function _(e, i, s, n) {
      var o = g(e.toUpperCase()).indexOf(g(i.toUpperCase())),
        r = i.length;
      return o < 0
        ? void s.push(n(e))
        : (s.push(n(e.substring(0, o))),
          s.push("<span class='select2-match'>"),
          s.push(n(e.substring(o, o + r))),
          s.push('</span>'),
          void s.push(n(e.substring(o + r, e.length))));
    }
    function S(e) {
      var i = { '\\': '&#92;', '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#47;' };
      return String(e).replace(/[&<>"'\/\\]/g, function (e) {
        return i[e];
      });
    }
    function T(s) {
      var n,
        o = null,
        r = s.quietMillis || 100,
        a = s.url,
        l = this;
      return function (c) {
        window.clearTimeout(n),
          (n = window.setTimeout(function () {
            var n = s.data,
              r = a,
              h = s.transport || e.fn.select2.ajaxDefaults.transport,
              d = {
                type: s.type || 'GET',
                cache: s.cache || !1,
                jsonpCallback: s.jsonpCallback || i,
                dataType: s.dataType || 'json',
              },
              u = e.extend({}, e.fn.select2.ajaxDefaults.params, d);
            (n = n ? n.call(l, c.term, c.page, c.context) : null),
              (r = 'function' == typeof r ? r.call(l, c.term, c.page, c.context) : r),
              o && 'function' == typeof o.abort && o.abort(),
              s.params && (e.isFunction(s.params) ? e.extend(u, s.params.call(l)) : e.extend(u, s.params)),
              e.extend(u, {
                url: r,
                dataType: s.dataType,
                data: n,
                success: function (e) {
                  var i = s.results(e, c.page, c);
                  c.callback(i);
                },
                error: function (e, i, s) {
                  c.callback({ hasError: !0, jqXHR: e, textStatus: i, errorThrown: s });
                },
              }),
              (o = h.call(l, u));
          }, r));
      };
    }
    function E(i) {
      var s,
        n,
        o = i,
        r = function (e) {
          return '' + e.text;
        };
      e.isArray(o) && (o = { results: (n = o) }),
        !1 === e.isFunction(o) &&
          ((n = o),
          (o = function () {
            return n;
          }));
      var a = o();
      return (
        a.text &&
          ((r = a.text),
          e.isFunction(r) ||
            ((s = a.text),
            (r = function (e) {
              return e[s];
            }))),
        function (i) {
          var s,
            n = i.term,
            a = { results: [] };
          return '' === n
            ? void i.callback(o())
            : ((s = function (o, a) {
                var l, c;
                if ((o = o[0]).children) {
                  for (c in ((l = {}), o)) o.hasOwnProperty(c) && (l[c] = o[c]);
                  (l.children = []),
                    e(o.children).each2(function (e, i) {
                      s(i, l.children);
                    }),
                    (l.children.length || i.matcher(n, r(l), o)) && a.push(l);
                } else i.matcher(n, r(o), o) && a.push(o);
              }),
              e(o().results).each2(function (e, i) {
                s(i, a.results);
              }),
              void i.callback(a));
        }
      );
    }
    function F(s) {
      var n = e.isFunction(s);
      return function (o) {
        var r = o.term,
          a = { results: [] },
          l = n ? s(o) : s;
        e.isArray(l) &&
          (e(l).each(function () {
            var e = this.text !== i,
              s = e ? this.text : this;
            ('' === r || o.matcher(r, s)) && a.results.push(e ? this : { id: this, text: this });
          }),
          o.callback(a));
      };
    }
    function A(i, s) {
      if (e.isFunction(i)) return 1;
      if (i) {
        if ('string' == typeof i) return 1;
        throw Error(s + ' must be a string, function, or falsy value');
      }
    }
    function D(i, s) {
      if (e.isFunction(i)) {
        var n = Array.prototype.slice.call(arguments, 2);
        return i.apply(s, n);
      }
      return i;
    }
    function H() {
      var i = this;
      e.each(arguments, function (e, s) {
        i[s].remove(), (i[s] = null);
      });
    }
    function O(i, s) {
      function n() {}
      return (
        (((n.prototype = new i()).constructor = n).prototype.parent = i.prototype),
        (n.prototype = e.extend(n.prototype, s)),
        n
      );
    }
    window.Select2 === i &&
      ((r = { x: 0, y: 0 }),
      (a = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        HOME: 36,
        END: 35,
        BACKSPACE: 8,
        DELETE: 46,
        isArrow: function (e) {
          switch ((e = e.which ? e.which : e)) {
            case a.LEFT:
            case a.RIGHT:
            case a.UP:
            case a.DOWN:
              return !0;
          }
          return !1;
        },
        isControl: function (e) {
          switch (e.which) {
            case a.SHIFT:
            case a.CTRL:
            case a.ALT:
              return !0;
          }
          return !!e.metaKey;
        },
        isFunctionKey: function (e) {
          return 112 <= (e = e.which ? e.which : e) && e <= 123;
        },
      }),
      (l = {
        '\xe2’\xb6': 'A',
        '\xef\xbc\xa1': 'A',
        '\xc3€': 'A',
        '\xc3\x81': 'A',
        '\xc3‚': 'A',
        '\xe1\xba\xa6': 'A',
        '\xe1\xba\xa4': 'A',
        áºª: 'A',
        '\xe1\xba\xa8': 'A',
        Ãƒ: 'A',
        '\xc4€': 'A',
        '\xc4‚': 'A',
        '\xe1\xba\xb0': 'A',
        '\xe1\xba\xae': 'A',
        '\xe1\xba\xb4': 'A',
        '\xe1\xba\xb2': 'A',
        '\xc8\xa6': 'A',
        '\xc7 ': 'A',
        '\xc3„': 'A',
        Çž: 'A',
        '\xe1\xba\xa2': 'A',
        '\xc3…': 'A',
        Çº: 'A',
        '\xc7\x8d': 'A',
        '\xc8€': 'A',
        '\xc8‚': 'A',
        '\xe1\xba ': 'A',
        '\xe1\xba\xac': 'A',
        '\xe1\xba\xb6': 'A',
        '\xe1\xb8€': 'A',
        '\xc4„': 'A',
        Èº: 'A',
        '\xe2\xb1\xaf': 'A',
        '\xeaœ\xb2': 'AA',
        '\xc3†': 'AE',
        '\xc7\xbc': 'AE',
        '\xc7\xa2': 'AE',
        '\xeaœ\xb4': 'AO',
        '\xeaœ\xb6': 'AU',
        '\xeaœ\xb8': 'AV',
        êœº: 'AV',
        '\xeaœ\xbc': 'AY',
        '\xe2’\xb7': 'B',
        '\xef\xbc\xa2': 'B',
        '\xe1\xb8‚': 'B',
        '\xe1\xb8„': 'B',
        '\xe1\xb8†': 'B',
        Éƒ: 'B',
        '\xc6‚': 'B',
        '\xc6\x81': 'B',
        '\xe2’\xb8': 'C',
        '\xef\xbc\xa3': 'C',
        '\xc4†': 'C',
        Äˆ: 'C',
        ÄŠ: 'C',
        ÄŒ: 'C',
        '\xc3‡': 'C',
        '\xe1\xb8ˆ': 'C',
        '\xc6‡': 'C',
        '\xc8\xbb': 'C',
        '\xeaœ\xbe': 'C',
        '\xe2’\xb9': 'D',
        '\xef\xbc\xa4': 'D',
        '\xe1\xb8Š': 'D',
        ÄŽ: 'D',
        '\xe1\xb8Œ': 'D',
        '\xe1\xb8\x90': 'D',
        '\xe1\xb8’': 'D',
        '\xe1\xb8Ž': 'D',
        '\xc4\x90': 'D',
        '\xc6‹': 'D',
        ÆŠ: 'D',
        '\xc6‰': 'D',
        '\xea\x9d\xb9': 'D',
        '\xc7\xb1': 'DZ',
        '\xc7„': 'DZ',
        '\xc7\xb2': 'Dz',
        '\xc7…': 'Dz',
        '\xe2’\xba': 'E',
        '\xef\xbc\xa5': 'E',
        Ãˆ: 'E',
        '\xc3‰': 'E',
        ÃŠ: 'E',
        '\xe1\xbb€': 'E',
        '\xe1\xba\xbe': 'E',
        '\xe1\xbb„': 'E',
        '\xe1\xbb‚': 'E',
        '\xe1\xba\xbc': 'E',
        '\xc4’': 'E',
        '\xe1\xb8”': 'E',
        '\xe1\xb8–': 'E',
        '\xc4”': 'E',
        '\xc4–': 'E',
        '\xc3‹': 'E',
        áºº: 'E',
        Äš: 'E',
        '\xc8„': 'E',
        '\xc8†': 'E',
        '\xe1\xba\xb8': 'E',
        '\xe1\xbb†': 'E',
        '\xc8\xa8': 'E',
        '\xe1\xb8œ': 'E',
        '\xc4˜': 'E',
        '\xe1\xb8˜': 'E',
        '\xe1\xb8š': 'E',
        '\xc6\x90': 'E',
        ÆŽ: 'E',
        '\xe2’\xbb': 'F',
        '\xef\xbc\xa6': 'F',
        '\xe1\xb8ž': 'F',
        '\xc6‘': 'F',
        '\xea\x9d\xbb': 'F',
        '\xe2’\xbc': 'G',
        '\xef\xbc\xa7': 'G',
        '\xc7\xb4': 'G',
        Äœ: 'G',
        '\xe1\xb8 ': 'G',
        Äž: 'G',
        '\xc4 ': 'G',
        '\xc7\xa6': 'G',
        '\xc4\xa2': 'G',
        '\xc7\xa4': 'G',
        '\xc6“': 'G',
        '\xeaž ': 'G',
        '\xea\x9d\xbd': 'G',
        '\xea\x9d\xbe': 'G',
        '\xe2’\xbd': 'H',
        '\xef\xbc\xa8': 'H',
        '\xc4\xa4': 'H',
        '\xe1\xb8\xa2': 'H',
        '\xe1\xb8\xa6': 'H',
        Èž: 'H',
        '\xe1\xb8\xa4': 'H',
        '\xe1\xb8\xa8': 'H',
        '\xe1\xb8\xaa': 'H',
        '\xc4\xa6': 'H',
        '\xe2\xb1\xa7': 'H',
        '\xe2\xb1\xb5': 'H',
        '\xeaž\x8d': 'H',
        '\xe2’\xbe': 'I',
        '\xef\xbc\xa9': 'I',
        ÃŒ: 'I',
        '\xc3\x8d': 'I',
        ÃŽ: 'I',
        '\xc4\xa8': 'I',
        Äª: 'I',
        '\xc4\xac': 'I',
        '\xc4\xb0': 'I',
        '\xc3\x8f': 'I',
        '\xe1\xb8\xae': 'I',
        '\xe1\xbbˆ': 'I',
        '\xc7\x8f': 'I',
        Èˆ: 'I',
        ÈŠ: 'I',
        '\xe1\xbbŠ': 'I',
        '\xc4\xae': 'I',
        '\xe1\xb8\xac': 'I',
        '\xc6—': 'I',
        '\xe2’\xbf': 'J',
        '\xef\xbc\xaa': 'J',
        '\xc4\xb4': 'J',
        Éˆ: 'J',
        '\xe2“€': 'K',
        '\xef\xbc\xab': 'K',
        '\xe1\xb8\xb0': 'K',
        '\xc7\xa8': 'K',
        '\xe1\xb8\xb2': 'K',
        '\xc4\xb6': 'K',
        '\xe1\xb8\xb4': 'K',
        '\xc6˜': 'K',
        '\xe2\xb1\xa9': 'K',
        '\xea\x9d€': 'K',
        '\xea\x9d‚': 'K',
        '\xea\x9d„': 'K',
        '\xeaž\xa2': 'K',
        '\xe2“\x81': 'L',
        '\xef\xbc\xac': 'L',
        '\xc4\xbf': 'L',
        '\xc4\xb9': 'L',
        '\xc4\xbd': 'L',
        '\xe1\xb8\xb6': 'L',
        '\xe1\xb8\xb8': 'L',
        '\xc4\xbb': 'L',
        '\xe1\xb8\xbc': 'L',
        '\xe1\xb8\xba': 'L',
        '\xc5\x81': 'L',
        '\xc8\xbd': 'L',
        '\xe2\xb1\xa2': 'L',
        '\xe2\xb1 ': 'L',
        '\xea\x9dˆ': 'L',
        '\xea\x9d†': 'L',
        '\xeaž€': 'L',
        '\xc7‡': 'LJ',
        Çˆ: 'Lj',
        '\xe2“‚': 'M',
        '\xef\xbc\xad': 'M',
        '\xe1\xb8\xbe': 'M',
        '\xe1\xb9€': 'M',
        '\xe1\xb9‚': 'M',
        '\xe2\xb1\xae': 'M',
        Æœ: 'M',
        '\xe2“ƒ': 'N',
        '\xef\xbc\xae': 'N',
        '\xc7\xb8': 'N',
        Åƒ: 'N',
        '\xc3‘': 'N',
        '\xe1\xb9„': 'N',
        '\xc5‡': 'N',
        '\xe1\xb9†': 'N',
        '\xc5…': 'N',
        '\xe1\xb9Š': 'N',
        '\xe1\xb9ˆ': 'N',
        '\xc8 ': 'N',
        '\xc6\x9d': 'N',
        '\xeaž\x90': 'N',
        '\xeaž\xa4': 'N',
        ÇŠ: 'NJ',
        '\xc7‹': 'Nj',
        '\xe2“„': 'O',
        '\xef\xbc\xaf': 'O',
        '\xc3’': 'O',
        '\xc3“': 'O',
        '\xc3”': 'O',
        '\xe1\xbb’': 'O',
        '\xe1\xbb\x90': 'O',
        '\xe1\xbb–': 'O',
        '\xe1\xbb”': 'O',
        '\xc3•': 'O',
        '\xe1\xb9Œ': 'O',
        '\xc8\xac': 'O',
        '\xe1\xb9Ž': 'O',
        ÅŒ: 'O',
        '\xe1\xb9\x90': 'O',
        '\xe1\xb9’': 'O',
        ÅŽ: 'O',
        '\xc8\xae': 'O',
        '\xc8\xb0': 'O',
        '\xc3–': 'O',
        Èª: 'O',
        '\xe1\xbbŽ': 'O',
        '\xc5\x90': 'O',
        '\xc7‘': 'O',
        ÈŒ: 'O',
        ÈŽ: 'O',
        '\xc6 ': 'O',
        '\xe1\xbbœ': 'O',
        '\xe1\xbbš': 'O',
        '\xe1\xbb ': 'O',
        '\xe1\xbbž': 'O',
        '\xe1\xbb\xa2': 'O',
        '\xe1\xbbŒ': 'O',
        '\xe1\xbb˜': 'O',
        Çª: 'O',
        '\xc7\xac': 'O',
        '\xc3˜': 'O',
        '\xc7\xbe': 'O',
        '\xc6†': 'O',
        ÆŸ: 'O',
        '\xea\x9dŠ': 'O',
        '\xea\x9dŒ': 'O',
        '\xc6\xa2': 'OI',
        '\xea\x9dŽ': 'OO',
        '\xc8\xa2': 'OU',
        '\xe2“…': 'P',
        '\xef\xbc\xb0': 'P',
        '\xe1\xb9”': 'P',
        '\xe1\xb9–': 'P',
        '\xc6\xa4': 'P',
        '\xe2\xb1\xa3': 'P',
        '\xea\x9d\x90': 'P',
        '\xea\x9d’': 'P',
        '\xea\x9d”': 'P',
        '\xe2“†': 'Q',
        '\xef\xbc\xb1': 'Q',
        '\xea\x9d–': 'Q',
        '\xea\x9d˜': 'Q',
        ÉŠ: 'Q',
        '\xe2“‡': 'R',
        '\xef\xbc\xb2': 'R',
        '\xc5”': 'R',
        '\xe1\xb9˜': 'R',
        '\xc5˜': 'R',
        '\xc8\x90': 'R',
        '\xc8’': 'R',
        '\xe1\xb9š': 'R',
        '\xe1\xb9œ': 'R',
        '\xc5–': 'R',
        '\xe1\xb9ž': 'R',
        ÉŒ: 'R',
        '\xe2\xb1\xa4': 'R',
        '\xea\x9dš': 'R',
        '\xeaž\xa6': 'R',
        '\xeaž‚': 'R',
        '\xe2“ˆ': 'S',
        '\xef\xbc\xb3': 'S',
        áºž: 'S',
        Åš: 'S',
        '\xe1\xb9\xa4': 'S',
        Åœ: 'S',
        '\xe1\xb9 ': 'S',
        '\xc5 ': 'S',
        '\xe1\xb9\xa6': 'S',
        '\xe1\xb9\xa2': 'S',
        '\xe1\xb9\xa8': 'S',
        '\xc8˜': 'S',
        Åž: 'S',
        '\xe2\xb1\xbe': 'S',
        '\xeaž\xa8': 'S',
        '\xeaž„': 'S',
        '\xe2“‰': 'T',
        '\xef\xbc\xb4': 'T',
        '\xe1\xb9\xaa': 'T',
        '\xc5\xa4': 'T',
        '\xe1\xb9\xac': 'T',
        Èš: 'T',
        '\xc5\xa2': 'T',
        '\xe1\xb9\xb0': 'T',
        '\xe1\xb9\xae': 'T',
        '\xc5\xa6': 'T',
        '\xc6\xac': 'T',
        '\xc6\xae': 'T',
        '\xc8\xbe': 'T',
        '\xeaž†': 'T',
        '\xeaœ\xa8': 'TZ',
        '\xe2“Š': 'U',
        '\xef\xbc\xb5': 'U',
        '\xc3™': 'U',
        Ãš: 'U',
        '\xc3›': 'U',
        '\xc5\xa8': 'U',
        '\xe1\xb9\xb8': 'U',
        Åª: 'U',
        '\xe1\xb9\xba': 'U',
        '\xc5\xac': 'U',
        Ãœ: 'U',
        '\xc7›': 'U',
        '\xc7—': 'U',
        '\xc7•': 'U',
        '\xc7™': 'U',
        '\xe1\xbb\xa6': 'U',
        '\xc5\xae': 'U',
        '\xc5\xb0': 'U',
        '\xc7“': 'U',
        '\xc8”': 'U',
        '\xc8–': 'U',
        '\xc6\xaf': 'U',
        '\xe1\xbb\xaa': 'U',
        '\xe1\xbb\xa8': 'U',
        '\xe1\xbb\xae': 'U',
        '\xe1\xbb\xac': 'U',
        '\xe1\xbb\xb0': 'U',
        '\xe1\xbb\xa4': 'U',
        '\xe1\xb9\xb2': 'U',
        '\xc5\xb2': 'U',
        '\xe1\xb9\xb6': 'U',
        '\xe1\xb9\xb4': 'U',
        '\xc9„': 'U',
        '\xe2“‹': 'V',
        '\xef\xbc\xb6': 'V',
        '\xe1\xb9\xbc': 'V',
        '\xe1\xb9\xbe': 'V',
        '\xc6\xb2': 'V',
        '\xea\x9dž': 'V',
        '\xc9…': 'V',
        '\xea\x9d ': 'VY',
        '\xe2“Œ': 'W',
        '\xef\xbc\xb7': 'W',
        '\xe1\xba€': 'W',
        '\xe1\xba‚': 'W',
        '\xc5\xb4': 'W',
        '\xe1\xba†': 'W',
        '\xe1\xba„': 'W',
        áºˆ: 'W',
        '\xe2\xb1\xb2': 'W',
        '\xe2“\x8d': 'X',
        '\xef\xbc\xb8': 'X',
        áºŠ: 'X',
        áºŒ: 'X',
        '\xe2“Ž': 'Y',
        '\xef\xbc\xb9': 'Y',
        '\xe1\xbb\xb2': 'Y',
        '\xc3\x9d': 'Y',
        '\xc5\xb6': 'Y',
        '\xe1\xbb\xb8': 'Y',
        '\xc8\xb2': 'Y',
        áºŽ: 'Y',
        '\xc5\xb8': 'Y',
        '\xe1\xbb\xb6': 'Y',
        '\xe1\xbb\xb4': 'Y',
        '\xc6\xb3': 'Y',
        ÉŽ: 'Y',
        '\xe1\xbb\xbe': 'Y',
        '\xe2“\x8f': 'Z',
        '\xef\xbc\xba': 'Z',
        '\xc5\xb9': 'Z',
        '\xe1\xba\x90': 'Z',
        '\xc5\xbb': 'Z',
        '\xc5\xbd': 'Z',
        '\xe1\xba’': 'Z',
        '\xe1\xba”': 'Z',
        Æµ: 'Z',
        '\xc8\xa4': 'Z',
        '\xe2\xb1\xbf': 'Z',
        '\xe2\xb1\xab': 'Z',
        '\xea\x9d\xa2': 'Z',
        '\xe2“\x90': 'a',
        '\xef\xbd\x81': 'a',
        áºš: 'a',
        '\xc3 ': 'a',
        '\xc3\xa1': 'a',
        '\xc3\xa2': 'a',
        '\xe1\xba\xa7': 'a',
        '\xe1\xba\xa5': 'a',
        '\xe1\xba\xab': 'a',
        '\xe1\xba\xa9': 'a',
        '\xc3\xa3': 'a',
        '\xc4\x81': 'a',
        Äƒ: 'a',
        '\xe1\xba\xb1': 'a',
        '\xe1\xba\xaf': 'a',
        áºµ: 'a',
        '\xe1\xba\xb3': 'a',
        '\xc8\xa7': 'a',
        '\xc7\xa1': 'a',
        '\xc3\xa4': 'a',
        ÇŸ: 'a',
        '\xe1\xba\xa3': 'a',
        '\xc3\xa5': 'a',
        '\xc7\xbb': 'a',
        ÇŽ: 'a',
        '\xc8\x81': 'a',
        Èƒ: 'a',
        '\xe1\xba\xa1': 'a',
        '\xe1\xba\xad': 'a',
        áº·: 'a',
        '\xe1\xb8\x81': 'a',
        '\xc4…': 'a',
        '\xe2\xb1\xa5': 'a',
        '\xc9\x90': 'a',
        '\xeaœ\xb3': 'aa',
        '\xc3\xa6': 'ae',
        '\xc7\xbd': 'ae',
        '\xc7\xa3': 'ae',
        êœµ: 'ao',
        êœ·: 'au',
        '\xeaœ\xb9': 'av',
        '\xeaœ\xbb': 'av',
        '\xeaœ\xbd': 'ay',
        '\xe2“‘': 'b',
        '\xef\xbd‚': 'b',
        '\xe1\xb8ƒ': 'b',
        '\xe1\xb8…': 'b',
        '\xe1\xb8‡': 'b',
        '\xc6€': 'b',
        Æƒ: 'b',
        '\xc9“': 'b',
        '\xe2“’': 'c',
        '\xef\xbdƒ': 'c',
        '\xc4‡': 'c',
        '\xc4‰': 'c',
        '\xc4‹': 'c',
        '\xc4\x8d': 'c',
        '\xc3\xa7': 'c',
        '\xe1\xb8‰': 'c',
        Æˆ: 'c',
        '\xc8\xbc': 'c',
        '\xeaœ\xbf': 'c',
        '\xe2†„': 'c',
        '\xe2““': 'd',
        '\xef\xbd„': 'd',
        '\xe1\xb8‹': 'd',
        '\xc4\x8f': 'd',
        '\xe1\xb8\x8d': 'd',
        '\xe1\xb8‘': 'd',
        '\xe1\xb8“': 'd',
        '\xe1\xb8\x8f': 'd',
        '\xc4‘': 'd',
        ÆŒ: 'd',
        '\xc9–': 'd',
        '\xc9—': 'd',
        '\xea\x9d\xba': 'd',
        '\xc7\xb3': 'dz',
        '\xc7†': 'dz',
        '\xe2“”': 'e',
        '\xef\xbd…': 'e',
        '\xc3\xa8': 'e',
        '\xc3\xa9': 'e',
        Ãª: 'e',
        '\xe1\xbb\x81': 'e',
        '\xe1\xba\xbf': 'e',
        '\xe1\xbb…': 'e',
        '\xe1\xbbƒ': 'e',
        '\xe1\xba\xbd': 'e',
        '\xc4“': 'e',
        '\xe1\xb8•': 'e',
        '\xe1\xb8—': 'e',
        '\xc4•': 'e',
        '\xc4—': 'e',
        '\xc3\xab': 'e',
        '\xe1\xba\xbb': 'e',
        '\xc4›': 'e',
        '\xc8…': 'e',
        '\xc8‡': 'e',
        '\xe1\xba\xb9': 'e',
        '\xe1\xbb‡': 'e',
        '\xc8\xa9': 'e',
        '\xe1\xb8\x9d': 'e',
        '\xc4™': 'e',
        '\xe1\xb8™': 'e',
        '\xe1\xb8›': 'e',
        '\xc9‡': 'e',
        '\xc9›': 'e',
        '\xc7\x9d': 'e',
        '\xe2“•': 'f',
        '\xef\xbd†': 'f',
        '\xe1\xb8Ÿ': 'f',
        '\xc6’': 'f',
        '\xea\x9d\xbc': 'f',
        '\xe2“–': 'g',
        '\xef\xbd‡': 'g',
        Çµ: 'g',
        '\xc4\x9d': 'g',
        '\xe1\xb8\xa1': 'g',
        ÄŸ: 'g',
        '\xc4\xa1': 'g',
        '\xc7\xa7': 'g',
        '\xc4\xa3': 'g',
        '\xc7\xa5': 'g',
        '\xc9 ': 'g',
        '\xeaž\xa1': 'g',
        '\xe1\xb5\xb9': 'g',
        '\xea\x9d\xbf': 'g',
        '\xe2“—': 'h',
        '\xef\xbdˆ': 'h',
        '\xc4\xa5': 'h',
        '\xe1\xb8\xa3': 'h',
        '\xe1\xb8\xa7': 'h',
        ÈŸ: 'h',
        '\xe1\xb8\xa5': 'h',
        '\xe1\xb8\xa9': 'h',
        '\xe1\xb8\xab': 'h',
        '\xe1\xba–': 'h',
        '\xc4\xa7': 'h',
        '\xe2\xb1\xa8': 'h',
        '\xe2\xb1\xb6': 'h',
        '\xc9\xa5': 'h',
        '\xc6•': 'hv',
        '\xe2“˜': 'i',
        '\xef\xbd‰': 'i',
        '\xc3\xac': 'i',
        '\xc3\xad': 'i',
        '\xc3\xae': 'i',
        '\xc4\xa9': 'i',
        '\xc4\xab': 'i',
        '\xc4\xad': 'i',
        '\xc3\xaf': 'i',
        '\xe1\xb8\xaf': 'i',
        '\xe1\xbb‰': 'i',
        '\xc7\x90': 'i',
        '\xc8‰': 'i',
        '\xc8‹': 'i',
        '\xe1\xbb‹': 'i',
        '\xc4\xaf': 'i',
        '\xe1\xb8\xad': 'i',
        '\xc9\xa8': 'i',
        '\xc4\xb1': 'i',
        '\xe2“™': 'j',
        '\xef\xbdŠ': 'j',
        Äµ: 'j',
        '\xc7\xb0': 'j',
        '\xc9‰': 'j',
        '\xe2“š': 'k',
        '\xef\xbd‹': 'k',
        '\xe1\xb8\xb1': 'k',
        '\xc7\xa9': 'k',
        '\xe1\xb8\xb3': 'k',
        Ä·: 'k',
        '\xe1\xb8\xb5': 'k',
        '\xc6™': 'k',
        '\xe2\xb1\xaa': 'k',
        '\xea\x9d\x81': 'k',
        '\xea\x9dƒ': 'k',
        '\xea\x9d…': 'k',
        '\xeaž\xa3': 'k',
        '\xe2“›': 'l',
        '\xef\xbdŒ': 'l',
        '\xc5€': 'l',
        Äº: 'l',
        '\xc4\xbe': 'l',
        '\xe1\xb8\xb7': 'l',
        '\xe1\xb8\xb9': 'l',
        '\xc4\xbc': 'l',
        '\xe1\xb8\xbd': 'l',
        '\xe1\xb8\xbb': 'l',
        '\xc5\xbf': 'l',
        '\xc5‚': 'l',
        Æš: 'l',
        '\xc9\xab': 'l',
        '\xe2\xb1\xa1': 'l',
        '\xea\x9d‰': 'l',
        '\xeaž\x81': 'l',
        '\xea\x9d‡': 'l',
        '\xc7‰': 'lj',
        '\xe2“œ': 'm',
        '\xef\xbd\x8d': 'm',
        '\xe1\xb8\xbf': 'm',
        '\xe1\xb9\x81': 'm',
        '\xe1\xb9ƒ': 'm',
        '\xc9\xb1': 'm',
        '\xc9\xaf': 'm',
        '\xe2“\x9d': 'n',
        '\xef\xbdŽ': 'n',
        '\xc7\xb9': 'n',
        '\xc5„': 'n',
        '\xc3\xb1': 'n',
        '\xe1\xb9…': 'n',
        Åˆ: 'n',
        '\xe1\xb9‡': 'n',
        '\xc5†': 'n',
        '\xe1\xb9‹': 'n',
        '\xe1\xb9‰': 'n',
        Æž: 'n',
        '\xc9\xb2': 'n',
        '\xc5‰': 'n',
        '\xeaž‘': 'n',
        '\xeaž\xa5': 'n',
        ÇŒ: 'nj',
        '\xe2“ž': 'o',
        '\xef\xbd\x8f': 'o',
        '\xc3\xb2': 'o',
        '\xc3\xb3': 'o',
        '\xc3\xb4': 'o',
        '\xe1\xbb“': 'o',
        '\xe1\xbb‘': 'o',
        '\xe1\xbb—': 'o',
        '\xe1\xbb•': 'o',
        Ãµ: 'o',
        '\xe1\xb9\x8d': 'o',
        '\xc8\xad': 'o',
        '\xe1\xb9\x8f': 'o',
        '\xc5\x8d': 'o',
        '\xe1\xb9‘': 'o',
        '\xe1\xb9“': 'o',
        '\xc5\x8f': 'o',
        '\xc8\xaf': 'o',
        '\xc8\xb1': 'o',
        '\xc3\xb6': 'o',
        '\xc8\xab': 'o',
        '\xe1\xbb\x8f': 'o',
        '\xc5‘': 'o',
        '\xc7’': 'o',
        '\xc8\x8d': 'o',
        '\xc8\x8f': 'o',
        '\xc6\xa1': 'o',
        '\xe1\xbb\x9d': 'o',
        '\xe1\xbb›': 'o',
        '\xe1\xbb\xa1': 'o',
        '\xe1\xbbŸ': 'o',
        '\xe1\xbb\xa3': 'o',
        '\xe1\xbb\x8d': 'o',
        '\xe1\xbb™': 'o',
        '\xc7\xab': 'o',
        '\xc7\xad': 'o',
        '\xc3\xb8': 'o',
        '\xc7\xbf': 'o',
        '\xc9”': 'o',
        '\xea\x9d‹': 'o',
        '\xea\x9d\x8d': 'o',
        Éµ: 'o',
        '\xc6\xa3': 'oi',
        '\xc8\xa3': 'ou',
        '\xea\x9d\x8f': 'oo',
        '\xe2“Ÿ': 'p',
        '\xef\xbd\x90': 'p',
        '\xe1\xb9•': 'p',
        '\xe1\xb9—': 'p',
        '\xc6\xa5': 'p',
        '\xe1\xb5\xbd': 'p',
        '\xea\x9d‘': 'p',
        '\xea\x9d“': 'p',
        '\xea\x9d•': 'p',
        '\xe2“ ': 'q',
        '\xef\xbd‘': 'q',
        '\xc9‹': 'q',
        '\xea\x9d—': 'q',
        '\xea\x9d™': 'q',
        '\xe2“\xa1': 'r',
        '\xef\xbd’': 'r',
        '\xc5•': 'r',
        '\xe1\xb9™': 'r',
        '\xc5™': 'r',
        '\xc8‘': 'r',
        '\xc8“': 'r',
        '\xe1\xb9›': 'r',
        '\xe1\xb9\x9d': 'r',
        '\xc5—': 'r',
        '\xe1\xb9Ÿ': 'r',
        '\xc9\x8d': 'r',
        '\xc9\xbd': 'r',
        '\xea\x9d›': 'r',
        '\xeaž\xa7': 'r',
        êžƒ: 'r',
        '\xe2“\xa2': 's',
        '\xef\xbd“': 's',
        ÃŸ: 's',
        '\xc5›': 's',
        '\xe1\xb9\xa5': 's',
        '\xc5\x9d': 's',
        '\xe1\xb9\xa1': 's',
        '\xc5\xa1': 's',
        '\xe1\xb9\xa7': 's',
        '\xe1\xb9\xa3': 's',
        '\xe1\xb9\xa9': 's',
        '\xc8™': 's',
        ÅŸ: 's',
        '\xc8\xbf': 's',
        '\xeaž\xa9': 's',
        '\xeaž…': 's',
        '\xe1\xba›': 's',
        '\xe2“\xa3': 't',
        '\xef\xbd”': 't',
        '\xe1\xb9\xab': 't',
        '\xe1\xba—': 't',
        '\xc5\xa5': 't',
        '\xe1\xb9\xad': 't',
        '\xc8›': 't',
        '\xc5\xa3': 't',
        '\xe1\xb9\xb1': 't',
        '\xe1\xb9\xaf': 't',
        '\xc5\xa7': 't',
        '\xc6\xad': 't',
        Êˆ: 't',
        '\xe2\xb1\xa6': 't',
        '\xeaž‡': 't',
        '\xeaœ\xa9': 'tz',
        '\xe2“\xa4': 'u',
        '\xef\xbd•': 'u',
        '\xc3\xb9': 'u',
        Ãº: 'u',
        '\xc3\xbb': 'u',
        '\xc5\xa9': 'u',
        '\xe1\xb9\xb9': 'u',
        '\xc5\xab': 'u',
        '\xe1\xb9\xbb': 'u',
        '\xc5\xad': 'u',
        '\xc3\xbc': 'u',
        Çœ: 'u',
        '\xc7˜': 'u',
        '\xc7–': 'u',
        Çš: 'u',
        '\xe1\xbb\xa7': 'u',
        '\xc5\xaf': 'u',
        '\xc5\xb1': 'u',
        '\xc7”': 'u',
        '\xc8•': 'u',
        '\xc8—': 'u',
        '\xc6\xb0': 'u',
        '\xe1\xbb\xab': 'u',
        '\xe1\xbb\xa9': 'u',
        '\xe1\xbb\xaf': 'u',
        '\xe1\xbb\xad': 'u',
        '\xe1\xbb\xb1': 'u',
        '\xe1\xbb\xa5': 'u',
        '\xe1\xb9\xb3': 'u',
        '\xc5\xb3': 'u',
        '\xe1\xb9\xb7': 'u',
        '\xe1\xb9\xb5': 'u',
        '\xca‰': 'u',
        '\xe2“\xa5': 'v',
        '\xef\xbd–': 'v',
        '\xe1\xb9\xbd': 'v',
        '\xe1\xb9\xbf': 'v',
        '\xca‹': 'v',
        '\xea\x9dŸ': 'v',
        ÊŒ: 'v',
        '\xea\x9d\xa1': 'vy',
        '\xe2“\xa6': 'w',
        '\xef\xbd—': 'w',
        '\xe1\xba\x81': 'w',
        áºƒ: 'w',
        Åµ: 'w',
        '\xe1\xba‡': 'w',
        '\xe1\xba…': 'w',
        '\xe1\xba˜': 'w',
        '\xe1\xba‰': 'w',
        '\xe2\xb1\xb3': 'w',
        '\xe2“\xa7': 'x',
        '\xef\xbd˜': 'x',
        '\xe1\xba‹': 'x',
        '\xe1\xba\x8d': 'x',
        '\xe2“\xa8': 'y',
        '\xef\xbd™': 'y',
        '\xe1\xbb\xb3': 'y',
        '\xc3\xbd': 'y',
        Å·: 'y',
        '\xe1\xbb\xb9': 'y',
        '\xc8\xb3': 'y',
        '\xe1\xba\x8f': 'y',
        '\xc3\xbf': 'y',
        '\xe1\xbb\xb7': 'y',
        '\xe1\xba™': 'y',
        '\xe1\xbb\xb5': 'y',
        '\xc6\xb4': 'y',
        '\xc9\x8f': 'y',
        '\xe1\xbb\xbf': 'y',
        '\xe2“\xa9': 'z',
        '\xef\xbdš': 'z',
        Åº: 'z',
        '\xe1\xba‘': 'z',
        '\xc5\xbc': 'z',
        '\xc5\xbe': 'z',
        '\xe1\xba“': 'z',
        '\xe1\xba•': 'z',
        '\xc6\xb6': 'z',
        '\xc8\xa5': 'z',
        '\xc9€': 'z',
        '\xe2\xb1\xac': 'z',
        '\xea\x9d\xa3': 'z',
        '\xce†': '\xce‘',
        Îˆ: '\xce•',
        '\xce‰': '\xce—',
        ÎŠ: '\xce™',
        Îª: '\xce™',
        ÎŒ: '\xceŸ',
        ÎŽ: '\xce\xa5',
        '\xce\xab': '\xce\xa5',
        '\xce\x8f': '\xce\xa9',
        '\xce\xac': '\xce\xb1',
        '\xce\xad': '\xce\xb5',
        '\xce\xae': '\xce\xb7',
        '\xce\xaf': '\xce\xb9',
        ÏŠ: '\xce\xb9',
        '\xce\x90': '\xce\xb9',
        ÏŒ: '\xce\xbf',
        '\xcf\x8d': '\xcf…',
        '\xcf‹': '\xcf…',
        '\xce\xb0': '\xcf…',
        '\xcf‰': '\xcf‰',
        '\xcf‚': '\xcfƒ',
      }),
      (c = e(document)),
      (p = 1),
      (h = function () {
        return p++;
      }),
      (d = O(
        (s = O(Object, {
          bind: function (e) {
            var i = this;
            return function () {
              e.apply(i, arguments);
            };
          },
          init: function (s) {
            var n,
              a,
              l,
              c,
              d = '.select2-results';
            (this.opts = s = this.prepareOpts(s)),
              (this.id = s.id),
              s.element.data('select2') !== i &&
                null !== s.element.data('select2') &&
                s.element.data('select2').destroy(),
              (this.container = this.createContainer()),
              (this.liveRegion = e('.select2-hidden-accessible')),
              0 == this.liveRegion.length &&
                (this.liveRegion = e('<span>', { role: 'status', 'aria-live': 'polite' })
                  .addClass('select2-hidden-accessible')
                  .appendTo(document.body)),
              (this.containerId = 's2id_' + (s.element.attr('id') || 'autogen' + h())),
              (this.containerEventName = this.containerId
                .replace(/([.])/g, '_')
                .replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1')),
              this.container.attr('id', this.containerId),
              this.container.attr('title', s.element.attr('title')),
              (this.body = e(document.body)),
              k(this.container, this.opts.element, this.opts.adaptContainerCssClass),
              this.container.attr('style', s.element.attr('style')),
              this.container.css(D(s.containerCss, this.opts.element)),
              this.container.addClass(D(s.containerCssClass, this.opts.element)),
              (this.elementTabIndex = this.opts.element.attr('tabindex')),
              this.opts.element
                .data('select2', this)
                .attr('tabindex', '-1')
                .before(this.container)
                .on('click.select2', C),
              this.container.data('select2', this),
              (this.dropdown = this.container.find('.select2-drop')),
              k(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
              this.dropdown.addClass(D(s.dropdownCssClass, this.opts.element)),
              this.dropdown.data('select2', this),
              this.dropdown.on('click', C),
              (this.results = n = this.container.find(d)),
              (this.search = a = this.container.find('input.select2-input')),
              (this.queryCount = 0),
              (this.resultsPage = 0),
              (this.context = null),
              this.initContainer(),
              this.container.on('click', C),
              this.results.on('mousemove', function (s) {
                (r !== i && r.x === s.pageX && r.y === s.pageY) || e(s.target).trigger('mousemove-filtered', s);
              }),
              this.dropdown.on('mousemove-filtered', d, this.bind(this.highlightUnderEvent)),
              this.dropdown.on(
                'touchstart touchmove touchend',
                d,
                this.bind(function (e) {
                  (this._touchEvent = !0), this.highlightUnderEvent(e);
                })
              ),
              this.dropdown.on('touchmove', d, this.bind(this.touchMoved)),
              this.dropdown.on('touchstart touchend', d, this.bind(this.clearTouchMoved)),
              this.dropdown.on(
                'click',
                this.bind(function () {
                  this._touchEvent && ((this._touchEvent = !1), this.selectHighlighted());
                })
              ),
              (l = this.results),
              (c = x(80, function (e) {
                l.trigger('scroll-debounced', e);
              })),
              l.on('scroll', function (e) {
                0 <= m(e.target, l.get()) && c(e);
              }),
              this.dropdown.on('scroll-debounced', d, this.bind(this.loadMoreIfNeeded)),
              e(this.container).on('change', '.select2-input', function (e) {
                e.stopPropagation();
              }),
              e(this.dropdown).on('change', '.select2-input', function (e) {
                e.stopPropagation();
              }),
              e.fn.mousewheel &&
                n.mousewheel(function (e, i, s, o) {
                  var r = n.scrollTop();
                  0 < o && r - o <= 0
                    ? (n.scrollTop(0), C(e))
                    : o < 0 &&
                      n.get(0).scrollHeight - n.scrollTop() + o <= n.height() &&
                      (n.scrollTop(n.get(0).scrollHeight - n.height()), C(e));
                }),
              w(a),
              a.on('keyup-change input paste', this.bind(this.updateResults)),
              a.on('focus', function () {
                a.addClass('select2-focused');
              }),
              a.on('blur', function () {
                a.removeClass('select2-focused');
              }),
              this.dropdown.on(
                'mouseup',
                d,
                this.bind(function (i) {
                  0 < e(i.target).closest('.select2-result-selectable').length &&
                    (this.highlightUnderEvent(i), this.selectHighlighted(i));
                })
              ),
              this.dropdown.on('click mouseup mousedown touchstart touchend focusin', function (e) {
                e.stopPropagation();
              }),
              (this.nextSearchTerm = i),
              e.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()),
              null !== s.maximumInputLength && this.search.attr('maxlength', s.maximumInputLength);
            var u = s.element.prop('disabled');
            u === i && (u = !1), this.enable(!u);
            var p,
              f,
              g = s.element.prop('readonly');
            g === i && (g = !1),
              this.readonly(g),
              (o =
                o ||
                ((p = e("<div class='select2-measure-scrollbar'></div>")).appendTo(document.body),
                (f = { width: p.width() - p[0].clientWidth, height: p.height() - p[0].clientHeight }),
                p.remove(),
                f)),
              (this.autofocus = s.element.prop('autofocus')),
              s.element.prop('autofocus', !1),
              this.autofocus && this.focus(),
              this.search.attr('placeholder', s.searchInputPlaceholder);
          },
          destroy: function () {
            var e = this.opts.element,
              s = e.data('select2'),
              n = this;
            this.close(),
              e.length &&
                e[0].detachEvent &&
                n._sync &&
                e.each(function () {
                  n._sync && this.detachEvent('onpropertychange', n._sync);
                }),
              this.propertyObserver && (this.propertyObserver.disconnect(), (this.propertyObserver = null)),
              (this._sync = null),
              s !== i &&
                (s.container.remove(),
                s.liveRegion.remove(),
                s.dropdown.remove(),
                e
                  .show()
                  .removeData('select2')
                  .off('.select2')
                  .prop('autofocus', this.autofocus || !1),
                this.elementTabIndex ? e.attr({ tabindex: this.elementTabIndex }) : e.removeAttr('tabindex'),
                e.show()),
              H.call(this, 'container', 'liveRegion', 'dropdown', 'results', 'search');
          },
          optionToData: function (e) {
            return e.is('option')
              ? {
                  id: e.prop('value'),
                  text: e.text(),
                  element: e.get(),
                  css: e.attr('class'),
                  disabled: e.prop('disabled'),
                  locked: v(e.attr('locked'), 'locked') || v(e.data('locked'), !0),
                }
              : e.is('optgroup')
              ? { text: e.attr('label'), children: [], element: e.get(), css: e.attr('class') }
              : void 0;
          },
          prepareOpts: function (s) {
            var n,
              o,
              r,
              a,
              l = this;
            if (
              ('select' === (n = s.element).get(0).tagName.toLowerCase() && (this.select = o = s.element),
              o &&
                e.each(
                  ['id', 'multiple', 'ajax', 'query', 'createSearchChoice', 'initSelection', 'data', 'tags'],
                  function () {
                    if (this in s)
                      throw Error(
                        "Option '" + this + "' is not allowed for Select2 when attached to a <select> element."
                      );
                  }
                ),
              'function' !=
                typeof (s = e.extend(
                  {},
                  {
                    populateResults: function (n, o, r) {
                      var a,
                        c = this.opts.id,
                        d = this.liveRegion;
                      (a = function (n, o, u) {
                        for (
                          var p, f, g, m, v, b, y, w, x = [], C = 0, k = (n = s.sortResults(n, o, r)).length;
                          C < k;
                          C += 1
                        )
                          (f = !(g = !0 === (p = n[C]).disabled) && c(p) !== i),
                            (m = p.children && 0 < p.children.length),
                            (v = e('<li></li>')).addClass('select2-results-dept-' + u),
                            v.addClass('select2-result'),
                            v.addClass(f ? 'select2-result-selectable' : 'select2-result-unselectable'),
                            g && v.addClass('select2-disabled'),
                            m && v.addClass('select2-result-with-children'),
                            v.addClass(l.opts.formatResultCssClass(p)),
                            v.attr('role', 'presentation'),
                            (b = e(document.createElement('div'))).addClass('select2-result-label'),
                            b.attr('id', 'select2-result-label-' + h()),
                            b.attr('role', 'option'),
                            (w = s.formatResult(p, b, r, l.opts.escapeMarkup)) !== i && (b.html(w), v.append(b)),
                            m &&
                              ((y = e('<ul></ul>')).addClass('select2-result-sub'),
                              a(p.children, y, u + 1),
                              v.append(y)),
                            v.data('select2-data', p),
                            x.push(v[0]);
                        o.append(x), d.text(s.formatMatches(n.length));
                      })(o, n, 0);
                    },
                  },
                  e.fn.select2.defaults,
                  s
                )).id &&
                ((r = s.id),
                (s.id = function (e) {
                  return e[r];
                })),
              e.isArray(s.element.data('select2Tags')))
            ) {
              if ('tags' in s)
                throw (
                  "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " +
                  s.element.attr('id')
                );
              s.tags = s.element.data('select2Tags');
            }
            if (
              (o
                ? ((s.query = this.bind(function (e) {
                    var s,
                      o = { results: [], more: !1 },
                      r = e.term,
                      a = function (i, s) {
                        var n;
                        i.is('option')
                          ? e.matcher(r, i.text(), i) && s.push(l.optionToData(i))
                          : i.is('optgroup') &&
                            ((n = l.optionToData(i)),
                            i.children().each2(function (e, i) {
                              a(i, n.children);
                            }),
                            0 < n.children.length && s.push(n));
                      },
                      c = n.children();
                    this.getPlaceholder() !== i && 0 < c.length && (s = this.getPlaceholderOption()) && (c = c.not(s)),
                      c.each2(function (e, i) {
                        a(i, o.results);
                      }),
                      e.callback(o);
                  })),
                  (s.id = function (e) {
                    return e.id;
                  }))
                : 'query' in s ||
                  ('ajax' in s
                    ? ((a = s.element.data('ajax-url')) && 0 < a.length && (s.ajax.url = a),
                      (s.query = T.call(s.element, s.ajax)))
                    : 'data' in s
                    ? (s.query = E(s.data))
                    : 'tags' in s &&
                      ((s.query = F(s.tags)),
                      s.createSearchChoice === i &&
                        (s.createSearchChoice = function (i) {
                          return { id: e.trim(i), text: e.trim(i) };
                        }),
                      s.initSelection === i &&
                        (s.initSelection = function (i, n) {
                          var o = [];
                          e(b(i.val(), s.separator, s.transformVal)).each(function () {
                            var i = { id: this, text: this },
                              n = s.tags;
                            e.isFunction(n) && (n = n()),
                              e(n).each(function () {
                                return v(this.id, i.id) ? ((i = this), !1) : void 0;
                              }),
                              o.push(i);
                          }),
                            n(o);
                        }))),
              'function' != typeof s.query)
            )
              throw 'query function not defined for Select2 ' + s.element.attr('id');
            if ('top' === s.createSearchChoicePosition)
              s.createSearchChoicePosition = function (e, i) {
                e.unshift(i);
              };
            else if ('bottom' === s.createSearchChoicePosition)
              s.createSearchChoicePosition = function (e, i) {
                e.push(i);
              };
            else if ('function' != typeof s.createSearchChoicePosition)
              throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
            return s;
          },
          monitorSource: function () {
            var s,
              n = this.opts.element,
              o = this;
            n.on(
              'change.select2',
              this.bind(function () {
                !0 !== this.opts.element.data('select2-change-triggered') && this.initSelection();
              })
            ),
              (this._sync = this.bind(function () {
                var e = n.prop('disabled');
                e === i && (e = !1), this.enable(!e);
                var s = n.prop('readonly');
                s === i && (s = !1),
                  this.readonly(s),
                  this.container &&
                    (k(this.container, this.opts.element, this.opts.adaptContainerCssClass),
                    this.container.addClass(D(this.opts.containerCssClass, this.opts.element))),
                  this.dropdown &&
                    (k(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
                    this.dropdown.addClass(D(this.opts.dropdownCssClass, this.opts.element)));
              })),
              n.length &&
                n[0].attachEvent &&
                n.each(function () {
                  this.attachEvent('onpropertychange', o._sync);
                }),
              (s = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver) !== i &&
                (this.propertyObserver && (delete this.propertyObserver, (this.propertyObserver = null)),
                (this.propertyObserver = new s(function (i) {
                  e.each(i, o._sync);
                })),
                this.propertyObserver.observe(n.get(0), { attributes: !0, subtree: !1 }));
          },
          triggerSelect: function (i) {
            var s = e.Event('select2-selecting', { val: this.id(i), object: i, choice: i });
            return this.opts.element.trigger(s), !s.isDefaultPrevented();
          },
          triggerChange: function (i) {
            (i = i || {}),
              (i = e.extend({}, i, { type: 'change', val: this.val() })),
              this.opts.element.data('select2-change-triggered', !0),
              this.opts.element.trigger(i),
              this.opts.element.data('select2-change-triggered', !1),
              this.opts.element.click(),
              this.opts.blurOnChange && this.opts.element.blur();
          },
          isInterfaceEnabled: function () {
            return !0 === this.enabledInterface;
          },
          enableInterface: function () {
            var e = this._enabled && !this._readonly;
            return (
              e !== this.enabledInterface &&
              (this.container.toggleClass('select2-container-disabled', !e),
              this.close(),
              (this.enabledInterface = e),
              !0)
            );
          },
          enable: function (e) {
            e === i && (e = !0),
              this._enabled !== e &&
                ((this._enabled = e), this.opts.element.prop('disabled', !e), this.enableInterface());
          },
          disable: function () {
            this.enable(!1);
          },
          readonly: function (e) {
            e === i && (e = !1),
              this._readonly !== e &&
                ((this._readonly = e), this.opts.element.prop('readonly', e), this.enableInterface());
          },
          opened: function () {
            return !!this.container && this.container.hasClass('select2-dropdown-open');
          },
          positionDropdown: function () {
            var i,
              s,
              n,
              r,
              a,
              l = this.dropdown,
              c = this.container,
              h = c.offset(),
              d = c.outerHeight(!1),
              u = c.outerWidth(!1),
              p = l.outerHeight(!1),
              f = e(window),
              g = f.width(),
              m = f.height(),
              v = f.scrollLeft() + g,
              b = f.scrollTop() + m,
              y = h.top + d,
              w = h.left,
              x = y + p <= b,
              C = h.top - p >= f.scrollTop(),
              k = l.outerWidth(!1);
            l.hasClass('select2-drop-above')
              ? ((s = !0), !C && x && (s = ((n = !0), !1)))
              : ((s = !1), !x && C && (s = n = !0)),
              n &&
                (l.hide(),
                (h = this.container.offset()),
                (d = this.container.outerHeight(!1)),
                (u = this.container.outerWidth(!1)),
                (p = l.outerHeight(!1)),
                (v = f.scrollLeft() + g),
                (b = f.scrollTop() + m),
                (y = h.top + d),
                (w = h.left),
                (k = l.outerWidth(!1)),
                l.show(),
                this.focusSearch()),
              this.opts.dropdownAutoWidth
                ? ((a = e('.select2-results', l)[0]),
                  l.addClass('select2-drop-auto-width'),
                  l.css('width', ''),
                  (k = l.outerWidth(!1) + (a.scrollHeight === a.clientHeight ? 0 : o.width)) > u ? (u = k) : (k = u),
                  (p = l.outerHeight(!1)))
                : this.container.removeClass('select2-drop-auto-width'),
              'static' !== this.body.css('position') && ((y -= (i = this.body.offset()).top), (w -= i.left)),
              !(w + k <= v) && h.left + v + c.outerWidth(!1) > k && (w = h.left + this.container.outerWidth(!1) - k),
              (r = { left: w, width: u }),
              s
                ? ((r.top = h.top - p),
                  (r.bottom = 'auto'),
                  this.container.addClass('select2-drop-above'),
                  l.addClass('select2-drop-above'))
                : ((r.top = y),
                  (r.bottom = 'auto'),
                  this.container.removeClass('select2-drop-above'),
                  l.removeClass('select2-drop-above')),
              (r = e.extend(r, D(this.opts.dropdownCss, this.opts.element))),
              l.css(r);
          },
          shouldOpen: function () {
            var i;
            return (
              !this.opened() &&
              !1 !== this._enabled &&
              !0 !== this._readonly &&
              ((i = e.Event('select2-opening')), this.opts.element.trigger(i), !i.isDefaultPrevented())
            );
          },
          clearDropdownAlignmentPreference: function () {
            this.container.removeClass('select2-drop-above'), this.dropdown.removeClass('select2-drop-above');
          },
          open: function () {
            return (
              !!this.shouldOpen() &&
              (this.opening(),
              c.on('mousemove.select2Event', function (e) {
                (r.x = e.pageX), (r.y = e.pageY);
              }),
              !0)
            );
          },
          opening: function () {
            var i,
              s = this.containerEventName,
              n = 'scroll.' + s,
              o = 'resize.' + s,
              r = 'orientationchange.' + s;
            this.container.addClass('select2-dropdown-open').addClass('select2-container-active'),
              this.clearDropdownAlignmentPreference(),
              this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body),
              0 === (i = e('#select2-drop-mask')).length &&
                ((i = e(document.createElement('div')))
                  .attr('id', 'select2-drop-mask')
                  .attr('class', 'select2-drop-mask'),
                i.hide(),
                i.appendTo(this.body),
                i.on('mousedown touchstart click', function (s) {
                  f(i);
                  var n,
                    o = e('#select2-drop');
                  0 < o.length &&
                    ((n = o.data('select2')).opts.selectOnBlur && n.selectHighlighted({ noFocus: !0 }),
                    n.close(),
                    s.preventDefault(),
                    s.stopPropagation());
                })),
              this.dropdown.prev()[0] !== i[0] && this.dropdown.before(i),
              e('#select2-drop').removeAttr('id'),
              this.dropdown.attr('id', 'select2-drop'),
              i.show(),
              this.positionDropdown(),
              this.dropdown.show(),
              this.positionDropdown(),
              this.dropdown.addClass('select2-drop-active');
            var a = this;
            this.container
              .parents()
              .add(window)
              .each(function () {
                e(this).on(o + ' ' + n + ' ' + r, function () {
                  a.opened() && a.positionDropdown();
                });
              });
          },
          close: function () {
            var i, s, n, o;
            this.opened() &&
              ((s = 'scroll.' + (i = this.containerEventName)),
              (n = 'resize.' + i),
              (o = 'orientationchange.' + i),
              this.container
                .parents()
                .add(window)
                .each(function () {
                  e(this).off(s).off(n).off(o);
                }),
              this.clearDropdownAlignmentPreference(),
              e('#select2-drop-mask').hide(),
              this.dropdown.removeAttr('id'),
              this.dropdown.hide(),
              this.container.removeClass('select2-dropdown-open').removeClass('select2-container-active'),
              this.results.empty(),
              c.off('mousemove.select2Event'),
              this.clearSearch(),
              this.search.removeClass('select2-active'),
              this.opts.element.trigger(e.Event('select2-close')));
          },
          externalSearch: function (e) {
            this.open(), this.search.val(e), this.updateResults(!1);
          },
          clearSearch: function () {},
          getMaximumSelectionSize: function () {
            return D(this.opts.maximumSelectionSize, this.opts.element);
          },
          ensureHighlightVisible: function () {
            var i,
              s,
              n,
              o,
              r,
              a,
              l,
              c,
              h = this.results;
            if (!((s = this.highlight()) < 0)) {
              if (0 == s) return void h.scrollTop(0);
              (o =
                (c =
                  ((n = e((i = this.findHighlightableChoices().find('.select2-result-label'))[s])).offset() || {})
                    .top || 0) + n.outerHeight(!0)),
                s === i.length - 1 &&
                  0 < (l = h.find('li.select2-more-results')).length &&
                  (o = l.offset().top + l.outerHeight(!0)),
                o > (r = h.offset().top + h.outerHeight(!1)) && h.scrollTop(h.scrollTop() + (o - r)),
                (a = c - h.offset().top) < 0 && 'none' != n.css('display') && h.scrollTop(h.scrollTop() + a);
            }
          },
          findHighlightableChoices: function () {
            return this.results.find('.select2-result-selectable:not(.select2-disabled):not(.select2-selected)');
          },
          moveHighlight: function (i) {
            for (var s = this.findHighlightableChoices(), n = this.highlight(); -1 < n && n < s.length; ) {
              var o = e(s[(n += i)]);
              if (
                o.hasClass('select2-result-selectable') &&
                !o.hasClass('select2-disabled') &&
                !o.hasClass('select2-selected')
              ) {
                this.highlight(n);
                break;
              }
            }
          },
          highlight: function (i) {
            var s,
              n,
              o = this.findHighlightableChoices();
            return 0 === arguments.length
              ? m(o.filter('.select2-highlighted')[0], o.get())
              : (i >= o.length && (i = o.length - 1),
                i < 0 && (i = 0),
                this.removeHighlight(),
                (s = e(o[i])).addClass('select2-highlighted'),
                this.search.attr('aria-activedescendant', s.find('.select2-result-label').attr('id')),
                this.ensureHighlightVisible(),
                this.liveRegion.text(s.text()),
                void (
                  (n = s.data('select2-data')) &&
                  this.opts.element.trigger({ type: 'select2-highlight', val: this.id(n), choice: n })
                ));
          },
          removeHighlight: function () {
            this.results.find('.select2-highlighted').removeClass('select2-highlighted');
          },
          touchMoved: function () {
            this._touchMoved = !0;
          },
          clearTouchMoved: function () {
            this._touchMoved = !1;
          },
          countSelectableResults: function () {
            return this.findHighlightableChoices().length;
          },
          highlightUnderEvent: function (i) {
            var s,
              n = e(i.target).closest('.select2-result-selectable');
            0 < n.length && !n.is('.select2-highlighted')
              ? ((s = this.findHighlightableChoices()), this.highlight(s.index(n)))
              : 0 == n.length && this.removeHighlight();
          },
          loadMoreIfNeeded: function () {
            var e = this.results,
              i = e.find('li.select2-more-results'),
              s = this.resultsPage + 1,
              n = this,
              o = this.search.val(),
              r = this.context;
            0 !== i.length &&
              i.offset().top - e.offset().top - e.height() <= this.opts.loadMorePadding &&
              (i.addClass('select2-active'),
              this.opts.query({
                element: this.opts.element,
                term: o,
                page: s,
                context: r,
                matcher: this.opts.matcher,
                callback: this.bind(function (a) {
                  n.opened() &&
                    (n.opts.populateResults.call(this, e, a.results, { term: o, page: s, context: r }),
                    n.postprocessResults(a, !1, !1),
                    !0 === a.more
                      ? (i
                          .detach()
                          .appendTo(e)
                          .html(n.opts.escapeMarkup(D(n.opts.formatLoadMore, n.opts.element, s + 1))),
                        window.setTimeout(function () {
                          n.loadMoreIfNeeded();
                        }, 10))
                      : i.remove(),
                    n.positionDropdown(),
                    (n.resultsPage = s),
                    (n.context = a.context),
                    this.opts.element.trigger({ type: 'select2-loaded', items: a }));
                }),
              }));
          },
          tokenize: function () {},
          updateResults: function (s) {
            function n() {
              c.removeClass('select2-active'),
                u.positionDropdown(),
                h.find('.select2-no-results,.select2-selection-limit,.select2-searching').length
                  ? u.liveRegion.text(h.text())
                  : u.liveRegion.text(
                      u.opts.formatMatches(h.find('.select2-result-selectable:not(".select2-selected")').length)
                    );
            }
            function o(e) {
              h.html(e), n();
            }
            var r,
              a,
              l,
              c = this.search,
              h = this.results,
              d = this.opts,
              u = this,
              p = c.val(),
              f = e.data(this.container, 'select2-last-term');
            if (
              (!0 === s || !f || !v(p, f)) &&
              (e.data(this.container, 'select2-last-term', p),
              !0 === s || (!1 !== this.showSearchInput && this.opened()))
            ) {
              l = ++this.queryCount;
              var g = this.getMaximumSelectionSize();
              if (
                1 <= g &&
                ((r = this.data()),
                e.isArray(r) && r.length >= g && A(d.formatSelectionTooBig, 'formatSelectionTooBig'))
              )
                return void o(
                  "<li class='select2-selection-limit'>" + D(d.formatSelectionTooBig, d.element, g) + '</li>'
                );
              if (c.val().length < d.minimumInputLength)
                return (
                  o(
                    A(d.formatInputTooShort, 'formatInputTooShort')
                      ? "<li class='select2-no-results'>" +
                          D(d.formatInputTooShort, d.element, c.val(), d.minimumInputLength) +
                          '</li>'
                      : ''
                  ),
                  void (s && this.showSearch && this.showSearch(!0))
                );
              if (d.maximumInputLength && c.val().length > d.maximumInputLength)
                return void o(
                  A(d.formatInputTooLong, 'formatInputTooLong')
                    ? "<li class='select2-no-results'>" +
                        D(d.formatInputTooLong, d.element, c.val(), d.maximumInputLength) +
                        '</li>'
                    : ''
                );
              d.formatSearching &&
                0 === this.findHighlightableChoices().length &&
                o("<li class='select2-searching'>" + D(d.formatSearching, d.element) + '</li>'),
                c.addClass('select2-active'),
                this.removeHighlight(),
                (a = this.tokenize()) != i && null != a && c.val(a),
                (this.resultsPage = 1),
                d.query({
                  element: d.element,
                  term: c.val(),
                  page: this.resultsPage,
                  context: null,
                  matcher: d.matcher,
                  callback: this.bind(function (r) {
                    var a;
                    if (l == this.queryCount) {
                      if (!this.opened()) return void this.search.removeClass('select2-active');
                      if (r.hasError !== i && A(d.formatAjaxError, 'formatAjaxError'))
                        return void o(
                          "<li class='select2-ajax-error'>" +
                            D(d.formatAjaxError, d.element, r.jqXHR, r.textStatus, r.errorThrown) +
                            '</li>'
                        );
                      if (
                        ((this.context = r.context === i ? null : r.context),
                        this.opts.createSearchChoice &&
                          '' !== c.val() &&
                          (a = this.opts.createSearchChoice.call(u, c.val(), r.results)) !== i &&
                          null !== a &&
                          u.id(a) !== i &&
                          null !== u.id(a) &&
                          0 ===
                            e(r.results).filter(function () {
                              return v(u.id(this), u.id(a));
                            }).length &&
                          this.opts.createSearchChoicePosition(r.results, a),
                        0 === r.results.length && A(d.formatNoMatches, 'formatNoMatches'))
                      )
                        return void o(
                          "<li class='select2-no-results'>" + D(d.formatNoMatches, d.element, c.val()) + '</li>'
                        );
                      h.empty(),
                        u.opts.populateResults.call(this, h, r.results, {
                          term: c.val(),
                          page: this.resultsPage,
                          context: null,
                        }),
                        !0 === r.more &&
                          A(d.formatLoadMore, 'formatLoadMore') &&
                          (h.append(
                            "<li class='select2-more-results'>" +
                              d.escapeMarkup(D(d.formatLoadMore, d.element, this.resultsPage)) +
                              '</li>'
                          ),
                          window.setTimeout(function () {
                            u.loadMoreIfNeeded();
                          }, 10)),
                        this.postprocessResults(r, s),
                        n(),
                        this.opts.element.trigger({ type: 'select2-loaded', items: r });
                    }
                  }),
                });
            }
          },
          cancel: function () {
            this.close();
          },
          blur: function () {
            this.opts.selectOnBlur && this.selectHighlighted({ noFocus: !0 }),
              this.close(),
              this.container.removeClass('select2-container-active'),
              this.search[0] === document.activeElement && this.search.blur(),
              this.clearSearch(),
              this.selection.find('.select2-search-choice-focus').removeClass('select2-search-choice-focus');
          },
          focusSearch: function () {
            var e;
            (e = this.search)[0] !== document.activeElement &&
              window.setTimeout(function () {
                var i,
                  s = e[0],
                  n = e.val().length;
                e.focus(),
                  (0 < s.offsetWidth || 0 < s.offsetHeight) &&
                    s === document.activeElement &&
                    (s.setSelectionRange
                      ? s.setSelectionRange(n, n)
                      : s.createTextRange && ((i = s.createTextRange()).collapse(!1), i.select()));
              }, 0);
          },
          selectHighlighted: function (e) {
            var i, s;
            this._touchMoved
              ? this.clearTouchMoved()
              : ((i = this.highlight()),
                (s = this.results.find('.select2-highlighted').closest('.select2-result').data('select2-data'))
                  ? (this.highlight(i), this.onSelect(s, e))
                  : e && e.noFocus && this.close());
          },
          getPlaceholder: function () {
            var e;
            return (
              this.opts.element.attr('placeholder') ||
              this.opts.element.attr('data-placeholder') ||
              this.opts.element.data('placeholder') ||
              this.opts.placeholder ||
              ((e = this.getPlaceholderOption()) !== i ? e.text() : i)
            );
          },
          getPlaceholderOption: function () {
            if (this.select) {
              var s = this.select.children('option').first();
              if (this.opts.placeholderOption !== i)
                return (
                  ('first' === this.opts.placeholderOption && s) ||
                  ('function' == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select))
                );
              if ('' === e.trim(s.text()) && '' === s.val()) return s;
            }
          },
          initContainerWidth: function () {
            var s = function () {
              var s, n, o, r, a;
              if ('off' === this.opts.width) return null;
              if ('element' === this.opts.width)
                return 0 === this.opts.element.outerWidth(!1) ? 'auto' : this.opts.element.outerWidth(!1) + 'px';
              if ('copy' !== this.opts.width && 'resolve' !== this.opts.width)
                return e.isFunction(this.opts.width) ? this.opts.width() : this.opts.width;
              if ((s = this.opts.element.attr('style')) !== i) {
                for (r = 0, a = (n = s.split(';')).length; r < a; r += 1)
                  if (
                    null !==
                      (o = n[r]
                        .replace(/\s/g, '')
                        .match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i)) &&
                    1 <= o.length
                  )
                    return o[1];
              }
              return 'resolve' === this.opts.width
                ? 0 < (s = this.opts.element.css('width')).indexOf('%')
                  ? s
                  : 0 === this.opts.element.outerWidth(!1)
                  ? 'auto'
                  : this.opts.element.outerWidth(!1) + 'px'
                : null;
            }.call(this);
            null !== s && this.container.css('width', s);
          },
        })),
        {
          createContainer: function () {
            return e(document.createElement('div'))
              .attr({ class: 'select2-container' })
              .html(
                "<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span></a><label for='' class='select2-offscreen'></label><input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' /><div class='select2-drop select2-display-none'>   <div class='select2-search'>       <label for='' class='select2-offscreen'></label>       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'       aria-autocomplete='list' />   </div>   <ul class='select2-results' role='listbox'>   </ul></div>"
              );
          },
          enableInterface: function () {
            this.parent.enableInterface.apply(this, arguments) &&
              this.focusser.prop('disabled', !this.isInterfaceEnabled());
          },
          opening: function () {
            var s, n, o;
            0 <= this.opts.minimumResultsForSearch && this.showSearch(!0),
              this.parent.opening.apply(this, arguments),
              !1 !== this.showSearchInput && this.search.val(this.focusser.val()),
              this.opts.shouldFocusInput(this) &&
                (this.search.focus(),
                (s = this.search.get(0)).createTextRange
                  ? ((n = s.createTextRange()).collapse(!1), n.select())
                  : s.setSelectionRange && ((o = this.search.val().length), s.setSelectionRange(o, o))),
              '' === this.search.val() &&
                this.nextSearchTerm != i &&
                (this.search.val(this.nextSearchTerm), this.search.select()),
              this.focusser.prop('disabled', !0).val(''),
              this.updateResults(!0),
              this.opts.element.trigger(e.Event('select2-open'));
          },
          close: function () {
            this.opened() &&
              (this.parent.close.apply(this, arguments),
              this.focusser.prop('disabled', !1),
              this.opts.shouldFocusInput(this) && this.focusser.focus());
          },
          focus: function () {
            this.opened()
              ? this.close()
              : (this.focusser.prop('disabled', !1), this.opts.shouldFocusInput(this) && this.focusser.focus());
          },
          isFocused: function () {
            return this.container.hasClass('select2-container-active');
          },
          cancel: function () {
            this.parent.cancel.apply(this, arguments),
              this.focusser.prop('disabled', !1),
              this.opts.shouldFocusInput(this) && this.focusser.focus();
          },
          destroy: function () {
            e("label[for='" + this.focusser.attr('id') + "']").attr('for', this.opts.element.attr('id')),
              this.parent.destroy.apply(this, arguments),
              H.call(this, 'selection', 'focusser');
          },
          initContainer: function () {
            var i,
              s,
              n = this.container,
              o = this.dropdown,
              r = h();
            this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0),
              (this.selection = i = n.find('.select2-choice')),
              (this.focusser = n.find('.select2-focusser')),
              i.find('.select2-chosen').attr('id', 'select2-chosen-' + r),
              this.focusser.attr('aria-labelledby', 'select2-chosen-' + r),
              this.results.attr('id', 'select2-results-' + r),
              this.search.attr('aria-owns', 'select2-results-' + r),
              this.focusser.attr('id', 's2id_autogen' + r),
              (s = e("label[for='" + this.opts.element.attr('id') + "']")),
              this.opts.element.focus(
                this.bind(function () {
                  this.focus();
                })
              ),
              this.focusser.prev().text(s.text()).attr('for', this.focusser.attr('id'));
            var l = this.opts.element.attr('title');
            this.opts.element.attr('title', l || s.text()),
              this.focusser.attr('tabindex', this.elementTabIndex),
              this.search.attr('id', this.focusser.attr('id') + '_search'),
              this.search
                .prev()
                .text(e("label[for='" + this.focusser.attr('id') + "']").text())
                .attr('for', this.search.attr('id')),
              this.search.on(
                'keydown',
                this.bind(function (e) {
                  if (this.isInterfaceEnabled() && 229 != e.keyCode) {
                    if (e.which === a.PAGE_UP || e.which === a.PAGE_DOWN) return void C(e);
                    switch (e.which) {
                      case a.UP:
                      case a.DOWN:
                        return this.moveHighlight(e.which === a.UP ? -1 : 1), void C(e);
                      case a.ENTER:
                        return this.selectHighlighted(), void C(e);
                      case a.TAB:
                        return void this.selectHighlighted({ noFocus: !0 });
                      case a.ESC:
                        return this.cancel(e), void C(e);
                    }
                  }
                })
              ),
              this.search.on(
                'blur',
                this.bind(function () {
                  document.activeElement === this.body.get(0) &&
                    window.setTimeout(
                      this.bind(function () {
                        this.opened() && this.search.focus();
                      }),
                      0
                    );
                })
              ),
              this.focusser.on(
                'keydown',
                this.bind(function (e) {
                  if (
                    this.isInterfaceEnabled() &&
                    e.which !== a.TAB &&
                    !a.isControl(e) &&
                    !a.isFunctionKey(e) &&
                    e.which !== a.ESC
                  ) {
                    if (!1 === this.opts.openOnEnter && e.which === a.ENTER) return void C(e);
                    if (e.which == a.DOWN || e.which == a.UP || (e.which == a.ENTER && this.opts.openOnEnter)) {
                      if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;
                      return this.open(), void C(e);
                    }
                    return e.which == a.DELETE || e.which == a.BACKSPACE
                      ? (this.opts.allowClear && this.clear(), void C(e))
                      : void 0;
                  }
                })
              ),
              w(this.focusser),
              this.focusser.on(
                'keyup-change input',
                this.bind(function (e) {
                  0 <= this.opts.minimumResultsForSearch && (e.stopPropagation(), this.opened() || this.open());
                })
              ),
              i.on(
                'mousedown touchstart',
                'abbr',
                this.bind(function (e) {
                  var i;
                  this.isInterfaceEnabled() &&
                    (this.clear(),
                    (i = e).preventDefault(),
                    i.stopImmediatePropagation(),
                    this.close(),
                    this.selection && this.selection.focus());
                })
              ),
              i.on(
                'mousedown touchstart',
                this.bind(function (s) {
                  f(i),
                    this.container.hasClass('select2-container-active') ||
                      this.opts.element.trigger(e.Event('select2-focus')),
                    this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(),
                    C(s);
                })
              ),
              o.on(
                'mousedown touchstart',
                this.bind(function () {
                  this.opts.shouldFocusInput(this) && this.search.focus();
                })
              ),
              i.on(
                'focus',
                this.bind(function (e) {
                  C(e);
                })
              ),
              this.focusser
                .on(
                  'focus',
                  this.bind(function () {
                    this.container.hasClass('select2-container-active') ||
                      this.opts.element.trigger(e.Event('select2-focus')),
                      this.container.addClass('select2-container-active');
                  })
                )
                .on(
                  'blur',
                  this.bind(function () {
                    this.opened() ||
                      (this.container.removeClass('select2-container-active'),
                      this.opts.element.trigger(e.Event('select2-blur')));
                  })
                ),
              this.search.on(
                'focus',
                this.bind(function () {
                  this.container.hasClass('select2-container-active') ||
                    this.opts.element.trigger(e.Event('select2-focus')),
                    this.container.addClass('select2-container-active');
                })
              ),
              this.initContainerWidth(),
              this.opts.element.hide(),
              this.setPlaceholder();
          },
          clear: function (i) {
            var s = this.selection.data('select2-data');
            if (s) {
              var n = e.Event('select2-clearing');
              if ((this.opts.element.trigger(n), n.isDefaultPrevented())) return;
              var o = this.getPlaceholderOption();
              this.opts.element.val(o ? o.val() : ''),
                this.selection.find('.select2-chosen').empty(),
                this.selection.removeData('select2-data'),
                this.setPlaceholder(),
                !1 !== i &&
                  (this.opts.element.trigger({ type: 'select2-removed', val: this.id(s), choice: s }),
                  this.triggerChange({ removed: s }));
            }
          },
          initSelection: function () {
            var e;
            this.isPlaceholderOptionSelected()
              ? (this.updateSelection(null), this.close(), this.setPlaceholder())
              : (e = this).opts.initSelection.call(null, this.opts.element, function (s) {
                  s !== i &&
                    null !== s &&
                    (e.updateSelection(s),
                    e.close(),
                    e.setPlaceholder(),
                    (e.nextSearchTerm = e.opts.nextSearchTerm(s, e.search.val())));
                });
          },
          isPlaceholderOptionSelected: function () {
            var e;
            return (
              this.getPlaceholder() !== i &&
              (((e = this.getPlaceholderOption()) !== i && e.prop('selected')) ||
                '' === this.opts.element.val() ||
                this.opts.element.val() === i ||
                null === this.opts.element.val())
            );
          },
          prepareOpts: function () {
            var i = this.parent.prepareOpts.apply(this, arguments),
              s = this;
            return (
              'select' === i.element.get(0).tagName.toLowerCase()
                ? (i.initSelection = function (e, i) {
                    var n = e.find('option').filter(function () {
                      return this.selected && !this.disabled;
                    });
                    i(s.optionToData(n));
                  })
                : 'data' in i &&
                  (i.initSelection =
                    i.initSelection ||
                    function (s, n) {
                      var o = s.val(),
                        r = null;
                      i.query({
                        matcher: function (e, s, n) {
                          var a = v(o, i.id(n));
                          return a && (r = n), a;
                        },
                        callback: e.isFunction(n)
                          ? function () {
                              n(r);
                            }
                          : e.noop,
                      });
                    }),
              i
            );
          },
          getPlaceholder: function () {
            return this.select && this.getPlaceholderOption() === i
              ? i
              : this.parent.getPlaceholder.apply(this, arguments);
          },
          setPlaceholder: function () {
            var e = this.getPlaceholder();
            if (this.isPlaceholderOptionSelected() && e !== i) {
              if (this.select && this.getPlaceholderOption() === i) return;
              this.selection.find('.select2-chosen').html(this.opts.escapeMarkup(e)),
                this.selection.addClass('select2-default'),
                this.container.removeClass('select2-allowclear');
            }
          },
          postprocessResults: function (i, s, n) {
            var o,
              r = 0,
              a = this;
            this.findHighlightableChoices().each2(function (e, i) {
              return v(a.id(i.data('select2-data')), a.opts.element.val()) ? ((r = e), !1) : void 0;
            }),
              !1 !== n && (!0 === s && 0 <= r ? this.highlight(r) : this.highlight(0)),
              !0 === s &&
                0 <= (o = this.opts.minimumResultsForSearch) &&
                this.showSearch(
                  (function i(s) {
                    var n = 0;
                    return (
                      e.each(s, function (e, s) {
                        s.children ? (n += i(s.children)) : n++;
                      }),
                      n
                    );
                  })(i.results) >= o
                );
          },
          showSearch: function (i) {
            this.showSearchInput !== i &&
              ((this.showSearchInput = i),
              this.dropdown.find('.select2-search').toggleClass('select2-search-hidden', !i),
              this.dropdown.find('.select2-search').toggleClass('select2-offscreen', !i),
              e(this.dropdown, this.container).toggleClass('select2-with-searchbox', i));
          },
          onSelect: function (e, i) {
            var s, n;
            this.triggerSelect(e) &&
              ((s = this.opts.element.val()),
              (n = this.data()),
              this.opts.element.val(this.id(e)),
              this.updateSelection(e),
              this.opts.element.trigger({ type: 'select2-selected', val: this.id(e), choice: e }),
              (this.nextSearchTerm = this.opts.nextSearchTerm(e, this.search.val())),
              this.close(),
              (i && i.noFocus) || !this.opts.shouldFocusInput(this) || this.focusser.focus(),
              v(s, this.id(e)) || this.triggerChange({ added: e, removed: n }));
          },
          updateSelection: function (e) {
            var s,
              n,
              o = this.selection.find('.select2-chosen');
            this.selection.data('select2-data', e),
              o.empty(),
              null !== e && (s = this.opts.formatSelection(e, o, this.opts.escapeMarkup)),
              s !== i && o.append(s),
              (n = this.opts.formatSelectionCssClass(e, o)) !== i && o.addClass(n),
              this.selection.removeClass('select2-default'),
              this.opts.allowClear && this.getPlaceholder() !== i && this.container.addClass('select2-allowclear');
          },
          val: function () {
            var e,
              s = !1,
              n = null,
              o = this,
              r = this.data();
            if (0 === arguments.length) return this.opts.element.val();
            if (((e = arguments[0]), 1 < arguments.length && (s = arguments[1]), this.select))
              this.select
                .val(e)
                .find('option')
                .filter(function () {
                  return this.selected;
                })
                .each2(function (e, i) {
                  return (n = o.optionToData(i)), !1;
                }),
                this.updateSelection(n),
                this.setPlaceholder(),
                s && this.triggerChange({ added: n, removed: r });
            else {
              if (!e && 0 !== e) return void this.clear(s);
              if (this.opts.initSelection === i) throw Error('cannot call val() if initSelection() is not defined');
              this.opts.element.val(e),
                this.opts.initSelection(this.opts.element, function (e) {
                  o.opts.element.val(e ? o.id(e) : ''),
                    o.updateSelection(e),
                    o.setPlaceholder(),
                    s && o.triggerChange({ added: e, removed: r });
                });
            }
          },
          clearSearch: function () {
            this.search.val(''), this.focusser.val('');
          },
          data: function (e) {
            var s,
              n = !1;
            return 0 === arguments.length
              ? ((s = this.selection.data('select2-data')) == i && (s = null), s)
              : (1 < arguments.length && (n = arguments[1]),
                void (e
                  ? ((s = this.data()),
                    this.opts.element.val(e ? this.id(e) : ''),
                    this.updateSelection(e),
                    n && this.triggerChange({ added: e, removed: s }))
                  : this.clear(n)));
          },
        }
      )),
      (u = O(s, {
        createContainer: function () {
          return e(document.createElement('div'))
            .attr({ class: 'select2-container select2-container-multi' })
            .html(
              "<ul class='select2-choices'>  <li class='select2-search-field'>    <label for='' class='select2-offscreen'></label>    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>  </li></ul><div class='select2-drop select2-drop-multi select2-display-none'>   <ul class='select2-results'>   </ul></div>"
            );
        },
        prepareOpts: function () {
          var i = this.parent.prepareOpts.apply(this, arguments),
            s = this;
          return (
            'select' === i.element.get(0).tagName.toLowerCase()
              ? (i.initSelection = function (e, i) {
                  var n = [];
                  e
                    .find('option')
                    .filter(function () {
                      return this.selected && !this.disabled;
                    })
                    .each2(function (e, i) {
                      n.push(s.optionToData(i));
                    }),
                    i(n);
                })
              : 'data' in i &&
                (i.initSelection =
                  i.initSelection ||
                  function (s, n) {
                    var o = b(s.val(), i.separator, i.transformVal),
                      r = [];
                    i.query({
                      matcher: function (s, n, a) {
                        var l = e.grep(o, function (e) {
                          return v(e, i.id(a));
                        }).length;
                        return l && r.push(a), l;
                      },
                      callback: e.isFunction(n)
                        ? function () {
                            for (var e = [], s = 0; s < o.length; s++)
                              for (var a = o[s], l = 0; l < r.length; l++) {
                                var c = r[l];
                                if (v(a, i.id(c))) {
                                  e.push(c), r.splice(l, 1);
                                  break;
                                }
                              }
                            n(e);
                          }
                        : e.noop,
                    });
                  }),
            i
          );
        },
        selectChoice: function (e) {
          var i = this.container.find('.select2-search-choice-focus');
          (i.length && e && e[0] == i[0]) ||
            (i.length && this.opts.element.trigger('choice-deselected', i),
            i.removeClass('select2-search-choice-focus'),
            e &&
              e.length &&
              (this.close(),
              e.addClass('select2-search-choice-focus'),
              this.opts.element.trigger('choice-selected', e)));
        },
        destroy: function () {
          e("label[for='" + this.search.attr('id') + "']").attr('for', this.opts.element.attr('id')),
            this.parent.destroy.apply(this, arguments),
            H.call(this, 'searchContainer', 'selection');
        },
        initContainer: function () {
          var i,
            s = '.select2-choices';
          (this.searchContainer = this.container.find('.select2-search-field')),
            (this.selection = i = this.container.find(s));
          var n = this;
          this.selection.on(
            'click',
            '.select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)',
            function () {
              n.search[0].focus(), n.selectChoice(e(this));
            }
          ),
            this.search.attr('id', 's2id_autogen' + h()),
            this.search
              .prev()
              .text(e("label[for='" + this.opts.element.attr('id') + "']").text())
              .attr('for', this.search.attr('id')),
            this.opts.element.focus(
              this.bind(function () {
                this.focus();
              })
            ),
            this.search.on(
              'input paste',
              this.bind(function () {
                (this.search.attr('placeholder') && 0 == this.search.val().length) ||
                  (this.isInterfaceEnabled() && (this.opened() || this.open()));
              })
            ),
            this.search.attr('tabindex', this.elementTabIndex),
            (this.keydowns = 0),
            this.search.on(
              'keydown',
              this.bind(function (s) {
                if (this.isInterfaceEnabled()) {
                  ++this.keydowns;
                  var n,
                    o,
                    r,
                    l,
                    c = i.find('.select2-search-choice-focus'),
                    h = c.prev('.select2-search-choice:not(.select2-locked)'),
                    d = c.next('.select2-search-choice:not(.select2-locked)'),
                    u =
                      ((n = this.search),
                      (l = r = 0),
                      'selectionStart' in (n = e(n)[0])
                        ? ((r = n.selectionStart), (l = n.selectionEnd - r))
                        : 'selection' in document &&
                          (n.focus(),
                          (o = document.selection.createRange()),
                          (l = document.selection.createRange().text.length),
                          o.moveStart('character', -n.value.length),
                          (r = o.text.length - l)),
                      { offset: r, length: l });
                  if (
                    c.length &&
                    (s.which == a.LEFT ||
                      s.which == a.RIGHT ||
                      s.which == a.BACKSPACE ||
                      s.which == a.DELETE ||
                      s.which == a.ENTER)
                  ) {
                    var p = c;
                    return (
                      s.which == a.LEFT && h.length
                        ? (p = h)
                        : s.which == a.RIGHT
                        ? (p = d.length ? d : null)
                        : s.which === a.BACKSPACE
                        ? this.unselect(c.first()) && (this.search.width(10), (p = h.length ? h : d))
                        : s.which == a.DELETE
                        ? this.unselect(c.first()) && (this.search.width(10), (p = d.length ? d : null))
                        : s.which == a.ENTER && (p = null),
                      this.selectChoice(p),
                      C(s),
                      void ((p && p.length) || this.open())
                    );
                  }
                  if (
                    ((s.which === a.BACKSPACE && 1 == this.keydowns) || s.which == a.LEFT) &&
                    0 == u.offset &&
                    !u.length
                  )
                    return this.selectChoice(i.find('.select2-search-choice:not(.select2-locked)').last()), void C(s);
                  if ((this.selectChoice(null), this.opened()))
                    switch (s.which) {
                      case a.UP:
                      case a.DOWN:
                        return this.moveHighlight(s.which === a.UP ? -1 : 1), void C(s);
                      case a.ENTER:
                        return this.selectHighlighted(), void C(s);
                      case a.TAB:
                        return this.selectHighlighted({ noFocus: !0 }), void this.close();
                      case a.ESC:
                        return this.cancel(s), void C(s);
                    }
                  if (
                    s.which !== a.TAB &&
                    !a.isControl(s) &&
                    !a.isFunctionKey(s) &&
                    s.which !== a.BACKSPACE &&
                    s.which !== a.ESC
                  ) {
                    if (
                      s.which === a.ENTER &&
                      (!1 === this.opts.openOnEnter || s.altKey || s.ctrlKey || s.shiftKey || s.metaKey)
                    )
                      return;
                    this.open(),
                      (s.which !== a.PAGE_UP && s.which !== a.PAGE_DOWN) || C(s),
                      s.which === a.ENTER && C(s);
                  }
                }
              })
            ),
            this.search.on(
              'keyup',
              this.bind(function () {
                (this.keydowns = 0), this.resizeSearch();
              })
            ),
            this.search.on(
              'blur',
              this.bind(function (i) {
                this.container.removeClass('select2-container-active'),
                  this.search.removeClass('select2-focused'),
                  this.selectChoice(null),
                  this.opened() || this.clearSearch(),
                  i.stopImmediatePropagation(),
                  this.opts.element.trigger(e.Event('select2-blur'));
              })
            ),
            this.container.on(
              'click',
              s,
              this.bind(function (i) {
                this.isInterfaceEnabled() &&
                  (0 < e(i.target).closest('.select2-search-choice').length ||
                    (this.selectChoice(null),
                    this.clearPlaceholder(),
                    this.container.hasClass('select2-container-active') ||
                      this.opts.element.trigger(e.Event('select2-focus')),
                    this.open(),
                    this.focusSearch(),
                    i.preventDefault()));
              })
            ),
            this.container.on(
              'focus',
              s,
              this.bind(function () {
                this.isInterfaceEnabled() &&
                  (this.container.hasClass('select2-container-active') ||
                    this.opts.element.trigger(e.Event('select2-focus')),
                  this.container.addClass('select2-container-active'),
                  this.dropdown.addClass('select2-drop-active'),
                  this.clearPlaceholder());
              })
            ),
            this.initContainerWidth(),
            this.opts.element.hide(),
            this.clearSearch();
        },
        enableInterface: function () {
          this.parent.enableInterface.apply(this, arguments) &&
            this.search.prop('disabled', !this.isInterfaceEnabled());
        },
        initSelection: function () {
          var e;
          '' === this.opts.element.val() &&
            '' === this.opts.element.text() &&
            (this.updateSelection([]), this.close(), this.clearSearch()),
            (this.select || '' !== this.opts.element.val()) &&
              (e = this).opts.initSelection.call(null, this.opts.element, function (s) {
                s !== i && null !== s && (e.updateSelection(s), e.close(), e.clearSearch());
              });
        },
        clearSearch: function () {
          var e = this.getPlaceholder(),
            s = this.getMaxSearchWidth();
          e !== i && 0 === this.getVal().length && !1 === this.search.hasClass('select2-focused')
            ? (this.search.val(e).addClass('select2-default'),
              this.search.width(0 < s ? s : this.container.css('width')))
            : this.search.val('').width(10);
        },
        clearPlaceholder: function () {
          this.search.hasClass('select2-default') && this.search.val('').removeClass('select2-default');
        },
        opening: function () {
          this.clearPlaceholder(),
            this.resizeSearch(),
            this.parent.opening.apply(this, arguments),
            this.focusSearch(),
            '' === this.search.val() &&
              this.nextSearchTerm != i &&
              (this.search.val(this.nextSearchTerm), this.search.select()),
            this.updateResults(!0),
            this.opts.shouldFocusInput(this) && this.search.focus(),
            this.opts.element.trigger(e.Event('select2-open'));
        },
        close: function () {
          this.opened() && this.parent.close.apply(this, arguments);
        },
        focus: function () {
          this.close(), this.search.focus();
        },
        isFocused: function () {
          return this.search.hasClass('select2-focused');
        },
        updateSelection: function (i) {
          var s = [],
            n = [],
            o = this;
          e(i).each(function () {
            0 > m(o.id(this), s) && (s.push(o.id(this)), n.push(this));
          }),
            (i = n),
            this.selection.find('.select2-search-choice').remove(),
            e(i).each(function () {
              o.addSelectedChoice(this);
            }),
            o.postprocessResults();
        },
        tokenize: function () {
          var e = this.search.val();
          null != (e = this.opts.tokenizer.call(this, e, this.data(), this.bind(this.onSelect), this.opts)) &&
            e != i &&
            (this.search.val(e), 0 < e.length && this.open());
        },
        onSelect: function (e, s) {
          this.triggerSelect(e) &&
            '' !== e.text &&
            (this.addSelectedChoice(e),
            this.opts.element.trigger({ type: 'selected', val: this.id(e), choice: e }),
            (this.nextSearchTerm = this.opts.nextSearchTerm(e, this.search.val())),
            this.clearSearch(),
            this.updateResults(),
            (!this.select && this.opts.closeOnSelect) || this.postprocessResults(e, !1, !0 === this.opts.closeOnSelect),
            !this.opts.closeOnSelect && 0 < this.countSelectableResults()
              ? (this.search.width(10),
                this.resizeSearch(),
                0 < this.getMaximumSelectionSize() && this.val().length >= this.getMaximumSelectionSize()
                  ? this.updateResults(!0)
                  : this.nextSearchTerm != i &&
                    (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()),
                this.positionDropdown())
              : (this.close(), this.search.width(10)),
            this.triggerChange({ added: e }),
            (s && s.noFocus) || this.focusSearch());
        },
        cancel: function () {
          this.close(), this.focusSearch();
        },
        addSelectedChoice: function (s) {
          var n,
            o,
            r = !s.locked,
            a = e(
              "<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"
            ),
            l = e("<li class='select2-search-choice select2-locked'><div></div></li>"),
            c = r ? a : l,
            h = this.id(s),
            d = this.getVal();
          (n = this.opts.formatSelection(s, c.find('div'), this.opts.escapeMarkup)) != i &&
            c.find('div').replaceWith(e('<div></div>').html(n)),
            (o = this.opts.formatSelectionCssClass(s, c.find('div'))) != i && c.addClass(o),
            r &&
              c
                .find('.select2-search-choice-close')
                .on('mousedown', C)
                .on(
                  'click dblclick',
                  this.bind(function (i) {
                    this.isInterfaceEnabled() &&
                      (this.unselect(e(i.target)),
                      this.selection.find('.select2-search-choice-focus').removeClass('select2-search-choice-focus'),
                      C(i),
                      this.close(),
                      this.focusSearch());
                  })
                )
                .on(
                  'focus',
                  this.bind(function () {
                    this.isInterfaceEnabled() &&
                      (this.container.addClass('select2-container-active'),
                      this.dropdown.addClass('select2-drop-active'));
                  })
                ),
            c.data('select2-data', s),
            c.insertBefore(this.searchContainer),
            d.push(h),
            this.setVal(d);
        },
        unselect: function (i) {
          var s,
            n,
            o = this.getVal();
          if (0 === (i = i.closest('.select2-search-choice')).length)
            throw 'Invalid argument: ' + i + '. Must be .select2-search-choice';
          if ((s = i.data('select2-data'))) {
            var r = e.Event('select2-removing');
            if (((r.val = this.id(s)), (r.choice = s), this.opts.element.trigger(r), r.isDefaultPrevented())) return !1;
            for (; 0 <= (n = m(this.id(s), o)); )
              o.splice(n, 1), this.setVal(o), this.select && this.postprocessResults();
            return (
              i.remove(),
              this.opts.element.trigger({ type: 'select2-removed', val: this.id(s), choice: s }),
              this.triggerChange({ removed: s }),
              !0
            );
          }
        },
        postprocessResults: function (e, i, s) {
          var n = this.getVal(),
            o = this.results.find('.select2-result'),
            r = this.results.find('.select2-result-with-children'),
            a = this;
          o.each2(function (e, i) {
            0 <= m(a.id(i.data('select2-data')), n) &&
              (i.addClass('select2-selected'), i.find('.select2-result-selectable').addClass('select2-selected'));
          }),
            r.each2(function (e, i) {
              i.is('.select2-result-selectable') ||
                0 !== i.find('.select2-result-selectable:not(.select2-selected)').length ||
                i.addClass('select2-selected');
            }),
            -1 == this.highlight() && !1 !== s && !0 === this.opts.closeOnSelect && a.highlight(0),
            !this.opts.createSearchChoice &&
              0 < !o.filter('.select2-result:not(.select2-selected)').length &&
              (!e || (e && !e.more && 0 === this.results.find('.select2-no-results').length)) &&
              A(a.opts.formatNoMatches, 'formatNoMatches') &&
              this.results.append(
                "<li class='select2-no-results'>" + D(a.opts.formatNoMatches, a.opts.element, a.search.val()) + '</li>'
              );
        },
        getMaxSearchWidth: function () {
          return this.selection.width() - y(this.search);
        },
        resizeSearch: function () {
          var i,
            s,
            o,
            r,
            a,
            l = y(this.search),
            c = this.search;
          n ||
            ((a = c[0].currentStyle || window.getComputedStyle(c[0], null)),
            (n = e(document.createElement('div')).css({
              position: 'absolute',
              left: '-10000px',
              top: '-10000px',
              display: 'none',
              fontSize: a.fontSize,
              fontFamily: a.fontFamily,
              fontStyle: a.fontStyle,
              fontWeight: a.fontWeight,
              letterSpacing: a.letterSpacing,
              textTransform: a.textTransform,
              whiteSpace: 'nowrap',
            })).attr('class', 'select2-sizer'),
            e(document.body).append(n)),
            n.text(c.val()),
            (i = n.width() + 10),
            (s = this.search.offset().left),
            i > (r = (o = this.selection.width()) - (s - this.selection.offset().left) - l) && (r = o - l),
            r < 40 && (r = o - l),
            r <= 0 && (r = i),
            this.search.width(Math.floor(r));
        },
        getVal: function () {
          var e;
          return this.select
            ? null === (e = this.select.val())
              ? []
              : e
            : b((e = this.opts.element.val()), this.opts.separator, this.opts.transformVal);
        },
        setVal: function (i) {
          var s;
          this.select
            ? this.select.val(i)
            : ((s = []),
              e(i).each(function () {
                0 > m(this, s) && s.push(this);
              }),
              this.opts.element.val(0 === s.length ? '' : s.join(this.opts.separator)));
        },
        buildChangeDetails: function (e, i) {
          (i = i.slice(0)), (e = e.slice(0));
          for (var s = 0; s < i.length; s++)
            for (var n = 0; n < e.length; n++)
              v(this.opts.id(i[s]), this.opts.id(e[n])) && (i.splice(s, 1), 0 < s && s--, e.splice(n, 1), n--);
          return { added: i, removed: e };
        },
        val: function (s, n) {
          var o,
            r = this;
          if (0 === arguments.length) return this.getVal();
          if (((o = this.data()).length || (o = []), !s && 0 !== s))
            return (
              this.opts.element.val(''),
              this.updateSelection([]),
              this.clearSearch(),
              void (n && this.triggerChange({ added: this.data(), removed: o }))
            );
          if ((this.setVal(s), this.select))
            this.opts.initSelection(this.select, this.bind(this.updateSelection)),
              n && this.triggerChange(this.buildChangeDetails(o, this.data()));
          else {
            if (this.opts.initSelection === i) throw Error('val() cannot be called if initSelection() is not defined');
            this.opts.initSelection(this.opts.element, function (i) {
              var s = e.map(i, r.id);
              r.setVal(s),
                r.updateSelection(i),
                r.clearSearch(),
                n && r.triggerChange(r.buildChangeDetails(o, r.data()));
            });
          }
          this.clearSearch();
        },
        onSortStart: function () {
          if (this.select)
            throw Error(
              "Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead."
            );
          this.search.width(0), this.searchContainer.hide();
        },
        onSortEnd: function () {
          var i = [],
            s = this;
          this.searchContainer.show(),
            this.searchContainer.appendTo(this.searchContainer.parent()),
            this.resizeSearch(),
            this.selection.find('.select2-search-choice').each(function () {
              i.push(s.opts.id(e(this).data('select2-data')));
            }),
            this.setVal(i),
            this.triggerChange();
        },
        data: function (i, s) {
          var n,
            o,
            r = this;
          return 0 === arguments.length
            ? this.selection
                .children('.select2-search-choice')
                .map(function () {
                  return e(this).data('select2-data');
                })
                .get()
            : ((o = this.data()),
              (i = i || []),
              (n = e.map(i, function (e) {
                return r.opts.id(e);
              })),
              this.setVal(n),
              this.updateSelection(i),
              this.clearSearch(),
              void (s && this.triggerChange(this.buildChangeDetails(o, this.data()))));
        },
      })),
      (e.fn.select2 = function () {
        var s,
          n,
          o,
          r,
          a,
          l = Array.prototype.slice.call(arguments, 0),
          c = [
            'val',
            'destroy',
            'opened',
            'open',
            'close',
            'focus',
            'isFocused',
            'container',
            'dropdown',
            'onSortStart',
            'onSortEnd',
            'enable',
            'disable',
            'readonly',
            'positionDropdown',
            'data',
            'search',
          ],
          h = ['opened', 'isFocused', 'container', 'dropdown'],
          d = ['val', 'data'],
          u = { search: 'externalSearch' };
        return (
          this.each(function () {
            if (0 === l.length || 'object' == typeof l[0])
              ((s = 0 === l.length ? {} : e.extend({}, l[0])).element = e(this)),
                'select' === s.element.get(0).tagName.toLowerCase()
                  ? (a = s.element.prop('multiple'))
                  : ((a = s.multiple || !1), 'tags' in s && (s.multiple = a = !0)),
                (n = a ? new window.Select2.class.multi() : new window.Select2.class.single()).init(s);
            else {
              if ('string' != typeof l[0]) throw 'Invalid arguments to select2 plugin: ' + l;
              if (0 > m(l[0], c)) throw 'Unknown method: ' + l[0];
              if (((r = i), (n = e(this).data('select2')) === i)) return;
              if (
                ((r =
                  'container' === (o = l[0])
                    ? n.container
                    : 'dropdown' === o
                    ? n.dropdown
                    : (u[o] && (o = u[o]), n[o].apply(n, l.slice(1)))),
                0 <= m(l[0], h) || (0 <= m(l[0], d) && 1 == l.length))
              )
                return !1;
            }
          }),
          r === i ? this : r
        );
      }),
      (e.fn.select2.defaults = {
        width: 'copy',
        loadMorePadding: 0,
        closeOnSelect: !0,
        openOnEnter: !0,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: '',
        dropdownCssClass: '',
        formatResult: function (e, i, s, n) {
          var o = [];
          return _(this.text(e), s.term, o, n), o.join('');
        },
        transformVal: function (i) {
          return e.trim(i);
        },
        formatSelection: function (e, s, n) {
          return e ? n(this.text(e)) : i;
        },
        sortResults: function (e) {
          return e;
        },
        formatResultCssClass: function (e) {
          return e.css;
        },
        formatSelectionCssClass: function () {
          return i;
        },
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        id: function (e) {
          return e == i ? null : e.id;
        },
        text: function (i) {
          return i && this.data && this.data.text
            ? e.isFunction(this.data.text)
              ? this.data.text(i)
              : i[this.data.text]
            : i.text;
        },
        matcher: function (e, i) {
          return (
            0 <=
            g('' + i)
              .toUpperCase()
              .indexOf(g('' + e).toUpperCase())
          );
        },
        separator: ',',
        tokenSeparators: [],
        tokenizer: function (e, s, n, o) {
          var r,
            a,
            l,
            c,
            h,
            d = e,
            u = !1;
          if (!o.createSearchChoice || !o.tokenSeparators || o.tokenSeparators.length < 1) return i;
          for (;;) {
            for (
              a = -1, l = 0, c = o.tokenSeparators.length;
              l < c && ((h = o.tokenSeparators[l]), !(0 <= (a = e.indexOf(h))));
              l++
            );
            if (a < 0) break;
            if (
              ((r = e.substring(0, a)),
              (e = e.substring(a + h.length)),
              0 < r.length &&
                (r = o.createSearchChoice.call(this, r, s)) !== i &&
                null !== r &&
                o.id(r) !== i &&
                null !== o.id(r))
            ) {
              for (u = !1, l = 0, c = s.length; l < c; l++)
                if (v(o.id(r), o.id(s[l]))) {
                  u = !0;
                  break;
                }
              u || n(r);
            }
          }
          return d !== e ? e : void 0;
        },
        escapeMarkup: S,
        blurOnChange: !1,
        selectOnBlur: !1,
        adaptContainerCssClass: function (e) {
          return e;
        },
        adaptDropdownCssClass: function () {
          return null;
        },
        nextSearchTerm: function () {
          return i;
        },
        searchInputPlaceholder: '',
        createSearchChoicePosition: 'top',
        shouldFocusInput: function (e) {
          return !(('ontouchstart' in window || 0 < navigator.msMaxTouchPoints) && e.opts.minimumResultsForSearch < 0);
        },
      }),
      (e.fn.select2.locales = []),
      (e.fn.select2.locales.en = {
        formatMatches: function (e) {
          return 1 === e
            ? 'One result is available, press enter to select it.'
            : e + ' results are available, use up and down arrow keys to navigate.';
        },
        formatNoMatches: function () {
          return 'No matches found';
        },
        formatAjaxError: function () {
          return 'Loading failed';
        },
        formatInputTooShort: function (e, i) {
          var s = i - e.length;
          return 'Please enter ' + s + ' or more character' + (1 == s ? '' : 's');
        },
        formatInputTooLong: function (e, i) {
          var s = e.length - i;
          return 'Please delete ' + s + ' character' + (1 == s ? '' : 's');
        },
        formatSelectionTooBig: function (e) {
          return 'You can only select ' + e + ' item' + (1 == e ? '' : 's');
        },
        formatLoadMore: function () {
          return 'Loading more results\xe2€\xa6';
        },
        formatSearching: function () {
          return 'Searching\xe2€\xa6';
        },
      }),
      e.extend(e.fn.select2.defaults, e.fn.select2.locales.en),
      (e.fn.select2.ajaxDefaults = { transport: e.ajax, params: { type: 'GET', cache: !1, dataType: 'json' } }),
      (window.Select2 = {
        query: { ajax: T, local: E, tags: F },
        util: { debounce: x, markMatch: _, escapeMarkup: S, stripDiacritics: g },
        class: { abstract: s, single: d, multi: u },
      }));
  })(jQuery),
  window.matchMedia ||
    (window.matchMedia = (function () {
      'use strict';
      var e,
        i,
        s,
        n = window.styleMedia || window.media;
      return (
        n ||
          ((i = document.createElement('style')),
          (s = document.getElementsByTagName('script')[0]),
          (i.type = 'text/css'),
          (i.id = 'matchmediajs-test'),
          s.parentNode.insertBefore(i, s),
          (e = ('getComputedStyle' in window && window.getComputedStyle(i, null)) || i.currentStyle),
          (n = {
            matchMedium: function (s) {
              var n = '@media ' + s + '{ #matchmediajs-test { width: 1px; } }';
              return i.styleSheet ? (i.styleSheet.cssText = n) : (i.textContent = n), '1px' === e.width;
            },
          })),
        function (e) {
          return { matches: n.matchMedium(e || 'all'), media: e || 'all' };
        }
      );
    })()),
  (function () {
    var e, i, s, n, o;
    function r(i) {
      clearTimeout(n),
        (n = setTimeout(function () {
          for (var i = 0, s = o.length; i < s; i++) {
            var n = o[i].mql,
              r = o[i].listeners || [],
              a = e(n.media).matches;
            if (a !== n.matches) {
              n.matches = a;
              for (var l = 0, c = r.length; l < c; l++) r[l].call(window, n);
            }
          }
        }, 30));
    }
    (window.matchMedia && window.matchMedia('all').addListener) ||
      ((i = (e = window.matchMedia)('only all').matches),
      (s = !1),
      (n = 0),
      (o = []),
      (window.matchMedia = function (n) {
        var a = e(n),
          l = [],
          c = 0;
        return (
          (a.addListener = function (e) {
            i &&
              (s || ((s = !0), window.addEventListener('resize', r, !0)),
              0 === c && (c = o.push({ mql: a, listeners: l })),
              l.push(e));
          }),
          (a.removeListener = function (e) {
            for (var i = 0, s = l.length; i < s; i++) l[i] === e && l.splice(i, 1);
          }),
          a
        );
      }));
  })(),
  (function (e, i) {
    var s = window.matchMedia;
    'undefined' != typeof module && module.exports
      ? (module.exports = i(s))
      : 'function' == typeof define && define.amd
      ? define(function () {
          return (e.enquire = i(s));
        })
      : (e.enquire = i(s));
  })(this, function (e) {
    'use strict';
    function i(e, i) {
      for (var s = 0, n = e.length; s < n && !1 !== i(e[s], s); s++);
    }
    function s(e) {
      return 'function' == typeof e;
    }
    function n(e) {
      (this.options = e).deferSetup || this.setup();
    }
    function o(i, s) {
      (this.query = i), (this.isUnconditional = s), (this.handlers = []), (this.mql = e(i));
      var n = this;
      (this.listener = function (e) {
        (n.mql = e), n.assess();
      }),
        this.mql.addListener(this.listener);
    }
    function r() {
      if (!e) throw Error('matchMedia not present, legacy browsers require a polyfill');
      (this.queries = {}), (this.browserIsIncapable = !e('only all').matches);
    }
    return (
      (n.prototype = {
        setup: function () {
          this.options.setup && this.options.setup(), (this.initialised = !0);
        },
        on: function () {
          this.initialised || this.setup(), this.options.match && this.options.match();
        },
        off: function () {
          this.options.unmatch && this.options.unmatch();
        },
        destroy: function () {
          this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function (e) {
          return this.options === e || this.options.match === e;
        },
      }),
      (o.prototype = {
        addHandler: function (e) {
          var i = new n(e);
          this.handlers.push(i), this.matches() && i.on();
        },
        removeHandler: function (e) {
          var s = this.handlers;
          i(s, function (i, n) {
            return i.equals(e) ? (i.destroy(), !s.splice(n, 1)) : void 0;
          });
        },
        matches: function () {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function () {
          i(this.handlers, function (e) {
            e.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function () {
          var e = this.matches() ? 'on' : 'off';
          i(this.handlers, function (i) {
            i[e]();
          });
        },
      }),
      (r.prototype = {
        register: function (e, n, r) {
          var a = this.queries,
            l = r && this.browserIsIncapable;
          return (
            a[e] || (a[e] = new o(e, l)),
            s(n) && (n = { match: n }),
            '[object Array]' === Object.prototype.toString.apply(n) || (n = [n]),
            i(n, function (i) {
              s(i) && (i = { match: i }), a[e].addHandler(i);
            }),
            this
          );
        },
        unregister: function (e, i) {
          var s = this.queries[e];
          return s && (i ? s.removeHandler(i) : (s.clear(), delete this.queries[e])), this;
        },
      }),
      new r()
    );
  });
var stickyItem = 'navbar',
  readAssistOffset = 40,
  duration = 250,
  doc = document.documentElement;
(keydown = function (e) {
  var i,
    s = document.activeElement.nodeName;
  ((32 === e.keyCode && 'BODY' === s) || 33 === e.keyCode || 34 === e.keyCode) &&
    ((i = window.innerHeight - document.getElementById(stickyItem).offsetHeight - readAssistOffset),
    e.preventDefault(),
    (isShift = e ? !(!e.shiftKey && 33 !== e.keyCode) : !(!window.event.shiftKey && 33 !== e.keyCode)),
    (scrollToHere = i + (currScrollPosition = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0))),
    isShift && (scrollToHere = currScrollPosition - i),
    smoothScrollTo(scrollToHere));
}),
  (window.smoothScrollTo = (function () {
    var e, i, s;
    return function (n) {
      var o = window.pageYOffset,
        r = n - window.pageYOffset;
      return (
        (i = Date.now()),
        (s = 0),
        e && clearInterval(e),
        (e = setInterval(function () {
          var n;
          1 <= (s = (Date.now() - i) / duration) && (clearInterval(e), (s = 1)),
            (n = s * r + o),
            window.scrollBy(0, n - window.pageYOffset);
        }, 10))
      );
    };
  })()),
  (window.onkeydown = keydown),
  (function (e) {
    'function' == typeof define && define.amd ? define(['jquery'], e) : e(jQuery);
  })(function (e) {
    e.extend(e.fn, {
      validate: function (i) {
        if (this.length) {
          var s = e.data(this[0], 'validator');
          return (
            s ||
            (this.attr('novalidate', 'novalidate'),
            (s = new e.validator(i, this[0])),
            e.data(this[0], 'validator', s),
            s.settings.onsubmit &&
              (this.validateDelegate(':submit', 'click', function (i) {
                s.settings.submitHandler && (s.submitButton = i.target),
                  e(i.target).hasClass('cancel') && (s.cancelSubmit = !0),
                  void 0 !== e(i.target).attr('formnovalidate') && (s.cancelSubmit = !0);
              }),
              this.submit(function (i) {
                function n() {
                  var n, o;
                  return (
                    !s.settings.submitHandler ||
                    (s.submitButton &&
                      (n = e("<input type='hidden'/>")
                        .attr('name', s.submitButton.name)
                        .val(e(s.submitButton).val())
                        .appendTo(s.currentForm)),
                    (o = s.settings.submitHandler.call(s, s.currentForm, i)),
                    s.submitButton && n.remove(),
                    void 0 !== o && o)
                  );
                }
                return (
                  s.settings.debug && i.preventDefault(),
                  s.cancelSubmit
                    ? ((s.cancelSubmit = !1), n())
                    : s.form()
                    ? s.pendingRequest
                      ? ((s.formSubmitted = !0), !1)
                      : n()
                    : (s.focusInvalid(), !1)
                );
              })),
            s)
          );
        }
        i && i.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
      },
      valid: function () {
        var i, s;
        return (
          e(this[0]).is('form')
            ? (i = this.validate().form())
            : ((i = !0),
              (s = e(this[0].form).validate()),
              this.each(function () {
                i = s.element(this) && i;
              })),
          i
        );
      },
      removeAttrs: function (i) {
        var s = {},
          n = this;
        return (
          e.each(i.split(/\s/), function (e, i) {
            (s[i] = n.attr(i)), n.removeAttr(i);
          }),
          s
        );
      },
      rules: function (i, s) {
        var n,
          o,
          r,
          a,
          l,
          c,
          h = this[0];
        if (i)
          switch (((o = (n = e.data(h.form, 'validator').settings).rules), (r = e.validator.staticRules(h)), i)) {
            case 'add':
              e.extend(r, e.validator.normalizeRule(s)),
                delete r.messages,
                (o[h.name] = r),
                s.messages && (n.messages[h.name] = e.extend(n.messages[h.name], s.messages));
              break;
            case 'remove':
              return s
                ? ((c = {}),
                  e.each(s.split(/\s/), function (i, s) {
                    (c[s] = r[s]), delete r[s], 'required' === s && e(h).removeAttr('aria-required');
                  }),
                  c)
                : (delete o[h.name], r);
          }
        return (
          (a = e.validator.normalizeRules(
            e.extend(
              {},
              e.validator.classRules(h),
              e.validator.attributeRules(h),
              e.validator.dataRules(h),
              e.validator.staticRules(h)
            ),
            h
          )).required &&
            ((l = a.required),
            delete a.required,
            (a = e.extend({ required: l }, a)),
            e(h).attr('aria-required', 'true')),
          a.remote && ((l = a.remote), delete a.remote, (a = e.extend(a, { remote: l }))),
          a
        );
      },
    }),
      e.extend(e.expr[':'], {
        blank: function (i) {
          return !e.trim('' + e(i).val());
        },
        filled: function (i) {
          return !!e.trim('' + e(i).val());
        },
        unchecked: function (i) {
          return !e(i).prop('checked');
        },
      }),
      (e.validator = function (i, s) {
        (this.settings = e.extend(!0, {}, e.validator.defaults, i)), (this.currentForm = s), this.init();
      }),
      (e.validator.format = function (i, s) {
        return 1 === arguments.length
          ? function () {
              var s = e.makeArray(arguments);
              return s.unshift(i), e.validator.format.apply(this, s);
            }
          : (2 < arguments.length && s.constructor !== Array && (s = e.makeArray(arguments).slice(1)),
            s.constructor !== Array && (s = [s]),
            e.each(s, function (e, s) {
              i = i.replace(RegExp('\\{' + e + '\\}', 'g'), function () {
                return s;
              });
            }),
            i);
      }),
      e.extend(e.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: 'error',
          validClass: 'valid',
          errorElement: 'label',
          focusCleanup: !1,
          focusInvalid: !0,
          errorContainer: e([]),
          errorLabelContainer: e([]),
          onsubmit: !0,
          ignore: ':hidden',
          ignoreTitle: !1,
          onfocusin: function (e) {
            (this.lastActive = e),
              this.settings.focusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(e)));
          },
          onfocusout: function (e) {
            this.checkable(e) || (!(e.name in this.submitted) && this.optional(e)) || this.element(e);
          },
          onkeyup: function (e, i) {
            (9 !== i.which || '' !== this.elementValue(e)) &&
              (e.name in this.submitted || e === this.lastElement) &&
              this.element(e);
          },
          onclick: function (e) {
            e.name in this.submitted
              ? this.element(e)
              : e.parentNode.name in this.submitted && this.element(e.parentNode);
          },
          highlight: function (i, s, n) {
            'radio' === i.type ? this.findByName(i.name).addClass(s).removeClass(n) : e(i).addClass(s).removeClass(n);
          },
          unhighlight: function (i, s, n) {
            'radio' === i.type ? this.findByName(i.name).removeClass(s).addClass(n) : e(i).removeClass(s).addClass(n);
          },
        },
        setDefaults: function (i) {
          e.extend(e.validator.defaults, i);
        },
        messages: {
          required: 'This field is required.',
          remote: 'Please fix this field.',
          email: 'Please enter a valid email address.',
          url: 'Please enter a valid URL.',
          date: 'Please enter a valid date.',
          dateISO: 'Please enter a valid date ( ISO ).',
          number: 'Please enter a valid number.',
          digits: 'Please enter only digits.',
          creditcard: 'Please enter a valid credit card number.',
          equalTo: 'Please enter the same value again.',
          maxlength: e.validator.format('Please enter no more than {0} characters.'),
          minlength: e.validator.format('Please enter at least {0} characters.'),
          rangelength: e.validator.format('Please enter a value between {0} and {1} characters long.'),
          range: e.validator.format('Please enter a value between {0} and {1}.'),
          max: e.validator.format('Please enter a value less than or equal to {0}.'),
          min: e.validator.format('Please enter a value greater than or equal to {0}.'),
        },
        autoCreateRanges: !1,
        prototype: {
          init: function () {
            function i(i) {
              var s = e.data(this[0].form, 'validator'),
                n = 'on' + i.type.replace(/^validate/, ''),
                o = s.settings;
              o[n] && !this.is(o.ignore) && o[n].call(s, this[0], i);
            }
            (this.labelContainer = e(this.settings.errorLabelContainer)),
              (this.errorContext = (this.labelContainer.length && this.labelContainer) || e(this.currentForm)),
              (this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset();
            var s,
              n = (this.groups = {});
            e.each(this.settings.groups, function (i, s) {
              'string' == typeof s && (s = s.split(/\s/)),
                e.each(s, function (e, s) {
                  n[s] = i;
                });
            }),
              (s = this.settings.rules),
              e.each(s, function (i, n) {
                s[i] = e.validator.normalizeRule(n);
              }),
              e(this.currentForm)
                .validateDelegate(
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                  'focusin focusout keyup',
                  i
                )
                .validateDelegate("select, option, [type='radio'], [type='checkbox']", 'click', i),
              this.settings.invalidHandler &&
                e(this.currentForm).bind('invalid-form.validate', this.settings.invalidHandler),
              e(this.currentForm).find('[required], [data-rule-required], .required').attr('aria-required', 'true');
          },
          form: function () {
            return (
              this.checkForm(),
              e.extend(this.submitted, this.errorMap),
              (this.invalid = e.extend({}, this.errorMap)),
              this.valid() || e(this.currentForm).triggerHandler('invalid-form', [this]),
              this.showErrors(),
              this.valid()
            );
          },
          checkForm: function () {
            this.prepareForm();
            for (var e = 0, i = (this.currentElements = this.elements()); i[e]; e++) this.check(i[e]);
            return this.valid();
          },
          element: function (i) {
            var s = this.clean(i),
              n = this.validationTargetFor(s),
              o = !0;
            return (
              void 0 === (this.lastElement = n)
                ? delete this.invalid[s.name]
                : (this.prepareElement(n),
                  (this.currentElements = e(n)),
                  (o = !1 !== this.check(n)) ? delete this.invalid[n.name] : (this.invalid[n.name] = !0)),
              e(i).attr('aria-invalid', !o),
              this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
              this.showErrors(),
              o
            );
          },
          showErrors: function (i) {
            if (i) {
              for (var s in (e.extend(this.errorMap, i), (this.errorList = []), i))
                this.errorList.push({ message: i[s], element: this.findByName(s)[0] });
              this.successList = e.grep(this.successList, function (e) {
                return !(e.name in i);
              });
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
              : this.defaultShowErrors();
          },
          resetForm: function () {
            e.fn.resetForm && e(this.currentForm).resetForm(),
              (this.submitted = {}),
              (this.lastElement = null),
              this.prepareForm(),
              this.hideErrors(),
              this.elements()
                .removeClass(this.settings.errorClass)
                .removeData('previousValue')
                .removeAttr('aria-invalid');
          },
          numberOfInvalids: function () {
            return this.objectLength(this.invalid);
          },
          objectLength: function (e) {
            var i,
              s = 0;
            for (i in e) s++;
            return s;
          },
          hideErrors: function () {
            this.hideThese(this.toHide);
          },
          hideThese: function (e) {
            e.not(this.containers).text(''), this.addWrapper(e).hide();
          },
          valid: function () {
            return 0 === this.size();
          },
          size: function () {
            return this.errorList.length;
          },
          focusInvalid: function () {
            if (this.settings.focusInvalid)
              try {
                e(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                  .filter(':visible')
                  .focus()
                  .trigger('focusin');
              } catch (i) {}
          },
          findLastActive: function () {
            var i = this.lastActive;
            return (
              i &&
              1 ===
                e.grep(this.errorList, function (e) {
                  return e.element.name === i.name;
                }).length &&
              i
            );
          },
          elements: function () {
            var i = this,
              s = {};
            return e(this.currentForm)
              .find('input, select, textarea')
              .not(':submit, :reset, :image, [disabled], [readonly]')
              .not(this.settings.ignore)
              .filter(function () {
                return (
                  !this.name && i.settings.debug && window.console && console.error('%o has no name assigned', this),
                  !(this.name in s || !i.objectLength(e(this).rules()) || ((s[this.name] = !0), 0))
                );
              });
          },
          clean: function (i) {
            return e(i)[0];
          },
          errors: function () {
            var i = this.settings.errorClass.split(' ').join('.');
            return e(this.settings.errorElement + '.' + i, this.errorContext);
          },
          reset: function () {
            (this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = e([])),
              (this.toHide = e([])),
              (this.currentElements = e([]));
          },
          prepareForm: function () {
            this.reset(), (this.toHide = this.errors().add(this.containers));
          },
          prepareElement: function (e) {
            this.reset(), (this.toHide = this.errorsFor(e));
          },
          elementValue: function (i) {
            var s,
              n = e(i),
              o = i.type;
            return 'radio' === o || 'checkbox' === o
              ? e("input[name='" + i.name + "']:checked").val()
              : 'number' === o && void 0 !== i.validity
              ? !i.validity.badInput && n.val()
              : 'string' == typeof (s = n.val())
              ? s.replace(/\r/g, '')
              : s;
          },
          check: function (i) {
            i = this.validationTargetFor(this.clean(i));
            var s,
              n,
              o,
              r = e(i).rules(),
              a = e.map(r, function (e, i) {
                return i;
              }).length,
              l = !1,
              c = this.elementValue(i);
            for (n in r) {
              o = { method: n, parameters: r[n] };
              try {
                if ('dependency-mismatch' === (s = e.validator.methods[n].call(this, c, i, o.parameters)) && 1 === a) {
                  l = !0;
                  continue;
                }
                if (((l = !1), 'pending' === s)) return void (this.toHide = this.toHide.not(this.errorsFor(i)));
                if (!s) return this.formatAndAdd(i, o), !1;
              } catch (h) {
                throw (
                  (this.settings.debug &&
                    window.console &&
                    console.log(
                      'Exception occurred when checking element ' + i.id + ", check the '" + o.method + "' method.",
                      h
                    ),
                  h)
                );
              }
            }
            return l ? void 0 : (this.objectLength(r) && this.successList.push(i), !0);
          },
          customDataMessage: function (i, s) {
            return e(i).data('msg' + s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()) || e(i).data('msg');
          },
          customMessage: function (e, i) {
            var s = this.settings.messages[e];
            return s && (s.constructor === String ? s : s[i]);
          },
          findDefined: function () {
            for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e];
          },
          defaultMessage: function (i, s) {
            return this.findDefined(
              this.customMessage(i.name, s),
              this.customDataMessage(i, s),
              (!this.settings.ignoreTitle && i.title) || void 0,
              e.validator.messages[s],
              '<strong>Warning: No message defined for ' + i.name + '</strong>'
            );
          },
          formatAndAdd: function (i, s) {
            var n = this.defaultMessage(i, s.method),
              o = /\$?\{(\d+)\}/g;
            'function' == typeof n
              ? (n = n.call(this, s.parameters, i))
              : o.test(n) && (n = e.validator.format(n.replace(o, '{$1}'), s.parameters)),
              this.errorList.push({ message: n, element: i, method: s.method }),
              (this.errorMap[i.name] = n),
              (this.submitted[i.name] = n);
          },
          addWrapper: function (e) {
            return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
          },
          defaultShowErrors: function () {
            for (var e, i, s = 0; this.errorList[s]; s++)
              (i = this.errorList[s]),
                this.settings.highlight &&
                  this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                this.showLabel(i.element, i.message);
            if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success))
              for (s = 0; this.successList[s]; s++) this.showLabel(this.successList[s]);
            if (this.settings.unhighlight)
              for (s = 0, e = this.validElements(); e[s]; s++)
                this.settings.unhighlight.call(this, e[s], this.settings.errorClass, this.settings.validClass);
            (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
          },
          validElements: function () {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function () {
            return e(this.errorList).map(function () {
              return this.element;
            });
          },
          showLabel: function (i, s) {
            var n,
              o,
              r,
              a = this.errorsFor(i),
              l = this.idOrName(i),
              c = e(i).attr('aria-describedby');
            a.length
              ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(s))
              : ((n = a =
                  e('<' + this.settings.errorElement + '>')
                    .attr('id', l + '-error')
                    .addClass(this.settings.errorClass)
                    .html(s || '')),
                this.settings.wrapper &&
                  (n = a
                    .hide()
                    .show()
                    .wrap('<' + this.settings.wrapper + '/>')
                    .parent()),
                this.labelContainer.length
                  ? this.labelContainer.append(n)
                  : this.settings.errorPlacement
                  ? this.settings.errorPlacement(n, e(i))
                  : n.insertAfter(i),
                a.is('label')
                  ? a.attr('for', l)
                  : 0 === a.parents("label[for='" + l + "']").length &&
                    ((r = a.attr('id').replace(/(:|\.|\[|\])/g, '\\$1')),
                    c ? c.match(RegExp('\\b' + r + '\\b')) || (c += ' ' + r) : (c = r),
                    e(i).attr('aria-describedby', c),
                    (o = this.groups[i.name]) &&
                      e.each(this.groups, function (i, s) {
                        s === o && e("[name='" + i + "']", this.currentForm).attr('aria-describedby', a.attr('id'));
                      }))),
              !s &&
                this.settings.success &&
                (a.text(''),
                'string' == typeof this.settings.success
                  ? a.addClass(this.settings.success)
                  : this.settings.success(a, i)),
              (this.toShow = this.toShow.add(a));
          },
          errorsFor: function (i) {
            var s = this.idOrName(i),
              n = e(i).attr('aria-describedby'),
              o = "label[for='" + s + "'], label[for='" + s + "'] *";
            return n && (o = o + ', #' + n.replace(/\s+/g, ', #')), this.errors().filter(o);
          },
          idOrName: function (e) {
            return this.groups[e.name] || (!this.checkable(e) && e.id) || e.name;
          },
          validationTargetFor: function (i) {
            return this.checkable(i) && (i = this.findByName(i.name)), e(i).not(this.settings.ignore)[0];
          },
          checkable: function (e) {
            return /radio|checkbox/i.test(e.type);
          },
          findByName: function (i) {
            return e(this.currentForm).find("[name='" + i + "']");
          },
          getLength: function (i, s) {
            switch (s.nodeName.toLowerCase()) {
              case 'select':
                return e('option:selected', s).length;
              case 'input':
                if (this.checkable(s)) return this.findByName(s.name).filter(':checked').length;
            }
            return i.length;
          },
          depend: function (e, i) {
            return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, i);
          },
          dependTypes: {
            boolean: function (e) {
              return e;
            },
            string: function (i, s) {
              return !!e(i, s.form).length;
            },
            function: function (e, i) {
              return e(i);
            },
          },
          optional: function (i) {
            var s = this.elementValue(i);
            return !e.validator.methods.required.call(this, s, i) && 'dependency-mismatch';
          },
          startRequest: function (e) {
            this.pending[e.name] || (this.pendingRequest++, (this.pending[e.name] = !0));
          },
          stopRequest: function (i, s) {
            --this.pendingRequest < 0 && (this.pendingRequest = 0),
              delete this.pending[i.name],
              s && 0 === this.pendingRequest && this.formSubmitted && this.form()
                ? (e(this.currentForm).submit(), (this.formSubmitted = !1))
                : !s &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  (e(this.currentForm).triggerHandler('invalid-form', [this]), (this.formSubmitted = !1));
          },
          previousValue: function (i) {
            return (
              e.data(i, 'previousValue') ||
              e.data(i, 'previousValue', { old: null, valid: !0, message: this.defaultMessage(i, 'remote') })
            );
          },
        },
        classRuleSettings: {
          required: { required: !0 },
          email: { email: !0 },
          url: { url: !0 },
          date: { date: !0 },
          dateISO: { dateISO: !0 },
          number: { number: !0 },
          digits: { digits: !0 },
          creditcard: { creditcard: !0 },
        },
        addClassRules: function (i, s) {
          i.constructor === String ? (this.classRuleSettings[i] = s) : e.extend(this.classRuleSettings, i);
        },
        classRules: function (i) {
          var s = {},
            n = e(i).attr('class');
          return (
            n &&
              e.each(n.split(' '), function () {
                this in e.validator.classRuleSettings && e.extend(s, e.validator.classRuleSettings[this]);
              }),
            s
          );
        },
        attributeRules: function (i) {
          var s,
            n,
            o = {},
            r = e(i),
            a = i.getAttribute('type');
          for (s in e.validator.methods)
            (n = 'required' === s ? ('' === (n = i.getAttribute(s)) && (n = !0), !!n) : r.attr(s)),
              /min|max/.test(s) && (null === a || /number|range|text/.test(a)) && (n = Number(n)),
              n || 0 === n ? (o[s] = n) : a === s && 'range' !== a && (o[s] = !0);
          return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o;
        },
        dataRules: function (i) {
          var s,
            n,
            o = {},
            r = e(i);
          for (s in e.validator.methods)
            void 0 !== (n = r.data('rule' + s.charAt(0).toUpperCase() + s.substring(1).toLowerCase())) && (o[s] = n);
          return o;
        },
        staticRules: function (i) {
          var s = {},
            n = e.data(i.form, 'validator');
          return n.settings.rules && (s = e.validator.normalizeRule(n.settings.rules[i.name]) || {}), s;
        },
        normalizeRules: function (i, s) {
          return (
            e.each(i, function (n, o) {
              if (!1 !== o) {
                if (o.param || o.depends) {
                  var r = !0;
                  switch (typeof o.depends) {
                    case 'string':
                      r = !!e(o.depends, s.form).length;
                      break;
                    case 'function':
                      r = o.depends.call(s, s);
                  }
                  r ? (i[n] = void 0 === o.param || o.param) : delete i[n];
                }
              } else delete i[n];
            }),
            e.each(i, function (n, o) {
              i[n] = e.isFunction(o) ? o(s) : o;
            }),
            e.each(['minlength', 'maxlength'], function () {
              i[this] && (i[this] = Number(i[this]));
            }),
            e.each(['rangelength', 'range'], function () {
              var s;
              i[this] &&
                (e.isArray(i[this])
                  ? (i[this] = [Number(i[this][0]), Number(i[this][1])])
                  : 'string' == typeof i[this] &&
                    ((s = i[this].replace(/[\[\]]/g, '').split(/[\s,]+/)), (i[this] = [Number(s[0]), Number(s[1])])));
            }),
            e.validator.autoCreateRanges &&
              (null != i.min && null != i.max && ((i.range = [i.min, i.max]), delete i.min, delete i.max),
              null != i.minlength &&
                null != i.maxlength &&
                ((i.rangelength = [i.minlength, i.maxlength]), delete i.minlength, delete i.maxlength)),
            i
          );
        },
        normalizeRule: function (i) {
          var s;
          return (
            'string' == typeof i &&
              ((s = {}),
              e.each(i.split(/\s/), function () {
                s[this] = !0;
              }),
              (i = s)),
            i
          );
        },
        addMethod: function (i, s, n) {
          (e.validator.methods[i] = s),
            (e.validator.messages[i] = void 0 !== n ? n : e.validator.messages[i]),
            s.length < 3 && e.validator.addClassRules(i, e.validator.normalizeRule(i));
        },
        methods: {
          required: function (i, s, n) {
            if (!this.depend(n, s)) return 'dependency-mismatch';
            if ('select' !== s.nodeName.toLowerCase())
              return this.checkable(s) ? 0 < this.getLength(i, s) : 0 < e.trim(i).length;
            var o = e(s).val();
            return o && 0 < o.length;
          },
          email: function (e, i) {
            return (
              this.optional(i) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                e
              )
            );
          },
          url: function (e, i) {
            return (
              this.optional(i) ||
              /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                e
              )
            );
          },
          date: function (e, i) {
            return this.optional(i) || !/Invalid|NaN/.test(new Date(e).toString());
          },
          dateISO: function (e, i) {
            return this.optional(i) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
          },
          number: function (e, i) {
            return this.optional(i) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
          },
          digits: function (e, i) {
            return this.optional(i) || /^\d+$/.test(e);
          },
          creditcard: function (e, i) {
            if (this.optional(i)) return 'dependency-mismatch';
            if (/[^0-9 \-]+/.test(e)) return !1;
            var s,
              n,
              o = 0,
              r = 0,
              a = !1;
            if ((e = e.replace(/\D/g, '')).length < 13 || 19 < e.length) return !1;
            for (s = e.length - 1; 0 <= s; s--)
              (r = parseInt((n = e.charAt(s)), 10)), a && 9 < (r *= 2) && (r -= 9), (o += r), (a = !a);
            return o % 10 == 0;
          },
          minlength: function (i, s, n) {
            var o = e.isArray(i) ? i.length : this.getLength(i, s);
            return this.optional(s) || n <= o;
          },
          maxlength: function (i, s, n) {
            var o = e.isArray(i) ? i.length : this.getLength(i, s);
            return this.optional(s) || o <= n;
          },
          rangelength: function (i, s, n) {
            var o = e.isArray(i) ? i.length : this.getLength(i, s);
            return this.optional(s) || (o >= n[0] && o <= n[1]);
          },
          min: function (e, i, s) {
            return this.optional(i) || s <= e;
          },
          max: function (e, i, s) {
            return this.optional(i) || e <= s;
          },
          range: function (e, i, s) {
            return this.optional(i) || (e >= s[0] && e <= s[1]);
          },
          equalTo: function (i, s, n) {
            var o = e(n);
            return (
              this.settings.onfocusout &&
                o.unbind('.validate-equalTo').bind('blur.validate-equalTo', function () {
                  e(s).valid();
                }),
              i === o.val()
            );
          },
          remote: function (i, s, n) {
            if (this.optional(s)) return 'dependency-mismatch';
            var o,
              r,
              a = this.previousValue(s);
            return (
              this.settings.messages[s.name] || (this.settings.messages[s.name] = {}),
              (a.originalMessage = this.settings.messages[s.name].remote),
              (this.settings.messages[s.name].remote = a.message),
              (n = 'string' == typeof n ? { url: n } : n),
              a.old === i
                ? a.valid
                : ((a.old = i),
                  (o = this).startRequest(s),
                  ((r = {})[s.name] = i),
                  e.ajax(
                    e.extend(
                      !0,
                      {
                        url: n,
                        mode: 'abort',
                        port: 'validate' + s.name,
                        dataType: 'json',
                        data: r,
                        context: o.currentForm,
                        success: function (n) {
                          var r,
                            l,
                            c,
                            h = !0 === n || 'true' === n;
                          (o.settings.messages[s.name].remote = a.originalMessage),
                            h
                              ? ((c = o.formSubmitted),
                                o.prepareElement(s),
                                (o.formSubmitted = c),
                                o.successList.push(s),
                                delete o.invalid[s.name],
                                o.showErrors())
                              : ((r = {}),
                                (l = n || o.defaultMessage(s, 'remote')),
                                (r[s.name] = a.message = e.isFunction(l) ? l(i) : l),
                                (o.invalid[s.name] = !0),
                                o.showErrors(r)),
                            (a.valid = h),
                            o.stopRequest(s, h);
                        },
                      },
                      n
                    )
                  ),
                  'pending')
            );
          },
        },
      }),
      (e.format = function () {
        throw '$.format has been deprecated. Please use $.validator.format instead.';
      });
    var i,
      s = {};
    e.ajaxPrefilter
      ? e.ajaxPrefilter(function (e, i, n) {
          var o = e.port;
          'abort' === e.mode && (s[o] && s[o].abort(), (s[o] = n));
        })
      : ((i = e.ajax),
        (e.ajax = function (n) {
          var o = ('mode' in n ? n : e.ajaxSettings).mode,
            r = ('port' in n ? n : e.ajaxSettings).port;
          return 'abort' === o
            ? (s[r] && s[r].abort(), (s[r] = i.apply(this, arguments)), s[r])
            : i.apply(this, arguments);
        })),
      e.extend(e.fn, {
        validateDelegate: function (i, s, n) {
          return this.bind(s, function (s) {
            var o = e(s.target);
            return o.is(i) ? n.apply(o, arguments) : void 0;
          });
        },
      });
  });
var t,
  sel,
  somethingAlreadyHighlighted = '',
  selString = '',
  adArray = [];
$(document).ready(function () {
  var e = $('article').first();
  tweetText(),
    desktopFooterNav(),
    desktopArticleNav(),
    desktopSearchBarLogic(),
    imageHover(),
    mobileMenu(),
    mobileFooterNavCollapse(),
    mostPopularHover(),
    desktopFooterNav(),
    articleGallery(),
    recircCarousel(),
    dropdownstyled(),
    signuplightbox(),
    lightboxFormValidation(),
    passwordShowHide(),
    tweetFollow(),
    titleCut(),
    slp(),
    socialShare(),
    nationVoices(),
    fixedAds(e),
    unhideAds(),
    $(document).foundation(),
    bookmark_add(),
    remove_edit_link();
    //travel_form_view();
}),
  $(window).load(function () {
    calculateHeights($('article').first()),
      enquire.register('screen and (min-width: 1025px)', {
        match: function () {
          var e = desktopDetectHeaderOffset();
          $(window).off('scroll');
          var i = $(window).scrollTop(),
            s = i + 5,
            n = i - 5;
          $(window).on('scroll', function () {
            desktopStickyNav(e),
              ($(window).scrollTop() > s || $(window).scrollTop() < n) &&
                $('#search').is(':visible') &&
                $('.header-bar.search').stop().slideToggle(),
              $('.article-page').length &&
                $('.ie9').length &&
                (250 > $(window).scrollTop()
                  ? ($('.article-meta').children('h2').hide(), $('.article-meta').children('h3').hide())
                  : ($('.article-meta').children('h2').show(), $('.article-meta').children('h3').show()),
                $(window).scrollTop() > i
                  ? $('#desktop').addClass('headroom--unpinned')
                  : $('#desktop').removeClass('headroom--unpinned'));
          }),
            nationVoices();
        },
        unmatch: function () {
          var e = mobileDetectHeaderOffset();
          $(window).off('scroll'),
            $(window).on('scroll', function () {
              mobileStickyNav(e);
            }),
            nationVoices();
        },
      }),
      enquire.register('screen and (max-width: 1024px)', {
        match: function () {
          var e = mobileDetectHeaderOffset();
          $(window).off('scroll'),
            $(window).on('scroll', function () {
              mobileStickyNav(e);
            }),
            nationVoices();
        },
        unmatch: function () {
          var e = desktopDetectHeaderOffset();
          $(window).off('scroll'),
            $(window).on('scroll', function () {
              desktopStickyNav(e);
            }),
            nationVoices();
        },
      });
  });
var tnOnloadCallback = function () {
  grecaptcha.ready(function () {
    grecaptcha.execute(tn_recaptcha_details.site_key, { action: 'submit' }).then(function (e) {
      0 < $('#recaptcha-webform-response').length && $('#recaptcha-webform-response').val(e),
        0 < $('#recaptcha-sailthru-verify').length && $('#recaptcha-sailthru-verify').val(e),
        0 < $('#footer-recaptcha-verify').length && $('#footer-recaptcha-verify').val(e),
        0 < $('#login-recaptcha-verify').length && $('#login-recaptcha-verify').val(e),
        0 < $('#register-recaptcha-verify').length && $('#register-recaptcha-verify').val(e),
        0 < $('#classroom-recaptcha-verify').length && $('#classroom-recaptcha-verify').val(e),
        0 < $('#reset-recaptcha-verify').length && $('#reset-recaptcha-verify').val(e),
        0 < $('#create-profile-recaptcha-verify').length && $('#create-profile-recaptcha-verify').val(e);
    });
  });
};
function articleNLogo(e) {
  var i = $('.postid-' + e + ' .article-body-inner p:last');
  i.hasClass('article-n-logo') || i.addClass('article-n-logo');
}
$(document).on('ready', function () {
  0 < $('.home-wrap .from-the-magazine').length &&
    ($(document).on('click', '.home-wrap .from-the-magazine .slick-next', function () {
      var e = parseInt($('.home-wrap .from-the-magazine').find('.slick-active').attr('index')) + 1;
      dataLayer.push({
        event: 'gaPageViewEvent',
        gaEventCategory: 'homepage-events',
        gaEventAction: 'issue-carousel-slide-' + e + '-show',
        gaEventLabel: document.URL,
      });
    }),
    $(document).on('click', '.home-wrap .from-the-magazine .slick-prev', function () {
      var e = parseInt($('.home-wrap .from-the-magazine').find('.slick-active').attr('index')) + 1;
      dataLayer.push({
        event: 'gaPageViewEvent',
        gaEventCategory: 'homepage-events',
        gaEventAction: 'issue-carousel-slide-' + e + '-show',
        gaEventLabel: document.URL,
      });
    })),
    $('.issue_loggedin_download').click(function () {
      var e = $(this).attr('href'),
        i = $(this).attr('data-title');
      0 < e.length &&
        0 < i.length &&
        dataLayer.push({
          event: 'gaCurrentIssueModuleEvent',
          gaEventCategory: 'download-issue-click',
          gaEventAction: i,
          gaEventLabel: e,
        });
    }),
    $('.shop-header a').click(function () {
      var e = $(this).attr('href');
      dataLayer.push({
        event: 'gaEventShopClick',
        gaEventCategory: 'shop-click-header',
        gaEventAction: 'Shop Header',
        gaEventLabel: e,
      });
    }),
    $('.shop-footer a').click(function () {
      var e = $(this).attr('href');
      dataLayer.push({
        event: 'gaEventShopClick',
        gaEventCategory: 'shop-click-footer',
        gaEventAction: 'Shop Footer',
        gaEventLabel: e,
      });
    });
});
var bookmark_timeout,
  sharethis_infinite = [],
  sharethis = !0,
  bookmark = !1;
function bookmark_add() {
  (bookmark_timeout = setTimeout(function () {
    !bookmark &&
      0 < $('.sharethis-share-buttons > .st-custom-button ').length &&
      (sharebuttonloaded(), Stopbookmark_add());
  }, 2e3)),
    getCookie('SESSuserinfo') ? console.log('sessuserinfo') : console.log('not sessuserinfo');
}
function Stopbookmark_add() {
  clearTimeout(bookmark_timeout);
}
function sharebuttonloaded() {
  null == getCookie('is_admin') && $('.post-edit-link').hide(), clearInterval(firstArticleShareLoaded), (bookmark = !0);
  var e = $(".main-content").attr("data-post");
  if (
    ($('.sharethis-share-buttons').append(
      '<div style="margin: 0 !important"class="article-share"><a onclick="window.print()" href="javascript:void(0)" class="tn_print"><span>Print</span></a></div>'
    ),
    null != getCookie('SESSuserinfo'))
  ) {
    var i = localStorage.getItem('tn_sfg_local');
    null != i &&
      null != i &&
      '' != i &&
      (i = JSON.parse(i)).includes(parseInt(e)) &&
      jQuery('.tn-sfg-add-to-list').addClass('selected'),
      jQuery('.tn-sfg-add-to-list').removeClass('hide');
  }
  e = $('.sharethis-share-buttons > .st-custom-button ');
  for (var s = 0; s < e.length; s++) {
    var n = e[s].getAttribute('data-network');
    null != n &&
      dataLayer.push({
        event: 'gaPageViewEvent',
        gaEventCategory: 'sharethis-article-share-show',
        gaEventAction: 'sharethis-article-share-show-' + n,
        gaEventLabel: document.URL,
      });
  }
}
function remove_edit_link() {
  null == getCookie('is_admin') && $('#ptm-edit-link').hide();
}
var firstArticleShareLoaded = null;
firstArticleShareLoaded = setInterval(function () {
  0 == bookmark && 0 < $('.sharethis-share-buttons > .st-custom-button ').length && sharebuttonloaded();
}, 100);
var home_carousel_event_triggerd = !0;
/*function travel_form_view() {
  if (jQuery('.travel-form-submit button').length > 0) {
    var e = $("input[name*='travel_form']").val();
    null != e &&
      dataLayer.push({
        event: 'gaGlobalEvent',
        gaEventCategory: e,
        gaEventAction: 'travel-form-submit-view',
        gaEventLabel: document.URL,
      });
  }
}*/
$(window).scroll(function () {
  var e, i;
  0 < $('.home-wrap .from-the-magazine').length &&
    ((e = $('.home-wrap .from-the-magazine').offset().top - $(window).height()),
    $(window).scrollTop() > e &&
      home_carousel_event_triggerd &&
      ((i = parseInt($('.home-wrap .from-the-magazine').find('.slick-active').attr('index')) + 1),
      dataLayer.push({
        event: 'gaPageViewEvent',
        gaEventCategory: 'homepage-events',
        gaEventAction: 'issue-carousel-slide-' + i + '-show',
        gaEventLabel: document.URL,
      }),
      (home_carousel_event_triggerd = !1)));
}),
  $(document).ready(function () {
    var e = $('.article-header-content').height();
    $('.event-sidebar').css('top', 20 + e + 'px');
  }),
  $(document).on('click', '.travel-form-submit button', function () {
    var e = $("input[name*='travel_form']").val();
    null != e &&
      dataLayer.push({
        event: 'gaGlobalEvent',
        gaEventCategory: e,
        gaEventAction: 'travel-form-submit-click',
        gaEventLabel: document.URL,
      });
  }),
  $(document).ready(function () {
    $('form[id^=form] input ').on('keyup', function (e) {
      var i = $(this).closest('form');
      i.hasClass('token') ||
        (i.addClass('token'),
        grecaptcha.ready(function () {
          grecaptcha.execute(tn_recaptcha_details.site_key, { action: 'submit' }).then(function (e) {
            0 < $('#recaptcha-webform-response').length && $('#recaptcha-webform-response').val(e);
          });
        }));
    });
  });

function set_heights() {
    var toastHeight=0;
    var adHeight =0;
    var meterHeight =0;
    if ($("body").hasClass("toast-here")) {
      toastHeight = $('#toast-div').height();
      //console.log("Toast Height"+toastHeight);
      $('.tp-container-inner').each(function(){
        meterHeight = $(this).height();
        //console.log("Meter Height"+meterHeight);
      });
    }
    if ($("body").hasClass("footer-add-exists")) {
      adHeight = $('#fs-sticky-footer #fs-slot-footer-wrapper').height();
      //console.log("Ad Height"+adHeight);
    }
    if ($("body").hasClass("toast-here") || $("body").hasClass("footer-add-exists")) {
       if($("body").hasClass("margin-exists")){
       } else{
          //console.log("SuccessIn");
          if($("body").hasClass("toast-here") && $("body").hasClass("footer-add-exists")){
             $('body').addClass("margin-exists");
          }
          var totalmargin = toastHeight+adHeight+meterHeight;
          //console.log("Total Height"+totalmargin);
          $('body').css("margin-bottom" , totalmargin+"px");
          $('#fs-sticky-footer').css("bottom" , meterHeight+"px");
          $('#fs-slot-footer-wrapper').css("bottom" , meterHeight+"px");
       }
    }
  };  
setInterval(function(){  set_heights(); }, 5000);

