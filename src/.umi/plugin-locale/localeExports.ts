// @ts-nocheck
import {
  createIntl,
  IntlShape,
  MessageDescriptor,
} from 'C:/Users/welcome/Desktop/hospital/node_modules/react-intl';
import { ApplyPluginsType } from 'umi';
import { event, LANG_CHANGE_EVENT } from './locale';
// @ts-ignore
import warning from 'C:/Users/welcome/Desktop/hospital/node_modules/warning/warning.js';

import { plugin } from '../core/plugin';

export {
  createIntl,
};
export {
  FormattedDate,
  FormattedDateParts,
  FormattedDisplayName,
  FormattedHTMLMessage,
  FormattedList,
  FormattedMessage,
  FormattedNumber,
  FormattedNumberParts,
  FormattedPlural,
  FormattedRelativeTime,
  FormattedTime,
  FormattedTimeParts,
  IntlContext,
  IntlProvider,
  RawIntlProvider,
  createIntlCache,
  defineMessages,
  injectIntl,
  useIntl,
} from 'C:/Users/welcome/Desktop/hospital/node_modules/react-intl';

let g_intl: IntlShape;

const useLocalStorage = true;

export const localeInfo: {[key: string]: any} = {
  'en-US': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/account/settings/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/dashboard/analysis/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/dashboard/monitor/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/editor/flow/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/editor/koni/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/editor/mind/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/exception/500/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/form/basic-form/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/form/step-form/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/result/fail/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/result/success/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/user/login/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/user/register-result/locales/en-US.js')),
    },
    locale: 'en-US',
    
    momentLocale: '',
  },
  'id-ID': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/locales/id-ID.js')),
    },
    locale: 'id-ID',
    
    momentLocale: 'id',
  },
  'pt-BR': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/dashboard/analysis/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/dashboard/monitor/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/exception/500/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/form/basic-form/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/form/step-form/locales/pt-BR.js')),
    },
    locale: 'pt-BR',
    
    momentLocale: 'pt-br',
  },
  'zh-CN': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/account/settings/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/dashboard/analysis/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/dashboard/monitor/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/editor/flow/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/editor/koni/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/editor/mind/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/exception/500/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/form/basic-form/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/form/step-form/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/result/fail/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/result/success/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/user/login/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/user/register-result/locales/zh-CN.js')),
    },
    locale: 'zh-CN',
    
    momentLocale: 'zh-cn',
  },
  'zh-TW': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/account/settings/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/dashboard/analysis/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/dashboard/monitor/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/exception/500/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/form/basic-form/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/form/step-form/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/result/fail/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/result/success/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/user/login/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('C:/Users/welcome/Desktop/hospital/src/pages/user/register-result/locales/zh-TW.js')),
    },
    locale: 'zh-TW',
    
    momentLocale: 'zh-tw',
  },
};

/**
 * ?????????????????????????????????
 * @param name ????????? key
 * @param messages ?????????????????????
 * @param extraLocale momentLocale, antd ?????????
 */
export const addLocale = (
  name: string,
  messages: Object,
  extraLocales: {
    momentLocale:string;
    antd:string
  },
) => {
  if (!name) {
    return;
  }
  // ????????????
  const mergeMessages = localeInfo[name]?.messages
    ? Object.assign({}, localeInfo[name].messages, messages)
    : messages;

  const { momentLocale, antd } = extraLocales || {};
  localeInfo[name] = {
    messages: mergeMessages,
    locale: name.split('-')?.join('-'),
    momentLocale: momentLocale,
    
  };
};

/**
 * ??????????????? intl ?????????????????? node ?????????
 * @param locale ???????????????????????????
 * @param changeIntl ??????????????? g_intl
 * @returns IntlShape
 */
