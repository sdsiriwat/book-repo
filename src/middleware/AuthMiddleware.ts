import type { NextFunction, Request, Response } from 'express';

export async function protect(req: Request, res: Response, next: NextFunction) {
  let token = '';

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'You are not logged in! Please log in to get access' });
  }

  try {
    // Add user info to request body if needed
    if (!req.body) {
      req.body = {};
    }

    // Token validation can be added here
    // For now, just pass through
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'JWT_SECRET is not defined') {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    return res.status(401).json({ message: 'Invalid token' });
  }

  next();
}

export function checkAdmin(req: Request, res: Response, next: NextFunction) {
  // Check if user has admin role
  if (req.body.user && req.body.user.roles && req.body.user.roles.some((role: any) => role.name === 'ROLE_ADMIN')) {
    next();
    return;
  }

  return res.status(403).json({ message: 'You are not authorized to perform this action' });
}
