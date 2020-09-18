import {Component, Input, OnInit} from '@angular/core';
import {Lean, LeanCategory} from '../../shared/models/lean.model';
import {Store} from '@ngrx/store';
import {setLeanCategory} from '../../shared/store/actions/lean.actions';
import {getCurrentCategory} from '../../shared/store/selectors/lean.selectors';


@Component({
  selector: 'app-lean-category',
  templateUrl: './lean-category.component.html',
  styleUrls: ['./lean-category.component.scss']
})
export class LeanCategoryComponent implements OnInit {
  @Input() category: LeanCategory;
  @Input() options: Lean[];
  selected: false;
  selectedCategory: LeanCategory;

  constructor(private store: Store<any>) {
    this.store.select(getCurrentCategory).subscribe((category) => {
      this.selectedCategory = category;
    });
  }

  ngOnInit(): void {
  }

  setCategory(): void{
    this.store.dispatch(setLeanCategory({category: this.category}));
  }
}
