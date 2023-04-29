import express from 'express'
import path from 'path'
import indexRouter from './routes/indexRouter.js'

const app = express()

// View engine setup
app.set('views', path.resolve('views'))
app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use('/', indexRouter)

app.use((req, res, next) => {
	console.log('Handling 404')
	res.render('error', { message: 'Not found - 404'})
})

app.use((err, req, res, next) => {
  console.log('Handling error')
	console.error(err.stack)
	res.status(500).end()
})

const port = 5000
export default () => app.listen(port, () => console.log(`Server listening on port ${port}`))
