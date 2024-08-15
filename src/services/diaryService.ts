import diaries from '../../data/entries';
import type { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(
    ({
      comment: _comment,
      ...nonSensitiveDiaryEntry
    }): NonSensitiveDiaryEntry => nonSensitiveDiaryEntry,
  );
};

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary,
};
