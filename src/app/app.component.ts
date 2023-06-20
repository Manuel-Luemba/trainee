import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'trainee';

  nomeSkill: string = 'JAVA';

  items: string[] = ['Luemba'];

  addItem(newItem: string) {
    console.log('adding item');
    if (newItem.trim() === '') return;
    this.items.push(newItem);
  }

  obterItem() {
    if (
      this.items.length === 0 ||
      this.nomeSkill === null ||
      this.nomeSkill.trim() === ''
    ) {
      return this.items;
    }

    return this.items.filter((item) => {
      if (item.toLowerCase().indexOf(this.nomeSkill.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  onMudouValor(event: number) {
    console.log('onMudou');
    console.log(event);
  }
}
