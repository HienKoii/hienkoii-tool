import "@/styles/globals.css";
import Providers from "./providers";
import MainLayout from "./main";

export const metadata = {
  title: "HienKoii Tool",
  description: "Website được tạo bới Hiến Kòii",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainLayout>{children} </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
