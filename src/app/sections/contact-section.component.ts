import { Component } from "@angular/core";

@Component({
  selector: "app-contact-section",
  standalone: true,
  template: `
    <section id="contact" class="py-20 bg-card/40">
      <div class="container mx-auto px-6">
        <h2 class="section-heading mb-6">Contact</h2>
        <div class="glass-card rounded-2xl p-6">
          <p class="text-muted-foreground">
            Interested in collaborating or learning more? Reach out anytime.
          </p>
          <div class="mt-4 space-y-2 text-muted-foreground">
            <p>
              Email:
              <a class="text-primary hover:text-primary/80" href="mailto:ypavan@example.com">
                ypavan@example.com
              </a>
            </p>
            <p>
              Phone:
              <a class="text-primary hover:text-primary/80" href="tel:+919148283004">
                +91 91482 83004
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {}
