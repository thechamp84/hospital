import React from 'react';
interface PropTypes {
    onChange?: Function;
    value?: CountryPhoneCodeValue;
    inputProps?: any;
}
interface CountryPhoneCodeValue {
    code?: number;
    phone?: string;
    short?: string;
}
declare const _default: React.ForwardRefExoticComponent<PropTypes & React.RefAttributes<unknown>>;
export default _default;
