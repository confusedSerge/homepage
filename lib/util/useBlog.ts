import fs from 'fs';
import path from 'path';

// Markdown
import matter from 'gray-matter';
import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';
import { math, mathHtml } from 'micromark-extension-math'

// Models
import { IBlogHead } from '../model/blog/IBlogHead';
import BlogHead from '../model/blog/BlogHead';
import Blog from '../model/blog/Blog';

const blogDirectory = path.join(process.cwd(), 'data/blog');

// Shamfully stolen from: https://nextjs.org/learn
export function getSortedBlogHeaders() {
    const fileNames = fs.readdirSync(blogDirectory);

    return fileNames.map(fileName => {
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = { ...matter(fileContents).data } as IBlogHead;
        return new BlogHead(fileName.replace(/\.md$/, ''), matterResult.title, matterResult.date, matterResult.humanDate, matterResult.readTime, matterResult.tags.split(','),
            micromark(matterResult.description, {
                extensions: [gfm(), math()],
                htmlExtensions: [gfmHtml(), mathHtml()],
                allowDangerousHtml: true
            }));
    }).sort(({ date: a }, { date: b }) => {
        return (a > b) ? 1 : -1;
    }).reverse();
}

export function getAllBlogIds() {
    const fileNames = fs.readdirSync(blogDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        };
    });
}

export async function getBlog(id: string) {
    const fullPath = path.join(blogDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = { ...matter(fileContents).data } as IBlogHead;
    return new Blog(id, matterResult.title, matterResult.date, matterResult.humanDate, matterResult.readTime, matterResult.tags.split(','),
        micromark(matterResult.description, {
            extensions: [gfm(), math()],
            htmlExtensions: [gfmHtml(), mathHtml()],
            allowDangerousHtml: true
        }),
        micromark(matter(fileContents).content, {
            extensions: [gfm(), math()],
            htmlExtensions: [gfmHtml(), mathHtml()],
            allowDangerousHtml: true
        }));
}
