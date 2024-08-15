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

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id);
  return entry;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary,
  findById,
};
