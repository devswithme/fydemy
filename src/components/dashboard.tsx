"use client";

import { AuthContext } from "@/components/provider/AuthProvider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTopUsersByXp, getUserSubmissionHistory } from "@/config/firebase";
import { navItems } from "@/constants/constant";
import { getCategoryCode, getStatusCode } from "@/lib/utils";
import { ChartNoAxesColumnIncreasing, Clock } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

export default function Dashboard() {
  const authUser = useContext(AuthContext);

  const [ranks, setRanks] = useState(null);
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const fetchRanks = async () => {
      const ranks = await getTopUsersByXp();
      const subs = await getUserSubmissionHistory(authUser?.user?.uid || "");
      // @ts-expect-error data is not typed
      setRanks(ranks);
      // @ts-expect-error data is not typed
      setSubs(subs);
    };
    fetchRanks();
  }, [authUser?.user?.uid]);

  console.log(subs);
  return (
    <div className="not-prose space-y-5">
      <h2 className="text-xl font-semibold">
        Welcome, {authUser?.user?.name}!
      </h2>
      <h4 className="font-medium">🕑 Your submission history</h4>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="text-xs sm:text-sm">
            <TableRow className="bg-muted">
              <TableHead className="pl-6">Category</TableHead>
              <TableHead>URL</TableHead>
              <TableHead className="pr-6">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs sm:text-sm">
            {subs?.map(
              (sub: { category: string; url: string; status: number }, i) => (
                <TableRow key={i}>
                  <TableCell className="pl-6 py-3">
                    {getCategoryCode(sub.category)}
                  </TableCell>
                  <TableCell>{sub.url}</TableCell>
                  <TableCell className="pr-6">
                    <span
                      className={`text-xs px-1 py-0.5 rounded font-medium ${
                        sub.status == 0
                          ? "bg-orange-50 text-orange-600 border border-orange-100"
                          : sub.status == 1
                          ? "bg-green-50 text-green-600 border border-green-100"
                          : sub.status == 2
                          ? "bg-red-50 text-red-600 border border-red-100"
                          : ""
                      }`}
                    >
                      {getStatusCode(sub.status.toString())}
                    </span>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
      <h4 className="font-medium">✨ Our top-3 highest rank users</h4>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="text-xs sm:text-sm">
            <TableRow className="bg-muted">
              <TableHead className="pl-6">Rank</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs sm:text-sm">
            {
              // @ts-expect-error data is not typed
              ranks?.map((user, i) => (
                <TableRow
                  key={user.uid}
                  className={
                    i == 0
                      ? "bg-yellow-50 text-black hover:dark:text-white"
                      : ""
                  }
                >
                  <TableCell className="pl-6 py-3">#{i + 1}</TableCell>
                  <TableCell>
                    {i == 0 && "🏆"} {user.username}
                  </TableCell>
                  <TableCell>{user.xp} XP</TableCell>
                </TableRow>
              ))
            }
            {/* <TableRow>
            <TableCell className="pl-6 py-3">{currentRank}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.xp} XP</TableCell>
          </TableRow> */}
          </TableBody>
        </Table>
      </div>
      {/* 
      <h4>⚡️ Fitur baru (Premium): XP</h4>
      <ul className="list-decimal marker:text-black">
        <li>Selesaikan Quiz dan submission project untuk mendapatkan XP</li>
        <li>
          Bersaing jumlah XP antar user lain untuk mendapat peringkat tertinggi
        </li>
        <li>Dapatkan sertifikat penghargaan kelulusan dan/atau XP!</li>
      </ul>

      <h4>❓ Fitur (All): Quiz</h4>
      <ul className="list-decimal marker:text-black">
        <li>Ada quiz di setiap modulnya, pastikan di jawab dengan benar</li>
        <li>
          Jawaban akan dicek otomatis, anda dapat mengetahui jawaban yang salah
          setelah submit untuk menambah pemahaman
        </li>
      </ul> */}

      <h4 className="font-medium">📖 Available courses</h4>
      <div className="grid grid-cols-2 gap-4">
        {navItems.map((item) => (
          <div
            key={item.name}
            className={`border p-6 space-y-3 rounded-lg bg-sidebar ${
              !item.premium ? "border-green-500" : ""
            }`}
          >
            <h4 className="font-medium flex items-center">
              {!item.premium ? (
                <span className="mr-3 text-xs font-medium bg-green-50 text-green-500 border rounded border-green-100 px-1.5 py-0.5">
                  Free
                </span>
              ) : (
                <span className="mr-3 text-xs font-medium bg-orange-50 text-orange-500 border rounded border-orange-100 px-1.5 py-0.5">
                  Premium
                </span>
              )}
              {item.name}
            </h4>
            <div className="flex items-center gap-x-3">
              <span className="text-xs flex items-center gap-x-1">
                <ChartNoAxesColumnIncreasing className="w-4 h-4" />
                {item.level}
              </span>
              <span className="text-xs flex items-center gap-x-1">
                <Clock className="w-4 h-4" />
                {item.duration >= 60
                  ? item.duration / 60 + " h"
                  : item.duration + " m"}
              </span>
            </div>
            <ul className="text-sm space-y-2 text-muted-foreground">
              {item.items.map((subitem) => (
                <li key={subitem.title}>
                  <Link
                    href={subitem.url}
                    className="hover:underline hover:text-foreground"
                  >
                    {subitem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
