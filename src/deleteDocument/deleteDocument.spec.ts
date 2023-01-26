import { DocumentImpl } from "../Document";
import { deleteDocument } from "./deleteDocument";

describe("Delete document", () => {
  it("should return an empty array when given document list with 1 item", () => {
    const entryList = [new DocumentImpl("ID-1", "Document 1", 12334)];
    const outputList = deleteDocument(entryList, "ID-1");
    expect(outputList).toEqual([]);
  });

  it("should return an array with one document when given document list with 2 items", () => {
    const entryList = [
      new DocumentImpl("ID-1", "Document 1", 12334),
      new DocumentImpl("ID-2", "Document 2", 12334),
    ];
    const outputList = deleteDocument(entryList, "ID-1");
    expect(outputList).toEqual([new DocumentImpl("ID-2", "Document 2", 12334),]);
  });

  it("should throw 'Document NOT-FOUND-ID doesn't exist' if the document isn't found", () => {
    const entryList = [
      new DocumentImpl("ID-1", "Document 1", 12334),
      new DocumentImpl("ID-2", "Document 2", 12334),
    ];
    expect(() => deleteDocument(entryList, "NOT-FOUND-ID")).toThrow("Document NOT-FOUND-ID doesn't exist")
  })

  it("should throw 'Document NOT-FOUND-ID-2 doesn't exist' if the document isn't found", () => {
    const entryList = [
      new DocumentImpl("ID-1", "Document 1", 12334),
      new DocumentImpl("ID-2", "Document 2", 12334),
    ];
    expect(() => deleteDocument(entryList, "NOT-FOUND-ID-2")).toThrow("Document NOT-FOUND-ID-2 doesn't exist")
  })
});
