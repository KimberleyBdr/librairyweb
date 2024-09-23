import { ApiSync } from "../framework/models/ApiSync"
import { Attributes } from "../framework/models/Attributes"
import { Eventing } from "../framework/models/Eventing"
import { Model } from "../framework/models/Model"

interface ArticlesProps {
     id?: string,
     title: string,
     createdAt: Date
}

const rootUrl = 'http://localhost:3001/articles'

export class Article extends Model<ArticlesProps> {
     static buildArticle(attrs: ArticlesProps): Article {
          return new Article(
               new Attributes<ArticlesProps>(attrs),
               new Eventing(),
               new ApiSync<ArticlesProps>(rootUrl)
          )
     }
}