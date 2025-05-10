"use client";

import { createTransaction } from "@/actions/payment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ArrowUpRight,
  CreditCard,
  History,
  Sparkle,
  Sparkles,
} from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { AuthContext } from "./provider/AuthProvider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";
import { redirect } from "next/navigation";
import { addInvoice, auth, getUserInvoices } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Link from "next/link";

const Pay = ({
  channels,
}: {
  channels: [{ code: string; name: string; group: string; icon_url: string }];
}) => {
  const userAuth = useContext(AuthContext);
  const [pkg, setPkg] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [canPay, setCanPay] = useState(false);

  const isEWallet = code.split("&")[1] === "E-Wallet";

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const invs = await getUserInvoices();
      setInvoices(invs?.invs);
      setCanPay(invs!.canPay);
    }
  });

  async function submitTransaction() {
    if (!pkg || !code || (isEWallet && !phone)) {
      toast("Pastikan semua field terisi");
      return;
    }

    if (isEWallet && !/^628[1-9][0-9]{7,11}$/.test(phone)) {
      toast("Nomor HP tidak valid. Gunakan format seperti 6281234567890");
      return;
    }

    const res = await createTransaction({
      form: {
        pkg,
        code: code.split("&")[0],
        phone,
      },
      user: {
        name: userAuth?.user?.name || "",
        email: userAuth?.user?.email || "",
      },
    });

    await addInvoice(`${res.reference}*${pkg}`);

    return redirect(res.checkout_url);
  }

  const handleCheckout = async () => {
    if (!pkg || !code) {
      toast("Pilih paket dan metode pembayaran terlebih dahulu");
      return;
    }

    if (isEWallet) {
      setIsDialogOpen(true);
    } else {
      await submitTransaction();
    }
  };

  return (
    <div className="not-prose space-y-5">
      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={!canPay}>
            <CreditCard />
            Create a payment
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade to Pro</DialogTitle>
            <DialogDescription>Isi detail pembayaran berikut</DialogDescription>
          </DialogHeader>
          {/* Pilih Paket */}
          <div className="space-y-2">
            <Label htmlFor="pkg">
              <span className="font-mono text-xs">[1]</span> Select package
            </Label>
            <RadioGroup
              className="grid grid-cols-1 gap-4"
              name="pkg"
              onValueChange={setPkg}
            >
              <div className="flex space-x-3 border p-4 rounded-lg bg-muted">
                <RadioGroupItem value="1m" id="1m" />
                <Label htmlFor="1m" className="leading-normal">
                  <Sparkle className="mb-2 w-4 h-4 fill-purple-300" />
                  Academy Premium - 1 Month
                  <br />
                  <span className="font-semibold">200K</span>
                </Label>
              </div>
              <div className="flex space-x-3 border p-4 rounded-lg bg-muted">
                <RadioGroupItem value="2m" id="2m" />
                <Label htmlFor="2m" className="leading-normal">
                  <Sparkles className="mb-2 w-4 h-4 fill-yellow-300" />
                  Academy Premium - 2 Month
                  <br />
                  <span className="font-semibold">
                    <span className="line-through text-muted-foreground">
                      400K
                    </span>{" "}
                    &rarr; 350K
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Pilih Metode Pembayaran */}
          <div className="space-y-2">
            <Label htmlFor="code">
              <span className="font-mono text-xs">[2]</span> Payment method
            </Label>
            <RadioGroup
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              name="code"
              onValueChange={setCode}
            >
              {channels.map((channel) => (
                <div
                  className="flex items-center space-x-3 border p-4 rounded-lg"
                  key={channel.code}
                >
                  <RadioGroupItem
                    value={`${channel.code}&${channel.group}`}
                    id={channel.code}
                  />

                  <Label htmlFor={channel.code} className="space-y-2">
                    {" "}
                    <Image
                      src={channel.icon_url}
                      alt={channel.name}
                      width={60}
                      height={60}
                    />
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Tombol Checkout */}
          <DialogFooter>
            <Button onClick={handleCheckout}>
              Checkout <ArrowUpRight />
            </Button>
          </DialogFooter>

          {/* Dialog untuk E-Wallet */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await submitTransaction();
                  setIsDialogOpen(false);
                }}
                className="space-y-4"
              >
                <DialogHeader>
                  <DialogTitle>Data Tambahan</DialogTitle>
                  <DialogDescription>
                    Karena kamu memilih metode <b>E-Wallet</b>, silakan masukkan
                    nomor HP kamu.
                  </DialogDescription>
                </DialogHeader>
                <Input
                  type="tel"
                  placeholder="Masukkan nomor HP"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <DialogFooter>
                  <Button type="submit">Lanjutkan</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </DialogContent>
      </Dialog>
      <h1 className="font-medium">💳 Transaction history</h1>
      {invoices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {invoices.map((invoice: { ref: string; paid_at: string }) => (
            <div key={invoice.ref} className="border p-4 rounded-lg">
              <h1 className="font-medium">{invoice.ref}</h1>
              <div className="flex justify-between items-center">
                <Link
                  href={`https://tripay.co.id/checkout/${invoice.ref}`}
                  className="text-sm flex gap-x-1 items-center font-medium text-muted-foreground"
                >
                  Detail <ArrowUpRight className="w-4 h-4" />
                </Link>
                <span
                  className={`text-xs font-medium border rounded px-1 py-0.5 ${
                    invoice.paid_at == "0"
                      ? "bg-orange-50 border-orange-100 text-orange-600"
                      : "bg-green-50 border-green-100 text-green-600"
                  }`}
                >
                  {invoice.paid_at == "0" ? "UNPAID" : "PAID"}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-muted border p-6 rounded-lg">
          <History className="w-8 h-8 p-1.5 border border-green-100 rounded bg-green-50 text-green-600 mb-2" />
          <h1 className="font-medium">Belum ada transaksi</h1>
          <p className="text-muted-foreground text-sm">
            Silahkan klik <b>Create a payment</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Pay;
