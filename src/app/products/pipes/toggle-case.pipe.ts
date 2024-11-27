import { Pipe, PipeTransform } from '@angular/core';

// alejandro | toggleCase = 'ALEJANDRO'
// ALEJANDRO | toggleCase = 'alejandro'

@Pipe({
    name: 'toggleCase'
})

export class ToggleClasePipe implements PipeTransform {
    transform(value: string, toUpper: boolean = false) {
        return ( toUpper ) 
            ? value.toUpperCase() 
            : value.toLowerCase() 
    }
}