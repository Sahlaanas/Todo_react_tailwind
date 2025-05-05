import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Modal = ({addTodo}) => {
    const [date, setDate] = useState(new Date());
    const [task, setTask] = useState('');
    const [type, setType] = useState('');
    const [todos, setTodos] = useState([]);

    
    const handleSubmit = () => {
        const newTodo = {
            task: task,
            type: type,
            date: date,
            isCompleted: false,
            id: Date.now()
        };
        
        // Call the parent component's function to add the todo
        addTodo(newTodo);

        // Reset form fields
        setTask('');
        setDate(new Date());
        setType('');
        
        // Close the dialog after adding the task
        setOpen(false);
    }
    
    const [open, setOpen] = useState(false);

    console.log(date, task, type,"===========", todos)
  return (
    <div className="p-7 relative">
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="absolute right-7 top-4 bg-violet-600 hover:bg-violet-200 text-white"
          variant="outline"
        >
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Tasks</DialogTitle>
          <DialogDescription>
            Organize your tasks to organize your life.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task
            </Label>
            <Input onChange={(e) => setTask(e.target.value)} value={task} id="name" placeholder="Enter your task" className="col-span-3 w-[390px]"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Type
            </Label>
            <Select onValueChange={setType} value={type}>
              <SelectTrigger className="w-[390px]">
                <SelectValue  placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent >
                <SelectGroup >
                  {/* <SelectLabel>Fruits</SelectLabel> */}
                  <SelectItem value="work">Work </SelectItem>
                  <SelectItem value="learning">Learning</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[390px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4"/>
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
  );
};

export default Modal;
