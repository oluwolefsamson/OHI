import * as React from "react";
import {
  LayoutDashboardIcon,
  Images,
  PaletteIcon,
  PartyPopper,
  PenSquare,
  Sparkles,
  Search,
  SquareUserRound,
  SwatchBook,
  TextIcon,
  Video,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { Input } from "../../components/ui/input";
import { NavMain } from "../../components/ui/nav-main";
import { NavSecondary } from "../../components/ui/nav-secondary";
import { NavUser } from "../../components/ui/nav-user";
import { useAdminAuth } from "../../context/AdminAuthContext";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "../../components/ui/sidebar";
import { useSidebar } from "../../components/ui/sidebar";
import OhiLogo from "../LandingPage/Logo/logo";
import profileImage from "../../assets/images/ProfileSettingImg/Profile-image.png";

// Import Skeleton from shadcn/ui
import { Skeleton } from "../../components/ui/skeleton";

const data = {
  navMain: [
    {
      title: "OHI Overview",
      url: "/dashboard/overview",
      icon: LayoutDashboardIcon,
      size: "default",
    },
    {
      title: "Homepage Editor",
      url: "/dashboard/landing-page",
      icon: PaletteIcon,
    },
  ],
  navSecondary: [
    {
      title: "Hero",
      url: "/dashboard/landing-page#hero-content",
      icon: Sparkles,
    },
    {
      title: "Theme",
      url: "/dashboard/landing-page#theme-settings",
      icon: SwatchBook,
    },
    {
      title: "About OHI",
      url: "/dashboard/landing-page#about-ohi",
      icon: PenSquare,
    },
    {
      title: "Why OHI",
      url: "/dashboard/landing-page#why-ohi",
      icon: PartyPopper,
    },
    {
      title: "Who We Serve",
      url: "/dashboard/landing-page#who-we-serve",
      icon: SquareUserRound,
    },
    {
      title: "Gallery",
      url: "/dashboard/landing-page#gallery",
      icon: Images,
    },
    {
      title: "Gallery Stories",
      url: "/dashboard/landing-page#gallery-stories",
      icon: TextIcon,
    },
    {
      title: "Video Section",
      url: "/dashboard/landing-page#video-section",
      icon: Video,
    },
    {
      title: "Mission, Vision and Values",
      url: "/dashboard/landing-page#mission-vision-values",
      icon: PaletteIcon,
    },
    {
      title: "Selected Voices",
      url: "/dashboard/landing-page#selected-voices",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Footer",
      url: "/dashboard/landing-page#footer-settings",
    },
  ],
};

export function AppSidebar(props) {
  const { state, openMobile, setOpenMobile } = useSidebar();
  const { user } = useAdminAuth();
  const collapsed = state === "collapsed";
  // Detect mobile screen
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const sidebarUser = {
    name: user?.name || "OHI Admin",
    email: user?.email || "admin@olympianhouseintl.com",
    avatar: profileImage,
  };

  if (loading) {
    return (
      <Sidebar collapsible="icon" {...props} className="flex min-h-dvh flex-col">
        <SidebarHeader className="sticky top-0 z-10 !items-start bg-white/90 backdrop-blur">
          <SidebarMenu
            className={cn(
              "flex flex-col items-center gap-3 w-full px-3 py-3",
              collapsed ? "px-1 py-2" : "px-3 py-3"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-2 w-full",
                collapsed ? "justify-center" : "justify-start"
              )}
            >
              <Skeleton
                className={cn(
                  collapsed ? "h-6 w-6" : "h-8 w-8",
                  "rounded-full"
                )}
              />
              {!collapsed && <Skeleton className="h-6 w-24 rounded" />}
              {!collapsed && isMobile && openMobile && (
                <Skeleton className="ml-auto h-8 w-8 rounded-full" />
              )}
            </div>
            <div className="flex items-center justify-center w-full">
              {collapsed ? (
                <Skeleton className="w-10 h-10 rounded-md" />
              ) : (
                <Skeleton className="w-full h-10 rounded-full" />
              )}
            </div>
          </SidebarMenu>
        </SidebarHeader>
        <div className="flex-1 flex flex-col overflow-hidden">
          <SidebarContent className="text-gray-700 flex flex-col h-full overflow-y-auto text-sm">
            <div className="flex flex-col flex-1 min-h-0 gap-2 px-2 py-4">
              <Skeleton className="w-full h-8 mb-2 rounded" />
              <Skeleton className="w-full h-8 mb-2 rounded" />
              <Skeleton className="w-full h-8 mb-2 rounded" />
              <Skeleton className="w-full h-8 mb-2 rounded" />
              <Skeleton className="w-full h-8 mb-2 rounded" />
              <Skeleton className="w-full h-8 mb-2 rounded" />
              <Skeleton className="w-full h-8 mb-2 rounded" />
              <Skeleton className="w-full h-8 mb-2 rounded" />
              <Skeleton className="w-full h-8 mb-2 rounded" />
              <Skeleton className="w-full h-8 mb-2 rounded" />
            </div>
          </SidebarContent>
        </div>
        <SidebarFooter className="border-t border-sidebar-border px-4 py-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex flex-col gap-2 flex-1">
              <Skeleton className="h-4 w-24 rounded" />
              <Skeleton className="h-4 w-32 rounded" />
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    );
  }

  return (
    <Sidebar collapsible="icon" {...props} className="flex min-h-dvh flex-col">
      <SidebarHeader className="sticky top-0 z-10 !items-start bg-white/90 backdrop-blur">
        <SidebarMenu
          className={cn(
            "flex flex-col items-center gap-3 w-full",
            collapsed ? "px-1 py-2" : "px-3 py-3"
          )}
        >
          <div
            className={cn(
              "flex items-center gap-2 w-full",
              collapsed ? "justify-center" : "justify-start"
            )}
          >
            <OhiLogo className={cn("transition-all", collapsed ? "h-8 w-8" : "h-9 w-32")} />
            {!collapsed && isMobile && openMobile && (
              <button
                className="ml-auto rounded-full bg-gray-200 p-1 transition-colors hover:bg-gray-200"
                onClick={() => setOpenMobile(false)}
                aria-label="Close sidebar"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-center w-full">
            {collapsed ? (
              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            ) : (
              <div className="w-full relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search OHI dashboard"
                  className="w-full pl-9 py-2 rounded-full bg-slate-100 text-slate-700 placeholder:text-slate-400 shadow-sm border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  disabled
                />
              </div>
            )}
          </div>
        </SidebarMenu>
      </SidebarHeader>

      <div className="flex-1 flex flex-col overflow-hidden">
        <SidebarContent className="text-gray-700 flex flex-col h-full overflow-y-auto text-sm">
          <div className="flex flex-col flex-1 min-h-0">
            <NavMain
              items={data.navMain}
              iconClassName="h-4 w-4"
              textClassName="text-sm"
            />
            <div className="mt-4 px-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
              Editable Sections
            </div>
            <div className="mt-2 flex-1 min-h-0">
              <NavSecondary
                items={data.navSecondary}
                iconClassName="h-4 w-4"
                textClassName="text-sm"
              />
            </div>
          </div>
        </SidebarContent>
      </div>

      <SidebarFooter className="border-t border-sidebar-border">
        <NavUser user={sidebarUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
