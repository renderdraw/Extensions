[{"Owner":"Lightnet","Date":"2016-12-01T04:30:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI wonder if the layout has some bugged.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1Q11FD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1Q11FD#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince I am debug in console log it hard to determined it. The offset is bit way much to align right. Not perfect corner.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-01T21:23:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-12-03T15:08:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhere is Mr. Nockawa?  hmm.  One thing to keep in mind... is that ALL things in Canvas2d system... are referenced to the lower left corner... even your blue boxes.  I don_t_t know if that is pertinent.  I just took a quick browse of your playground demo_co_ but I will look at it closer... a bit later today.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt sure would be nice to have a showBoundingBox _eq_ true... available on Group2D_co_ eh?  That way we could determine if their marginAlignment_dd_ _qt_h_dd_ right_co_ v_dd_ top_qt_ (etc) is taking into consideration... the size of the Rect2d_t_s that they contain.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m no expert on Canvas2D things... but I plan to become one_co_ time permitting.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_update_dd__lt_/strong_gt_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1Q11FD%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1Q11FD#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not seeing any issues/problems_co_ yet.  I removed all the X/Y values in the rectangles... and I am using ONLY the _lt_em_gt_marginAlignment_lt_/em_gt_ parameter of the Group2D_t_s.  Looks pretty good.  Needless to say_co_ i also green-backgrounded the canvas... to make sure it was aligning okay. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24527-lightnet/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24527_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24527-lightnet/_qt_ rel_eq__qt__qt__gt_@Lightnet_lt_/a_gt_... are you still seeing something screwed-up?  If so_co_ could you re-show me?  thx._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Lightnet","Date":"2016-12-03T16:44:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI seeing the position still off and using the example that show me. Using the simple example of 32 spacing that some area didn_t_t move but I find 64 spacing is not right just.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1Q11FD%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1Q11FD#6_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-12-03T19:29:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again.  I don_t_t see it.  Looks correct to me_co_ on a desktop.  Or I_t_m not noticing something.  Could you publish/paste a screen grab image_co_ maybe with an arrow pointing to what you see?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI DO see a little problem... when I restore window and open dev tools.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//webpages.charter.net/wingthing/misc/margincheck.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//webpages.charter.net/wingthing/misc/margincheck.jpg_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCenter rect along left side... is high.  (but aren_t_t we all? hah ahem).  *scratch scratch*  Are you on a mobile_co_ Lightnet?  *scratch scratch*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry if I am missing something.  Perhaps others see something that I cannot?  Comments?  Others?  More screen grabs?  Help!  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s un-restored with no dev tools window...  _lt_a href_eq__qt_http_dd_//webpages.charter.net/wingthing/misc/margincheck2.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//webpages.charter.net/wingthing/misc/margincheck2.jpg_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-03T20:52:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not seeing the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_  I_t_m referring to this PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1Q11FD%236_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_rgb(173_co_20_co_87)_sm_text-decoration_dd_underline_sm_background-color_dd_rgb(255_co_255_co_255)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_http_dd_//www.babylonjs-playground.com/#1Q11FD#6_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-03T22:52:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/24484-canvas2d-marginalignment-bug/?do_eq_embed&amp_sm_comment_eq_140026&amp_sm_embedComment_eq_140026&amp_sm_embedDo_eq_findComment#comment-140026_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-12-04T22:26:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_153101_qt_ data-ipsquote-contentid_eq__qt_26739_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1480566659_qt_ data-ipsquote-userid_eq__qt_24527_qt_ data-ipsquote-username_eq__qt_Lightnet_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/1/2016 at 5_dd_30 AM_co_ Lightnet said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI wonder if the layout has some bugged.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1Q11FD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1Q11FD#1_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSince I am debug in console log it hard to determined it. The offset is bit way much to align right. Not perfect corner.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThere_t_s indeed a bug in margin/alignment computation when you_t_re doing it on a Primitive (a Group2D in your case) which is _qt_autoSized_qt_ by the content. That_t_s the bug I_t_m currently working on_co_ but unfortunately I don_t_t much time recently to contribute_co_ hope I_t_ll be able to resume asap..\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]