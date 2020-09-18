import {Green, GreenCategory} from '../models/green.model';
import {getHighCarbs} from '../fixtures/highCarbs.fixture';
import {getLowCarbs} from '../fixtures/lowCarb.fixture';
import {getModerateCarbs} from '../fixtures/moderateCarbs.fixture';


export function getGreenByCategory(category: GreenCategory): Green[]{
  switch (category) {
    case 'Higher Carbohydrate':
      return getHighCarbs();
    case 'Lower Carbohydrate':
      return getLowCarbs();
    case 'Moderate Carbohydrate':
      return getModerateCarbs();
  }
}
