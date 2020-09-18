import {Lean, LeanCategory} from '../models/lean.model';
import {getLeanerValues} from '../fixtures/leaner.fixture';
import {getLeanestValues} from '../fixtures/leanest.fixture';
import {getLeanValues} from '../fixtures/lean.fixture';


export function getLeanByCategory(category: LeanCategory): Lean[]{
  switch (category) {
    case 'Lean':
      return getLeanValues();
    case 'Leaner':
      return getLeanerValues();
    case 'Leanest':
      return getLeanestValues();
  }
}
