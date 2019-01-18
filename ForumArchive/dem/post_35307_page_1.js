[{"Owner":"ozRocker","Date":"2018-01-27T05:37:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve just finished the morphing demo that I_t_ve been working on. Thanks everyone for your input! (especially _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ who is the grandmaster of shaders)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_What I_t_m trying to demonstrate here is morphing not just vertices_co_ but textures as well.  I got this idea from Wrap3 which has this feature.  This is important with faces because redness and wrinkles will sometimes appear when you tense your face.  Unfortunately there is no built-in feature to do this but we were able to pull it off with some extra shader code.  I would_t_ve loved to add some specularity to the skin but I couldn_t_t figure out how to do that with the custom material.  I know this is extreme detail but its a good test.  If the player is in the distance then it wouldn_t_t be necessary._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I added a _qt_Powered by Babylon.js_qt_ sticker so everyone knows that Babylon.js can do cooler stuff than Three.js hehe_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Feel free to use the source code._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_http_dd_//punkoffice.com/facial_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//punkoffice.com/facial_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-01-27T05:57:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tso beauty (all is your job) \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-27T06:07:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_202730_qt_ data-ipsquote-contentid_eq__qt_35307_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1517032620_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 minutes ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tso beauty (all is your job) \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tand my patient housemate.  First time I scanned her for 2 hours but I forgot to put the dots on her face for reference points_co_ so I had to make her do it again\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-27T06:24:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor optimisations I made sure to use a texture atlas for all the morph textures.  Normally you can split up a texture atlas by playing with scale and offsets_co_ but I couldn_t_t do that here cos we_t_re using a custom material_co_ so _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ helped me out with shader code that can read from the texture atlas.  I didn_t_t want to have to load a texture file for every morph target\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/head_atlas_thumbnail.jpg.b65ff788b3e1ebd3d4f4717f5c6a4935.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_16780_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/head_atlas_thumbnail.jpg.b65ff788b3e1ebd3d4f4717f5c6a4935.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_head_atlas_thumbnail.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-01-27T13:25:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWonderfull _lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt_ /_gt_ A 3 years ago I did something similar but with threejs_co_ what a cool memories _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tSo I have a question.These 3 morphs are each independent_co_ so if you modify one slider and after that another slider_co_ the charatet will snap to the default position. This was your goal? or it_t_s not technically possible yet_co_ after you modify one target_co_ to keep in position_co_ even if you change another target._lt_br /_gt_\n\tI_t_m sorry if you do not understand_co_ I do not know how to explain better_co_ maybe a threejs demo will help me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd again_co_ nice work _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-27T13:45:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_202744_qt_ data-ipsquote-contentid_eq__qt_35307_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1517059516_qt_ data-ipsquote-userid_eq__qt_12295_qt_ data-ipsquote-username_eq__qt_MarianG_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t19 minutes ago_co_ MarianG said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSo I have a question.These 3 morphs are each independent_co_ so if you modify one slider and after that another slider_co_ the charatet will snap to the default position. This was your goal? or it_t_s not technically possible yet_co_ after you modify one target_co_ to keep in position_co_ even if you change another target._lt_br /_gt_\n\t\t\tI_t_m sorry if you do not understand_co_ I do not know how to explain better_co_ maybe a threejs demo will help me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tyes I know what you mean.  You can combine morphs but the vertex movements will add up so if you are pouting then you blink your eyelids will go through the face_co_ so I prevented the user from doing that with the controls.  Also_co_ I_t_m not sure what to do about the textures.  I_t_d have to do some strange merge of multiple textures.  I should probably figure out a solution though _t_cos I want the model to be able to blink while she_t_s smiling or pouting.  If anyone has any suggestions I_t_m all ears!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-29T17:26:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWoot really cool! feel free to give me a title_co_ author and a 800x500 screenshot to be featured on babylonjs.com\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"OzRamos","Date":"2018-12-04T23:27:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt_ thanks for putting this project together_co_ I_t_ve been studying and learning quite a bit from it! I_t_ve been working on a library called _lt_a href_eq__qt_https_dd_//handsfree.js.org_qt_ rel_eq__qt_external nofollow_qt__gt_Handsfree.js_lt_/a_gt_  (based on _lt_a href_eq__qt_https_dd_//github.com/Tastenkunst/brfv4_javascript_examples_qt_ rel_eq__qt_external nofollow_qt__gt_BRFv4_lt_/a_gt_) and one of the things I_t_m researching is _qt_puppetteering_qt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21347_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_12/595392383_ezgif.com-video-to-gif(3).gif.def9345cce111455cb7e639be5adbf94.gif_qt_ alt_eq__qt_595392383_ezgif.com-video-to-gif(3).gif.def9345cce111455cb7e639be5adbf94.gif_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m still figuring everything out_co_ but here_t_s my work in progress_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Code_dd_ _lt_/strong_gt__lt_a href_eq__qt_https_dd_//glitch.com/~anniemorph_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//glitch.com/~anniemorph_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Demo_dd__lt_/strong_gt_ _lt_a href_eq__qt_https_dd_//anniemorph.glitch.me_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//anniemorph.glitch.me_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t have much documentation yet for this specific experiment_co_ but you can see how I_t_m doing it in /starter.js. Basically I calculate the distance between the mouth corners and adjust the morph influences by that amount.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]