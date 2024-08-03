export type SurveyQuestionProps = {
  questionKey: string;
  no: number;
  text: string;
  isMultiple?: boolean | undefined;
  options: { value: string; text: string }[];
};

export const questions: SurveyQuestionProps[] = [
  {
    no: 1,
    questionKey: "1",
    text: "How often have you come across this product online?",
    options: [
      {
        value: "a",
        text: "Very often",
      },
      {
        value: "b",
        text: "Seldom",
      },
      {
        value: "c",
        text: "Not at all",
      },
    ],
  },
  {
    no: 2,
    questionKey: "2",
    text: "What is your favorite product within this industry?",
    options: [
      {
        value: "a",
        text: "Perfume",
      },
      {
        value: "b",
        text: "Bags",
      },
      {
        value: "c",
        text: "Shoes",
      },
    ],
  },
  {
    no: 3,
    questionKey: "3",
    text: "How likely are you to buy a product recommended online?",
    options: [
      {
        value: "a",
        text: "Very likely",
      },
      {
        value: "b",
        text: "Somewhat likely",
      },
      {
        value: "c",
        text: "Unlikely",
      },
    ],
  },
  {
    no: 4,
    questionKey: "4",
    text: "How likely are you to recommend a product to your online community?",
    options: [
      {
        value: "a",
        text: "Very likely",
      },
      {
        value: "b",
        text: "Somewhat likely",
      },
      {
        value: "c",
        text: "Unlikely",
      },
    ],
  },
  {
    no: 5,
    questionKey: "5",
    text: "To what extent does a brand’s social media presence influence your purchasing decision?",
    options: [
      {
        value: "a",
        text: "To a large extent",
      },
      {
        value: "b",
        text: "Seldom",
      },
      {
        value: "c",
        text: "Never",
      },
    ],
  },
  {
    no: 6,
    questionKey: "6",
    text: "What social media channels are you most active on? Choose as many as are applicable.",
    isMultiple: true,
    options: [
      {
        value: "a",
        text: "Outstagram",
      },
      {
        value: "b",
        text: "TokTok",
      },
      {
        value: "c",
        text: "XYandZ",
      },
    ],
  },
  {
    no: 7,
    questionKey: "7",
    text: "How many hours do you spend on social media every day?",
    options: [
      {
        value: "a",
        text: "1-3 hours",
      },
      {
        value: "b",
        text: "3-6 hours",
      },
      {
        value: "c",
        text: "More than 6 hours",
      },
    ],
  },
  {
    no: 8,
    questionKey: "8",
    text: "To what extent does social conversations influence your product choices?",
    options: [
      {
        value: "a",
        text: "To a large extent",
      },
      {
        value: "b",
        text: "Seldom",
      },
      {
        value: "c",
        text: "Never",
      },
    ],
  },
  {
    no: 9,
    questionKey: "9",
    text: "How old are you?",
    options: [
      {
        value: "a",
        text: "8-25",
      },
      {
        value: "b",
        text: "25-50",
      },
      {
        value: "c",
        text: "50 and above",
      },
    ],
  },
  {
    no: 10,
    questionKey: "10",
    text: "Kindly indicate your employment status?",
    options: [
      {
        value: "a",
        text: "Unemployed",
      },
      {
        value: "b",
        text: "Self-employed",
      },
      {
        value: "c",
        text: "Employed",
      },
    ],
  },
];
