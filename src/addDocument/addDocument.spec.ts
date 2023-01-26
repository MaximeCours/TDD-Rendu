import { Document, DocumentImpl } from "../Document"
import { addDocument, AddDocumentDeps } from "./addDocument"

describe("Add document", () => {
   const deps: AddDocumentDeps = {
      randomUUID:() => "ID-1",
      now: () => 1000000
    }

  it("should add a document in an empty document list", () => {
  
    const documentList : Document[] = []
    const newDocumentName = "Document Name"
    const newDocumentList = addDocument(deps, documentList, newDocumentName)
    expect(newDocumentList).toEqual([new DocumentImpl(deps.randomUUID(), newDocumentName, deps.now())])
  })

  it("should add a document in a non empty document list", () => {
    const document1 = new DocumentImpl(deps.randomUUID(), "Name 1", deps.now())
    const document2 = new DocumentImpl(deps.randomUUID(), "Name 2", deps.now())
    const document3 = new DocumentImpl(deps.randomUUID(), "Name 3", deps.now())
    const document4 = new DocumentImpl(deps.randomUUID(), "Name 4", deps.now())
    const document5 = new DocumentImpl(deps.randomUUID(), "Name 5", deps.now())

    const documentList : Document[] = [document1, document2, document3, document4, document5]
    const newDocumentName = "Name 6"
    const newDocument = new DocumentImpl(deps.randomUUID(), newDocumentName, deps.now())
    const newDocumentList = addDocument(deps, documentList, newDocumentName)
    
    expect(newDocumentList).toEqual( [document1, document2, document3, document4, document5, newDocument])
  })


  
})