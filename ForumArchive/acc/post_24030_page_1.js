[{"Owner":"ian","Date":"2016-07-23T12:27:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan anybody explain me why blender model shows for example 490 verts but bayblon export file in bayblon import meshes has 562 Vertices?_lt_br /_gt_\n\t(It is just default cube and default sphere create with blender. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have some model which have in blender around 2.027 but babylon (debug) after importing shows 22.776 ? (this is huge differences.)_lt_br /_gt__lt_br /_gt_\n\tThere are no double vertices_co_ because I clean all doubles in blender!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy those differences of vertices between blender and babylon 3D environment ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease explain me what is happening here?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgreetings\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-07-25T14:24:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMight be partly a definition difference.  In BJS_co_ a vertex is a combination position / normal / uvs1 -6 / material / vertex color / matrix weight &amp_sm_ index / matrix weight extra &amp_sm_ index extra.  Materials also cause ordering differences_co_ so that sub-meshes are contiguous.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBlender_co_ I believe it is just positions.  Multi-materials duplicate all border vertices.  Faces might be a better comparison.  In BJS_co_ this should be the length of the index / 3.  The index length is listed the export log file.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]