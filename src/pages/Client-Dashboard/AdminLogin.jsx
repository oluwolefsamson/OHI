import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import OhiLogo from "../../components/LandingPage/Logo/logo";
import { useAdminAuth } from "../../context/AdminAuthContext";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const from = location.state?.from || "/dashboard/overview";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [from, isAuthenticated, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const result = login({ email, password });

    if (!result.ok) {
      toast.error(result.message);
      setLoading(false);
      return;
    }

    toast.success(result.message);
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(17,138,178,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(0,86,179,0.14),_transparent_32%),linear-gradient(135deg,_#f8fbff_0%,_#edf4fb_45%,_#dce9f8_100%)]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <section className="relative order-2 overflow-hidden rounded-[32px] border border-white/60 bg-[#0f4c81] px-6 py-8 text-white shadow-[0_30px_80px_rgba(15,76,129,0.25)] sm:px-8 lg:order-1 lg:px-10 lg:py-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,rgba(255,255,255,0.05))]" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div className="flex items-center gap-3">
              <OhiLogo className="h-14 w-auto" />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                  Olympian House International
                </p>
                <h1 className="mt-1 text-xl font-semibold">
                  Admin Dashboard Login
                </h1>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                Secure access
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Manage the OHI website from one protected place.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/85">
                Update the homepage, swap images, adjust colors, and manage the
                public landing page content without touching the site code.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {["Homepage editor", "Brand controls", "Mission and stories"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
                  >
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="order-1 rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur sm:p-8 lg:order-2 lg:p-10">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-primaryColor/10 p-3 text-primaryColor">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
                  OHI Admin
                </p>
                <h3 className="mt-1 text-2xl font-bold text-headingColor">
                  Sign in to continue
                </h3>
              </div>
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-textColor">
              Use the admin credentials to enter the dashboard. This login is
              stored locally in this browser until you sign out.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-headingColor">
                Admin email
              </span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@olympianhouseintl.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-11 py-3.5 text-sm text-headingColor outline-none transition focus:border-primaryColor focus:ring-4 focus:ring-primaryColor/10"
                  autoComplete="email"
                  required
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-headingColor">
                Password
              </span>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-11 py-3.5 pr-14 text-sm text-headingColor outline-none transition focus:border-primaryColor focus:ring-4 focus:ring-primaryColor/10"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-2xl bg-primaryColor px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(7,94,171,0.24)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign in to dashboard"}
            </button>
          </form>

          <div className="mt-6 rounded-2xl border border-dashed border-primaryColor/25 bg-primaryColor/5 p-4 text-sm leading-6 text-textColor">
            <p className="font-semibold text-headingColor">Demo credentials</p>
            <p className="mt-1">Email: admin@olympianhouseintl.com</p>
            <p>Password: OHI@2026</p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 text-sm text-textColor">
            <Link to="/" className="font-semibold text-primaryColor">
              Back to home
            </Link>
            <span>Protected OHI admin access</span>
          </div>
        </section>
      </div>
    </div>
  );
}
