import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NotImplementedDialog } from '../dialogs/global/not-implemented/not-implemented.component';
import { GoHomeDialog }                             from '../dialogs/global/go-home/go-home.component';
import { QuizOrLearnDialog }                       from '../dialogs/learning/quiz-or-learn/quiz-or-learn.component';
import { CanYouReadDialog }                     from '../dialogs/learning/can-you-read/can-you-read.component';
import { LearningOpenerDialog }                     from '../dialogs/learning/learning-opener-dialog/learning-opener-dialog.component';
import { OnhoverReminderDialog }                  from '../dialogs/learning/onhover-reminder-dialog/onhover-reminder-dialog.component';
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

  public quizOrLearn():Observable<boolean> {
    let dialogRef: MdDialogRef<QuizOrLearnDialog>;

    dialogRef = this.dialog.open(QuizOrLearnDialog);

    return dialogRef.afterClosed();
  }

  public canYouRead():Observable<boolean>{
    let dialogRef: MdDialogRef<CanYouReadDialog>;

    dialogRef = this.dialog.open(CanYouReadDialog);

    return dialogRef.afterClosed();
  }

  public learningOpenerDialog():Observable<boolean>{
    let dialogRef: MdDialogRef<LearningOpenerDialog>;

    dialogRef = this.dialog.open(LearningOpenerDialog);

    return dialogRef.afterClosed();
  }

  public onhoverReminderDialog():Observable<boolean>{
    let dialogRef: MdDialogRef<OnhoverReminderDialog>;

    dialogRef = this.dialog.open(OnhoverReminderDialog);

    return dialogRef.afterClosed();
  }
}