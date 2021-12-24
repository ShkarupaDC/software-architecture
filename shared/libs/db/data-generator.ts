import { randomUUID, randomInt } from 'crypto';
import { loremIpsum } from 'lorem-ipsum';

export const randomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const randomString = (minLength: number, maxLength: number): string =>
  loremIpsum({
    count: randomInt(minLength, maxLength),
    units: 'words',
  });

export const randomUuid = (): string => randomUUID();
