

import Plus from "@/components/icons/Plus";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

import { Textarea } from "../../ui/textarea";



const AddNotes = () => {
  
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">
            <Plus />
            New Notes
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Notes</DialogTitle>
            <DialogDescription>
              Enter new notes details here.
            </DialogDescription>
          </DialogHeader>
  
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="name">Title</Label>
              <Input
                id="name"
                placeholder="Notes name"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-4">
              <Label htmlFor="description">Tags</Label>
              <Textarea
                id="tags"
                placeholder="Write some tags about the notes"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-4">
              <Label htmlFor="description">Link</Label>
              <Input
                id="link"
                placeholder="Notes link"
                className="col-span-3"
              />
            </div>
          </div>
  
          <DialogFooter>
            <Button type="submit">Save Notes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
  
};

export default AddNotes;
