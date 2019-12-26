import { NgModule } from '@angular/core';
import { NameModule } from './name/name.module';
import { TimeModule } from './time/time.module';

@NgModule({
  imports: [NameModule, TimeModule],
  exports: [NameModule, TimeModule]
})
export class LibModule {}
