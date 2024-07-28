"use client";
function DeleteButton({ id, deleteAction }: { id: string; deleteAction: (id: string) => void }) {
  const deleteActionWithId = deleteAction.bind(null, id);

  return (
    <form action={deleteActionWithId}>
      <button className="text-red-500 hover:underline" type="submit">
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
