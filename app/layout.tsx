import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Maison Sepia — Cuisine méditerranéenne à Aix-en-Provence',description:'Une cuisine de saison, sans détour. Maison Sepia, cuisine méditerranéenne à Aix-en-Provence.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
