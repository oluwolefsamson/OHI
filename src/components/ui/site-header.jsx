import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Separator } from "../../components/ui/separator";
import { SidebarTrigger } from "../../components/ui/sidebar";
import { Input } from "../../components/ui/input";
import { House, Search, User, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import profileImage from "../../assets/images/ProfileSettingImg/Profile-image.png";
import { useAdminAuth } from "../../context/AdminAuthContext";

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAdminAuth();
  const displayName = user?.name || "OHI Admin";

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 sticky top-0 z-40 flex h-16 shrink-0 items-center border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0f4c81]/25 to-transparent" />

      <Dialog
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search OHI content..."
                  className="rounded-full border-slate-200 bg-slate-50 pl-9 focus-visible:ring-2 focus-visible:ring-[#0f4c81]/20 focus-visible:ring-offset-0"
                  autoFocus
                />
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <div className="relative z-10 flex w-full items-center justify-between gap-3 px-4 sm:px-5 lg:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <SidebarTrigger className="h-9 w-9 rounded-full p-1.5 hover:bg-slate-100" />
          <Separator orientation="vertical" className="h-6 w-[1px] bg-slate-200" />
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              OHI workspace
            </p>
            <h1 className="truncate text-sm font-semibold text-slate-800 md:text-lg">
              Welcome back, {displayName}
            </h1>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search OHI content..."
              className="rounded-full border-slate-200/80 bg-slate-50/90 pl-9 focus-visible:ring-2 focus-visible:ring-[#0f4c81]/20 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="rounded-full p-2 hover:bg-slate-100 md:hidden"
          >
            <Search className="h-5 w-5 text-slate-600" />
          </button>

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="relative rounded-full p-2 transition-colors hover:bg-[#0f4c81]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full px-3 py-2 transition-colors hover:bg-slate-100 sm:px-4">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="h-8 w-8 rounded-full border border-slate-200 object-cover bg-slate-200"
                  />
                  <span className="hidden text-sm font-semibold text-slate-700 sm:inline md:text-base">
                    {displayName}
                  </span>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-48 rounded-2xl border border-slate-200 bg-white shadow-lg">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => navigate("/dashboard/profile-setting")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <House className="mr-2 h-4 w-4" />
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    logout();
                    navigate("/admin/login", { replace: true });
                  }}
                >
                  <X className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
