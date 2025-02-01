export interface Task {
  title: string;
  completed: boolean;
  id: number;
}

export interface TaskDelete {
  id: number;
}


export const submitData = async (task: string): Promise<Task> => {
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


export const editedData = async (task: string, id: number): Promise<Task> => {
  const response = await fetch(`https://easydev.club/api/v2/todos/${id}`, {
    method: "PUT",
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

export const requestDeleteTask = async (id: number) => {
  const response = await fetch(`https://easydev.club/api/v2/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }
};