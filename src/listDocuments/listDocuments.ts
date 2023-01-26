import { Document } from "../Document";

interface SortType {
  name: "name" | "createdAt";
  order: "asc" | "desc";
}

export const listDocuments = (
  list: Document[],
  sort?: SortType
): Document[] => {
  const result = list;
  if (sort) {
    let compareFn: (a: Document, b: Document) => number =
      sort.name === "name"
        ? (a, b) => a.name.localeCompare(b.name)
        : (a, b) => a.createdAt - b.createdAt;
    result.sort(compareFn);

    if (sort.order === "desc") {
      result.reverse();
    }
  }
  return result;
};
