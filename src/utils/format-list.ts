const formatter = new Intl.ListFormat("pt-BR");

export function formatList(list: Iterable<string>): string {
  return formatter.format(list);
}
