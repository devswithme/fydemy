"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  auth,
  checkSubmissionStatus,
  updateSubmission,
} from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ArrowUpRight, Info, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { getStatus } from "@/lib/utils";

const Submission = ({ id }: { id: string }) => {
  const [url, setUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const status = await checkSubmissionStatus(id, user.uid);
        setIsDisplayed(true);
        setStatus(status);
        if (status === "0" || status === "1") setIsSubmitted(true);
      }
    });
    return () => unsubscribe();
  }, [id, isOpen, url]);

  return (
    <div className="space-y-5">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {isDisplayed && (
          <DialogTrigger asChild>
            <Button disabled={isSubmitted}>
              Upload task <Upload />
            </Button>
          </DialogTrigger>
        )}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submission</DialogTitle>
            <DialogDescription>
              Upload berkas ke dalam <b>Google Drive</b> lalu paste link publik
              disini.
            </DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Paste URL disini"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <DialogFooter className="gap-y-2">
            <DialogClose asChild>
              <Button variant="outline">Back</Button>
            </DialogClose>
            <Button
              disabled={url.length < 3}
              onClick={async () => {
                await updateSubmission(`${id}!${url}^0`);
                setIsOpen(false);
                toast("Your submission has been sent!");
              }}
            >
              Submit <ArrowUpRight />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {isDisplayed && isSubmitted && (
        <Alert>
          <Info className="w-4 h-4" />
          <AlertTitle>Submission status</AlertTitle>
          <AlertDescription>{getStatus(status)}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Submission;
