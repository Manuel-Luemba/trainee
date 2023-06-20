
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
 items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'About',
                icon: 'pi pi-fw pi-file',
            },
            {
                label: 'Skills',
                icon: 'pi pi-fw pi-pencil',
            },
            {
                label: 'Projects',
                icon: 'pi pi-fw pi-user',
            },
            {
                label: 'Study',
                icon: 'pi pi-fw pi-calendar',
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}
