import {Component, Input, OnInit} from '@angular/core';
import {Green, GreenCategory} from '../../shared/models/green.model';
import {setLeanCategory} from '../../shared/store/actions/lean.actions';
import {Store} from '@ngrx/store';
import {setGreenCategory} from '../../shared/store/actions/green.actions';
import {getCurrentCategory} from '../../shared/store/selectors/green.selectors';

@Component({
  selector: 'app-green-category',
  templateUrl: './green-category.component.html',
  styleUrls: ['./green-category.component.scss']
})
export class GreenCategoryComponent implements OnInit {
  @Input() category: GreenCategory;
  @Input() options: Green[];
  selected: false;
  selectedCategory: GreenCategory;

  constructor(private store: Store<any>) {
    this.store.select(getCurrentCategory).subscribe((category) => {
      this.selectedCategory = category;
    });
  }

  ngOnInit(): void {
  }


  setCategory(): void{
    this.store.dispatch(setGreenCategory({category: this.category}));
  }

}
