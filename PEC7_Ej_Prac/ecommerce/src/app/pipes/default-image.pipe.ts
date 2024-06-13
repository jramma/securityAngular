import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true,
  pure: true,
})
export class DefaultImagePipe implements PipeTransform {
  transform(
    value: string,
    defaultImage: string = '/assets/images/img.jpg'
  ): string {
    return value ? value : defaultImage;
  }
}
