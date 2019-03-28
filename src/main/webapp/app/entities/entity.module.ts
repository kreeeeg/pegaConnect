import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#PegaConnectRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#PegaConnectCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#PegaConnectLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#PegaConnectDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#PegaConnectTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#PegaConnectEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#PegaConnectJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#PegaConnectJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PegaConnectEntityModule {}
