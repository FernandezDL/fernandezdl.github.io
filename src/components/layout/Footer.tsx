"use client";

import type { FooterSection } from "@/types/types";
import {useParams, useRouter} from "next/navigation";
import type {NavigationContent, PortfolioType, PortfolioLang} from "@/types/types";

type FooterProps = {
    footerSection: FooterSection;
    navigation: NavigationContent;
};

export default function Footer({ footerSection, navigation }: FooterProps) {
    const router = useRouter();
    const params = useParams<{ lang: PortfolioLang; mode: PortfolioType }>();
    
    const area: PortfolioType = params.mode === "games" ? "games" : "web";
    const language: PortfolioLang = params.lang === "es" ? "es" : "en";

    function changePortfolioRoute(nextLanguage: PortfolioLang, nextArea: PortfolioType) {
        const currentSection = window.location.hash;

        router.replace(`/${nextLanguage}/${nextArea}${currentSection}`, { scroll: false });
    }

    function toggleArea() {
        const nextArea: PortfolioType = area === "web" ? "games" : "web";

        changePortfolioRoute(language, nextArea);
    }

    return(
        <div className="w-full p-3 lg:p-10 mt-5 bg-muted flex">
            <div className="w-0 lg:w-1/3"></div>

            <div className="w-1/2 lg:w-1/3 flex flex-col items-center">
                <p className="text-xs lg:text-md">{footerSection.madeBy} ♡ by Diana Fernandez</p>
                <p className="text-xs lg:text-md">© 2026</p>
            </div>

            <div className="w-1/2 lg:w-1/3 flex items-center justify-end">
                <button className=" text-xs lg:text-lg font-bold text-end cursor-pointer" onClick={toggleArea}>{footerSection.button} →</button>
            </div>
        </div>
    )
}