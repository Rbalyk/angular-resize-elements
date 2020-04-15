export interface AngularResizeElementEvent {
  currentWidthValue: number;
  currentHeightValue: number;
  originalWidthValue: number;
  originalHeightValue: number;
  differenceWidthValue: number;
  differenceHeightValue: number;
  originalEvent: MouseEvent;
}

export const enum AngularResizeElementDirection {
  TOP = 'top',
  TOP_RIGHT = 'top-right',
  RIGHT = 'right',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-left',
  LEFT = 'left',
  TOP_LEFT = 'top-left'
}
