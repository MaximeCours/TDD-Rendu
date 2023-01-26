import { Document } from "../Document";

export const renameDocument = (
  documentList: Document[],
  id: string,
  newName: string
): Document => {
  const document = documentList.find((doc) => doc.id === id);
  if (!document) {
    throw new Error(`Document ${id} doesn't exist`);
  }
  document.name = newName;
  return document;
};
