[{"Owner":"royibernthal","Date":"2017-03-19T01:23:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_d like to have an ArcRotateCamera which rotates slower the further the mouse is from the click/touch point (while still pressed/touched).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImagine pressing/touching anywhere_co_ that_t_s point A_co_ dragging towards some direction to rotate the camera (point B updated while dragging)_co_ then releasing. (the same thing that happens now basically)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe further pointA is from pointB_co_ the smaller the sensitivity of the camera rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cleared all inputs and have only mouse input now (PointersInput).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there some built-in functionality for such a thing or would I have to implement my own camera input?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/customizing_camera_inputs#implementing-your-own-input_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/customizing_camera_inputs#implementing-your-own-input_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the latter - is there a way to modify an existing camera input or would I have to build one from scratch?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-03-20T10:26:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAny idea?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-03-20T13:32:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_d try setting angularSensibility according to distance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L58_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L58_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-03-20T18:56:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs the distance exposed anywhere or am I supposed to calculate it myself by listening to mouse events?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it_t_s calculated here but it_t_s not really exposed_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/Inputs/babylon.arcrotatecamera.input.pointers.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/Inputs/babylon.arcrotatecamera.input.pointers.ts_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-03-20T19:21:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt is exposed as radius in the camera itself.  Might be implementable as a scene after renderer where you assign angular sensibility based on camera radius.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-03-20T20:26:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe same would apply to that no? I_t_d need to save the radius when the user clicks and compare it to the updated radius every scene render. Or does the radius represent that actual difference between start position (on click) and current position?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-03-20T21:07:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI thought you zooming_co_ but either way I am not thinking anything needs to be captured on click.  Just set it after every frame_co_ to want you want it to be at certain distances.  You probably want to just plug some guesses as to values in to make sure this can changed inside a click hold.  If so_co_ then refine _qt_good_qt_ values once it is know to work.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-03-20T22:18:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI don_t_t really understand what you mean. Can you please clarify? An example would be great.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-03-23T22:37:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnyone?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-28T13:14:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Royi... sorry for the slow replies.  I hacked-together a playground that sort-of accomplishes this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#279FW9%2336_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#279FW9#36_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWatch console.  All the scene observer-based pointer events are working fine.  My math work in lines 91-94... is likely less-than-optimal.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have some _qt_accumulation_qt_ problems... somewhere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m sure you can improve it.  This method is easier than coding/modding a camera input_co_ at least. Be well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-03-29T02:39:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Larry_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the PG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHmm sure but it won_t_t feel like a _qt_clean_qt_ solution _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tEven if it complicates things_co_ I think I_t_d rather create a custom camera input_co_ keeps the order in the code - that_t_s what camera input is meant for.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs for the math - it seems you increase the sensibility on mouse move infinitely_co_ the longer you move the mouse around without releasing the higher the sensibility will get (it_t_ll grow each time according to distance between down and move points).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the right way to tackle it would be to have a fixed calculation taking into account move and down points_co_ and translating to a number within range of max vertical and horizontal drag distance_co_ which at least in PG case is within around 0-900_co_ while default sensibility is 1000_co_ making it ideal to have some sort of min-max range according to percentage of drag distance out of default sensibility. (min-max range will be predefined to make sure the sensibility isn_t_t too high and isn_t_t too low)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]