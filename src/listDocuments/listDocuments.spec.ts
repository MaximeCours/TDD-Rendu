import { DocumentImpl } from "../Document";
import { listDocuments } from "./listDocuments";

describe("List documents", () => {
  const documentA = new DocumentImpl("ID-1", "A Document name", 12344)
  const documentB = new DocumentImpl("ID-2", "B Document name", 12349)
  const documentC = new DocumentImpl("ID-3", "C Document name", 12348)
  const globalEntryList = [
    documentB,
    documentA,
    documentC,
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
      documentA,
      documentB,
      documentC
    ]);
  });

  it("should return an array of documents sorted by name in reverse alphabetical order when given document list", () => {
    expect(listDocuments(globalEntryList, { name: "name", order: "desc" })).toEqual([
      documentC,
      documentB,
      documentA
    ]);
  });

  it("should return an array of documents sorted by created at in ascending order when given document list", () => {
    expect(listDocuments(globalEntryList, { name: "createdAt", order: "asc" })).toEqual([
      documentA,
      documentC,
      documentB
    ]);
  });

  it("should return an array of documents sorted by created at in descending order when given document list", () => {
    expect(listDocuments(globalEntryList, { name: "createdAt", order: "desc" })).toEqual([
      documentB,
      documentC,
      documentA
    ]);
  });
});
