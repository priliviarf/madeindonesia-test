type BarProp = {
  status: "clear" | "active" | "inactive";
};

export function BarStatus({ status = "inactive" }: BarProp) {
  const bgColors = {
    clear: "bg-primary",
    active: "bg-primary-active",
    inactive: "bg-primary-disabled",
  };
  return <div className={`w-full h-1  ${bgColors[status]}`} />;
}
