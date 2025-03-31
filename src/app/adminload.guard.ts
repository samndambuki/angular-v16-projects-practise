// import { CanActivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
// export const adminloadGuard: CanActivateFn = (route, state) => {
//   return true;
// };
export class AdminLoadGuard implements CanLoad {
  canLoad(): boolean {
    return confirm('are you an admin');
  }
}
