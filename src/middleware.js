import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'; // Import cookies helper

export async function middleware(req) {
    const cookieStore = await cookies(); // Access cookies
    const token = cookieStore.get("LoginToken"); // Get cookie value

    const url = req.nextUrl.clone();

    if (['/login', '/reg', '/PageNotFound'].includes(url.pathname)){
        return NextResponse.next();
    }

    if (token && !(['/login', '/reg', '/PageNotFound'].includes(url.pathname))) {
        return NextResponse.next();
    }else{
        return NextResponse.redirect(url.origin+'/PageNotFound');
    }
}

export const config = {
    matcher: ['/','/api/users/logout','/api/pages/:path*','/:id','/:id/pages/:path*','/:id/settings'], 
};
