import { Type } from "@angular/core";

export class DynamicTab {

    constructor(public component: Type<any>, public data: any){}

}