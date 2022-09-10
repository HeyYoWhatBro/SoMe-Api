const fs = require('fs')
const { Router } = require('express')

module.exports = async (app) => {
if(fs.existsSync(`${process.cwd()}/routes/get)`) || fs.existsSync(`${process.cwd()}/routes/post`)) {
	fs.readdirSync(`${process.cwd()}/routes/get`).forEach((files) => {
	    var name = files.substr(0, files.indexOf('.'))
		var routes = require(`../routes/get/${name}`)

		const routers = Router().get('/', (req, res) => {
			routes(req, res)
		})
		try {
		app.use(`/api/${name}`, routers)
		} catch(err) {
			console.log(err)
	}
})
	fs.readdirSync(`${process.cwd()}/routes/post`).forEach((files) => {
	    var name = files.substr(0, files.indexOf('.'))
		var routes = require(`../routes/post/${name}`)

		const routers = Router().post('/', (req, res) => {
			routes(req, res)
		})
		try {
		app.use(`/api/${name}`, routers)
		} catch(err) {
			console.log(err)
	}
})
}
}