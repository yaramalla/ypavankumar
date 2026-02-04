import { Component } from "@angular/core";

@Component({
  selector: "app-about-section",
  standalone: true,
  template: `
    <section id="about" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="section-heading mb-6">About</h2>
        <div class="glass-card rounded-2xl p-8">
          <p class="text-lg text-muted-foreground">
            Senior Software Engineer specializing in Microsoft .NET technologies with experience in building
            enterprise-grade applications, APIs, and scalable systems. Passionate about clean architecture, team
            collaboration, and delivering high-quality user experiences.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {}
