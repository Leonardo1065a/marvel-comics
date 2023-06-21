export function buildId<T extends { id: string; identifier: string }>(data: T): string {
  const { id, identifier } = data;

  return `${identifier}-${id}`;
}
