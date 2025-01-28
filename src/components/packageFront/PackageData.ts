export interface PackageItem {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
}

export const packageData: PackageItem[] = [
  {
    id: "1",
    title: 'מארז אורגני',
    price: 119.90,
    originalPrice: 189.90,
    description: `המוצרים שלנו נבחר במיוחד עבורכם – לכל צורך, אירוע או קנייה בסיסית. כל מארז כולל את המצרכים הכי רלוונטיים, במחיר חזול בשוק ועם חנויה מטורפת שלא תמצאו בשום מקום אחר. במקום לבזבז זמן ולהרכיב את הסל בעצמכם.`,
    image: '/assets/package-hero.png'
  },
  {
    id: "2",
    title: 'מארז משפחתי',
    price: 149.90,
    originalPrice: 229.90,
    description: `טקסט דמה זה משמש כטקסט זמני למילוי עיצוב גרפי או דפי אינטרנט. התוכן כאן נועד לחקות את המבנה והאורך של טקסט אמיתי מבלי להכביד על הקורא או להסיח את דעתו. לורם איפסום בעברית הוא כלי פופולרי מאוד בקרב מעצבים.`,
    image: '/assets/package-hero.png'
  },
  {
    id: "3",
    title: 'מארז בסיסי',
    price: 89.90,
    originalPrice: 149.90,
    description: `טקסט דמה זה משמש כטקסט זמני למילוי עיצוב גרפי או דפי אינטרנט. התוכן כאן נועד לחקות את המבנה והאורך של טקסט אמיתי מבלי להכביד על הקורא או להסיח את דעתו. לורם איפסום בעברית הוא כלי פופולרי מאוד בקרב מעצבים.`,
    image: '/assets/package-hero.png'
  },
  {
    id: "4",
    title: 'מארז פרימיום',
    price: 199.90,
    originalPrice: 299.90,
    description: `טקסט דמה זה משמש כטקסט זמני למילוי עיצוב גרפי או דפי אינטרנט. התוכן כאן נועד לחקות את המבנה והאורך של טקסט אמיתי מבלי להכביד על הקורא או להסיח את דעתו. לורם איפסום בעברית הוא כלי פופולרי מאוד בקרב מעצבים.`,
    image: '/assets/package-hero.png'
  }
];
