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
import { getCategoryCode, getStatus } from "@/lib/utils";
import { sendMail } from "@/actions/mail";
import { useRouter } from "next/navigation";

const Submission = ({ id }: { id: string }) => {
  const [url, setUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [status, setStatus] = useState("");

  const [user, setUser] = useState({ email: "", name: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const status = await checkSubmissionStatus(id, user.uid);
        setIsDisplayed(true);
        console.log(status);
        setStatus(status);
        if (status === "0" || status === "1") setIsSubmitted(true);
        setUser({ email: user.email!, name: user.displayName! });
      }
    });
    return () => unsubscribe();
  }, [id, isOpen, url]);

  const router = useRouter();

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
                if (user.email && user.name)
                  await sendMail({
                    to: user.email,
                    subject: "🎓 Project Submission Received",
                    html: `
                      <div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; color: #000000; max-width: 600px; margin: auto; background: #f9f9f9; border-radius: 8px;">
                        <div style="background: #ffffff; padding: 20px 24px; padding-top: 28px; border-radius: 8px; border: 1px solid #ccc">
                          <!-- Logo -->
                          <div style="text-align: center; margin-bottom: 20px;">
                            <img src="https://edu.fysite.id/logo.svg" alt="Logo" style="height: 40px;" />
                          </div>
                  
                          <h2 style="color: #000000;">Hi ${user.name},</h2>
                          <p>Your project submission has been successfully received! 🎉</p>
                  
                          <table style="margin-top: 16px; border-collapse: collapse; width: 100%; color: #000000; font-size: 14px;">
                            <tr>
                              <td style="padding: 8px 0; vertical-align: top; width: 100px;"><strong>Course</strong></td>
                              <td style="padding: 8px 0;">${getCategoryCode(
                                id
                              )}</td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; vertical-align: top;"><strong>URL</strong></td>
                              <td style="padding: 8px 0;"><a href="${url}" style="color: #000000; text-decoration: underline;">${url}</a></td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; vertical-align: top;"><strong>Status</strong></td>
                              <td style="padding: 8px 0;">Processing</td>
                            </tr>
                          </table>

                  
                          <!-- Button -->
                          <div style="margin: 28px 0;">
                            <a href="https://edu.fysite.id/dashboard" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 12px 20px; border-radius: 6px; text-decoration: none;">
                              View Submission
                            </a>
                          </div>
                  
                          <p>We will notify you via email once the review is complete.</p>
                  
                          <p>Best regards,<br />Fydemy Team</p>
                  
                          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ccc;" />
                          <p style="font-size: 12px; color: #000000;">Note: This is an automated message, please do not reply.</p>
                        </div>
                      </div>
                    `,
                  });
                toast("Your submission has been sent!", {
                  description:
                    "We will notify you via email once the review is complete.",
                  action: {
                    label: "View",
                    onClick: () => {
                      router.push("/dashboard");
                    },
                  },
                });
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
