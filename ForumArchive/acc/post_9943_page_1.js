[{"Owner":"Neuromancer","Date":"2014-10-22T08:59:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi community_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I get some weird appearance trying to use alpha blending. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1) (see image attachment 1) I do neither use alpha testing nor alpha blending. The texture is a PNG file with alpha information. The result looks fine. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2) I add alpha testing to the diffuseTexture propery. Everything is nice. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_3) I add an opacity texture. Now the result looks weird. It seems that the normals of some polygons have flipped. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My code is as follows_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var createScene _eq_ function () {    var scene _eq_ new BABYLON.Scene(_babylonEngine)_sm_    var light _eq_ new BABYLON.PointLight(_qt_point_qt__co_ new BABYLON.Vector3(10_co_ 10_co_ 10)_co_ scene)_sm_    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 1.2_co_ 10_co_ new BABYLON.Vector3.Zero()_co_ scene)_sm_    camera.attachControl(canvas_co_ false)_sm_    // changing the wheel precision to get a smoother mouse wheel scrolling    camera.wheelPrecision _eq_ 20_sm_    BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt__3D/models/_qt__co_ W2PTT_CONFIG[_qt_productCategory_qt_] + _qt_.babylon_qt__co_ scene_co_ function (newMeshes) {        camera.target _eq_ newMeshes[meshToAssignTextureToIdx]_sm_        \t\tvar textureFile _eq_ _qt_../userData/textures/_templates/TemplateForMiniCooler.png_qt_ + W2PTT.utils.createCacheBuster()_sm_        //var textureFile _eq_ _qt_../userData/textures/_templates/tree.png_qt_ + W2PTT.utils.createCacheBuster()_sm_//\t\t        var textureFile _eq_ _qt_../userData/textures/merged/_qt_ + W2PTT_CONFIG[_t_shotID_t_] + _qt_.png_qt_ + W2PTT.utils.createCacheBuster()_sm_        var material _eq_ new BABYLON.StandardMaterial(_qt_texturePlane_qt__co_ scene)_sm_\t\t\tmaterial.diffuseTexture _eq_ new BABYLON.Texture(textureFile_co_ scene)_sm_ \t\t\tmaterial.diffuseTexture.hasAlpha _eq_ true_sm_\t\t\tmaterial.opacityTexture _eq_ new BABYLON.Texture(textureFile_co_ scene)_sm_\t\t\tmaterial.opacityTexture.getAlphaFromRGB _eq_ true_sm_\t\t\t//material.opacityTexture.hasAlpha _eq_ true_sm_\t\t\t//material.backFaceCulling _eq_ false_sm_ \t\t\t//material.diffuseTexture.getAlphaFromRGB _eq_ true_sm_\t\t\t//material.specularPower _eq_ 256_sm_\t\t\t//material.alpha _eq_ 1_sm_\t\t\t\t\t                newMeshes[meshToAssignTextureToIdx].material _eq_ material_sm_    })_sm_    scene.registerBeforeRender(function () {        light.position _eq_ camera.position_sm_    })_sm_    return scene_sm_}_sm__lt_/pre_gt__lt_p_gt_Any ideas? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your help. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_//Edit_dd_ _lt_/p_gt__lt_p_gt_The mesh is an exported Blender file. _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10819-0-72484200-1413968046.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10819-0-72484200-1413968046.jpg_qt_ data-fileid_eq__qt_2966_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10819-0-72484200-1413968046.jpg_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10819-0-27226800-1413968047.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10819-0-27226800-1413968047.jpg_qt_ data-fileid_eq__qt_2967_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10819-0-27226800-1413968047.jpg_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10819-0-76278600-1413968047.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10819-0-76278600-1413968047.jpg_qt_ data-fileid_eq__qt_2968_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10819-0-76278600-1413968047.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Neuromancer","Date":"2014-10-22T17:39:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ I found a workaround_dd_ I just split the objects in my Blender project. So the window glass is separated from the rest of the cooler and it has its own (alpha) material now. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I still wonder why some polygons flipped normals before....? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-22T19:31:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sounds strange but you find the right thing to do _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Neuromancer","Date":"2014-10-24T09:28:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Deltakosh_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_something offtopic here_dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think you are the creator of BabylonJS_co_ aren_t_t you? So is it just a coincidence that your nick includes the name _qt_Kosh_qt__co_ one of the most important figures in the TV series Babylon 5? And did BabylonJS get its name from the series?_lt_/p_gt__lt_p_gt_If it is so_dd_ congratulations_co_ good choice!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I like this series so much_co_ even more than StarTrek and I_t_m a big fan of G_t_Kar and of course - Kosh. Probably one of the most underrated TV series ever. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Greetings. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-24T16:16:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is BY FAR my best TV show ever. I_t_m a huge fan of Babylon 5 and this is why I named the engine _qt_Babylon.js_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Kosh_co_ Vorlon Ambassador_co_ was my nickname since I_t_m 20 or so (and I_t_m 40) _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I added _qt_delta_qt_ because as a wow player I created _qt_kosh_qt_ then _qt_alphakosh_qt__co_ _qt_betakosh_qt__co_ _qt_gammakosh_qt_ and then _qt_deltakosh_qt_ which is now my main character _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-10-24T16:34:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So is Davrous a Dr. Who fan? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-24T18:38:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ his name is David Rousset...He has no imagination !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Neuromancer","Date":"2014-10-24T19:23:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To all german Babylon.js users who may be interested to the TV series that lent its name to Babylon.js_dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Tele5 is broadcasting Babylon 5 atm every afternoon from 4 to 6 pm. It_t_s worth to have a look at. Today season 4 (of 5) has started. But since Babylon 5 has an epic story you may be a little confused_co_ be aware of that. However_co_ the danger of becoming addicted still remains...  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hagop","Date":"2015-12-01T08:50:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_what is the _lt_span_gt_W2PTT ? what_t_s it_t_s use?_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-01T09:03:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I doubt you will get an answer from a user that was last active in 2014._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BUT! It seems like the w2ptt is simply a placeholder for strings _dd_-) It contains the current product-category name (the babylon file to be loaded) and adds what seems to be cache-prevention-url-param to the texture. that_t_s about it..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]