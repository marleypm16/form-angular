import { Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { EndFormComponent } from './components/end-form/end-form.component';

//site routes
export const routes: Routes = [
    {path : '',component : Page1Component},
    {path: 'form2',component: Page2Component},
    {path: 'form3',component:Page3Component},
    {path: 'form4',component:Page4Component},
    {path:'end-form',component: EndFormComponent}
];
