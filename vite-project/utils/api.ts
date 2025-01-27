export interface TodoResponse {
  title: string;
  completed: boolean;
  id: number;
}

export const submitData = async (task: string): Promise<TodoResponse> => {
  const response = await fetch("https://easydev.club/api/v2/todos", {
    method: "POST",
    body: JSON.stringify({ title: task }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

