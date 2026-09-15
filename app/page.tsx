import fs from 'node:fs';
import path from 'node:path';
import parse,{domToReact,Element,type DOMNode,type HTMLReactParserOptions} from 'html-react-parser';
import Header from '../components/Header';
import KnowledgeButton from '../components/KnowledgeButton';
import Integrations from '../components/Integrations';
const read=(name:string)=>fs.readFileSync(path.join(process.cwd(),'content',name),'utf8');
const options:HTMLReactParserOptions={replace(node){if(node instanceof Element&&node.name==='button')return <KnowledgeButton className={node.attribs.class}>{domToReact(node.children as DOMNode[])}</KnowledgeButton>;}};
export default function Home(){return <div className="legacy-root min-h-screen bg-[rgb(var(--bg-page))] text-legacy-black"><Header/><main id="main-content">{[0,1,2,3].map(i=><section key={i} aria-label={['Overview','Customers','Use cases','Collaboration'][i]}>{parse(read(`section-${i}.html`),options)}</section>)}<Integrations desktopGrid={read('integration-1.html')} mobileGrid={read('integration-3.html')} mobileDetails={read('integration-4.html')}/></main>{parse(read('footer.html'))}</div>}
