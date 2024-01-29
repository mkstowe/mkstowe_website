import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TabsComponent } from "./tabs/tabs.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ExperiencePageComponent } from "./experience-page/experience-page.component";
import { SkillsPageComponent } from "./skills-page/skills-page.component";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { SkillComponent } from "./skill/skill.component";
import { CloudComponent } from "./cloud/cloud.component";
import { PreAlphaIComponent } from "./cloud/pre-alpha-i/pre-alpha-i.component";
import { PreAlphaIIComponent } from "./cloud/pre-alpha-ii/pre-alpha-ii.component";
import { PreAlphaIIIPreBetaIComponent } from "./cloud/pre-alpha-iii-pre-beta-i/pre-alpha-iii-pre-beta-i.component";
import { PreBetaIPreBetaIIComponent } from "./cloud/pre-beta-i-pre-beta-ii/pre-beta-i-pre-beta-ii.component";
import { GoldComponent } from "./cloud/gold/gold.component";
import { ShellComponent } from "./shell/shell.component";

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
    ShellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
