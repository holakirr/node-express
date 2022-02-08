const { Router } = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', async (req, res, next) => {
	const courses = await Course.getAll()
	res.render('courses', {
		title: 'Courses',
		isCourses: true,
		courses,
	})
})

router.get('/:id', async (req, res, next) => {
	const course = await Course.getById(req.params.id)
	res.render('course', {
		title: 'Course ' + course.title,
		course,
		layout: 'empty',
	})
})

router.get('/:id/edit', async (req, res, next) => {
	if (!req.query.allow) {
		return res.redirect('/')
	}
	const course = await Course.getById(req.params.id)
	res.render('course-edit', {
		title: 'Edit course ' + course.title,
		course,
	})
})

router.post('/edit', async (req, res, next) => {
	await Course.update(req.body)
	res.redirect('/courses')
})

module.exports = router
