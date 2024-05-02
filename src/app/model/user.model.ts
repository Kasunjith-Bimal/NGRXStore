export class User{
    constructor(
        public email : string,
        private token : string,
        private localId :string,
        private expirationdate : Date
    ){}
}