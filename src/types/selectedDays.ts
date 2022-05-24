import {Range} from "react-date-range";

export interface ISelectedDay {
  startDate?: Date | undefined
  endDate?: Date | undefined
  key?: string
  range?: Range[] | undefined;
  isSelected?: (range: Range) => boolean
  label?: string | undefined
  hasCustomRendering?: boolean | undefined
}
