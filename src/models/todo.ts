class Todo {
  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }

  id: string;
  text: string;
}
export default Todo;
