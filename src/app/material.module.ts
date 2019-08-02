import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [],
    imports: [
        MatMenuModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatMenuModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class MaterialModule { }
