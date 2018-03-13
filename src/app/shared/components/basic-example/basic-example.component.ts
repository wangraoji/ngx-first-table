import { Component } from '@angular/core';

@Component({
  selector: 'basic-example',
  template: `
    <div>bbb</div>
  `,
})
export class BasicExampleComponent {
/*

 <ng2-first-table [settings]="settings"></ng2-first-table>
*/
  settings = {
    columns: {
      id: {
        title: 'ID',
        width: '100px',
      },
      name: {
        title: 'Full Name',
        width: '40%',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

}
