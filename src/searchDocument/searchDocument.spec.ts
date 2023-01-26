import { DocumentImpl } from "../Document";
import { searchDocument } from "./searchDocument";

describe("Search Document", () => {
    const globalEntryList = [
        new DocumentImpl("ID-2", "Amazing", 12349),
        new DocumentImpl("ID-1", "Abra", 12344),
        new DocumentImpl("ID-3", "Abracadabra", 12348),
      ];

    it('should find nothing if no document correpond to the search entry', () => {
        expect(searchDocument(globalEntryList, "zzz")).toEqual([])
    })

    it('should find one document when searching for "Amazing"', () => {
        expect(searchDocument(globalEntryList, "Amazing")).toEqual([globalEntryList[0]])
    })

    it('should find a document when typing partially its name', () => {
        expect(searchDocument(globalEntryList, "Amaz")).toEqual([globalEntryList[0]])
    })

    /*
        it('should find multiple documents when seach entry is common to multiple document names', () => {

        })

        it('should still find the document when type its name in lower case', () => {
            
        })
    */
    // Search dont take consideration casing
})