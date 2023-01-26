import { DocumentImpl } from "../Document";
import { renameDocument } from "./renameDocument";

describe("Rename document", () => {

	it('should throw an error when the given id does not exist', () => {
		const id  = 'NOT-AN-ID';
		const entryList = [
			new DocumentImpl("ID-1", "Document 1", 12334),
			new DocumentImpl("ID-2", "Document 2", 12334),
		];
		expect(() => renameDocument(entryList, id, 'rrr')).toThrow(`Document ${id} doesn't exist`)
	})

	it('should return the document when the given id exists', () => {
		const id = "ID-1";
		const entryList = [
			new DocumentImpl("ID-1", "Document 1", 12334),
			new DocumentImpl("ID-2", "Document 2", 12334),
		];
		expect(renameDocument(entryList, id, 'rr')).toEqual(entryList[0])
	})

	it('shoud rename the name of a document when a doucument is given', () => {
		const id = "ID-1";
		const entryList = [
			new DocumentImpl("ID-1", "Document 1", 12334),
			new DocumentImpl("ID-2", "Document 2", 12334),
		];
		expect(renameDocument(entryList, id, 'rr')).toEqual(new DocumentImpl("ID-1", "rr", 12334))
	})
});