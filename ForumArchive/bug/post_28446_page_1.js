[{"Owner":"haestflod","Date":"2017-02-14T20:10:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I was debugging some code and stumbled upon Ray.TransformToRef and I noticed probably a bug?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe result ray_t_s direction is never normalized unless I_t_m mistaken.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_public static TransformToRef(ray_dd_ Ray_co_ matrix_dd_ Matrix_co_ result_dd_Ray)_dd_ void {\n            \n            Vector3.TransformCoordinatesToRef(ray.origin_co_ matrix_co_ result.origin)_sm_\n            Vector3.TransformNormalToRef(ray.direction_co_ matrix_co_ result.direction)_sm_\n            // This should be result.direction.normalize()_sm_ ? \n            ray.direction.normalize()_sm_\n            \n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-14T21:41:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCorrect! I_t_ll fix it\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you very much_dd_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]