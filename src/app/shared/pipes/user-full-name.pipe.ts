import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../features/dashboard/users/models';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): string{
    const result = value.firsName+' '+value.lastName;
    return result;
  }

}