export const getIntl = (locale?: string, changeIntl?: boolean) => {
  // ??????????????? g_intl ?????????????????? setIntl ??????
  if (g_intl && !changeIntl && !locale) {
    return g_intl;
  }
  // ??????????????? localeInfo ???
  if (locale&&localeInfo[locale]) {
    return createIntl(localeInfo[locale]);
  }
  // ?????????????????????????????????
  warning(
    !locale||!!localeInfo[locale],
    `The current popular language does not exist, please check the locales folder!`,
  );
  // ?????? zh-CN
  if (localeInfo["en-US"]) return createIntl(localeInfo["en-US"]);

  // ????????????????????????????????????
  return createIntl({
    locale: "en-US",
    messages: {},
  });
};

/**
 * ??????????????? intl ?????????
 * @param locale ?????????key
 */
export const setIntl = (locale: string) => {
  g_intl = getIntl(locale, true);
};

/**
 * ???????????????????????????
 * @returns string
 */
export const getLocale = () => {
  const runtimeLocale = plugin.applyPlugins({
    key: 'locale',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  // runtime getLocale for user define
  if (typeof runtimeLocale?.getLocale === 'function') {
    return runtimeLocale.getLocale();
  }
  // please clear localStorage if you change the baseSeparator config
  // because changing will break the app
  const lang =
    typeof localStorage !== 'undefined' && useLocalStorage
      ? window.localStorage.getItem('umi_locale')
      : '';
  // support baseNavigator, default true
  let browserLang;
  return lang || browserLang || "en-US";
};


/**
 * ???????????????????????????
 * @returns string
 */
export const getDirection = () => {
  const lang = getLocale();
  // array with all prefixs for rtl langueges ex: ar-EG , he-IL
  const rtlLangs = ['he', 'ar', 'fa', 'ku']
  const direction =  rtlLangs.filter(lng => lang.startsWith(lng)).length ? 'rtl' : 'ltr';
  return direction;
};

/**
 * ????????????
 * @param lang ????????? key
 * @param realReload ?????????????????????????????????
 * @returns string
 */
export const setLocale = (lang: string, realReload: boolean = true) => {
  const localeExp = new RegExp(`^([a-z]{2})-?([A-Z]{2})?$`);

  const runtimeLocale = plugin.applyPlugins({
    key: 'locale',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  if (typeof runtimeLocale?.setLocale === 'function') {
    runtimeLocale.setLocale({
      lang,
      realReload,
      updater: (updateLang = lang) => event.emit(LANG_CHANGE_EVENT, updateLang),
    });
    return;
  }
  if (lang !== undefined && !localeExp.test(lang)) {
    // for reset when lang === undefined
    throw new Error('setLocale lang format error');
  }
  if (getLocale() !== lang) {
    if (typeof window.localStorage !== 'undefined' && useLocalStorage) {
      window.localStorage.setItem('umi_locale', lang || '');
    }
    setIntl(lang);
    if (realReload) {
      window.location.reload();
    } else {
      event.emit(LANG_CHANGE_EVENT, lang);
      // chrome ????????????????????????????????????????????????
      if (window.dispatchEvent) {
        const event = new Event('languagechange');
        window.dispatchEvent(event);
      }
    }
  }
};

let firstWaring = true;

/**
 * intl.formatMessage ????????????
 * @deprecated ????????? api ???????????????????????????????????????????????????????????? useIntl ??? injectIntl
 * @param descriptor { id : string, defaultMessage : string }
 * @param values { [key:string] : string }
 * @returns string
 */
export const formatMessage: IntlShape['formatMessage'] = (
  descriptor: MessageDescriptor,
  values: any,
) => {
  if (firstWaring) {
    warning(
      false,
      `Using this API will cause automatic refresh when switching languages, please use useIntl or injectIntl.

????????? api ???????????????????????????????????????????????????????????? useIntl ??? injectIntl???

http://j.mp/37Fkd5Q
      `,
    );
    firstWaring = false;
  }
  return g_intl.formatMessage(descriptor, values);
};

/**
 * ??????????????????
 * @returns string[]
 */
export const getAllLocales = () => Object.keys(localeInfo);
