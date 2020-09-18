export type LeanCategory = 'Leanest' | 'Leaner' | 'Lean';

export type LeanType =
  'Fish'
  | 'Shellfish'
  | 'Game Meat'
  | 'Ground Turkey or Other Meat'
  | 'Meatless'
  | 'Chicken'
  | 'Turkey'
  | 'Lamb'
  | 'Lean Beef'
  | 'Pork';



export class Lean{
  type: LeanType;
  category: LeanCategory;
  name: string;
  oz: number;
  fatServings: number;
  minTotalFat: number;
  maxTotalFat: number;

  constructor(data: any){
    this.type = data.type;
    this.category = data.category;
    this.name = data.name;
    this.oz = data.oz;
    this.fatServings = data.fatServings;
    this.minTotalFat = data.minTotalFat;
    this.maxTotalFat = data.maxTotalFat;
  }
}
