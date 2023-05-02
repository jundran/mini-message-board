import express from 'express'
const router = express.Router()

const messages = [
	{
		id: '0',
		subject: 'Garage Sale',
		text: 'I\'m having a garage sale on Saturday morning from 9:00 at 742 Evergreen Terrace.',
		user: 'Amando',
		added: new Date()
	},
	{
		id: '1',
		subject: 'New job',
		text: 'I got a new job writing PUG templates!',
		user: 'Charles',
		added: new Date()
	}
]

router.get('/', (req, res, next) => {
	res.render('index', { messages })
})

router.get('/new', (req, res, next) => {
	res.render('form')
})

router.post('/new', (req, res, next) => {
	const { subject, text, user } = req.body
	messages.push({ subject, text, user, added: new Date() })
	res.redirect('/')
})

export default router

