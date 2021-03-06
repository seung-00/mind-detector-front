import * as actions from './actions';

export interface PrivacyForm {
  age: string;
  sex: string;
  job: string;
  province: string;
  city: string;
}
export interface AnswerForm {
  pageKey: string;
  answer: string;
}

export interface TestForm {
  privacy: {
    age: string;
    sex: string;
    job: string;
    province: string;
    city: string;
  };
  answers: {
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer5: string;
    answer6: string;
    answer7: string;
    answer8: string;
    answer9: string;
    answer10: string;
  };
}

export type FormAction =
  | ReturnType<typeof actions.initializeForm>
  | ReturnType<typeof actions.savePrivacy>
  | ReturnType<typeof actions.saveAnswer>;
