import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/Bs";

export default function ModeBtns() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    return(
        <div className="flex items-center justify-center">
            {mounted && (
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    {theme === "dark" ? (
                        <BsFillSunFill size={20} />
                    ) : (
                        <BsFillMoonFill size={20} />
                    )}
                </button>
            )}
        </div>
    )
}