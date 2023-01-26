import { DocumentImpl } from "../Document";
import { listDocuments } from "./listDocuments";

describe("List documents", () => {
  const globalEntryList = [
    new DocumentImpl("ID-2", "B Document name", 12349),
    new DocumentImpl("ID-1", "A Document name", 12344),
    new DocumentImpl("ID-3", "C Document name", 12348),
  ];

  it("should return an empty array of documents when given empty list", () => {
    const entryList = [];
    const documentList = listDocuments(entryList);

    expect(entryList).toEqual(documentList);
  });

  it("should return an array of documents when given document list", () => {
    const documentList = listDocuments(globalEntryList);
    expect(globalEntryList).toEqual(documentList);
  });

  it("should return an array of documents sorted by name in ascending order when given document list", () => {
    expect(listDocuments(globalEntryList, { name: "name", order: "asc" })).toEqual([
      new DocumentImpl("ID-1", "A Document name", 12344),
      new DocumentImpl("ID-2", "B Document name", 12349),
      new DocumentImpl("ID-3", "C Document name", 12348),
    ]);
  });

  it("should return an array of documents sorted by name in reverse alphabetical order when given document list", () => {
    expect(listDocuments(globalEntryList, { name: "name", order: "desc" })).toEqual([
        new DocumentImpl("ID-3", "C Document name", 12348),
        new DocumentImpl("ID-2", "B Document name", 12349),
        new DocumentImpl("ID-1", "A Document name", 12344),
    ]);
  });

  it("should return an array of documents sorted by created at in ascending order when given document list", () => {
    expect(listDocuments(globalEntryList, { name: "createdAt", order: "asc" })).toEqual([
      new DocumentImpl("ID-1", "A Document name", 12344),
      new DocumentImpl("ID-3", "C Document name", 12348),
      new DocumentImpl("ID-2", "B Document name", 12349),
    ]);
  });

  it("should return an array of documents sorted by created at in descending order when given document list", () => {
    expect(listDocuments(globalEntryList, { name: "createdAt", order: "desc" })).toEqual([
      new DocumentImpl("ID-2", "B Document name", 12349),
      new DocumentImpl("ID-3", "C Document name", 12348),
      new DocumentImpl("ID-1", "A Document name", 12344),
    ]);
  });
});
