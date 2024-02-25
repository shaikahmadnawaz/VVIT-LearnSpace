import DataTable from "@/components/ui/data-table";
import { UserNoteColumns } from "./UserNoteColumns";
import { userNotesData } from "@/data/notes";
import AddNotes from "./AddNotes";

const UserNotesTable = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notes</h2>
          <p className="text-muted-foreground">Here s the list of notes!</p>
        </div>
        <AddNotes/>
      </div>
      <DataTable data={userNotesData} columns={UserNoteColumns} />
    </div>
  );
};

export default UserNotesTable;
