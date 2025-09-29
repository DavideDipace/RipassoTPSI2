// src/app/app.module.ts
// ... altri import
import { FormsModule } from '@angular/forms'; // <-- IMPORTA QUESTO
import { NewPostFormComponent } from './components/new-post-form/new-post-form.component';

@NgModule({
  declarations: [
    // ...
    NewPostFormComponent
  ],
  imports: [
    // ...
    FormsModule // <-- E AGGIUNGILO QUI
  ],
  // ...
})
export class AppModule { }