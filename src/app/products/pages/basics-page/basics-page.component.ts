import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'alejandro';
  public nameUpper: string = 'ALEJANDRO';
  public fullName: string = 'aLeJanDRo dAVó';

  public customDate: Date = new Date();

}
