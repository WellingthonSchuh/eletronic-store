import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDePesquisa } from './barra-de-pesquisa';

describe('BarraDePesquisa', () => {
  let component: BarraDePesquisa;
  let fixture: ComponentFixture<BarraDePesquisa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraDePesquisa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraDePesquisa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
