interface Todo {
  id: string;
  title: string;
}

type Status = "pending" | "start" | "continue" | "completed";

interface Todo extends DateInfo {
  status: Status;
}

// type Status = "Testing";

interface DateInfo {
  startDate: Date | null;
  endDate: Date | null;
}

let todos: Todo[] = [
  {
    id: "1",
    title: "Learn TypeScript",
    status: "continue",
    startDate: new Date(),
    endDate: new Date("28 02 2026"),
  },
  {
    id: "2",
    title: "Build a project",
    status: "pending",
    startDate: null,
    endDate: null,
  },
];
