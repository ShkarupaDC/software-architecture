export const getCronTime = (hours: number, minutes: number): string =>
  `${minutes} ${hours} * * *`;
