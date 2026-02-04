import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  template: `
    <footer class="border-t border-border/60 py-8">
      <div class="container mx-auto px-6 text-center text-sm text-muted-foreground">
        © 2024 Pavan Kumar Reddy. All rights reserved.
      </div>
    </footer>
  `,
})
export class FooterComponent {}
