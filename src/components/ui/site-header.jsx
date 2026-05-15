import React from "react";
import { useNavigate } from "react-router-dom";
import {
  House,
  Search,
  User,
  X,
  Bell,
} from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { SidebarTrigger } from "../../components/ui/sidebar";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import profileImage from "../../assets/images/ProfileSettingImg/Profile-image.png";
import { useAdminAuth } from "../../context/AdminAuthContext";

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAdminAuth();
  const displayName = user?.name || "OHI Admin";

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0f4c81]/25 to-transparent" />

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-2xl rounded-3xl border border-border bg-card p-4 shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>Search workspace</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search OHI content..."
                className="rounded-full border-border bg-muted pl-9 focus-visible:ring-2 focus-visible:ring-[#0f4c81]/20 focus-visible:ring-offset-0"
                autoFocus
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="relative z-10 flex w-full items-center justify-between gap-3 px-4 sm:px-5 lg:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <SidebarTrigger className="h-9 w-9 rounded-full p-1.5 hover:bg-muted" />
          <Separator orientation="vertical" className="h-6 w-px" />
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              OHI workspace
            </p>
            <h1 className="truncate text-sm font-semibold text-foreground md:text-lg">
              Welcome back, {displayName}
            </h1>
          </div>
        </div>

        <div className="hidden flex-1 max-w-2xl mx-8 md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search OHI content..."
              className="rounded-full border-border bg-muted/90 pl-9 focus-visible:ring-2 focus-visible:ring-[#0f4c81]/20 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            className="rounded-full md:hidden"
            aria-label="Open search"
          >
            <Search className="h-5 w-5 text-foreground" />
          </Button>

          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-[#0f4c81]/10"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex h-auto items-center gap-2 rounded-full px-3 py-2 hover:bg-muted sm:px-4"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={profileImage} alt="Profile" />
                    <AvatarFallback>{displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="hidden text-sm font-semibold text-foreground sm:inline md:text-base">
                    {displayName}
                  </span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-48 rounded-2xl border border-border bg-card shadow-lg">
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
