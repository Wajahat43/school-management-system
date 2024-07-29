import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ConfirmDialog({
  isOpen,
  setOpen,
  onContinue,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  onContinue: () => void;
}) {
  return (
    <AlertDialog open={isOpen} onOpenChange={setOpen}>
      <AlertDialogContent className="dark:bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="dark:text-neutral-950">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action is permanent and cannot be reversed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
            onClick={() => onContinue()}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
