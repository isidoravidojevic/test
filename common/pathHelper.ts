const isProd = process.env.NODE_ENV === 'production';

export function getImagePathname(image: string) {
    return isProd ? `/test/${image}` : `/${image}`;
}