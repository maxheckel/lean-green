export type GreenCategory = 'Lower Carbohydrate' | 'Moderate Carbohydrate' | 'Higher Carbohydrate';

export class Green {
  category: GreenCategory;
  name: string;
  cups: number;

  constructor(data: any){
    this.category = data.category;
    this.name = data.name;
    this.cups = data.cups;
  }
}
