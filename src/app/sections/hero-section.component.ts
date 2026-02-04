import { Component } from "@angular/core";

@Component({
  selector: "app-hero-section",
  standalone: true,
  template: `
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div class="absolute inset-0" style="background: var(--gradient-hero)"></div>
      <div class="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow"></div>
      <div
        class="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse-glow"
        style="animation-delay: 1.5s"
      ></div>

      <div class="container relative z-10 mx-auto px-6">
        <div class="flex flex-col items-center text-center">
          <div class="relative mb-8">
            <div class="card-glow h-40 w-40 overflow-hidden rounded-full border-2 border-primary/30 p-1 md:h-48 md:w-48">
              <img
                src="assets/pavan.png"
                alt="Pavan Kumar"
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <div class="absolute inset-0 rounded-full border border-primary/20 animate-float" style="transform: scale(1.2)"></div>
          </div>

          <h1 class="font-heading mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            <span class="text-foreground">Pavan Kumar</span>
            <span class="text-gradient">Reddy</span>
          </h1>

          <div class="mb-6">
            <p class="text-xl font-medium text-muted-foreground md:text-2xl">Senior Software Engineer</p>
            <p class="mt-1 font-heading font-semibold text-primary">Microsoft .NET Technologies</p>
          </div>

          <div class="flex gap-4">
            <a
              class="social-icon"
              href="https://www.linkedin.com/in/ypavan-net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              class="social-icon"
              href="https://www.instagram.com/y.pavan.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a class="social-icon" href="https://wa.me/+919148283004" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {}
