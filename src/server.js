import dotenv from 'dotenv'
import mongoose from 'mongoose'
import expressApp from './app.js'

// eslint-disable-next-line no-unused-vars
function connectToMongoDB () {
	dotenv.config({ path: '../config.env' })
	mongoose.connect(process.env.CONNECTION_STRING.replace('<password>', process.env.PASSWORD))
		.then(db => console.log(`Connected to MongoDB on port ${db.connections[0].port}`))
		.catch(error => console.log(error))
}

// connectToMongoDB()
expressApp()
