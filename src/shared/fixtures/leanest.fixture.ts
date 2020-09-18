import {Lean} from '../models/lean.model';
import {getLeanObjsFromVals} from './lean.fixture';




export function getLeanestValues(): Lean[] {
  const lean = {
    Fish: [
      'cod',
      'flounder',
      'haddock',
      'orange roughy',
      'grouper',
      'tilapia',
      'mahi mahi',
      'tuna',
      'wild catfish'
    ],
    Shellfish: [
      'crab',
      'scallops',
      'shrimp',
      'lobster'
    ],
    'Game Meat': [
      'deer',
      'buffalo',
      'elk'
    ],
    'Ground Turkey or Other Meat': [
      '>= 98% lean'
    ],
    Meatless: [
      '14 egg whites',
      '2 cups of liquid egg substitute or liquid egg whites',
      '5oz seitan',
      '1 1/2 cups 1% cottage cheese',
      '12oz non-fat plain Greek yogurt'
    ]
  };
  const oz = 7;

  const fatServings = 2;
  const minTotalFat = 0;
  const maxTotalFat = 4;
  const leanVals = getLeanObjsFromVals(lean, oz, fatServings, minTotalFat, maxTotalFat);
  return leanVals;
}

