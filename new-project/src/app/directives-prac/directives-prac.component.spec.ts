import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPracComponent } from './directives-prac.component';

describe('DirectivesPracComponent', () => {
  let component: DirectivesPracComponent;
  let fixture: ComponentFixture<DirectivesPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
