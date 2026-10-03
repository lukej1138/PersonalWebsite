import { Component, signal, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Technologies } from '../technologies';
import { from, concatMap, repeat, concat, ignoreElements, interval, map, take, of, delay, tap } from 'rxjs'
import { Filters } from '../filters';
@Component({
  selector: 'app-hero',
  imports: [AsyncPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  filtersConn : Filters = inject(Filters);
  pauseLoop = signal(false);
  flashCursor = signal(false);
  typeWriterPrintableVals: string[] = ["Software Engineer", "CS + AI @ NEU", "Lossless Audio Enjoyer", "Try Clicking an Icon!"];
  typeWriterEffect = this.getTypewriterEffect(this.typeWriterPrintableVals);
  orbitData = inject(Technologies).getData();
  spinDur = signal(60);


  togglePause(): void {
    this.pauseLoop.set(!this.pauseLoop());
  }

  type(time: number, text: string, backwards = false): any {
    return interval(time).pipe(
      map((x) => { return backwards ? text.substring(0, text.length - x - 1) : text.substring(0, x + 1) }),
      take(text.length)
    );
  }

  typeEffect(word: string): any {
    return concat(
      this.type(50, word, false),
      of('').pipe(delay(1500), ignoreElements()),
      this.type(50, word, true),
      of('').pipe(delay(1500), ignoreElements()),
    );
  }

  getTypewriterEffect(titles: string[]) {
    return from(titles).pipe(
      concatMap(title => this.typeEffect(title)),
      repeat()
    );
  }
}
