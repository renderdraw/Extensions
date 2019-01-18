[{"Owner":"PhilT","Date":"2018-03-11T19:41:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!DOCTYPE html&gt_sm_\n&lt_sm_html xmlns_eq__qt_http_dd_//www.w3.org/1999/xhtml_qt_&gt_sm_\n\n&lt_sm_head&gt_sm_\n  &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_ /&gt_sm_\n  &lt_sm_title&gt_sm_Babylon Template&lt_sm_/title&gt_sm_\n\n  &lt_sm_style&gt_sm_\n    html_co_\n    body {\n      overflow_dd_ hidden_sm_\n      width_dd_ 100%_sm_\n      height_dd_ 100%_sm_\n      margin_dd_ 0_sm_\n      padding_dd_ 0_sm_\n    }\n\n    #renderCanvas {\n      width_dd_ 100%_sm_\n      height_dd_ 100%_sm_\n      touch-action_dd_ none_sm_\n    }\n  &lt_sm_/style&gt_sm_\n\n  &lt_sm_script src_eq__qt_https_dd_//code.jquery.com/pep/0.4.1/pep.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_/head&gt_sm_\n\n&lt_sm_body&gt_sm_\n\n  &lt_sm_canvas id_eq__qt_renderCanvas_qt_ touch-action_eq__qt_none_qt_&gt_sm_&lt_sm_/canvas&gt_sm_ //touch-action_eq__qt_none_qt_ for best results from PEP\n\n  &lt_sm_script type_eq_module&gt_sm_\n    import * as BABYLON from _t_./node_modules/babylonjs/dist/preview release/es6.js_t_\n\n    var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_ // Get the canvas element\n\n    var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_ // Generate the BABYLON 3D engine\n\n\n    /******* Add the create scene function ******/\n    var createScene _eq_ function () {\n      var scene _eq_ new BABYLON.Scene(engine)_sm_\n      scene.clearColor _eq_ new BABYLON.Color3(.5_co_ .5_co_ .5)_sm_\n\n      var camera _eq_ new BABYLON.ArcRotateCamera(_qt_camera1_qt__co_ 0_co_ 0_co_ 0_co_ new BABYLON.Vector3(5_co_ 3_co_ 0)_co_ scene)_sm_\n      camera.setPosition(new BABYLON.Vector3(10.253_co_ 5.82251_co_ -9.45717))_sm_\n      camera.attachControl(canvas_co_ true)_sm_\n\n      var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(1_co_ 0.5_co_ 0)_co_ scene)_sm_\n      light.intensity _eq_ 0.8_sm_\n\n      var blueMat _eq_ new BABYLON.StandardMaterial(_qt_blue_qt__co_ scene)_sm_\n      blueMat.emissiveColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 1)_sm_\n\n      var redMat _eq_ new BABYLON.StandardMaterial(_qt_red_qt__co_ scene)_sm_\n      redMat.emissiveColor _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm_\n\n\n      var body _eq_ BABYLON.MeshBuilder.CreateCylinder(_qt_body_qt__co_ { height_dd_ 0.75_co_ diameterTop_dd_ 0.2_co_ diameterBottom_dd_ 0.5_co_ tessellation_dd_ 6_co_ subdivisions_dd_ 1 }_co_ scene)_sm_\n      var arm _eq_ BABYLON.MeshBuilder.CreateBox(_qt_arm_qt__co_ { height_dd_ 0.75_co_ width_dd_ 0.3_co_ depth_dd_ 0.1875 }_co_ scene)_sm_\n      arm.position.x _eq_ 0.125_sm_\n\n      var blueBlock _eq_ BABYLON.Mesh.MergeMeshes([body_co_ arm]_co_ true)_sm_\n      blueBlock.position _eq_ new BABYLON.Vector3(1_co_ 3_co_ 4)_sm_\n      blueBlock.material _eq_ blueMat_sm_\n\n      redBlock _eq_ blueBlock.clone(_qt_redBlock_qt_)_sm_\n      redBlock.material _eq_ redMat_sm_\n      redBlock.position _eq_ new BABYLON.Vector3(4_co_ 3_co_ 4)_sm_\n\n      return scene_sm_\n    }_sm_\n\n    /******* End of the create scene function ******/\n\n    var scene _eq_ createScene()_sm_ //Call the createScene function\n\n    engine.runRenderLoop(function () { // Register a render loop to repeatedly render the scene\n      scene.render()_sm_\n    })_sm_\n\n\n    window.addEventListener(_qt_resize_qt__co_ function () { // Watch for browser/canvas resize events\n      engine.resize()_sm_\n    })_sm_\n  &lt_sm_/script&gt_sm_\n\n&lt_sm_/body&gt_sm_\n\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tCauses_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Uncaught TypeError_dd_ Cannot set property hasLODLevels of [object Object] which has only a getter\n    at Function.Tools.DeepCopy (es6.js_dd_8437)\n    at new Mesh (es6.js_dd_27563)\n    at Mesh.clone (es6.js_dd_29032)\n    at createScene (play.html_dd_68)\n    at play.html_dd_77_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSame code with a script src tag works fine.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-12T12:27:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust keep_t_em coming! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I will fix that. I need to find a way to automatically find them. I will check eslint / tslint to see if they support it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-12T12:39:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3929_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3929_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhilT","Date":"2018-03-12T20:56:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNice One!  However_co_ I_t_m still seeing the issue in the latest pull (unless yarn (me) is being stupid).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah ESLint supports ES6 Modules. Standard is a good preset (_lt_a href_eq__qt_https_dd_//standardjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//standardjs.com/_lt_/a_gt_) and there is alway Semi-standard if you really insist on semicolons!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUPDATE_dd_ This could be because I_t_m using the preview release builds from the repo. Not sure if these are updated every merge.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]