import { NgModule } from '@angular/core';

import { PegaConnectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PegaConnectSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PegaConnectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PegaConnectSharedCommonModule {}
