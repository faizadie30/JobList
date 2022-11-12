import _ from 'lodash';
import moment from 'moment';

/* capitalize first text */
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/* capitalize first text with multiple paragraph */
export const capitalizeFirstMultiParagraph = (string) => {
  const splitUname = string.split(' ');
  let result = '';
  splitUname.map((value) => {
    result = result.concat(` ${capitalizeFirstLetter(value)}`);
  });

  return result;
};

/* filter chat active on client chat */
export const clientActive = (listChat, chatId) => {
  return listChat.filter((el) => {
    return el.chat_id !== chatId;
  });
};

/* create date */
export const createDate = (request = false) => {
  switch (request) {
    case 'unix_timestamp':
      return moment().format('X');
    case 'time_no_seconds':
      return moment.format('HH:mm');
    case 'full_time':
      return moment().format('HH:mm:ss');
    case 'hours':
      return moment().format('HH');
    case 'no_time':
      return moment().format('YYYY-MM-DD');
    case 'normal_year':
      return moment().format('YYYY');
    case '2d_year':
      return moment().format('YY');
    case 'normal_month':
      return moment().format('MM');
    case 'sort_name_month':
      return moment().format('MMM');
    case 'long_name_month':
      return moment().format('MMMM');
    case 'normal_day':
      return moment().format('DD');
    case 'name_day':
      return moment().format('dddd');
    case 'long_time_seconds':
      return moment().format('LTS');
    case 'long_date_name_time_seconds':
      return moment().format('LLLL');
    default:
      return moment().format('YYYY-MM-DD HH:mm:ss');
  }
};

/* date diff */
export const dateDiff = (param_start_date = false, param_end_date = false) => {
  let now = createDate();

  let start_date = !Boolean(param_start_date)
    ? now
    : moment(param_start_date).format('YYYY-MM-DD HH:mm:ss');

  let end_date = !Boolean(param_end_date)
    ? now
    : moment(param_end_date).format('YYYY-MM-DD HH:mm:ss');

  let diffDate = moment.duration(moment().diff(start_date, end_date));

  return {
    yearsDiff: diffDate.years(),
    monthsDiff: diffDate.months(),
    weeksDiff: diffDate.weeks(),
    daysDiff: diffDate.days(),
    hoursDiff: diffDate.hours(),
    minutesDiff: diffDate.minutes(),
  };
};

/* change format date */
export const changeFormatDate = (date, request = false) => {
  switch (request) {
    case 'unix_timestamp':
      return moment(date).format('X');
    case 'time_no_seconds':
      return moment.format('HH:mm');
    case 'full_time':
      return moment(date).format('HH:mm:ss');
    case 'hours':
      return moment(date).format('HH');
    case 'no_time':
      return moment(date).format('YYYY-MM-DD');
    case 'normal_year':
      return moment(date).format('YYYY');
    case '2d_year':
      return moment(date).format('YY');
    case 'normal_month':
      return moment(date).format('MM');
    case 'sort_name_month':
      return moment(date).format('MMM');
    case 'long_name_month':
      return moment(date).format('MMMM');
    case 'normal_day':
      return moment(date).format('DD');
    case 'name_day':
      return moment(date).format('dddd');
    case 'date_long_time_no_seconds':
      return moment(date).format('DD MMM YYYY LT');
    case 'time_24h_no_seconds':
      return moment(date).format('HH:mm');
    case 'long_time_seconds':
      return moment(date).format('LTS');
    case 'long_date_name_time_seconds':
      return moment(date).format('LLLL');
    case 'two_digit_date_with_slash':
      return moment(date).format('DD/MM/YY');
    case 'two_digit_date_with_strip':
      return moment(date).format('DD-MM-YY');
    case 'to_iso':
      return moment(date).toDate();
    default:
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }
};

/* format customize date reference from social media */
export const parseDateSocial = (date, request = false) => {
  if (!request) {
    return moment(date).fromNow();
  }

  const compareDate = dateDiff(date);

  if (compareDate.hoursDiff < 21) {
    if (compareDate.daysDiff > 0) {
      return changeFormatDate(date, 'date_long_time_no_seconds');
    }

    if (compareDate.hoursDiff < 2) {
      return moment(date).fromNow();
    }

    return changeFormatDate(date, 'date_long_time_no_seconds');
  }

  return changeFormatDate(date, 'date_long_time_no_seconds');
};

/* parse date from now reference whatsapp v 2.22.27.4 */
export const parseDateNowVWa = (date) => {
  const compareDate = dateDiff(date);

  if (compareDate.daysDiff > 0) {
    return changeFormatDate(date, 'date_long_time_no_seconds');
  } else {
    return changeFormatDate(date, 'time_24h_no_seconds');
  }
};

/* generate random string */
export const randomString = (length, type = 'default') => {
  let result = '';
  let characters = '';

  if (type === 'number') {
    characters = '0123456789';
  } else if (type === 'alphabet') {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  } else if (type === 'random') {
    characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@*!&_';
  } else {
    characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }

  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

/* change numbering counter from symbol non currency*/
export const changeNumbering = (number, request) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];

  const regexVal = /\.0+$|(\.[0-9]*[1-9])0+$/;

  let item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return number >= item.value;
    });

  return item
    ? (number / item.value).toFixed(request).replace(regexVal, '$1') +
        item.symbol
    : '0';
};

/* limit text */
export const limitText = (value, startLimit = 0, endLimit) => {
  const valLength = value.length;

  if (valLength > endLimit) {
    return `${value.substring(startLimit, endLimit)}...`;
  }

  return value.substring(startLimit, endLimit);
};

/* is empty object */
export const isEmptyObj = (value) => {
  const result =
    value &&
    Object.keys(value).length === 0 &&
    Object.getPrototypeOf(value) === Object.prototype;
  return result;
};

export const urlGenerator = (params, path) => {
  let a = 0;
  let url = path;
  for (const property in params) {
    if (a++ < 1) {
      url = `${url}?${property}=${params[property]}`;
    } else {
      url = `${url}&${property}=${params[property]}`;
    }
  }
  return url;
};
