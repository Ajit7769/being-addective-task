const express = require('express');

const { addCollage, allCollage, collageFind, addCourses, collageEdit, deleteCollage } = require('../controller/CollageController');
const { allCourses, createCourse, deleteCourse, courseEdit, courseFind } = require('../controller/CoursesController');

const router = express.Router();

router.post('/add' , addCollage);
router.get('/all' , allCollage);
router.put('/edit/:id' , collageEdit)
router.delete('/delete/:id' , deleteCollage)
router.get('/collage/:id' , collageFind);




router.get("/allcourse" , allCourses)
router.post("/collage/:id/course" , createCourse)
router.delete('/course-delete/:id' , deleteCourse)
router.put('/course-edit/:id' , courseEdit)
router.get('/course/:id' , courseFind)

module.exports = router;