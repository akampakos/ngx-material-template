import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    myvios: { name: 'myvios', picture: 'assets/images/myvios_logo.png' },
    andreas: { name: 'Andreas', picture: 'assets/images/andreas.jpg' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.myvios, type: this.types.mobile },
    { user: this.users.andreas, type: this.types.home },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.myvios, type: this.types.home, time: this.time.setHours(21, 12)},
    { user: this.users.andreas, type: this.types.home, time: this.time.setHours(17, 45)},
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
