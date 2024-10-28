import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import indexRouter from './router/index.js'
const app= express()

const __dirname= dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname,'views'))
app.set("views", join(__dirname,'views'))
app.use(indexRouter)

//C:\Users\anton\Downloads\CurriculumWeb\src\views

app.set('view engine', 'ejs')

app.listen(3000)
console.log("El servidor esta siendo ejecutado en el puerto: ",3000)