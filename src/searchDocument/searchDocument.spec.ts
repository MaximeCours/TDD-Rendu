import { DocumentImpl } from "../Document";
import { searchDocument } from "./searchDocument";

describe("Search Document", () => {
    const document1 = new DocumentImpl("ID-1", "Abra", 12344)
    const document2 = new DocumentImpl("ID-2", "Amazing", 12349)
    const document3 = new DocumentImpl("ID-3", "Abracadabra", 12348)
    const globalEntryList = [
        document2,
        document1,
        document3
      ];

    it('should find nothing if no document correpond to the search entry', () => {
        expect(searchDocument(globalEntryList, "zzz")).toEqual([])
    })

    it('should find one document when searching for "Amazing"', () => {
        expect(searchDocument(globalEntryList, "Amazing")).toEqual([document2])
    })

    it('should find a document when typing partially its name', () => {
        expect(searchDocument(globalEntryList, "Amaz")).toEqual([document2])
    })

    it('should find multiple documents when seach entry is common to multiple document names', () => {
        expect(searchDocument(globalEntryList, "Abra")).toEqual([document1, document3])
    })

    it('should still find the documents when type its name in lower case', () => {
        expect(searchDocument(globalEntryList, "abra")).toEqual([document1, document3])
    })
})