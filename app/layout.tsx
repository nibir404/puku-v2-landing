import type { Metadata } from 'next';
import root from '../content/root.json';
import './globals.css';
export const metadata:Metadata={title:'PUKU — The AI Software Engineer',description:'Plan and execute complex engineering tasks. A PUKU-branded recreation of the Devin landing page.',icons:{icon:'/puku-logo.png',apple:'/puku-logo.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={root.html}><body className="font-body antialiased">{children}</body></html>}
