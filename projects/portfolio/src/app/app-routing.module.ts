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

  { path: 'projects/variegata', component: VariegataComponent},
  { path: 'projects/variegata/2021/02/03', component: VariegataPost1Component},
  { path: 'projects/variegata/2021/02/10', component: VariegataPost2Component},
  { path: 'projects/variegata/2021/02/17', component: VariegataPost3Component},
  { path: 'projects/variegata/2021/03/03', component: VariegataPost4Component},
  { path: 'projects/variegata/2021/03/10', component: VariegataPost5Component},
  { path: 'projects/variegata/2021/03/17', component: VariegataPost6Component},
  { path: 'projects/variegata/2021/03/24', component: VariegataPost7Component},
  { path: 'projects/variegata/2021/03/31', component: VariegataPost8Component},
  { path: 'projects/variegata/2021/04/07', component: VariegataPost9Component},
  { path: 'projects/variegata/2021/04/21', component: VariegataPost10Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
