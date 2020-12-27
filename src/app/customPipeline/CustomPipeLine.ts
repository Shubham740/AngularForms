import {Pipe, PipeTransform} from '@angular/core'



@Pipe ({name : 'square'})

export class CustomPipe implements PipeTransform{
        transform(val:number){

            return val*val;
        }
}
