[{"Owner":"loloof64","Date":"2014-08-01T13:44:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am trying to build a Rubik_t_s Cube (see my attemps in BabylonJs playground _lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#EQ0SF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#EQ0SF_lt_/a_gt_)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Each little cube is a mesh on its own (UnitCube builder function)_co_ so I am trying to group temporary some of them into a single Mesh_co_ in order to rotate the group_co_ but it does not works (into methods _lt_/p_gt__lt_ul_gt__lt_li_gt_clearGroupToRotate()_lt_/li_gt__lt_li_gt_affectWholeCubeToRotatedGroup()_lt_/li_gt__lt_li_gt_affectLayerToRotate()_lt_/li_gt__lt_/ul_gt__lt_p_gt_of Rubik_t_s cube class)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What workaround could you advise me ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regards._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-08-01T16:09:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Have you thought about parenting?  Make on of the 9? the parent_co_ move it_co_ &amp_sm_ all the others go with it.  Nice thing about parenting is its pickup game nature.  Merging meshes sounds more difficult to undo._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"loloof64","Date":"2014-08-01T16:42:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you for your answer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Indeed_co_ it is what I tried inside the two methods affectWholeCubeToRotatedGroup() and affectLayerToRotate() of the RubiksCube class _dd__lt_/p_gt__lt_ul_gt__lt_li_gt_the class holds a reference to a Mesh (groupToRotate_co_ defined in line 185)_co_ which is responsible for holding a single group of UnitCube at one time_co__lt_/li_gt__lt_li_gt_when I want to _qt_clear the group_qt_ _dd_ I simply define the property parent of the requested UnitCubes to null (line 232)_lt_/li_gt__lt_li_gt_when I want to _qt_assign a group_qt_ _dd_ I simply define the property parent of the requested UnitCubes to link to this groupToRotate (line 239)_lt_/li_gt__lt_li_gt_and of course_co_ when I want to rotate the group_co_ I call the rotate() method on the groupToRotate (line 280)._lt_/li_gt__lt_/ul_gt__lt_p_gt_But what happens_co_ is that as soon the rotation should have taken place_co_ the Rubik_t_s Cube disappear from screen._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regards_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"loloof64","Date":"2014-08-01T18:40:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I finally found the error  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was calling Mesh#rotate() with wrong parameters order._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rohan1231","Date":"2016-01-30T20:53:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you share the fixed code ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aninja","Date":"2016-02-25T10:11:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_114963_qt_ data-ipsquote-contentid_eq__qt_8265_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1454187184_qt_ data-ipsquote-userid_eq__qt_18735_qt_ data-ipsquote-username_eq__qt_rohan1231_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 1/30/2016 at 2_dd_23 AM_co_ rohan1231 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCan you share the fixed code ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]