import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { SuperUserComponent } from './super-user/super-user.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { ScreenShareComponent } from './screen-share/screen-share.component';
import { FootComponent } from './foot/foot.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { SidebarTeacherComponent } from './sidebar-teacher/sidebar-teacher.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { HelpComponent } from './help/help.component';
import { PpicComponent } from './ppic/ppic.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ScreenComponent } from './screen/screen.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { TeditComponent } from './tedit/tedit.component';
import { SeditComponent } from './sedit/sedit.component';
import { SdeleteComponent } from './sdelete/sdelete.component';
import { TdeleteComponent } from './tdelete/tdelete.component';
import { ViewprofComponent } from './viewprof/viewprof.component';
import { SprofComponent } from './sprof/sprof.component';
import { TprofComponent } from './tprof/tprof.component';
import { EditprofaComponent } from './editprofa/editprofa.component';
import { EditprofsComponent } from './editprofs/editprofs.component';
import { EditproftComponent } from './editproft/editproft.component';
import { DocupComponent } from './docup/docup.component';
import { DocdownComponent } from './docdown/docdown.component';
import { DocdetailComponent } from './docdetail/docdetail.component';
import { ParticlesModule } from 'angular-particle';
import * as particlesJS from 'particlesjs';
import { AuthComponent } from './auth/auth.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ListUploadComponent } from './list-upload/list-upload.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { TviewstComponent } from './tviewst/tviewst.component';
import { SproffComponent } from './sproff/sproff.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin/:id/ppic/register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/:id', component: AdminComponent },
  { path: 'teacher/:id', component: TeacherComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'superUser', component: SuperUserComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'adminv', component: AdminViewComponent },
  { path: 'navbar-home', component: NavbarHomeComponent },
  { path: 'screen-share', component: ScreenShareComponent },
  { path: 'footer', component: FootComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'sidebar-student', component: SidebarStudentComponent },
  { path: 'sidebar-teacher', component: SidebarTeacherComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'help', component: HelpComponent },
  { path: ':type/:id/ppic', component: PpicComponent },
  { path: 'screen', component: ScreenComponent },
  // { path: ':type/:id/ppic', component: PpicComponent },
  { path: 'screen', component: ScreenComponent },
  { path: 'studentv', component: StudentViewComponent },
  { path: 'teacherv', component: TeacherViewComponent },
  { path: 'aedit', component: EditComponent },
  { path: 'adelete', component: DeleteComponent },
  { path: 'tedit', component: TeditComponent },
  { path: 'sedit', component: SeditComponent },
  { path: 'sdelete', component: SdeleteComponent },
  { path: 'tdelete', component: TdeleteComponent },
  { path: 'adminv/viewprof/:vid', component: ViewprofComponent },
  { path: 'studentv/sprof/:vid', component: SprofComponent },
  { path: 'teacherv/tprof/:vid', component: TprofComponent },
  { path: 'edit/editprofa/:vid', component: EditprofaComponent },
  { path: 'sedit/editprofs/:vid', component: EditprofsComponent },
  { path: 'tedit/editproft/:vid', component: EditproftComponent },
  { path: 'docup', component: DocupComponent },
  { path: 'docdown', component: DocdownComponent },
  { path: 'docdetail', component: DocdetailComponent },
  { path: 'viewFiles', component: ListUploadComponent  },
  { path: 'fileDetails', component:DetailsUploadComponent },
  { path: 'uploadFiles', component: FormUploadComponent  },
  { path: 'tviewst', component: TviewstComponent  },
  { path: 'tviewst/sproff/:vid', component: SproffComponent  }
  
  
  
  

]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent,
    SuperUserComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FeaturesComponent,
    AdminViewComponent,
    NavbarHomeComponent,
    ScreenShareComponent,
    FootComponent,
    PricingComponent,
    SidebarComponent,
    SidebarStudentComponent,
    SidebarTeacherComponent,
    TutorialsComponent,
    HelpComponent,
    PpicComponent,
    ScreenComponent,
    StudentViewComponent,
    TeacherViewComponent,
    EditComponent,
    DeleteComponent,
    TeditComponent,
    SeditComponent,
    SdeleteComponent,
    TdeleteComponent,
    ViewprofComponent,
    SprofComponent,
    TprofComponent,
    EditprofaComponent,
    EditprofsComponent,
    EditproftComponent,
    DocupComponent,
    DocdownComponent,
    DocdetailComponent,
    AuthComponent,
    UploadFileComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    TviewstComponent,
    SproffComponent
  ],

  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    RouterModule.forRoot(appRoutes),
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }

