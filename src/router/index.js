import { Router }  from "express"
const router = Router()


router.get('/', (req, res) => res.render('index'))
router.get('/inicio', (req, res) => res.render('inicio'))
router.get('/contact', (req, res) => res.render('contact'))

export default router