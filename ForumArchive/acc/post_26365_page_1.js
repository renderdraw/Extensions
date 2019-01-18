[{"Owner":"negrant","Date":"2016-11-13T23:16:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello guys! I have_co_ maybe_co_ a little bit strange question. But how can I set the main position of skeleton or the started position of skeleton I dont know how its named.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I export model from blender and current animation frame in blender let_t_s say 35_co_ in babylon_co_ if I do not begin skeleton animation_co_ skeleton current frame it is 35.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I export model from blender and current frame 12_co_ than in babylon main pos of skeleton it is frame 12.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I set main pos for skeleton programmatically in babylon. I need set main pos first frame regardless of current frame in blender. Becouse I often export from blender and I can foget set skeleton in first frame and it will not be immediately noticeable in the game. I hope you will understand about what I told _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-11-14T04:36:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPlease explain further ... Move trees?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-14T13:39:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf I understand you correctly_co_ you should use Bone.setPosition on the root bone whenever the animation is playing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene.registerBeforeRender(function(){\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   rootBone.setPosition(x_co_ y_co_ z)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-14T14:30:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnother possible answer_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanimation.goToFrame(frameNum)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2016-11-14T18:00:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_150976_qt_ data-ipsquote-contentid_eq__qt_26365_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1479130790_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf I understand you correctly_co_ you should use Bone.setPosition on the root bone whenever the animation is playing.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tscene.registerBeforeRender(function(){\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t   rootBone.setPosition(x_co_ y_co_ z)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t}_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNot exatly. Okay guys_co_ I will try to explain differently.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have in blender a model with a skeleton and this skeleton has animation walk.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn first frame of animation my skeleton has pose without transformations_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/5829e9a0dd0c6_firstframe.png.a39fe576fab143983ed2f54885899e8e.png_qt_ data-fileid_eq__qt_10263_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_first frame.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10263_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/5829e9a0dd0c6_firstframe.png.a39fe576fab143983ed2f54885899e8e.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom second frame and to frame 71 my skeleton has animation walk_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/5829ea3f23728_animationwalk.png.b23c8412133b84eba9ebd69fad48b76b.png_qt_ data-fileid_eq__qt_10264_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_animation walk.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10264_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/5829ea3f23728_animationwalk.png.b23c8412133b84eba9ebd69fad48b76b.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I export my model in babylon and do not use beginAnimation function_co_ just run babylon project and I see that my model in pose that is equal frame number 36! Like on screenshot_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/5829f81815267_frame36.png.984d453953191c52b807b339e61a4dc6.png_qt_ data-fileid_eq__qt_10265_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_frame 36.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10265_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/5829f81815267_frame36.png.984d453953191c52b807b339e61a4dc6.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need that when my project start_co_ than first pose equals first frame_co_ like on screenshot_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/5829f8c8bbd3c_firstframe2.png.ae7660380cfa40f6adc6eac1efb30bcb.png_qt_ data-fileid_eq__qt_10266_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_first frame 2.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10266_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/5829f8c8bbd3c_firstframe2.png.ae7660380cfa40f6adc6eac1efb30bcb.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need this because In this model further in my game I will use shift of the center of the model_co_ but shift of the center of the model uses a frame_co_ which was when my project starts (in my case it frame 36).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I use for all bones bone.returnToRest_co_ my model is still in frame 36. I want to rest pose of my model_co_  this was first frame like on first screenshoot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks to everyone who is trying to understand my problem_co_ becouse English is slightly difficult for me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]