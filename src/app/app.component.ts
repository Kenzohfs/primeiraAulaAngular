import { Component } from '@angular/core';
//aq estamos importando a biblioteca component (alguém criou essa biblioteca para podermos criar os components);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//selector é a tag q vamos dar pro componente; app-root
//template e style são os arquivos de estilo e template do componente

export class AppComponent {
  title = 'projeto-teste';
}
