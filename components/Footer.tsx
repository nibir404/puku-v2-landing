import fs from 'node:fs';
import path from 'node:path';
import parse from 'html-react-parser';
export default function Footer(){return <>{parse(fs.readFileSync(path.join(process.cwd(),'content/footer.html'),'utf8'))}</>;}
