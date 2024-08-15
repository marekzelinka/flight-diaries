import diaries from '../../data/entries';
import type {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveDiaryEntry,
} from '../types';

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

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry: DiaryEntry = {
    id: Math.max(...diaries.map((diary) => diary.id)) + 1,
    ...entry,
  };

  diaries.push(newDiaryEntry);

  return newDiaryEntry;
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
