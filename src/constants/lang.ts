export const VALIDATION_MESSAGE = {
  REQIUIRED: (attribute: string) => `${attribute} is a required field.`,
  MIN: (attribute: string, count: number) =>
    `${attribute} cannot be less than ${count}.`,
  MAX: (attribute: string, count: number) =>
    `${attribute} cannot be more than ${count}.`,
};
