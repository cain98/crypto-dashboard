import { Router } from 'express'

import markets from './markets'

const router = Router()

// Add USERS Routes
router.use('/markets', markets)

export default router
