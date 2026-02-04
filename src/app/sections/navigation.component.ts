import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav class="container mx-auto flex items-center justify-between px-6 py-4">
        <a routerLink="/" class="text-lg font-heading font-semibold text-foreground">
          Pavan Kumar Reddy
        </a>
        <div class="flex items-center gap-6">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </nav>
    </header>
  `,
})
export class NavigationComponent {}
