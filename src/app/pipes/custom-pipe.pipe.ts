import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: unknown): string {
    switch (value) {
      case 0:
        return 'الاول';
      case 1:
        return 'الثاني';
      case 2:
        return 'الثالث';
      case 3:
        return 'الرابع';
      case 4:
        return 'الخامس';
      case 5:
        return 'السادس';
      case 6:
        return 'السابع';
      case 7:
        return 'الثامن';
      case 8:
        return 'التاسع';
      case 9:
        return 'العاشر';
      default:
        break;
    }
    return null;
  }

}
