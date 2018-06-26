import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { commonTestingModules, commonTestingProviders } from '../../common/common-testing'
import { UserMaterialModule } from '../user-material.module'
import { ProfileComponent } from './profile.component'
import { SharedComponentsModule } from '../../shared-components.module';

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: commonTestingProviders,
      imports: commonTestingModules.concat([UserMaterialModule,SharedComponentsModule]),
      declarations: [ProfileComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
