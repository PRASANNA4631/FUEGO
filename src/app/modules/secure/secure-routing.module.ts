import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from 'src/app/app-constants';
import { ContentLayoutComponent } from 'src/app/shared/components/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: RoutePath.DASHBOARD,
        pathMatch: 'full'
      },
      {
        path: RoutePath.DASHBOARD,
        loadChildren: () => import('./dashboard/dashboard.module').then( (m) => m.DashboardModule)
      },
      {
        path: RoutePath.ABOUTUS,
        loadChildren: () => import('./about-us/about-us.module').then( (m) => m.AboutUsModule)
      },
      {
        path: RoutePath.FAQS,
        loadChildren: () => import('./faqs/faqs.module').then( (m) => m.FAQSModule)
      },
      {
        path: RoutePath.POSTS,
        loadChildren: () => import('./post/post.module').then( (m) => m.PostModule)
      },
      {
        path: RoutePath.REVIEW,
        loadChildren: () => import('./review/review.module').then( (m) => m.ReviewModule)
      },
      {
        path: RoutePath.SEARCH,
        loadChildren: () => import('./search/search.module').then( (m) => m.SearchModule)
      },
      {
        path: RoutePath.SETTINGS,
        loadChildren: () => import('./settings/settings.module').then( (m) => m.SettingsModule)
      },
      {
        path: RoutePath.CONTACTUS,
        loadChildren: () => import('./support-contact-us/support-contact-us.module').then( (m) => m.SupportContactUsModule)
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
