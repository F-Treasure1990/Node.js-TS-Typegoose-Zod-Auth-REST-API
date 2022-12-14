import express from 'express'
import user from './user.routes'
import auth from './auth.routes'

const router = express.Router()
router.use(user)
router.use(auth)

export default router.get('/healthcheck', (_, res) => res.sendStatus(200))
