[{"Owner":"W1lly","Date":"2015-08-12T16:04:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello Babyloniens_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am currently working on latency-sensitive events such as shooting at another player in the context of a real-time multiplayer game. I would like to be able to check the past positions and animation states of my players.  It would be very handy if I could access my scene object as it was a few frames ago. This way I wouldn_t_t have to reconstruct the scene each time I need to access my player_t_s past positions_co_ and I could directly cast rays on the scene to determine the aiming of the player who is shooting. _lt_/p_gt__lt_p_gt_To do that_co_ I was thinking that the best solution would be to keep an history of the past rendered frames._lt_/p_gt__lt_p_gt_Is there a way of doing that in babylon.js ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-12T17:08:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not really _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ but you can  register a function on scene.afterRender and save meshes positions to an array for instance_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"W1lly","Date":"2015-08-13T09:03:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok I see_co_ thank you for your answer Deltakosh _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_One more question though_dd_ how could I save the exact bones position/rotation for a given frame? Also I read that making instances of a mesh would result in all instances sharing the same armature_co_ is that correct? If so_co_ is there a way of _qt_copying_qt_ the armature rather than creating a new armature manually?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-13T16:17:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can clone the armature but it could be really expensive. As I understand your ask you just want players positions right? so why do you want to save armature as well?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"W1lly","Date":"2015-08-13T21:00:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually_co_ ideally I would also want to save the bones positions. When a player shoot at another player_co_ depending if the targeted player is running/jumping or whatever_co_ the hitboxes won_t_t be in the same position since they follow the armature transformations_co_ which depends on the animation running at this moment._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I seem to have solved this_co_ not sure if this is the best solution but still_co_ if someone is interested to know how I solved this_dd__lt_/p_gt__lt_p_gt_ - On each rendering frame I just make a clone of my player_t_s mesh and modify its position to reflect the player_t_s position. I also clone the skeleton of the mesh_lt_/p_gt__lt_p_gt_ - Then_co_ knowing the current frame of the animation being played_co_ I make a scene.beginAnimation between the frame and frame+1_co_ at a speed of 0 (so I end up with the cloned mesh being stuck in the position of the current frame of animation)_lt_/p_gt__lt_p_gt_ - I store this clone in an array with the length fixed to the number of past positions I want to save_co_ lets say 10 for instance (so there is a mechanism that makes sure the array is always of length 10_co_ deleting the index 0 and adding at the end when the array is full). I also store the exact timestamp of the rendering frame._lt_/p_gt__lt_p_gt_ - Know_co_ when casting a ray I can easily choose the appropriate clone by modifying the predicate of the function._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure if I am very clear here..._lt_/p_gt__lt_p_gt_Anyway_co_ I am still open to suggestions  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-14T15:19:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Glad that you found a way _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]