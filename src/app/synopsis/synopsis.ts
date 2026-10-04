import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { CardComponent } from '../card-component/card-component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CardInteractionService } from '../card-interaction-service';

@Component({
  selector: 'app-synopsis',
  imports: [CardComponent],
  templateUrl: './synopsis.html',
  styleUrl: './synopsis.css',
})
export class Synopsis implements OnInit {
  private observer = inject(BreakpointObserver);
  private destroyRef = inject(DestroyRef);
  private layout = signal<'phone' | 'tablet' | 'desktop'>('desktop');
  private viewportW = signal(window.innerWidth);
  readonly cards = inject(CardInteractionService).cards;

  containerDims = computed(() => {
    const l = this.layout();
    const pos = this.cards.map(c => c.positions[l]);
    return {
      w: Math.max(...pos.map(p => p.x)) + (this.viewportW() < 500 ? 300 : 330),
      h: Math.max(...pos.map(p => p.y)) + 480,
    };
  });

  scale = computed(() => Math.min(1, this.viewportW() / this.containerDims().w));

  constructor() {
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.viewportW.set(window.innerWidth));
  }

  ngOnInit() {
    this.observer.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(state => {
        if (state.breakpoints[Breakpoints.XSmall])      this.layout.set('phone');
        else if (state.breakpoints[Breakpoints.Small])  this.layout.set('tablet');
        else                                            this.layout.set('desktop');
      });
  }
}
