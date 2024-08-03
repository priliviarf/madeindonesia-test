export type OptionProps = {
  text: string;
  value: string;
  questionKey: string;
  onChange: (e: string) => void;
};
export function Options({ text, value, onChange, questionKey }: OptionProps) {
  return (
    <div className="flex items-center gap-x-3">
      <input
        id={`${questionKey}${value}`}
        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary-hover"
        name={`${questionKey}`}
        onChange={(e) => onChange(e.target.value)}
        type="radio"
        value={`${value}`}
      />
      <label
        htmlFor={`${questionKey}${value}`}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {text}
      </label>
    </div>
  );
}
