import { Component } from "@angular/core";

@Component({
  selector: "app-skills-section",
  standalone: true,
  template: `
    <section id="skills" class="py-20 bg-card/40">
      <div class="container mx-auto px-6">
        <h2 class="section-heading mb-8">Skills</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="glass-card rounded-2xl p-6">
            <h3 class="mb-3 text-lg font-semibold">Backend</h3>
            <ul class="space-y-2 text-muted-foreground">
              <li>.NET, C#, ASP.NET Core, Web API</li>
              <li>Entity Framework, LINQ, REST</li>
              <li>SQL Server, PostgreSQL</li>
            </ul>
          </div>
          <div class="glass-card rounded-2xl p-6">
            <h3 class="mb-3 text-lg font-semibold">Frontend & Tools</h3>
            <ul class="space-y-2 text-muted-foreground">
              <li>Angular, TypeScript, HTML, CSS</li>
              <li>Tailwind CSS, UI Design Systems</li>
              <li>Azure DevOps, Git, CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SkillsSectionComponent {}
