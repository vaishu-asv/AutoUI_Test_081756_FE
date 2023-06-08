import { BaselineCreationOrComponent } from './baseline-creation-or/baseline-creation-or.component';
import { BaseLineListFinalComponent } from './base-line-list-final/base-line-list-final.component';
import { ActualDataDashBoardComponent } from './actual-data-dash-board/actual-data-dash-board.component';
import { ShareComponent } from './share/share.component';
import { CommentsComponent } from './comments/comments.component';
import { NotesComponent } from './notes/notes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'notes', component: NotesComponent },

  { path: 'comments', component: CommentsComponent },

  { path: 'share', component: ShareComponent },

  { path: 'actual-data-dash-board', component: ActualDataDashBoardComponent },

  { path: 'base-line-list-final', component: BaseLineListFinalComponent },

  { path: 'baseline-creation-or', component: BaselineCreationOrComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
