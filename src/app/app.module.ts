import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule}  from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule} from '@angular/material/badge';
import { MatCardModule} from '@angular/material/card';
import { MatCheckboxModule} from'@angular/material/checkbox';
import { MatChipsModule} from '@angular/material/chips';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDividerModule} from'@angular/material/divider';
import { MatSliderModule} from'@angular/material/slider';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    HomeComponent,
    AboutComponent,
    AchievementsComponent,
    ContactsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatChipsModule,
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    MatDividerModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    PdfViewerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
