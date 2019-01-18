[{"Owner":"JCPalmer","Date":"2018-06-27T15:25:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have made a GUI _qt_form_qt_ to exercise a webm video &amp_sm_ sound recording process I have made.  I had just written it as a 180 line StackPanel right in a javascript file specific to the directory of the test scene.  If this was bundled as Typescript right with the other code_co_ then it could be injected to any scene I write with very little code &amp_sm_ screwing around.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI added the_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/gui/babylon.gui.d.ts_qt_ rel_eq__qt_external nofollow_qt__gt_ GUI.d.ts_lt_/a_gt_ file_co_ but you get _lt_u_gt__lt_strong_gt_ error TS2694_dd_ Namespace _t_BABYLON_t_ has no exported member _t_GUI_t_._lt_/strong_gt__lt_/u_gt_ when you assign the type  BABYLON.GUI.StackPanel to an object.  Any ideas on how to fix this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-27T15:54:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tare you using import (like module import) or // &lt_sm_reference ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-06-27T16:12:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually_co_ neither_co_ but you got me to think of the answer.  I was just putting all d.ts files in a source sub-directory.  I only used ///references for other source files to help it figure out how to order them.  For most projects I just use an _lt_strong_gt_include_dd_ _lt_/strong_gt_with a _qt_src/**/*.ts_qt_ in the _lt_strong_gt_tsconfig.json_lt_/strong_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe QI extension_co_ where this is going_co_ is too complicated for an include.  There I use a _lt_strong_gt_files_dd_ _lt_/strong_gt_array that all the files in the order that works.  I added the d.ts file there &amp_sm_ problem solved.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-27T16:18:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell done _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]