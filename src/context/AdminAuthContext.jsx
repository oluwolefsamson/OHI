import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "ohi_admin_session_v1";
const DEFAULT_EMAIL = "admin@olympianhouseintl.com";
const DEFAULT_PASSWORD = "OHI@2026";
const ADMIN_NAME = "OHI Admin";

const AdminAuthContext = createContext(null);

function readStoredSession() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed?.isAuthenticated) return null;

    return {
      isAuthenticated: true,
      user: parsed.user ?? { name: ADMIN_NAME, email: DEFAULT_EMAIL },
    };
  } catch {
    return null;
  }
}

function getExpectedCredentials() {
  return {
    email: (import.meta.env.VITE_OHI_ADMIN_EMAIL || DEFAULT_EMAIL).toLowerCase(),
    password: import.meta.env.VITE_OHI_ADMIN_PASSWORD || DEFAULT_PASSWORD,
  };
}

export function AdminAuthProvider({ children }) {
  const [session, setSession] = useState(
    () =>
      readStoredSession() ?? {
        isAuthenticated: false,
        user: null,
      }
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (session.isAuthenticated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [session]);

  const value = useMemo(() => {
    const login = ({ email, password }) => {
      const expected = getExpectedCredentials();
      const normalizedEmail = (email || "").trim().toLowerCase();
      const normalizedPassword = (password || "").trim();

      if (
        normalizedEmail !== expected.email ||
        normalizedPassword !== expected.password
      ) {
        return {
          ok: false,
          message: "Invalid admin email or password.",
        };
      }

      const nextSession = {
        isAuthenticated: true,
        user: {
          name: ADMIN_NAME,
          email: normalizedEmail,
        },
      };

      setSession(nextSession);

      return {
        ok: true,
        message: "Signed in successfully.",
      };
    };

    const logout = () => {
      setSession({
        isAuthenticated: false,
        user: null,
      });
    };

    return {
      isAuthenticated: session.isAuthenticated,
      user: session.user,
      login,
      logout,
    };
  }, [session.isAuthenticated, session.user]);

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }

  return context;
}
