[{"Owner":"tbgeorge","Date":"2016-07-18T16:36:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t******* EDIT *******_lt_br /_gt_\n\t This isn_t_t happening in the nightly build_co_ though the mesh does not show up anymore if I freeze the material\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey_co_ I_t_m trying to freeze most of the materials in my scene that shouldn_t_t change right at the beginning of the app.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis error happens when I freeze the material used by an instanced mesh. I can freeze all other materials just fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs soon as the instanced mesh comes into view of the camera I get this error_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUncaught TypeError_dd_ Cannot read property _t_index_t_ of undefined -- babylon.max.nightly.js_dd_6297_lt_br /_gt_\n\tEngine.updateAndBindInstancesBuffer @ babylon.max.nightly.js_dd_6297_lt_br /_gt_\n\tMesh._renderWithInstances @ babylon.max.nightly.js_dd_17952_lt_br /_gt_\n\tMesh._processRendering @ babylon.max.nightly.js_dd_17960_lt_br /_gt_\n\tMesh.render @ babylon.max.nightly.js_dd_18027_lt_br /_gt_\n\tSubMesh.render @ babylon.max.nightly.js_dd_19514_lt_br /_gt_\n\tRenderingGroup.render @ babylon.max.nightly.js_dd_14289_lt_br /_gt_\n\tRenderingManager.render @ babylon.max.nightly.js_dd_14221_lt_br /_gt_\n\tScene._renderForCamera @ babylon.max.nightly.js_dd_15991_lt_br /_gt_\n\tScene._processSubCameras @ babylon.max.nightly.js_dd_16033_lt_br /_gt_\n\tScene.render @ babylon.max.nightly.js_dd_16186_lt_br /_gt_\n\t(anonymous function) @ main.js_dd_76_lt_br /_gt_\n\tEngine._renderLoop @ babylon.max.nightly.js_dd_5995Is it possible to freeze a material used by an instanced mesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-Thanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-07-18T19:46:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFollow the DK guide (click below)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/answer.gif.644b80e6e6b314501fe17270d9a22296.gif_qt_ data-fileid_eq__qt_8665_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_answer.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8665_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/answer.thumb.gif.a23073c33fe6f5dbf4780272b99ab6ce.gif_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually the issue is with the material freeze and instances. It is not recommended to freeze a material used by instances AND regular mesh _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ style_eq__qt_vertical-align_dd_middle_sm_border_dd_0px_sm__qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]