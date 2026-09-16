import type { Metadata } from 'next';
import root from '../content/root.json';
import './globals.css';
export const metadata:Metadata={title:'PUKU — The AI Software Engineer',description:'Build with Puku across coding, design, research, and automation.',icons:{icon:'/puku-logo.png',apple:'/puku-logo.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={root.html}><body className="font-body antialiased">{children}</body></html>}
