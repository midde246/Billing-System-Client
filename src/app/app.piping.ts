import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'add'
})

export class AddPipe implements PipeTransform {
    transform(value1:number, value2:number):number{
         let result = Number(value1) + Number(value2)
         return result
    }
}