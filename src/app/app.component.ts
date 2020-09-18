import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {randomizeGreen, resetGreen, setGreenCategory, setGreenOption} from '../shared/store/actions/green.actions';
import {getLeanFood, getLeanOptions} from '../shared/store/selectors/lean.selectors';
import {randomizeLean, resetLean, setLeanCategory, setLeanOption} from '../shared/store/actions/lean.actions';
import {getGreenByCategory} from '../shared/services/green.service';
import {getLeanByCategory} from '../shared/services/lean.service';
import {Lean} from '../shared/models/lean.model';
import {Green} from '../shared/models/green.model';
import {getGreenFood} from '../shared/store/selectors/green.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lean-green';
  viewingCategories = true;
  greenOptionsByCategory = getGreenByCategory;
  leanOptionsByCategory = getLeanByCategory;
  public leanGroups;
  objectKeys = Object.keys;
  selectedLean: Lean;
  selectedGreen: Green;


  private groupBy(xs, key): object {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  constructor(private store: Store<any>) {
    this.leanGroups = this.groupBy([...getLeanByCategory('Lean'), ...getLeanByCategory('Leaner'), ...getLeanByCategory('Leanest')], 'type');
    this.store.select(getLeanFood).subscribe((lean) => this.selectedLean = lean);
    this.store.select(getGreenFood).subscribe((green) => this.selectedGreen = green);
  }
  close():void{
    this.store.dispatch(resetGreen({}))
    this.store.dispatch(resetLean({}));
  }
}
