export class User{
    constructor(
        public email : string,
        private token : string,
        private localId :string,
        private expirationDate : Date
    ){}

    get expireDate(){
      return this.expirationDate;
    }
}
