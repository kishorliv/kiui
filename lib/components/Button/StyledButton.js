var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
var typeColors = {
    primary: {
        hue: '340deg',
        saturation: '100%',
        lightness: '32%',
        hueBottom: '345deg',
        saturationBottom: '100%',
        lightnessBottom: '47%',
    },
    secondary: {
        hue: '340deg',
        saturation: '100%',
        lightness: '32%',
        hueBottom: '345deg',
        saturationBottom: '100%',
        lightnessBottom: '47%',
    },
    text: {
        hue: '340deg',
        saturation: '100%',
        lightness: '32%',
        hueBottom: '345deg',
        saturationBottom: '100%',
        lightnessBottom: '47%',
    },
};
export var StyledButtonFrontSpan = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  border-radius: 12px;\n  font-size: 1.25rem;\n  color: white;\n  transform: translateY(-6px);\n  padding: 12px 42px;\n\n  background: ", ";\n\n  & > *:nth-child(1) {\n    margin-left: ", "px;\n  }\n\n  ", "\n"], ["\n  display: block;\n  border-radius: 12px;\n  font-size: 1.25rem;\n  color: white;\n  transform: translateY(-6px);\n  padding: 12px 42px;\n\n  background: ", ";\n\n  & > *:nth-child(1) {\n    margin-left: ", "px;\n  }\n\n  ", "\n"])), function (props) {
    return "hsl(".concat(typeColors[props.variant].hueBottom, " ").concat(typeColors[props.variant].saturationBottom, " ").concat(typeColors[props.variant].lightnessBottom, ")");
}, function (props) { return (props.withText ? 7 : 0); }, function (props) {
    return props.disabled
        ? "\n        background-color: #a6a6a6;\n        color: #5e5e5e;\n        cursor: not-allowed;\n        transform: translateY(-2px);\n        "
        : '';
});
export var StyledButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n\n  background: ", ";\n\n  ", "\n\n  &:active ", " {\n    transform: translateY(-2px);\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n\n  background: ", ";\n\n  ", "\n\n  &:active ", " {\n    transform: translateY(-2px);\n  }\n"])), function (props) {
    return "hsl(".concat(typeColors[props.variant].hue, " ").concat(typeColors[props.variant].saturation, " ").concat(typeColors[props.variant].lightness, ")");
}, function (props) {
    return props.disabled
        ? "\n        background-color: #a6a6a6;\n        color: #5e5e5e;\n        cursor: not-allowed;\n        &:hover {\n            background-color: #a6a6a6 !important;\n            color: #5e5e5e !important;\n        }\n    "
        : '';
}, StyledButtonFrontSpan);
export var StyledIcon = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 20px;\n"], ["\n  height: 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=StyledButton.js.map