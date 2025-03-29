import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoManageComponent } from './TodoManage.component';

describe('TodoManageComponent', () => {
  let component: TodoManageComponent;
  let fixture: ComponentFixture<TodoManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoManageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
