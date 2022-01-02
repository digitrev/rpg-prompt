export const pickFromArray = <T>(arr: T[]): T => arr[randInt(arr.length)];

export const randInt = (n: number) => Math.floor(Math.random() * n);

export function ensure<T>(
  arg: T | undefined | null,
  msg = 'Value was promised',
) {
  if (arg === undefined || arg === null) {
    throw new TypeError(msg);
  }

  return arg;
}
