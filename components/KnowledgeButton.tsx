'use client';
import {useState} from 'react';
export default function KnowledgeButton({className,children}:{className:string;children:React.ReactNode}){const [approved,setApproved]=useState(false);return <button className={className} style={approved?{left:0,right:0,width:'100%'}:{right:0}} onClick={()=>setApproved(!approved)} aria-pressed={approved} aria-label="Approved new knowledge: When working in the backend repo">{children}</button>}
