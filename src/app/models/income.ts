export class Income {

    constructor(
        public $key: string,
        public invoice: string,
        public date: string,
        public category: string,
        public description: string,
        public vat: string,
        public amount: number
    ) {  }


}
