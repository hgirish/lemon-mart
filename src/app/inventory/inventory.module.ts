import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AppMaterialModule } from '../app-material.module'
import { CategoriesComponent } from './categories/categories.component'
import { InventoryHomeComponent } from './inventory-home/inventory-home.component'
import { InventoryRoutingModule } from './inventory-routing.module'
import { InventoryComponent } from './inventory.component'
import { ProductsComponent } from './products/products.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'

@NgModule({
  imports: [CommonModule, InventoryRoutingModule, AppMaterialModule],
  declarations: [
    InventoryComponent,
    ProductsComponent,
    CategoriesComponent,
    StockEntryComponent,
    InventoryHomeComponent,
  ],
})
export class InventoryModule {}
