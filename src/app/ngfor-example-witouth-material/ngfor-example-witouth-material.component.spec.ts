import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforExampleWitouthMaterialComponent } from './ngfor-example-witouth-material.component';

describe('NgforExampleWitouthMaterialComponent', () => {
  let component: NgforExampleWitouthMaterialComponent;
  let fixture: ComponentFixture<NgforExampleWitouthMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforExampleWitouthMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforExampleWitouthMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
