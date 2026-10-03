import { Component, AfterViewInit, OnDestroy, ElementRef, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleCisco } from '@ng-icons/simple-icons';

interface CareerEntry {
  id: string;
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  current: boolean;
  logoIcon?: string; // ng-icons name (e.g. 'simpleCisco'), rendered via <ng-icon>
  logoSrc?: string; // path to a local SVG/image under public/, rendered via <img>
  // Falls back to a monogram when neither is set.
}

@Component({
  selector: 'app-career',
  imports: [NgIcon],
  templateUrl: './career.html',
  styleUrl: './career.css',
  providers: [provideIcons({ simpleCisco })],
})
export class Career implements AfterViewInit, OnDestroy {
  // TODO: swap in real dates/bullets
  readonly entries: CareerEntry[] = [
    {
      id: 'sherm',
      company: 'Sherman Center',
      role: 'Speaker',
      dates: 'Sep 2025 - May 2026',
      bullets: [
        'At the Sherman Center, I worked to promote our engineering program by traveling to classes and concisely explaining our program, it\'s systems, and what we had to offer.'
      ],
      current: false,
      logoSrc: '/sherm.svg',
    },
    {
      id: 'sandbox',
      company: 'Sandbox',
      role: 'Full-Stack Software Engineer',
      dates: 'Sep 2025 – Present',
      bullets: [
        'When I joined Sandbox, I had no idea how to properly implement or manage scalable applications. Now, I\'m leading our top-project\'s onboarding and mentoring programs.'
      ],
      current: false,
    },
    {
      id: 'cisco',
      company: 'Cisco',
      role: 'Software Engineer Intern',
      dates: 'Jul 2026 - Present',
      bullets: [
        'Currently working on the Cisco Security Cloud Control, where I\'m conducting product-security remediation of enterprise cloud and network-management software, specifically as a part of Anthropic\'s Project Glasswing.'
      ],
      current: true,
      logoIcon: 'simpleCisco',
    },
  ];

  openId = signal<string | null>(null);

  private readonly canAnimate =
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window;

  pending = signal(this.canAnimate);
  revealed = signal(false);

  private section = viewChild.required<ElementRef<HTMLElement>>('career');
  private observer?: IntersectionObserver;

  toggle(id: string): void {
    this.openId.update((current) => (current === id ? null : id));
  }

  ngAfterViewInit(): void {
    if (!this.canAnimate) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          this.pending.set(false);
          this.revealed.set(true);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    this.observer.observe(this.section().nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
