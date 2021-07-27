import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';

const routes: Routes = [
  { path: '', component: AboutPageComponent, data: { tab: 1 } },
  { path: 'experience', component: ExperiencePageComponent, data: { tab: 2 } },
  { path: 'skills', component: SkillsPageComponent, data: { tab: 3 } },
  { path: 'projects', component: ProjectsPageComponent, data: { tab: 4 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
