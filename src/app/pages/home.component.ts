import { Component } from "@angular/core";

import { AboutSectionComponent } from "../sections/about-section.component";
import { ContactSectionComponent } from "../sections/contact-section.component";
import { ExperienceSectionComponent } from "../sections/experience-section.component";
import { FooterComponent } from "../sections/footer.component";
import { HeroSectionComponent } from "../sections/hero-section.component";
import { NavigationComponent } from "../sections/navigation.component";
import { SkillsSectionComponent } from "../sections/skills-section.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    NavigationComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  template: `
    <div class="min-h-screen bg-background">
      <app-navigation></app-navigation>
      <main>
        <app-hero-section></app-hero-section>
        <app-about-section></app-about-section>
        <app-skills-section></app-skills-section>
        <app-experience-section></app-experience-section>
        <app-contact-section></app-contact-section>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class HomeComponent {}
