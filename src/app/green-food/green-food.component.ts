import {Component, Input, OnInit} from '@angular/core';
import {Green} from '../../shared/models/green.model';
import {Store} from '@ngrx/store';
import {setGreenOption} from '../../shared/store/actions/green.actions';
import {getGreenFood} from '../../shared/store/selectors/green.selectors';

@Component({
  selector: 'app-green-food',
  templateUrl: './green-food.component.html',
  styleUrls: ['./green-food.component.scss']
})
export class GreenFoodComponent implements OnInit {

  @Input() food: Green;
  currentFood: Green;

  constructor(private store: Store<any>) {
    this.store.select(getGreenFood).subscribe((food) => {
      this.currentFood = food;
    });
  }

  ngOnInit(): void {
  }

  setGreen(): void{
    this.store.dispatch(setGreenOption({green: this.food}));
  }


}
