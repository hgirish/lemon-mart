import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from '../material.module'
import { InventoryRoutingModule } from './inventory-routing.module'
import { InventoryComponent } from './inventory.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component'

@NgModule({
  imports: [CommonModule, InventoryRoutingModule, MaterialModule],
  declarations: [InventoryComponent, ProductsComponent, CategoriesComponent, StockEntryComponent, InventoryHomeComponent],
})
export class InventoryModule {}
