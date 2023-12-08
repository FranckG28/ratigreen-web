export const decodeBase64 = (str: string): string => {
    return Buffer.from(str, 'base64').toString('binary');
}