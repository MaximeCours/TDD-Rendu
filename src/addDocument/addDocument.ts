import { Document, DocumentImpl } from "../Document";

export type AddDocumentDeps = { 
  randomUUID: () => string,
  now: () => number
};

export const addDocument = (
  deps: AddDocumentDeps,
  list: Document[],
  documentName: string
): Document[] => {
  const newDocument = new DocumentImpl(deps.randomUUID(), documentName, deps.now());
  return [...list, newDocument];
};
