import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'SDE',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'SDE',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'MANAGER',
    },
  ];

  findAll(role?: 'INTERN' | 'SDE' | 'MANAGER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    // id param
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: { name: string; email: string; role: string }) {
    // update body
    const idSorted = this.users.sort((a, b) => b.id - a.id);
    const highestId = idSorted[0].id;
    const newUser = {
      id: highestId + 1,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  editOne() {
    // PATCH : id param and update body
  }
}
