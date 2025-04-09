"use client";

// import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowUpRight,
  Book,
  Check,
  // Code,
  CodeXml,
  Frame,
  LogIn,
  MessageCircle,
  PanelsTopLeft,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import Autoplay from "embla-carousel-autoplay";
import { getTopUsersByXp } from "@/config/firebase";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Home = () => {
  const [ranks, setRanks] = useState(null);

  useEffect(() => {
    const fetchRanks = async () => {
      const ranks = await getTopUsersByXp();
      // @ts-expect-error data is not typed
      setRanks(ranks);
    };
    fetchRanks();
  }, []);

  return (
    <>
      {/* <div className='fixed inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]' /> */}
      <Link
        href="https://chat.whatsapp.com/JB4Co43TxUdCBmTQ5BjnHN"
        target="_blank"
        className={buttonVariants({
          className:
            "fixed bottom-8 right-8 z-50 !bg-green-700 border-black text-white",
          variant: "menu",
        })}
      >
        <MessageCircle /> Contact us
      </Link>
      <nav className="fixed top-0 left-0 w-full backdrop-blur-lg z-20">
        <div className="max-w-4xl mx-auto py-6 px-8 lg:px-0 flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={90} height={90} />
          </Link>
          <Link
            href="/login"
            className={buttonVariants({
              variant: "menu",
              className: "!bg-blue-700 text-white border-black shadow-lg",
            })}
          >
            <LogIn /> Login
          </Link>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto pt-32 pb-8 px-8 lg:px-0 space-y-16 md:space-y-32">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-balance">
                <span className="bg-gradient-to-tr from-blue-700 to-indigo-700 text-transparent bg-clip-text">
                  Transform*
                </span>{" "}
                your curiosity into a knowledge.
              </h1>
              <p className="text-sm sm:text-base max-w-md text-muted-foreground">
                Learn these topics in just one month with our comprehensive and
                up-to-date modules.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
              <Button
                variant="menu"
                className="bg-blue-700 text-white border-black"
                disabled
              >
                <Frame />
                UI/UX Design
              </Button>

              <Button variant="menu" disabled>
                <PanelsTopLeft />
                Frontend
              </Button>
              <Button variant="menu" disabled>
                <Workflow />
                Backend
              </Button>
              <Button variant="menu" disabled>
                <CodeXml /> Full-stack
              </Button>
            </div>
          </div>
          <div className="relative border border-black w-full aspect-square bg-neutral-200 rounded-xl overflow-hidden">
            {/* <Image
							src='/home/2.png'
							alt='2'
							fill
						/> */}
            <Image src="/home/1.png" alt="1" fill />
            <Link
              href="/register"
              className={buttonVariants({
                variant: "menu",
                className:
                  "absolute bottom-8 right-8 shadow-xl !bg-blue-700 text-white border-black -rotate-1",
              })}
            >
              Register Now <ArrowUpRight />
            </Link>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-8 md:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-balance">
                Gain{" "}
                <span className="bg-gradient-to-tr from-orange-600 to-yellow-600 text-transparent bg-clip-text">
                  XP*
                </span>{" "}
                and compete against other users!
              </h1>
              <p className="text-sm sm:text-base max-w-md text-muted-foreground">
                Rank first to maximize benefits! Reviewed monthly, with a
                certificate and more!
              </p>
            </div>
          </div>
          <div className="w-full border border-black rounded-xl overflow-hidden">
            <Table className="bg-white">
              <TableHeader className="bg-neutral-100">
                <TableRow>
                  <TableHead className="pl-6">Rank</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Pts</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs sm:text-sm">
                {
                  // @ts-expect-error data is not typed
                  ranks?.map((user, i) => (
                    <TableRow key={user.uid}>
                      <TableCell className="pl-6 py-3">{`#${i + 1}`}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.xp} XP</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-10 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-balance">
                Pricing
              </h1>
              <p className="text-sm sm:text-base max-w-md text-muted-foreground">
                Register to enroll the premium package.
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-blue-700 bg-neutral-50 space-y-2 shadow-lg shadow-blue-700/30">
              <div className="flex gap-x-4 items-center">
                <Book
                  className="w-8 h-8 p-2 bg-blue-50 fill-blue-400"
                  strokeWidth={3}
                />
                <div className="-space-y-1">
                  <h1 className="text-base sm:text-lg font-semibold flex gap-x-3 items-center">
                    Basic
                  </h1>
                  <h1 className="text-sm sm:text-base">Free</h1>
                </div>
              </div>
              <ul className="space-y-1 text-sm sm:text-base">
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <div className="flex-1">Unlock UI/UX Design module only</div>
                </li>
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Quiz feature
                </li>
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  1x submission checking
                </li>
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Discussion group
                </li>
                <li className="flex items-center gap-x-2">
                  <X className="w-4 h-4 text-red-600" />
                  Private mentoring
                </li>
                <li className="flex items-center gap-x-2">
                  <X className="w-4 h-4 text-red-600" />
                  Certificate
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-2 space-y-2 border-yellow-700 shadow-lg shadow-yellow-700/30">
              <div className="flex items-center gap-x-4">
                <Sparkles className="p-2 bg-yellow-50 fill-yellow-500 w-8 h-8 rounded-md" />
                <div className="-space-y-1">
                  <h1 className="text-base sm:text-lg font-semibold">
                    Premium
                  </h1>
                  <h1 className="text-sm sm:text-base">
                    <span className="line-through text-muted-foreground">
                      400K/mo
                    </span>{" "}
                    200K/mo
                  </h1>
                </div>
              </div>
              <ul className="space-y-1 text-sm sm:text-base">
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Unlock all module
                </li>
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Quiz + XP feature
                </li>
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <div className="flex-1">Unlimited submission checking</div>
                </li>
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Discussion group
                </li>
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Private mentoring
                </li>
                <li className="flex items-center gap-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Certificate
                </li>
              </ul>
            </div>

            {/* <Table>
							<TableHeader className='bg-neutral-100'>
								<TableRow>
									<TableHead className='pl-6'>Package</TableHead>
									<TableHead>Module</TableHead>
									<TableHead>Feature</TableHead>
									<TableHead>Submission</TableHead>
									<TableHead>Community</TableHead>
									<TableHead>Mentoring</TableHead>
									<TableHead>Certificate</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className='pl-6 py-4 font-medium'>
										Basic
									</TableCell>
									<TableCell>UI/UX design</TableCell>
									<TableCell>Quiz</TableCell>
									<TableCell>1x</TableCell>
									<TableCell>
										<Check className='w-4 h-4' />
									</TableCell>
									<TableCell>
										<X className='w-4 h-4' />
									</TableCell>
									<TableCell>
										<X className='w-4 h-4' />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className='pl-6 py-4 font-medium'>
										Premium
									</TableCell>
									<TableCell>All</TableCell>
									<TableCell>Quiz + XP</TableCell>
									<TableCell>Unlimited</TableCell>
									<TableCell>
										<Check className='w-4 h-4' />
									</TableCell>
									<TableCell>
										<Check className='w-4 h-4' />
									</TableCell>
									<TableCell>
										<Check className='w-4 h-4' />
									</TableCell>
								</TableRow>
							</TableBody>
						</Table> */}
          </div>
        </section>
        {/* <section className="grid grid-cols-1 gap-10 items-center">
          <h1 className="text-3xl sm:text-4xl text-center font-semibold tracking-tighter text-balance">
            What our users say
          </h1>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="-ml-6">
              <CarouselItem className="md:basis-1/2 pl-6">
                <div className="border border-black p-6 rounded-xl space-y-4 bg-white">
                  <div className="flex gap-x-4 items-center ">
                    <Avatar className="w-8 h-8 ring-2 ring-blue-700 ring-offset-2">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="leading-none">
                      <h1 className="font-semibold">Alexander Reedstone</h1>
                      <span className="text-xs">120 XP</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    This program exceeded my expectations! The modules were
                    clear, up-to-date, and easy to follow. I feel more confident
                    in my skills now!
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 pl-6">
                <div className="border border-black p-6 rounded-xl space-y-4 bg-white">
                  <div className="flex gap-x-4 items-center ">
                    <Avatar className="w-8 h-8 ring-2 ring-blue-700 ring-offset-2">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="leading-none">
                      <h1 className="font-semibold">Sophia Larkins</h1>
                      <span className="text-xs">90 XP</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    I loved the structured learning approach. The monthly
                    reviews kept me motivated, and the certificate added value
                    to my portfolio!
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 pl-6">
                <div className="border border-black p-6 rounded-xl space-y-4 bg-white">
                  <div className="flex gap-x-4 items-center ">
                    <Avatar className="w-8 h-8 ring-2 ring-blue-700 ring-offset-2">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="leading-none">
                      <h1 className="font-semibold">Jonathan Wexley</h1>
                      <span className="text-xs">100 XP</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Highly recommended! The content is top-notch, and the
                    benefits of ranking first truly made a difference for me.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel> */}
        <section className="grid grid-cols-1 gap-10 items-center">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-balance">
              FAQs
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Frequently asked questions about the program.
            </p>
          </div>

          <div className="space-y-3">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Bagaimana cara melakukan pembayaran untuk package premium?
                </AccordionTrigger>
                <AccordionContent>
                  Pembayaran dapat dilakukan melalui{" "}
                  <Link
                    href="https://plans.fysite.id"
                    target="_blank"
                    className="underline text-blue-700 font-semibold"
                  >
                    plans.fysite.id
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Bagaimana cara membuka fitur XP dan bersaing?
                </AccordionTrigger>
                <AccordionContent>
                  Fitur XP dan bersaing dapat diakses{" "}
                  <b>setelah melakukan pembayaran</b> package premium.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Apakah saya akan mendapat sertifikat bila telah menyelesaikan
                  modul-modul ini?
                </AccordionTrigger>
                <AccordionContent>
                  Iya, dengan syarat anda menyelesaikan semua modul, quiz,
                  submission dengan <b>nilai (XP) yang memuaskan</b>.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Berapa kali saya akan mendapatkan jadwal untuk private
                  mentoring?
                </AccordionTrigger>
                <AccordionContent>
                  Per-bulannya anda akan mendapatkan <b>4x private meeting</b>{" "}
                  bersama mentor dan teman sekawan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <footer className="bg-blue-700 rounded-xl border-2 w-full h-fit p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-black text-white">
          <div className="space-y-2">
            <Link href="/">
              <Image src="/logo_dark.svg" alt="logo" width={90} height={90} />
            </Link>
            <p className="text-xs sm:text-sm">#fromideatosite</p>
          </div>
          <div className="space-y-3">
            <h1 className="font-medium text-base sm:text-lg leading-none">
              Quick Links
            </h1>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="font-medium text-base sm:text-lg leading-none">
              Others
            </h1>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="https://fysite.id">Agency</Link>
              </li>
              <li>
                <Link href="https://instagram.com/fysite.id">Instagram</Link>
              </li>
              <li>
                <Link href="https://tiktok.com/@fysite.id">Tiktok</Link>
              </li>
              <li>
                <Link href="mailto:cs@fysite.id">Email</Link>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
