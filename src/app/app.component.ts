import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
// import { provideNgxMask } from 'ngx-mask';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [provideNgxMask()],
})
export class AppComponent {
  title = 'teste';
  
  @ViewChildren('required') requiredFields: QueryList<ElementRef> | undefined;

  validarCampos() {
    const requiredValues = this.requiredFields?.forEach((field) => {
      console.log(field.nativeElement.value)
    });
  }
}
