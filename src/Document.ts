export interface Document {
  id: string;
  name: string;
  createdAt: number
}

export class DocumentImpl {

  constructor(
    public readonly id: string, 
    public name: string,
    public createdAt: number
  ) {}
}
