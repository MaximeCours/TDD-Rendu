import { DocumentImpl } from "../Document";
import { deleteDocument } from "./deleteDocument";

describe("Delete document", () => {
  const document1 = new DocumentImpl("ID-1", "Document 1", 12334)
  const document2 = new DocumentImpl("ID-2", "Document 2", 12334)
  it("should return an empty array when given document list with 1 item", () => {
    const entryList = [document1];
    const outputList = deleteDocument(entryList, "ID-1");
    expect(outputList).toEqual([]);
  });

  it("should return an array with one document when given document list with 2 items", () => {
    const entryList = [
      document1,
      document2,
    ];
    const outputList = deleteDocument(entryList, "ID-1");
    expect(outputList).toEqual([document2]);
  });

  it("should throw 'Document NOT-FOUND-ID doesn't exist' if the document isn't found", () => {
    const entryList = [
      document1,
      document2,
    ];
    expect(() => deleteDocument(entryList, "NOT-FOUND-ID")).toThrow("Document NOT-FOUND-ID doesn't exist")
  })

  it("should throw 'Document NOT-FOUND-ID-2 doesn't exist' if the document isn't found", () => {
    const entryList = [
      document1,
      document2,
    ];
    expect(() => deleteDocument(entryList, "NOT-FOUND-ID-2")).toThrow("Document NOT-FOUND-ID-2 doesn't exist")
  })
});
