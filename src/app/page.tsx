import Grades from "./grades/page";

export default function Home() {
  return (
    <div className="dark:bg-neutral-900">
      <h1 className="text-center text-2xl bold">Welcome to School management system</h1>
      <Grades />
    </div>
  );
}
