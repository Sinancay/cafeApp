import { Router } from 'express';

const router = Router();

// Ana sayfa rotası
router.get('/', (req, res) => {
    res.send('Main Page');
});

export default router;