import { Component } from "@angular/core";

@Component({
  selector: "app-experience-section",
  standalone: true,
  template: `
    <section id="experience" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="section-heading mb-8">Experience</h2>
        <div class="space-y-6">
          <div class="glass-card rounded-2xl p-6">
            <h3 class="text-lg font-semibold">Senior Software Engineer</h3>
            <p class="text-sm text-muted-foreground">Enterprise Applications · 2021 - Present</p>
            <p class="mt-3 text-muted-foreground">
              Leading development of .NET applications, API integrations, and modernization initiatives for large
              enterprise systems.
            </p>
          </div>
          <div class="glass-card rounded-2xl p-6">
            <h3 class="text-lg font-semibold">Software Engineer</h3>
            <p class="text-sm text-muted-foreground">Product Development · 2018 - 2021</p>
            <p class="mt-3 text-muted-foreground">
              Built scalable backend services and collaborated closely with UI teams to deliver customer-facing
              features.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceSectionComponent {}
