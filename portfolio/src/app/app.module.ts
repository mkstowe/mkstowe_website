import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SkillComponent } from './skill/skill.component';
import { CloudComponent } from './cloud/cloud.component';
import { PreAlphaIComponent } from './cloud/pre-alpha-i/pre-alpha-i.component';
import { PreAlphaIIComponent } from './cloud/pre-alpha-ii/pre-alpha-ii.component';
import { PreAlphaIIIPreBetaIComponent } from './cloud/pre-alpha-iii-pre-beta-i/pre-alpha-iii-pre-beta-i.component';
import { PreBetaIPreBetaIIComponent } from './cloud/pre-beta-i-pre-beta-ii/pre-beta-i-pre-beta-ii.component';
import { GoldComponent } from './cloud/gold/gold.component';
import { VariegataComponent } from './variegata/variegata.component';
import { VariegataPost1Component } from './variegata/variegata-post1/variegata-post1.component';
import { VariegataPost2Component } from './variegata/variegata-post2/variegata-post2.component';
import { VariegataPost3Component } from './variegata/variegata-post3/variegata-post3.component';
import { VariegataPost4Component } from './variegata/variegata-post4/variegata-post4.component';
import { VariegataPost5Component } from './variegata/variegata-post5/variegata-post5.component';
import { VariegataPost6Component } from './variegata/variegata-post6/variegata-post6.component';
import { VariegataPost7Component } from './variegata/variegata-post7/variegata-post7.component';
import { VariegataPost8Component } from './variegata/variegata-post8/variegata-post8.component';
import { VariegataPost9Component } from './variegata/variegata-post9/variegata-post9.component';
import { VariegataPost10Component } from './variegata/variegata-post10/variegata-post10.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    AboutPageComponent,
    ExperiencePageComponent,
    SkillsPageComponent,
    ProjectsPageComponent,
    SkillComponent,
    CloudComponent,
    PreAlphaIComponent,
    PreAlphaIIComponent,
    PreAlphaIIIPreBetaIComponent,
    PreBetaIPreBetaIIComponent,
    GoldComponent,
    VariegataComponent,
    VariegataPost1Component,
    VariegataPost2Component,
    VariegataPost3Component,
    VariegataPost4Component,
    VariegataPost5Component,
    VariegataPost6Component,
    VariegataPost7Component,
    VariegataPost8Component,
    VariegataPost9Component,
    VariegataPost10Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
