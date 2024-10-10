import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/header/NavBar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";
import initTranslations from "../i18n";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "truemachine",
	description: "truemachine",
};


const i18nNamespaces = ["home"];


export default async function RootLayout({ children  ,params}) {
  const {locale} = params
  const { resources, t } = await initTranslations(locale, i18nNamespaces)

	return (
		<html lang={locale} dir={dir(locale)}>
			<body className={inter.className}>
				<TranslationsProvider
					namespaces={i18nNamespaces}
					locale={locale}
					resources={resources}
				>
					<Header params={params} locale={locale}/>
					{children}
					<Footer params={params}/>
				</TranslationsProvider>
			</body>
		</html>
	);
}
