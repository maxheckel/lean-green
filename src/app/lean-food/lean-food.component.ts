import {Component, Input, OnInit} from '@angular/core';
import {Lean} from '../../shared/models/lean.model';
import {Store} from '@ngrx/store';
import {setLeanOption} from '../../shared/store/actions/lean.actions';
import {getLeanFood} from '../../shared/store/selectors/lean.selectors';

@Component({
  selector: 'app-lean-food',
  templateUrl: './lean-food.component.html',
  styleUrls: ['./lean-food.component.scss']
})
export class LeanFoodComponent implements OnInit {

  @Input() food: Lean;
  currentFood: Lean;

  constructor(private store: Store<any>) {
    this.store.select(getLeanFood).subscribe((food) => {
      this.currentFood = food;
    });
  }

  ngOnInit(): void {
  }

  setLean(): void{
    this.store.dispatch(setLeanOption({lean: this.food}));
  }

}
