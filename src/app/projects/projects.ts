import { Component, AfterViewInit, OnDestroy, inject, signal, ElementRef, computed, viewChild } from '@angular/core'
import { ProjectInfo } from '../project-info/project-info';
import { ProjectRaw } from '../projectraw';
import { Filters } from '../filters';

@Component({
  selector: 'app-projects',
  imports: [ProjectInfo],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit, OnDestroy {
  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  hideFilters = signal(true);
  thisElement = viewChild.required<ElementRef>('projects');
  topRowCount = signal(3);
  private resizeObserver ?: ResizeObserver;

  ngAfterViewInit(): void {
    this.resizeObserver = new ResizeObserver(() => {
      const width = this.thisElement()?.nativeElement.clientWidth;
      const elementWidth = 500; //hard-coded to info component size
      this.topRowCount.set(Math.max(1, Math.floor(width / elementWidth)));
    })
    this.resizeObserver.observe(this.thisElement()?.nativeElement);
  }

  rawData = inject(ProjectRaw);
  readonly projectInformation = this.rawData.getAllData();
  filtersConn = inject(Filters);

  isExpanded = signal(false);
  firstThree  = computed(() => this.filtersConn.filteredProjectInformation().slice(0, this.topRowCount()));
  expanded = computed(() => {
    const array = this.filtersConn.filteredProjectInformation().slice(this.topRowCount());
    const toRet = [];
    for (let i = 0; i < array.length; i += this.topRowCount()) {
      toRet.push(array.slice(i, i + this.topRowCount()));
    }
    return toRet;
  });
  canBeExpanded = computed(() => this.expanded().length > 0);

  toggleFilters() : void {
    this.hideFilters.update((value) => !value);
  }

  switchExpanded(): void {
    this.isExpanded.update((value) => !value);
    if (!this.isExpanded()) {
      document.getElementById('projects')?.scrollIntoView();
    }
  }
}
