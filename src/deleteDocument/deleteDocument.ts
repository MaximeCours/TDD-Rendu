import { Document } from "../Document";

export const deleteDocument = (documentList: Document[], id: string): Document[] => {
    if(!documentList.find(document => document.id === id)){
        throw new Error(`Document ${id} doesn't exist`)
    }
    return documentList.filter(item => id !== item.id)
}