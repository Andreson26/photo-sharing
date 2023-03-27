import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/Bs";

export default function ModeBtns() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    return(
        <div className="flex flex-col text-xs font-light">
            {mounted && (
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    {theme === "dark" ? (
                        <BsFillSunFill size={20} />
                    ) : (
                        <BsFillMoonFill size={20} />
                    )}
                </button>
            )}
            <span>Theme</span>
        </div>
    )
}