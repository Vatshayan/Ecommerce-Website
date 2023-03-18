import {
    generateUtilityClass,
    generateUtilityClasses
} from '@mui/base';
export function getTouchRippleUtilityClass(slot) {
    return generateUtilityClass('MuiTouchRipple', slot);
}
const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
export default touchRippleClasses;