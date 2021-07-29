import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CloudComponent } from './cloud/cloud.component';
import { GoldComponent } from './cloud/gold/gold.component';
import { PreAlphaIComponent } from './cloud/pre-alpha-i/pre-alpha-i.component';
import { PreAlphaIIComponent } from './cloud/pre-alpha-ii/pre-alpha-ii.component';
import { PreAlphaIIIPreBetaIComponent } from './cloud/pre-alpha-iii-pre-beta-i/pre-alpha-iii-pre-beta-i.component';
import { PreBetaIPreBetaIIComponent } from './cloud/pre-beta-i-pre-beta-ii/pre-beta-i-pre-beta-ii.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';

const routes: Routes = [
  { path: '', component: AboutPageComponent, data: { tab: 1 } },
  { path: 'experience', component: ExperiencePageComponent, data: { tab: 2 } },
  { path: 'skills', component: SkillsPageComponent, data: { tab: 3 } },
  { path: 'projects', component: ProjectsPageComponent, data: { tab: 4 } },
  { path: 'projects/cloud', component: CloudComponent },
  { path: 'projects/cloud/pre-alpha-i', component: PreAlphaIComponent },
  { path: 'projects/cloud/pre-alpha-ii', component: PreAlphaIIComponent },
  { path: 'projects/cloud/pre-alpha-iii-pre-beta-i', component: PreAlphaIIIPreBetaIComponent },
  { path: 'projects/cloud/pre-beta-i-pre-beta-ii', component: PreBetaIPreBetaIIComponent },
  { path: 'projects/cloud/gold', component: GoldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
