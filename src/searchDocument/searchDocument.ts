import { Document } from "../Document";

export const searchDocument = (documentList: Document[], name: string) : Document[] => {
	const document = documentList.find((doc) => doc.name === name)
	// if (document.includes(name)) return [document]
	if (document) return [document]
	return []
}