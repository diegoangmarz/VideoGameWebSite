import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'AboutUs',
        component: AboutUsComponent
    },
    {
        path: 'Products',
        component: ProductComponent
    },
    {
        path: 'ContactUs',
        component: ContactUsComponent
    },

];
