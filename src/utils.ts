import { NewDiaryEntry, Visibility, Weather } from './types';

const toNewDiaryEntry = (unknown: unknown): NewDiaryEntry => {
  if (!unknown || typeof unknown !== 'object') {
    throw new Error(`Incorrect or missing data: ${JSON.stringify(unknown)}`);
  }

  if (
    'weather' in unknown &&
    'visibility' in unknown &&
    'date' in unknown &&
    'comment' in unknown
  ) {
    const newEntry: NewDiaryEntry = {
      weather: parseWeather(unknown.weather),
      visibility: parseVisibility(unknown.visibility),
      date: parseDate(unknown.date),
      comment: parseComment(unknown.comment),
    };

    return newEntry;
  }

  throw new Error(`Incorrect or missing data: ${JSON.stringify(unknown)}`);
};

export default toNewDiaryEntry;

const parseWeather = (weather: unknown): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error(`Incorrect or missing weather: ${JSON.stringify(weather)}`);
  }

  return weather;
};

const isWeather = (string: string): string is Weather => {
  return Object.values(Weather).map(String).includes(string);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error(
      `Incorrect or missing visibility: ${JSON.stringify(visibility)}`,
    );
  }

  return visibility;
};

const isVisibility = (string: string): string is Visibility => {
  return Object.values(Visibility).map(String).includes(string);
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${JSON.stringify(date)}`);
  }

  return date;
};

const parseComment = (comment: unknown): string => {
  if (!isString(comment)) {
    throw new Error(`Incorrect or missing comment: ${JSON.stringify(comment)}`);
  }

  return comment;
};

const isDate = (string: string): boolean => {
  return Boolean(Date.parse(string));
};

const isString = (unknown: unknown): unknown is string => {
  return typeof unknown === 'string' || unknown instanceof String;
};
