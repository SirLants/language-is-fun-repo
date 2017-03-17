import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NotImplementedDialog } from '../dialogs/global/not-implemented/not-implemented.component';
import { GoHomeDialog }                             from '../dialogs/global/go-home/go-home.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) { }

  public notImplemented():Observable<boolean> {
    let dialogRef: MdDialogRef<NotImplementedDialog>;

    dialogRef = this.dialog.open(NotImplementedDialog);

    return dialogRef.afterClosed();
  }

  public goHome():Observable<boolean> {
    let dialogRef: MdDialogRef<NotImplementedDialog>;

    dialogRef = this.dialog.open(GoHomeDialog);

    return dialogRef.afterClosed();
  }
}
