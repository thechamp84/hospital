"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var source_1 = __importDefault(require("./source"));
var InputGroup = antd_1.Input.Group;
function CountryPhoneCode(_a, ref) {
    var onChange = _a.onChange, value = _a.value, inputProps = _a.inputProps;
    var defaultCountry = react_1.useMemo(function () {
        return source_1.default.find(function (c) { return c.short === 'SA'; });
    }, []);
    var _b = react_1.useState(defaultCountry), country = _b[0], setCountry = _b[1];
    var _c = react_1.useState(), phone = _c[0], setPhone = _c[1];
    var phoneRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (value !== undefined) {
            if (value.short) {
                setCountry(source_1.default.find(function (c) { return c.short === value.short; }));
            }
            else {
                setCountry(source_1.default.find(function (c) { return Number(c.phoneCode) === value.code; }));
            }
            setPhone(value.phone);
        }
    }, [value]);
    var triggerChange = react_1.useCallback(function (phone, country) {
        var result = {
            phone: phone,
            code: country && Number(country.phoneCode),
            short: country && country.short,
        };
        if (onChange) {
            onChange(result);
        }
    }, [onChange]);
    var handleCountryChange = react_1.useCallback(function (value) {
        var c = source_1.default.find(function (c) { return c.short === value; });
        if (!c) {
            throw new Error("Country not found: " + value);
        }
        setCountry(c);
        triggerChange(phone, c);
    }, [setCountry, triggerChange, phone]);
    var handlePhoneChange = react_1.useCallback(function () {
        // @ts-ignore: Object is possibly 'null'.
        var value = phoneRef.current.input.value;
        setPhone(value);
        triggerChange(value, country);
    }, [setPhone, country, triggerChange]);
    return (react_1.default.createElement(InputGroup, { compact: true },
        react_1.default.createElement(antd_1.Select, { bordered: true, value: country && country.short, style: { width: "100px" }, dropdownMatchSelectWidth: false, optionLabelProp: "label", onChange: handleCountryChange,showSearch:true }, source_1.default.map(function (item) {
            var fix = {
                key: item.short,
                value: item.short,
                label: item.emoji + "+" + item.phoneCode
            };
            return (react_1.default.createElement(antd_1.Select.Option, __assign({}, fix),
                item.emoji,
                " ",
                item.en,
                " ",
                item.phoneCode));
        })),
        react_1.default.createElement(antd_1.Input, __assign({ bordered: true, style: { width: "calc(100% - 100px)" }, ref: phoneRef, onChange: handlePhoneChange, value: value && value.phone,placeholder:'Please enter contact number' }, inputProps))));
}
exports.default = react_1.forwardRef(CountryPhoneCode);
