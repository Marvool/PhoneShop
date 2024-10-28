import { Router }  from "express"
const router = Router()


router.get('/', (req, res) => res.render('index',{title: 'Presentación'}))
router.get('/about', (req, res) => res.render('about',{title: 'Sobre mi persona'}))
router.get('/studies', (req, res) => res.render('studies',{title: 'Sobre mis estudios'}))
router.get('/contact', (req, res) => res.render('contact',{title: 'Contactame'}))

export default router