export const pickFromArray = <T>(arr: T[]): T => arr[randInt(arr.length)];

export const randInt = (n: number) => Math.floor(Math.random() * n);
