import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CloudComponent } from './cloud/cloud.component';
import { GoldComponent } from './cloud/gold/gold.component';
import { PreAlphaIComponent } from './cloud/pre-alpha-i/pre-alpha-i.component';
import { PreAlphaIIComponent } from './cloud/pre-alpha-ii/pre-alpha-ii.component';
import { PreAlphaIIIPreBetaIComponent } from './cloud/pre-alpha-iii-pre-beta-i/pre-alpha-iii-pre-beta-i.component';
import { PreBetaIPreBetaIIComponent } from './cloud/pre-beta-i-pre-beta-ii/pre-beta-i-pre-beta-ii.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ShellComponent } from './shell/shell.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { VariegataPost1Component } from './variegata/variegata-post1/variegata-post1.component';
import { VariegataPost10Component } from './variegata/variegata-post10/variegata-post10.component';
import { VariegataPost2Component } from './variegata/variegata-post2/variegata-post2.component';
import { VariegataPost3Component } from './variegata/variegata-post3/variegata-post3.component';
import { VariegataPost4Component } from './variegata/variegata-post4/variegata-post4.component';
import { VariegataPost5Component } from './variegata/variegata-post5/variegata-post5.component';
import { VariegataPost6Component } from './variegata/variegata-post6/variegata-post6.component';
import { VariegataPost7Component } from './variegata/variegata-post7/variegata-post7.component';
import { VariegataPost8Component } from './variegata/variegata-post8/variegata-post8.component';
import { VariegataPost9Component } from './variegata/variegata-post9/variegata-post9.component';
import { VariegataComponent } from './variegata/variegata.component';

const routes: Routes = [
  { path: '', component: ShellComponent,
    children: [
      { path: '', component: AboutPageComponent, data: { tab: 1 } },
      { path: 'skills', component: SkillsPageComponent, data: { tab: 2 } },
      { path: 'experience', component: ExperiencePageComponent, data: { tab: 3 } },
      { path: 'projects', component: ProjectsPageComponent, data: { tab: 4 } },

      { path: 'projects/cloud', component: CloudComponent, data: { tab: 5 } },
      { path: 'projects/cloud/pre-alpha-i', component: PreAlphaIComponent, data: { tab: 6 } },
      { path: 'projects/cloud/pre-alpha-ii', component: PreAlphaIIComponent, data: { tab: 6 } },
      { path: 'projects/cloud/pre-alpha-iii-pre-beta-i', component: PreAlphaIIIPreBetaIComponent, data: { tab: 6 } },
      { path: 'projects/cloud/pre-beta-i-pre-beta-ii', component: PreBetaIPreBetaIIComponent, data: { tab: 6 } },
      { path: 'projects/cloud/gold', component: GoldComponent, data: { tab: 6 } },

      { path: 'projects/variegata', component: VariegataComponent, data: { tab: 5 } },
      { path: 'projects/variegata/2021/02/03', component: VariegataPost1Component, data: { tab: 6 } },
      { path: 'projects/variegata/2021/02/10', component: VariegataPost2Component, data: { tab: 6 } },
      { path: 'projects/variegata/2021/02/17', component: VariegataPost3Component, data: { tab: 6 } },
      { path: 'projects/variegata/2021/03/03', component: VariegataPost4Component, data: { tab: 6 } },
      { path: 'projects/variegata/2021/03/10', component: VariegataPost5Component, data: { tab: 6 } },
      { path: 'projects/variegata/2021/03/17', component: VariegataPost6Component, data: { tab: 6 } },
      { path: 'projects/variegata/2021/03/24', component: VariegataPost7Component, data: { tab: 6 } },
      { path: 'projects/variegata/2021/03/31', component: VariegataPost8Component, data: { tab: 6 } },
      { path: 'projects/variegata/2021/04/07', component: VariegataPost9Component, data: { tab: 6 } },
      { path: 'projects/variegata/2021/04/21', component: VariegataPost10Component, data: { tab: 6 } },
    ]
  },

  { path: 'dash', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
