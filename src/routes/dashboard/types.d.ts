interface DayName {
    
}

interface DayData {
  Food: { [key: string]: string };
  "Quantity (g)": { [key: string]: number };
}

interface WeeklyFood {
  Monday?: DayData;
  Tuesday?: DayData;
  Wednesday?: DayData;
  Thursday?: DayData;
  Friday?: DayData;
  Saturday?: DayData;
  Sunday?: DayData;
}
