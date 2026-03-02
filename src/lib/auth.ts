import { sign, verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-dr-ursinho-key-12345';

export interface TokenPayload {
    userId: string;
    role: string;
}

export function generateToken(payload: TokenPayload): string {
    return sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export function verifyToken(token: string): TokenPayload | null {
    try {
        return verify(token, JWT_SECRET) as TokenPayload;
    } catch (error) {
        return null;
    }
}

export function getAuthFromCookies(): TokenPayload | null {
    const token = cookies().get('drursinho_token')?.value;
    if (!token) return null;
    return verifyToken(token);
}

export function setAuthCookie(token: string) {
    cookies().set('drursinho_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 // 1 day
    });
}

export function removeAuthCookie() {
    cookies().delete('drursinho_token');
}
