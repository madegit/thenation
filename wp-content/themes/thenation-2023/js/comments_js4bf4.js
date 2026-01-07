$(document).ready(function(){
	
	$(document).on('submit', '.comment-form', function(event){
		
		event.preventDefault();
		
		var _f_comment 			= $(this);
		var _respond 			= _f_comment.parent('.comment-respond');
		var _t_comment 			= _f_comment.find('textarea');
		var _comment 			= _t_comment.val();
		var _comment_status 	= _f_comment.find('.comment-status');
		var post_comment_list 	= _f_comment.closest('.commentContainer').find('.post_comment_list');
		var _count				= _f_comment.closest('.commentContainer').prev('.comments').find('.title');
		
		if( typeof _comment != undefined && _comment != null && _comment != '' ){
			
			_comment_status.html('<p>Processing...</p>');
			var cookieSessInfore = getCookie('SESSuserinfo');
			if(cookieSessInfore == null){
				cookieSessInfore = getCookie('SESSadminuserinfo');
			}
			cookieSessInfore = Base64.decode(cookieSessInfore);
			cookieSessInfore = JSON.parse(cookieSessInfore);
			$.ajax({
				type : 'post',
				url  : ajax_object.ajax_url,
				data : $(this).serialize() + '&action=ajaxcomments&user_id='+cookieSessInfore.user_id,
				error: function (request, status, error) {
					if( status == 500 || status == 'timeout' ){
						_f_comment.find('.error_cmnt').text('Something went wrong. Please again later.');
					}else{
						var wpErrorHtml = request.responseText.split("<p>"),
							wpErrorStr 	= wpErrorHtml[1].split("</p>");
							_comment_status.html('<p class="error_cmnt">'+wpErrorStr[0]+'</p>');
					}
				},
				success: function ( addedCommentHTML ) {
					 if( typeof addedCommentHTML == 'string' ){
						addedCommentHTML = JSON.parse( addedCommentHTML );
						if(typeof (addedCommentHTML.error_message) !== "undefined"){
							_comment_status.html('<p class="error_cmnt">'+addedCommentHTML.error_message+'</p>');
						}
						else if( addedCommentHTML.status == 'success' ){
							
							if( post_comment_list.find('ol').length > 0 ){
								
								if( addedCommentHTML.sorting!=null && post_comment_list.find('.comment_sorting_setting_outer') == 0 ){
									post_comment_list.before(addedCommentHTML.sorting);
								}		

								if( _respond.parent('li').length == 0 ){
									post_comment_list.find('ol').prepend(addedCommentHTML.comment_list);
									
									$('html, body').animate({
										scrollTop: _f_comment.find('.form-submit').offset().top	
									}, 2000);
								}else{									
									if( _respond.parent('li').find('ol.children').length == 0 ){
										_respond.parent('li').find('article').after('<ol class="children">'+addedCommentHTML.comment_list+'</ol>');	
									}else{
										_respond.parent('li').find('ol.children').append(addedCommentHTML.comment_list);
									}
								}										
							}else{
								post_comment_list.append('<ol class="comment-list custom_comments">'+addedCommentHTML.comment_list+'</ol>');
								
								$('html, body').animate({
									scrollTop: _f_comment.find('.form-submit').offset().top	
								}, 2000);
							}
							
							_count.html('Comments ('+addedCommentHTML.count+')');
							_comment_status.html('');
							_t_comment.val('');
						}
					}
				}
			});
		}else{
			_comment_status.html('<p class="error_cmnt">Please enter text in comment box.</p>');
		}
	});
	
	$(document).on('click', '.comment-reply-link', function(event){
		event.preventDefault();
		
		var _comment_reply_link = $(this);
		var _respond 			= _comment_reply_link.closest('.comments-area').find('.comment-respond');
		var _parent  			= _comment_reply_link.attr('data-comment-id'); 
		var _comment 			= _comment_reply_link.closest('article');
		
		_respond.find('.comment-status').html('');
		_respond.find('textarea').val('');
		
		if(_respond.find('.comment-reply-title').find('small').length==0){
			_respond.find('.comment-reply-title').append('<small><a rel="nofollow" id="cancel-comment-reply-link" href="#respond" class="cancel-comment-reply-link">Cancel reply</a></small>');	
		}
		
		_respond.find('#comment_parent').val(_parent);
		_comment.after(_respond);				
		
		try{
			_comment_reply_link.closest('.comment-respond').find('textarea').focus();
		}catch(e){}
	});
	
	$(document).on('click', '.cancel-comment-reply-link', function(event){
		event.preventDefault();
		
		var _cancel_comment_reply_link 	= $(this);
		var _comments_area 				= _cancel_comment_reply_link.closest('.comments-area');
		var _respond 					= _comments_area.find('.comment-respond');
		var _cancel_reply 				= _respond.find('.comment-reply-title').find('small');
		
		_respond.find('.comment-status').html('');
		_respond.find('textarea').val('');
		
		if(_cancel_reply.length!=0){
			_cancel_reply.remove();
		}
		
		_respond.find('#comment_parent').val(0);
		_comments_area.prepend(_respond);		
	});
	
	$(document).on('change','#comment_sorting_setting',function(event){
		event.preventDefault();
		
		var _sort 			  	= $(this);
		var _comment_container 	= _sort.parents('.commentContainer');
		var _article_id 		= _comment_container.find('#comment_post_ID').val();
		var _sort_order 		= _sort.val();
		var _post_comment_list  = _comment_container.find('.post_comment_list');
		var _loader				= _comment_container.find('.post_comment_list_loader');
		
		_post_comment_list.find('ol').remove();
		
		_loader.show();
		
		$.ajax({
			url 	:ajax_object.ajax_url,
			data	:{
						'action' 	 : 'article_comment_list',
						'article_id' : 	_article_id,
						'sort_order' : _sort_order
					},
			type	:'post',
			dataType:'json',
			success : function(response){
				if( typeof response == 'object' ){
					if( response.status == 'success' ){		
						_loader.hide();
						_post_comment_list.append(response.comment_list);
					}
				}
			}	
		});
	});	
});

function comment_like_dislike_counter( obj, comment_id, ldkey ){
		
	var ld_container = $(obj).find('span');
	var count		 = ld_container.html();
	ld_container.html('..');
	
	$.ajax({
		url 	:ajax_object.ajax_url,
		data	:{
					'action' 	 : 'comment_like_dislike_counter',
					'comment_id' : 	comment_id,
					'ldkey'  	 : ldkey
				},
		type	:'post',
		dataType:'json',
		success : function(response){
			if( typeof response == 'object' ){					
				if( response.status == 'success' ){								
					ld_container.html(response.count);
				}else{
					ld_container.html(count);
				}
			}
		}			
	});
	
}
jQuery('body').on('click','.close-PopupAlert',function(){
	jQuery('#modal-PopupAlertWrapper').fadeOut(250,function(){jQuery('#modal-PopupAlertWrapper').remove()});
	jQuery('body').removeClass('modal-open');
});
function isJSON(string){
	try {
		JSON.parse(string);
	} catch (e) {
		return false;
	}
	return true;
}
function createPopupAlert(title,content){
	var popupAlertWrapper = jQuery('<div class="" id="modal-PopupAlertWrapper" />');
	popupAlertWrapper.append('<span class="close-PopupAlert">&times;</span>');
	popupAlertWrapper.append('<h1>'+title+'</h1>');
	popupAlertWrapper.append('<p>'+content+'</p>');
	jQuery('body').addClass('modal-open');
	jQuery('body').append(popupAlertWrapper);
}