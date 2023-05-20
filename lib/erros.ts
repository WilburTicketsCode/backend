export class emailDuplicado extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'emailDuplicado';
    }
  }
  
export class cpfDuplicado extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'cpfDuplicado';
    }
  }
