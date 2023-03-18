import _extends from "@babel/runtime/helpers/esm/extends";

/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param {object} defaultProps
 * @param {object} props
 * @returns {object} resolved props
 */
export default function resolveProps(defaultProps, props) {
    const output = _extends({}, props);

    Object.keys(defaultProps).forEach(propName => {
        if (output[propName] === undefined) {
            output[propName] = defaultProps[propName];
        }
    });
    return output;
}