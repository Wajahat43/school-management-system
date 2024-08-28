import Grades from "./(grades)/grades/page";

export default function Home() {
  return (
    <div className="dark:bg-neutral-900">
      <h1 className="bold text-center text-2xl">
        Welcome to School management system
      </h1>
      <Grades />
    </div>
  );
}
