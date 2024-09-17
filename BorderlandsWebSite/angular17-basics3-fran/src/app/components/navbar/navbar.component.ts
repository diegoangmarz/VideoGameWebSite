import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  template: `
    <p-menubar [model]="items">
        <ng-template pTemplate="start">
            <img src="../../assets/img/VaultLogo.png" height="40" class="mr-2" />
        </ng-template>
    </p-menubar>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-fw pi-file',
              routerLink: '/Home'
          },
          {
            label: 'About Us',
            icon: 'pi pi-fw pi-file',
            routerLink: '/AboutUs'
          },
          {
            label: 'Products',
            icon: 'pi pi-fw pi-file',
            routerLink: '/Products'
          },
          {
            label: 'Contact Us',
            icon: 'pi pi-fw pi-file',
            routerLink: '/ContactUs'
          },

      ];
  }
}
