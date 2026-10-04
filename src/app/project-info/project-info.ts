import { Component, OnInit, inject, Input, Injector } from '@angular/core';
import { ProjectInfoPopup } from '../project-info-popup/project-info-popup';
import {MatDialog} from '@angular/material/dialog';
import { PROJECT_INFO_DATA } from '../token';
import { ProjectRaw } from '../projectraw';
import { projectInfoData } from '../interfaces';

@Component({
  selector: 'app-project-info',
  imports: [],
  templateUrl: './project-info.html',
  styleUrl: './project-info.css',
  providers: [{provide: PROJECT_INFO_DATA, useExisting: ProjectInfo}],
})
export class ProjectInfo implements OnInit {
  private fullData = inject(ProjectRaw)
  readonly popUp = inject(MatDialog);
  @Input({required : true}) infoId !: number;
  sectionData !: projectInfoData;
  injector = inject(Injector);

  ngOnInit() {
    this.sectionData = this.fullData.getDataById(this.infoId);
  }

  openPopUp(): void {
    this.popUp.open(ProjectInfoPopup, {
      panelClass: 'dialog',
      width: '70vw',
      maxWidth: '70vw',
      height: '87vh',
      position: { top : '40px'},
      backdropClass: 'popUpBackDrop',
      autoFocus: false,
      injector: this.injector,
    })
  }
}
