import express from 'express'
const router = express.Router()

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
]

router.get('/', (req, res, next) => {
	res.render('index', { title: 'Mini Messageboard', messages})
})

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message' })
})

router.post('/new', (req, res, next) => {
	const { message, author } = req.body
  messages.push({text: message, user: author, added: new Date()})
	res.redirect('/')
})

export default router
