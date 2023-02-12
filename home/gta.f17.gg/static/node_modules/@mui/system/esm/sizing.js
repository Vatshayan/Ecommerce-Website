import style from './style';
import compose from './compose';
import {
    handleBreakpoints,
    values as breakpointsValues
} from './breakpoints';

function transform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}

export const width = style({
    prop: 'width',
    transform
});
export const maxWidth = props => {
    if (props.maxWidth !== undefined && props.maxWidth !== null) {
        const styleFromPropValue = propValue => {
            var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

            const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || breakpointsValues[propValue];
            return {
                maxWidth: breakpoint || transform(propValue)
            };
        };

        return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }

    return null;
};
maxWidth.filterProps = ['maxWidth'];
export const minWidth = style({
    prop: 'minWidth',
    transform
});
export const height = style({
    prop: 'height',
    transform
});
export const maxHeight = style({
    prop: 'maxHeight',
    transform
});
export const minHeight = style({
    prop: 'minHeight',
    transform
});
export const sizeWidth = style({
    prop: 'size',
    cssProperty: 'width',
    transform
});
export const sizeHeight = style({
    prop: 'size',
    cssProperty: 'height',
    transform
});
export const boxSizing = style({
    prop: 'boxSizing'
});
const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
export default sizing;