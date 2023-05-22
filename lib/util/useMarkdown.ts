import fs from 'fs';
import path from 'path';

// Markdown
import matter from 'gray-matter';
import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';


export function getMarkdownFormatted(directory: string, id: string): any {
    
    const fileContents = fs.readFileSync(path.join(directory, id), 'utf8');

    return micromark(matter(fileContents).content, {
        extensions: [gfm()],
        htmlExtensions: [gfmHtml()],

        // Only allow for static markdown files
        allowDangerousHtml: true
    })

}
