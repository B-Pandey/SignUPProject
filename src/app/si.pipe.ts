import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'si'
})
export class SiPipe implements PipeTransform {
    transform(value : any, arg2:any, arg3:any):any{
      let result: number=(value*arg2*arg3)/100;
      return result;
    }
    /**
     * Public static String transform(int num1, int num2, int num3){
     * int result = (num1*num2*num3)/100
     * retrun result;
     * }
     */

}
