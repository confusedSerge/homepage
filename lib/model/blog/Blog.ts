export default class Blog {

    public id: string;
    public title: string;

    public date: string;
    public humanDate: string;
    public readTime: string;
    public tags: Array<string>;

    public description: string;
    public content: string;

    constructor(id: string, title: string, date: string, humanDate: string, readTime: string, tags: Array<string>, description: string, content: string) {
        this.id = id;

        this.title = title;

        this.date = date;
        this.humanDate = humanDate;
        this.readTime = readTime;
        this.tags = tags;

        this.description = description;
        this.content = content;
    }

}
