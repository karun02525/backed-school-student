import express from "express";

import {teacherController,adminController,classController,studentController} from '../controllers'

const router = express.Router();


router.post('/class',classController.createClass)
router.delete('/class/:id',classController.deleteClass)
router.get('/class',classController.findAllClass)


router.post('/teacher',teacherController.createTeacher)
router.put('/teacher/:id',teacherController.updateTeacher)
router.delete('/teacher/:id',teacherController.deleteTeacher)
router.get('/teacher',teacherController.findTeacher)
router.get('/teacher',teacherController.findAllTeacher)



router.post('/student',studentController.createStudent)
router.put('/student/:id',studentController.updateStudent)
router.delete('/student/:id',studentController.deleteStudent)
router.get('/student/:id',studentController.findOneStudent)
router.get('/student',studentController.findAllStudent)
router.get('/search-students',studentController.searchStudents)


//for Student app
router.get('/student-info',studentController.findStudentsParent)
router.get('/student-attendance',studentController.findAttendance)
router.get('/student-notification/:id',studentController.findNotification)


// for Teacher app
router.post('/student-attendance',teacherController.doAttenceTeacher)
router.get('/teacher-info/:id',teacherController.findTeacherOrStudents)





router.put('/assign-rollno',adminController.assignRollno)


router.get('/assign-rollno',adminController.findAllAssignRollno)
router.get('/search-students',adminController.findAllStudentsByClassId)


router.put('/assign-teacher/:id',adminController.assignUpdateTeacher)
router.delete('/assign-teacher/:id',adminController.deleteAssignClassTeacher)
router.get('/assign-teacher',adminController.findAssignTeacher)
router.get('/find-assign-teacher',adminController.findAssignTeacherClassId)



router.get('/attendance',adminController.findAttendance)



export default router;