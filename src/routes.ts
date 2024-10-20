import { Router, Request, Response } from 'express';
import path from 'path';

interface User {
    username: string;
};

const router: Router = Router();

router.post('/start', (req: Request, res: Response) => {
    const user: User = req.body;

    if (!user || !user.username) {
        res.status(400).json({ error: 'Username is required' });
    }
    console.log("");

    res.json({ message: `Welcome, ${user.username}` });
});

router.post('/finish', (req: Request, res: Response) => {
    res.status(404).json({ error: 'Not found' });
});

// Serve the apple-app-site-association file at the .well-known route
router.get('/.well-known/apple-app-site-association', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '..', 'public', '.well-known', 'apple-app-site-association');
    console.log(filePath);
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(filePath);
});

export default router;