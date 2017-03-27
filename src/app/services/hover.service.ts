import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { MouHover }   from '../hovers/learning/mou-hover/mou-hover.component';
import { SuguHover }   from '../hovers/learning/sugu-hover/sugu-hover.component';
import { DaHover }   from '../hovers/learning/da-hover/da-hover.component';
import { ZoHover }   from '../hovers/learning/zo-hover/zo-hover.component';
import { ExtenderHover }   from '../hovers/learning/extender-hover/extender-hover.component';

@Injectable()
export class HoverService {

  config: MdDialogConfig = {
    width: '500px'
  }

  constructor(private dialog: MdDialog) { }

  public mouHover():Observable<boolean> {
    let dialogRef: MdDialogRef<MouHover>;

    dialogRef = this.dialog.open(MouHover, this.config);

    return dialogRef.afterClosed();
  }

  public suguHover():Observable<boolean> {
    let dialogRef: MdDialogRef<SuguHover>;

    dialogRef = this.dialog.open(SuguHover, this.config);

    return dialogRef.afterClosed();
  }

  public daHover():Observable<boolean> {
    let dialogRef: MdDialogRef<DaHover>;

    dialogRef = this.dialog.open(DaHover, this.config);

    return dialogRef.afterClosed();
  }

  public zoHover():Observable<boolean> {
    let dialogRef: MdDialogRef<ZoHover>;

    dialogRef = this.dialog.open(ZoHover, this.config);

    return dialogRef.afterClosed();
  }

  public extenderHover():Observable<boolean> {
    let dialogRef: MdDialogRef<ExtenderHover>;

    dialogRef = this.dialog.open(ExtenderHover, this.config);

    return dialogRef.afterClosed();
  }

}
