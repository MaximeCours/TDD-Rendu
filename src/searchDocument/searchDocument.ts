import { Document } from "../Document";

export const searchDocument = (documentList: Document[], name: string) : Document[] => {
	
	const documents = documentList.filter(
		(doc) => doc.name.toLowerCase().includes(
			name.toLowerCase()
			)
	)

	return documents
}